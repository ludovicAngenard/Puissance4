class Robot {
    constructor(playerColor) {
        this.tokenNumber = 21;
        this.score = 0;
        this.playerColor = playerColor;
    }
    putToken(currentGrid,currentI,currentJ){
        for (let i = currentI ; i < currentGrid.length; i++) {

            for (let j = currentJ; j < currentGrid[i].length; j++) {

                if (currentGrid[i][j].classList.contains("empty") ){

                    if (currentGrid[i+1][j].classList.contains("empty")){

                        this.putToken(currentGrid,i+1,j);
                    } else {

                        currentGrid[i][j].classList.replace('empty', `${this.playerColor}`);
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