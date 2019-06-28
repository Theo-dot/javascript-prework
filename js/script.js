const buttonRock = document.getElementById("button-rock"),
  buttonPaper = document.getElementById("button-paper"),
  buttonScissors = document.getElementById("button-scissors");

buttonRock.addEventListener("click", function() {
  buttonClicked("kamień");
});
buttonPaper.addEventListener("click", function() {
  buttonClicked("papier");
});
buttonScissors.addEventListener("click", function() {
  buttonClicked("nożyce");
});
/**
 * Function that take argument from button, then draw number to computer and compare them
 */
function buttonClicked(argButtonName) {
  clearMessages();
  const playerMove = argButtonName;
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  displayResult(playerMove, computerMove);
}
/**
 * Return argument from id
 */
function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return "kamień";
  } else if (argMoveId == 2) {
    return "papier";
  } else if (argMoveId == 3) {
    return "nożyce";
  } else {
    printMessage(
      "Nie znam ruchu o id " + argMoveId + '. Zakładam, że chodziło o "kamień".'
    );
    return "kamień";
  }
}
/*
 * Match Result
 */
function displayResult(argPlayerMove, argComputerMove) {
  if (argPlayerMove == "papier" && argComputerMove == "kamień") {
    printMessage("Wygrywasz!");
  } else if (argPlayerMove == "nożyce" && argComputerMove == "papier") {
    printMessage("Wygrywasz!");
  } else if (argPlayerMove == "kamień" && argComputerMove == "nożyce") {
    printMessage("Wygrywasz!");
  } else if (argPlayerMove == argComputerMove) {
    printMessage("Remis!");
  } else {
    printMessage("Przegrywasz :(");
  }
  printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
}
