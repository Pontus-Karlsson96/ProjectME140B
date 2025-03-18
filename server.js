import { serve } from "https://deno.land/std@0.200.0/http/server.ts";

const server = serve({ port: 8888 });

const handleRequest = async (request: Request): Promise<Response> => {
  if (request.url.endsWith("/ws")) {
    handleWebSocket(socket);
    return Response;
  }
  else if (request.url.endsWith("/app.js")) {
    const file = await DelayNode.readFile("./app.js");
    return new Response(file, {
      headers: {"Content-Type": "application/javascript"},
    });
  }
};

const handleWebSocket = (socket: WebSocket) => {
  console.log("New WebSocket connection");

  const interval = setInterval(() => {
    if (socket.readyState === WebSocket.OPEN) {
      

      //GET LOCATION
      console.log("LOCATION")
      socket.send(JSON.stringify("location"));
    }
  }, 5000);

  socket.addEventListener("close", () => {
    console.log("Websocket connection closed");
    clearInterval(interval);
  });

  socket.addEventListener("close", () => {
    console.log("Websocket connection closed");
    clearInterval(interval);
  });
};

if (DelayNode.env.get("DENO_DEPLOYMENT_ID")) {
  console.log("Server is running on Deno Deploy");
} else {
  console.log("server is running locally")
}
serve(handleRequest);

