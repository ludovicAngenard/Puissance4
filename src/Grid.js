

class Grid {
    constructor() {
        this.html = '';
        this.rowList = this.#createGrid();
        this.#showGrid();
        this.point = 1;
        this.currentPlayer = '';

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
        for (var i = 0; i < this.rowList.length; i++) {
            for (let j = 0; j < this.rowList[i].length; j++) {
                if (!this.rowList[i][j] || this.rowList[i][j].classList.contains("empty")){
                    drawGrid +=  `<div class="column empty" value="0"></div>`;
                } else if ( this.rowList[i].classList.contain("red") ){
                    drawGrid +=  `<div class="column red" value="1"></div>`;
                }else if ( this.rowList[i].classList.contain("yellow") ){
                    drawGrid +=  `<div class="column yellow" value="2"></div>`;
                }

            }
            drawGrid +="<br/>"
        }
        this.html += drawGrid;
    }

    resetGrid(){
        
        this.rowList = this.#createGrid();
        this.#showGrid();
    }

    // TODO
    checkGridVertical(currentGrid,currentI,currentJ){

        for (let i = currentI ; i < currentGrid.length; i++) {

            for (let j = currentJ; j < currentGrid[i].length; j++) {
                this.currentPlayer = currentGrid[i+1][j].value;
                if (currentGrid[i+1][j] && currentGrid[i+1][j].value == this.currentPlayer){
                    this.point += 1;
                    if (!this.checkPoint()){
                        this.checkGrid(currentGrid,i+1,j);
                    }
                }
            }
        }
        this.point = 1;
    }

    checkGridDiagonal1(currentGrid,currentI,currentJ){
        for (let i = currentI ; i < currentGrid.length; i++) {

            for (let j = currentJ; j < currentGrid[i].length; j++) {
                this.currentPlayer = currentGrid[i+1][j].value;
                if ( currentGrid[i+1][j+1] && currentGrid[i+1][j+1].value == this.currentPlayer){
                    this.point += 1;
                    if (!this.checkPoint()){
                        this.checkGrid(currentGrid,i+1,j);
                    }
                }
            }
        }
        this.point = 1;
    }
    checkGridDiagonal2(currentGrid,currentI,currentJ){
        for (let i = currentI ; i < currentGrid.length; i++) {

            for (let j = currentJ; j < currentGrid[i].length; j++) {
                this.currentPlayer = currentGrid[i+1][j].value;
                if ( currentGrid[i+1][j-1] && currentGrid[i+1][j-1].value == this.currentPlayer){
                    this.point += 1;
                    if (!this.checkPoint()){
                        this.checkGrid(currentGrid,i+1,j);
                    }
                }
            }
        }
        this.point = 1;
    }

    checkPoint(){
        if (this.point == 4){
            console.log(this.currentPlayer, ' vient de remporter la partie ! ')
            return true
        } else {
            return false
        }
    }
  }

  module.exports = Grid;