const http = require('http');

// création du serveur
const server = http.createServer((req, res) =>{
    //traitement de la transaction HTTP
    res.end();
});

// Ecouteur sur le port 9000
const port = 9000;
server.listen(
  port,
  () => {
    console.log(`Server running at port ${port}`) ;
  }
) ;