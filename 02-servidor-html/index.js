const http = require("http");
const fs = require("fs"); // Módulo 'File System' para manipular arquivos do sistema
const porta = 443;

const servidor = http.createServer((req, res) => {
  // Lendo o arquivo HTML externo de forma assíncrona
  fs.readFile("02-servidor-html/site.html", (err, arquivo) => {
    if (err) {
      res.writeHead(404);
      res.write("Arquivo HTML não encontrado!");
    } else {
      // Define que o conteúdo entregue será um HTML
      res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
      res.write(arquivo);
    }
    res.end();
  });
});

servidor.listen(porta);
