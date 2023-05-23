export interface DBConnector {
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}
