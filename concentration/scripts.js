






//willrun when DOM loads
document.addEventListener("DOMContentLoaded", function(e)){

    let allCards = document.querySelectorAll(".card");
    let gameboard = document.querySelector("#gameBoard");


    for(x = 0; x<allCards.length; x++){
        let randNum = Math.floor( Math.random() * allCards.length)
        gameboard.insertBefore( allCards[x], gameboard.children[randNum]);
        
    }
}