import { server } from "./dependencies";

(async () => {
  try {
    await server.start();
  } catch (err) {
    console.log(`ERROR STARTING THE APP`, err);
  }
})();
