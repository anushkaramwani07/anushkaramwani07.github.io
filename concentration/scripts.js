
let playerClicks = 0;
let timeDelay = 1000; //this is milliseconds


function clearClicks() {
    let allClickedCards = document.querySelectorAll(".clicked");
    for (let eachCard of allClickedCards) {
        eachCard.classList.remove("clicked");
    }
    playerClicks++;
    document.querySelector("#turnCount span").innerHTML = playerClicks;

    //check for winning
    let allCards = document.querySelectorAll(".card");
    let matchedCards = document.querySelectorAll(".matched");

    //checks if all cards are matched
    if (allCards.length == matchedCards.length) {
        //player has matched all cards to console
        console.log("All cards matched! Player has won!")
        document.querySelector("#winning").innerHTML = "You Won!"
    }
}

//controls what happens when a card is clicked
function flipCard() {
    // this ichecks that the card hasn't already been matched.
    if (!this.classList.contains("matched")) {

        //this will get all the cards that were clicked
        let allClickedCards = document.querySelectorAll(".clicked");

        //makes sure only 2 cards are flipped at a time.
        if (allClickedCards.length < 2) {
            this.classList.add("clicked");
        }

        //refresh the click
        allClickedCards = document.querySelectorAll(".clicked");

        if (allClickedCards.length == 2) {

            //comapring class names of both the cards to see if they are the same pair.
            let card1 = allClickedCards[0].classList.toString();
            let card2 = allClickedCards[1].classList.toString();

            if (card1 == card2) {
                console.log("Its a match!!");
                allClickedCards[0].classList.add("matched");
                allClickedCards[1].classList.add("matched");
                window.setTimeout(clearClicks, timeDelay);

            }
            else {
                console.log("Its not a match!!");
            }
            //clears the clicks whether a match or not.
            window.setTimeout(clearClicks, timeDelay);
        }
    }
}

//will run when DOM loads
document.addEventListener("DOMContentLoaded", function (e) {

    //just storing them in this variable
    let allCards = document.querySelectorAll(".card");
    let gameboard = document.querySelector("#gameBoard");


    for (x = 0; x < allCards.length; x++) {

        //randomizes the cards
        let randNum = Math.floor(Math.random() * allCards.length);
        gameboard.insertBefore(allCards[x], gameboard.children[randNum]);

        //calls flipCard function when a card is clicked
        allCards[x].addEventListener("click", flipCard);
    }
});