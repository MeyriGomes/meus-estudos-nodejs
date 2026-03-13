const http = require("http"); // Importa o módulo nativo HTTP para criar o servidor
const porta = 443;

const servidor = http.createServer((req, res) => {
  // Define o cabeçalho com o status 200 (OK) e o tipo de conteúdo como texto plano
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.write("Meu primeiro servidor Node rodando com sucesso!");
  res.end(); // Finaliza a resposta para o navegador
});

servidor.listen(porta, () => {
  console.log("Exercício 01: Servidor básico rodando!");
});
