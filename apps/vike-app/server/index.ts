import { createServer } from "./server.js";

const port = process.env.PORT || 3000;
const server = await createServer();

server.listen(port);

console.log(`🟩 Server running at http://localhost:${port}`);
