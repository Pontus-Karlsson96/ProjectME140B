import { serve } from "https://deno.land/std@0.200.0/http/server.ts";
import { extname } from "https://deno.land/std@0.200.0/path/mod.ts";

const handleRequest = async (request: Request): Promise<Response> => {
  const url = new URL(request.url);

  // Handle WebSocket connections
  if (url.pathname === "/ws") {
    if (request.headers.get("upgrade") === "websocket") {
      const { socket, response } = Deno.upgradeWebSocket(request);
      handleWebSocket(socket);
      return response;
    } else {
      return new Response("Expected websocket upgrade", { status: 400 });
    }
  }

  // Serve static files (e.g., CSS, JS, images)
  const filePath = `.${url.pathname}`; // Construct the file path
  console.log(`Requested file: ${filePath}`); // Debug log

  try {
    const file = await Deno.readFile(filePath);
    const contentType = getContentType(filePath);
    console.log(`Serving file: ${filePath} with Content-Type: ${contentType}`); // Debug log
    return new Response(file, {
      headers: { "Content-Type": contentType },
    });
  } catch (error) {
    console.error(`Error serving file: ${filePath}`, error); // Debug log
    if (error instanceof Deno.errors.NotFound) {
      return new Response("Not Found", { status: 404 });
    }
    return new Response("Internal Server Error", { status: 500 });
  }
};

// Helper function to determine the content type based on file extension
const getContentType = (filePath: string): string => {
  const ext = extname(filePath).toLowerCase();
  switch (ext) {
    case ".html":
      return "text/html";
    case ".css":
      return "text/css";
    case ".js":
      return "application/javascript";
    case ".json":
      return "application/json";
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".svg":
      return "image/svg+xml";
    default:
      return "text/plain";
  }
};

const handleWebSocket = (socket: WebSocket) => {
  console.log("New WebSocket connection");

  const interval = setInterval(() => {
    if (socket.readyState === WebSocket.OPEN) {
      console.log("Sending location request");
      socket.send(JSON.stringify("location"));
    }
  }, 5000);

  socket.addEventListener("message", (event) => {
    console.log("Received message from client:", event.data);
  });

  socket.addEventListener("close", () => {
    console.log("WebSocket connection closed");
    clearInterval(interval);
  });

  socket.addEventListener("error", (event) => {
    console.error("WebSocket error:", event);
  });
};

if (Deno.env.get("DENO_DEPLOYMENT_ID")) {
  console.log("Server is running on Deno Deploy");
} else {
  console.log("Server is running locally");
}

serve(handleRequest, { port: 8888 });
