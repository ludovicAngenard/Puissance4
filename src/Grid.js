

class Grid {
    #rowList;
    constructor() {
        this.html = '';
        this.#rowList = this.#createGrid();
        this.#showGrid();

    }

    #createGrid(){
        let row = 6;
        let  column = 7;
        let array = new Array(row);
        for (var i = 0; i < row; i++) {
          array[i] = new Array(column);
        }
        return array;
    }

    #showGrid(){
        var drawGrid ='';
        for (var i = 0; i < this.#rowList.length; i++) {
            for (let j = 0; j < this.#rowList[i].length; j++) {
                drawGrid +=  `<div class="column empty"></div>`;
            }
            drawGrid +="<br/>"
        }
        this.html += drawGrid;
    }

    resetGrid(){
        this.#rowList = this.#createGrid();
        this.#showGrid();
    }

    // TODO
    checkGrid(){
        var player = 0;
        point = 1;
        for (var i = 0; i < this.#rowList.length; i++) {
            for (let j = 0; j < this.#rowList[i].length; j++) {
                if (this.#rowList[i][j] != 0){
                    var currentPlayer = this.#rowList[i][j];
                    if( currentPlayer != player ){
                        player = currentPlayer;
                        point = 1;
                    } else {
                        point += 1;
                    }
                }
            }
          }
    }
  }

  module.exports = Grid;