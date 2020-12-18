class Player {
    constructor(playerColor) {
        this.tokenNumber = 21;
        this.score = 0;
        this.playerColor = playerColor;
    }
    putToken(currentGrid,currentI,currentJ){
        for (let i = parseInt(currentI) ; i < currentGrid.length; i++) {

            for (let j = currentJ; j < currentGrid[i].length; j++) {
                console.log(currentGrid[i], 'testons', $(currentGrid[i][j])[0].classList)
                if ($(currentGrid[i][j])[0].classList.contains("empty") ){
                    console.log(i," ",i+1)
                    if ( currentGrid[i+1] && $(currentGrid[i+1][j] )[0].classList.contains("empty")){
                        this.putToken(currentGrid,i+1,j);
                    } else {
                        console.log(this.playerColor)
                        $(currentGrid[i][j])[0].toggleClass('empty', `${this.playerColor}`);
                        console.log($(currentGrid[i][j]),$(currentGrid[i][j])[0], $(currentGrid[i][j])[0],$(currentGrid[i][j])[0].classList)
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