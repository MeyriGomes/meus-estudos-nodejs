const http = require('http');
const porta = 443;

const servidor = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

  // req.url captura o caminho digitado (ex: /sobre)
  if (req.url == '/') {
    res.write('<h1>Página Inicial</h1><p>Bem-vindo ao sistema de rotas!</p>');
  } 
  else if (req.url == '/sobre') {
    res.write('<h1>Sobre Mim</h1><p>Estudante de Tecnologia no IFES.</p>');
  } 
  else {
    // Rota padrão para páginas que não existem (Erro 404)
    res.write('<h1>Erro 404</h1><p>Página não encontrada!</p>');
  }

  res.end();
});

servidor.listen(porta);