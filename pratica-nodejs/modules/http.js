const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  // pagina home
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Welcome to the Home Page!");
  }
  // pagina users
  if (req.url === "/users") {
    const users = [
      { name: "Nicholas", email: "nicholas@email" },
      { name: "Stephany", email: "stephany@email" },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => {
  console.log(`Rodando na porta: ${port}`);
});
