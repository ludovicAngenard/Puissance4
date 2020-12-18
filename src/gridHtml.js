function buildHead(){
    return `
        <head>
          <title>NodeJS</title>
          <meta http-equiv="content-type" content="text/html; charset=utf-8" />
          <style>
            .column{
              display:inline-block;
              width: 60px;
              height: 60px;
              border-radius: 60%;
              background-color: white;
            }

            .empty{
                cursor: pointer;
            }

            .plateau{
              width:420px;
              height: 420px;
              background-color: blue;
              display: inline-block;
            }
          </style>
        </head>
      `;
  }

function buildGrid(grid){

    return ` <body style="width: 100%; text-align:center;"> <div class="plateau"> ${grid}  </div></body>`;
}

function buildBody404(unknownPath){
    const content = `
    <div> Page not found : <strong>${unknownPath}</strong> n'est pas un chemin connu :( </div>
    `;
    return `<body> ${content} </body>`;
}


exports.buildPageGrid = (grid)=>{
    return `
      <!DOCTYPE html>
        <html>
            ${buildHead()}
            ${buildGrid(grid)}
        </html>
    `;
  }

exports.buildPageNotFound = (unknownPath)=>{
    return `
      <!DOCTYPE html>
        <html>
            ${buildHead()}
            ${buildBody404(unknownPath)}
        </html>
    `;
  }