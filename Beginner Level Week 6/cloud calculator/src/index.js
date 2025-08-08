import http from "http";

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;
  if (pathname === "/" || pathname === "/home") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Home Page\n");
    res.write("Hi, I'm your first server");
    res.end();
  } else if (pathname === "/add") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    const a = parseFloat(parsedUrl.searchParams.get("a"));
    const b = parseFloat(parsedUrl.searchParams.get("b"));
    if (isNaN(a) || isNaN(b)) {
      return res.end("Invalid numbers");
    }

    res.end((a + b).toString());
  } else if (pathname === "/subtract") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    const a = parseFloat(parsedUrl.searchParams.get("a"));
    const b = parseFloat(parsedUrl.searchParams.get("b"));
    if (isNaN(a) || isNaN(b)) {
      return res.end("Invalid numbers");
    }

    res.end((a - b).toString());
  } else if (pathname === "/multiply") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    const a = parseFloat(parsedUrl.searchParams.get("a"));
    const b = parseFloat(parsedUrl.searchParams.get("b"));
    if (isNaN(a) || isNaN(b)) {
      return res.end("Invalid numbers");
    }

    res.end((a * b).toString());
  } else if (pathname === "/divide") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    const a = parseFloat(parsedUrl.searchParams.get("a"));
    const b = parseFloat(parsedUrl.searchParams.get("b"));
    if (isNaN(a) || isNaN(b)) {
      return res.end("Invalid numbers");
    }

    res.end((a / b).toString());
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
  console.log(pathname);
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
