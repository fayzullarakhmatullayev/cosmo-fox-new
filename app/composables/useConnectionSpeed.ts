interface NetworkConnection extends EventTarget {
  readonly effectiveType?: "slow-2g" | "2g" | "3g" | "4g";
  readonly saveData?: boolean;
  readonly downlink?: number;
  readonly rtt?: number;
  readonly type?: "bluetooth" | "cellular" | "ethernet" | "wifi" | "wimax" | "none" | "other" | "unknown";
}

declare global {
  interface Navigator {
    connection?: NetworkConnection;
  }
}

type ConnectionType = "slow-2g" | "2g" | "3g" | "slow-4g" | "4g" | "unknown";

interface UseConnectionSpeedReturn {
  isSlowConnection: Readonly<Ref<boolean>>;
  connectionType: Readonly<Ref<ConnectionType>>;
  isLoading: Readonly<Ref<boolean>>;
  testSpeed: () => Promise<number>;
}

export const useConnectionSpeed = (): UseConnectionSpeedReturn => {
  const isSlowConnection = ref<boolean>(false);
  const connectionType = ref<ConnectionType>("unknown");
  const isLoading = ref<boolean>(true);

  const checkConnection = (): void => {
    if ("connection" in navigator && navigator.connection) {
      const connection = navigator.connection;
      connectionType.value = connection.effectiveType || "unknown";

      const slowConnections: ConnectionType[] = ["slow-2g", "2g", "3g", "slow-4g"];
      isSlowConnection.value =
        slowConnections.includes(connection.effectiveType as ConnectionType) || Boolean(connection.saveData);

      const handleConnectionChange = (): void => {
        if (connection.effectiveType) {
          connectionType.value = connection.effectiveType;
          isSlowConnection.value =
            slowConnections.includes(connection.effectiveType as ConnectionType) || Boolean(connection.saveData);
        }
      };

      connection.addEventListener("change", handleConnectionChange);

      // Cleanup function for component unmount
      onBeforeUnmount(() => {
        connection.removeEventListener("change", handleConnectionChange);
      });
    } else {
      // Fallback: assume fast connection if API not available
      isSlowConnection.value = false;
      connectionType.value = "unknown";
    }

    isLoading.value = false;
  };

  const testSpeed = async (): Promise<number> => {
    try {
      const startTime = performance.now();

      // Test with favicon or small resource
      const response = await fetch(`/favicon.ico?${Math.random()}`, {
        cache: "no-cache",
        mode: "cors"
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      await response.blob();
      const endTime = performance.now();

      const duration = endTime - startTime; // milliseconds
      const estimatedSizeKB = 4; // Approximate favicon size
      const speedKbps = (estimatedSizeKB * 8) / (duration / 1000); // Kilobits per second

      // Update connection status based on speed test
      isSlowConnection.value = speedKbps < 500; // Consider < 500 Kbps as slow

      return speedKbps;
    } catch (error) {
      console.warn("Speed test failed:", error);
      // Default to slow connection on error
      isSlowConnection.value = true;
      return 0;
    }
  };

  onMounted(() => {
    checkConnection();
  });

  return {
    isSlowConnection: readonly(isSlowConnection),
    connectionType: readonly(connectionType),
    isLoading: readonly(isLoading),
    testSpeed
  };
};
