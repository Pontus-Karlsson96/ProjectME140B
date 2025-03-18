import { serve } from "https://deno.land/std@0.200.0/http/server.ts";

const clients = new Set<WebSocket>();

const handleRequest = async (request: Request): Promise<Response> => {
  const url = new URL(request.url);

  if (url.pathname === "/ws") {
    if (request.headers.get("upgrade") === "websocket") {
      const { socket, response } = Deno.upgradeWebSocket(request);
      handleWebSocket(socket);
      return response;
    } else {
      return new Response("Expected WebSocket upgrade", { status: 400 });
    }
  }

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
  clients.add(socket);

  socket.addEventListener("message", (event) => {
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(event.data);
      }
    });
  });

  socket.addEventListener("close", () => {
    clients.delete(socket);
  });

  socket.addEventListener("error", (event) => {
    console.error("WebSocket error:", event);
  });
};

console.log("Server is running");
serve(handleRequest);