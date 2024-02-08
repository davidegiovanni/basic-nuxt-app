import { createServer } from "@mswjs/http-middleware";
import { handlers } from "./handlers.js";

export const server = createServer(...handlers);

server.listen(8080, { onUnhandledRequest: "warn" })
console.info("🔶 Mock server running");

process.once("SIGINT", () => server.close());
process.once("SIGTERM", () => server.close());
