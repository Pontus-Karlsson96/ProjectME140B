// server.ts
import { serveDir } from "https://deno.land/std@0.200.0/http/file_server.ts";

Deno.serve((req) => {
  return serveDir(req, {
    fsRoot: ".",
    urlRoot: "",
    showDirListing: true, // valfritt
    enableCors: true,
  });
});



/*import { serve } from "https://deno.land/std@0.200.0/http/server.ts";

// Enkel router för HTML, CSS, JS – inga lokala bilder!
const handleRequest = async (request: Request): Promise<Response> => {
  const url = new URL(request.url);
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
    } else if (filePath.endsWith(".js")) {
      contentType = "application/javascript";
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

console.log("Server is running on Deno Deploy");
serve(handleRequest);*/