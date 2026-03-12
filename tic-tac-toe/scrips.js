// declare the board data for a game, using 3 arrays
// "-" indicates unmarked, "x" indicates an X mark, "o" indicates an O mark
let rowA = ["-", "-", "-"];
let rowB = ["-", "-", "-"];
let rowC = ["-", "-", "-"];

// track whose turn it is
let currentTurn = "x";

// track number of turns left
let remainingTurns = 9;

// track if game is over
let gameOver = false;

// set up blank variable for current player DOM element
let currentPlayer;


// return Boolean true if all 3 submitted values match, otherwise return false
function spaceMatch(spaceA, spaceB, spaceC) {
    return ((spaceA == spaceB) && (spaceA == spaceC));
}

// function to accept the 3 arrays and compare them
function checkGameboard(a, b, c) {

    // set default outcome to a draw
    let outcome = "d";

    // check column 0
    if (spaceMatch(a[0], b[0], c[0])) {
        if (a[0] != "-") outcome = a[0]; // set outcome to winner if not "-"
    }

    // check column 1
    if (spaceMatch(a[1], b[1], c[1])) {
        if (a[1] != "-") outcome = a[1]; // set outcome to winner if not "-"
    }

    // check column 2
    if (spaceMatch(a[2], b[2], c[2])) {
        if (a[2] != "-") outcome = a[2]; // set outcome to winner if not "-"
    }

    // check row A
    if (spaceMatch(a[0], a[1], a[2])) {
        if (a[0] != "-") outcome = a[0]; // set outcome to winner if not "-"
    }

    // check row B
    if (spaceMatch(b[0], b[1], b[2])) {
        if (b[0] != "-") outcome = b[0]; // set outcome to winner if not "-"
    }

    // check row C
    if (spaceMatch(c[0], c[1], c[2])) {
        if (c[0] != "-") outcome = c[0]; // set outcome to winner if not "-"
    }

    // check diagonal from top left
    if (spaceMatch(a[0], b[1], c[2])) {
        if (a[0] != "-") outcome = a[0]; // set outcome to winner if not "-"
    }

    // check diagonal from bottom left
    if (spaceMatch(c[0], b[1], a[2])) {
        if (c[0] != "-") outcome = c[0]; // set outcome to winner if not "-"
    }

    return outcome; // return the final outcome
}


function clickSquare() {

    if (this.innerHTML == "") {

        this.innerHTML = currentTurn;

        //this is to flip turn after each click
        if (currentTurn == "x") currentTurn = "o";
        else currentTurn = "x";

        //update next player in DOM
        currentPlayer.innerHTML = currentTurn;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    //find all the clickable spaces
    let allSpaces = document.querySelectorAll(".gameSpace");

    //for-of loop:
    for (let eachSpace of allSpaces) {
        eachSpace.addEventListener("click", clickSquare);
    }

    //update current player DOM element with first player
    let currentPlayer = document.querySelector("#currentPlayer span");
    currentPlayer.innerHTML = currentTurn;

});