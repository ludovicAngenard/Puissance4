function pvp(){
    let grid = new Grid();
    let player1 = new Player('yellow');
    let player2 = new Player('red');
    var currentPlayerIsPlayer1 = true;
    console.log(grid.html)
    $("body").html(`<div class="plateau">${grid.html}</div>`)
    $(".empty").on('click',function(){
        var column = $(this).attr("data-column");
        var row = $(this).attr("data-row");
        if (currentPlayerIsPlayer1){
            player1.putToken(grid.rowList, row, column)
        }else {

        }
    })
}
function pve(){
 var a = ''
}