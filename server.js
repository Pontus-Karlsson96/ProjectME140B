import { serve } from "https://deno.land/std/http/server.ts";
import { acceptWebSocket, acceptable } from "https://deno.land/std/ws/mod.ts";

const server = serve({ port: 8888 });
console.log("Server running on http://localhost:8888");

const sockets = new Set<WebSocket>();

for await (const req of server) {
  if (req.url === "/ws") {
    if (acceptable(req)) {
      const { conn, r: bufReader, w: bufWriter, headers } = req;
      const sock = await acceptWebSocket({
        conn,
        bufReader,
        bufWriter,
        headers,
      });

      sockets.add(sock);

      console.log("New client connected");

      for await (const ev of sock) {
        if (typeof ev === "string") {
          // Broadcast the location update to all connected clients
          for (const socket of sockets) {
            if (socket !== sock && socket.readyState === WebSocket.OPEN) {
              socket.send(ev);
            }
          }
        } else if (ev instanceof CloseEvent) {
          // Remove the socket from the set when the client disconnects
          sockets.delete(sock);
          console.log("Client disconnected");
        }
      }
    }
  } else {
    req.respond({ body: "WebSocket server is running" });
  }
}