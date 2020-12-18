const http = require('http');
//const fs = require('fs');
const grid = require('./Grid');
const html = require('./gridHtml.js');
const io = require('socket.io')(http);

// création du serveur
const server = http.createServer((req, res) =>{
    //traitement de la transaction HTTP
    console.log(grid);
    let test = new grid();
    var contenu = html.buildPageGrid(test.html);
    test.resetGrid();

    res.end(contenu);
});

// Ecouteur sur le port 9000
const port = 9000;
server.listen(
  port,
  () => {
    console.log(`Server running at port ${port}`) ;
  }
) ;