class Player {
    constructor(playerColor) {
        this.tokenNumber = 21;
        this.score = 0;
        this.playerColor = playerColor;
    }
    putToken(currentGrid,currentI,currentJ){
        for (let i = parseInt(currentI) ; i < currentGrid.length; i++) {

            for (let j = currentJ; j < currentGrid[i].length; j++) {

                if (currentGrid[i][j] == 0 ){

                    if ( currentGrid[i+1] && currentGrid[i+1][j] == 0){
                        this.putToken(currentGrid,i+1,j);
                    } else {

                        currentGrid[i][j] = 1;
                        console.log($(`.column[data-column="${j}"][data-row="${i}"]`))
                        $(`.column[data-column="${j}"][data-row="${i}"]`).removeClass("empty")
                        $(`.column[data-column="${j}"][data-row="${i}"]`).addClass("yellow")
                        // console.log($(currentGrid[i][j])[0].classList)
                        // // $(currentGrid[i][j])[0].classList.add(this.playerColor);
                        // console.log($(currentGrid[i][j]),$(currentGrid[i][j])[0], $(currentGrid[i][j])[0],$(currentGrid[i][j])[0].classList)
                    }
                    return true;
                } else {

                    return false;
                }
            }

        }
    }

    countScore(){
        this.score += 1;
    }
}