
let clearClicks = 0;

function clearClicks() {
    let allClickedCards = document.querySelectorAll(".clicked");
    for (let eachCard of allClickedCards) {
        eachCard.classList.remove("clicked");
    }
    playerClicks++;
    document.querySelector("#turnCount span").innerHTML = playerClicks;

    //check for winning
    let allCards = documentquerySelectorAll(".card");
    let matchedCards = document.querySekectorAll(".matched");

    if (allCards.length == matchedCards.length) {
        //player has matched all cards
        document.querySelctor("#winning").innerHTML = "You Won!"
    }
}

function flipCard() {

    if (!this.classList.contains("matched")) {

        //this will get all the cards that were clicked
        let allClickedCards = document.querySelectorAll(".clicked");

        if (allClickedCards.length < 2) {
            this.classList.add("clicked");
        }

        //refresh the click
        allClickedCards = document.querySelectorAll(".clicked");

        if (allClickedCards.length == 2) {

            playerClicks++;

            let card1 = allClickedCards[0].classList.toString();
            let card2 = allClickedCards[1].classList.toString();

            if (card1 == card2) {
                console.log("Its a match!!");
                allClickedCards[0].classList.add("matched");
                allClickedCards[1].classList.add("matched");

            } else {
                console.log("Its not a match!!");
                
            }
            window.setTimeout(clearClicks, 2000);
        }
    }
}

//will run when DOM loads
document.addEventListener("DOMContentLoaded", function (e) {

    //just storing them in this variable
    let allCards = document.querySelectorAll(".card");
    let gameboard = document.querySelector("#gameBoard");


    for (x = 0; x < allCards.length; x++) {
        let randNum = Math.floor(Math.random() * allCards.length);
        gameboard.insertBefore(allCards[x], gameboard.children[randNum]);
        allCards[x].addEventListener("click", flipCard);
    }
});