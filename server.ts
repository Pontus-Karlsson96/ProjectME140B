import { serve } from "https://deno.land/std@0.200.0/http/server.ts";
import { WebSocket } from "https://deno.land/std@0.200.0/ws/mod.ts";

const handleRequest = async (request: Request): Promise<Response> => {
  const url = new URL(request.url);

  if (url.pathname === "/ws") {
    if (request.headers.get("upgrade") === "websocket") {
      const { socket, response } = Deno.upgradeWebSocket(request);
      handleWebSocket(socket);
      return response;
    } else {
      return new Response("Expected websocket upgrade", { status: 400 });
    }
  } else {
      return new Response("Not Found", {status:404})
  }
};

const handleWebSocket = (socket: WebSocket) => {
  console.log("New WebSocket connection");

  const interval = setInterval(() => {
    if (socket.readyState === WebSocket.OPEN) {
      console.log("LOCATION");
      socket.send(JSON.stringify("location"));
    }
  }, 5000);

  socket.addEventListener("close", () => {
    console.log("Websocket connection closed");
    clearInterval(interval);
  });
};

if (Deno.env.get("DENO_DEPLOYMENT_ID")) {
  console.log("Server is running on Deno Deploy");
} else {
  console.log("server is running locally");
}

serve(handleRequest, { port: 8888 });