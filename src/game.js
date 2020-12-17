const http = require('http');
const io = require('socket.io')(9000);

// création du serveur
const server = http.createServer((req, res) =>{
    //traitement de la transaction HTTP
    console.log("test")
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