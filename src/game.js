const http = require('http');
//const fs = require('fs');
const grid = require('./Grid');
const player = require('./Player');
const html = require('./gridHtml.js');
const io = require('socket.io')(http);
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
// création du serveur
const server = http.createServer((req, res) =>{
    //traitement de la transaction HTTP
    let test = new grid();
    var contenu = html.buildPageGrid(test.html);
    var joueur = new player(1,'red');

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