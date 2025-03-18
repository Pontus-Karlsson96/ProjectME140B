import { serve } from "https://deno.land/std@0.200.0/http/server.ts";

const handleRequest = async (request: Request): Promise<Response> => {
  const url = new URL(request.url);

  // Handle WebSocket connections
  if (url.pathname === "/ws") {
    if (request.headers.get("upgrade") === "websocket") {
      const { socket, response } = Deno.upgradeWebSocket(request);
      handleWebSocket(socket);
      return response;
    } else {
      return new Response("Expected WebSocket upgrade", { status: 400 });
    }
  }

  // Serve static files
  let filePath = `.${url.pathname}`;
  if (filePath === "./") {
    filePath = "./index.html";
  }

  try {
    const file = await Deno.readFile(filePath);
    let contentType = "text/plain";
    if (filePath.endsWith(".html")) {
      contentType = "text/html";
    } else if (filePath.endsWith(".css")) {
      contentType = "text/css";
    } else if (filePath.endsWith(".jpg") || filePath.endsWith(".jpeg")) {
      contentType = "image/jpeg";
    } else if (filePath.endsWith(".png")) {
      contentType = "image/png";
    } else if (filePath.endsWith(".mp3")) {
      contentType = "audio/mpeg";
    }

    return new Response(file, {
      headers: { "Content-Type": contentType },
    });
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return new Response("File Not Found", { status: 404 });
    }
    return new Response("Internal Server Error", { status: 500 });
  }
};

const handleWebSocket = (socket: WebSocket) => {
  console.log("New WebSocket connection");

  // Handle messages from the client
  socket.addEventListener("message", (event) => {
    const data = JSON.parse(event.data);

    if (data.type === "location") {
      console.log(`Received location update: ${JSON.stringify(data)}`);

      // Acknowledge the location update
      socket.send(JSON.stringify({
        type: "acknowledge",
        message: "Location received",
      }));
    }
  });

  // Handle client disconnection
  socket.addEventListener("close", () => {
    console.log("WebSocket connection closed");
  });

  // Handle errors
  socket.addEventListener("error", (event) => {
    console.error("WebSocket error:", event);
  });
};

console.log("Server is running");
serve(handleRequest);