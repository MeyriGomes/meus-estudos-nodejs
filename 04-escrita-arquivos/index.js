const http = require('http');
const fs = require('fs'); 
const porta = 443;

const servidor = http.createServer((req, res) => {
  // appendFile: Adiciona conteúdo ao final do arquivo. 
  // Se o arquivo 'teste.txt' não existir, ele será criado automaticamente.
  fs.appendFile('teste.txt', 'Frase criada pelo appendFile diretamente no txt\n', (err) => {
    if (err) throw err; // Se der erro (ex: falta de permissão), o código para aqui e avisa

    console.log('Arquivo criado/atualizado com sucesso!');

    // res.end() para o navegador não ficar "carregando" para sempre
    res.end('Conteudo adicionado ao arquivo teste.txt!');
  });
});

servidor.listen(porta, () => { console.log('Servidor rodando') });