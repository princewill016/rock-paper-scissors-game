const player_played = document.getElementById("player_played");
const computer_played = document.getElementById("computer_played");
const player_result = document.querySelector(".score_player");
const computer_result = document.querySelector(".score_computer");
const whoWon = document.querySelector(".winner");
const tableBody = document.querySelector("#myTable tbody");
let playCount = 1;
isGameOver = false;

function Rock() {
  if (isGameOver) return;
  const playerChoice = "Rock";
  const choices = ["Rock", "Paper", "Scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    result = "You Won!";
  } else result = "You Lose!";
  player_played.textContent = `You chose Rock`;
  player_played.style.color = "#fb57c6";
  if (computerChoice === "Rock") {
    computer_played.style.color = "#fb57c6";
  } else if (computerChoice === "Paper") {
    computer_played.style.color = "#40a4f7";
  } else {
    computer_played.style.color = "#ffff75";
  }
  computer_played.textContent = `Computer chose ${computerChoice}`;
  result === "You Won!" ? player_result.textContent++ : player_result;
  result === "You Lose!" ? computer_result.textContent++ : computer_result;
  whoWon.textContent = result;
  if (whoWon.textContent === "You Won!") {
    whoWon.style.color = "green";
  } else if (whoWon.textContent === "You Lose!") {
    whoWon.style.color = "Red";
  } else {
    whoWon.style.color = "white";
  }
  addFourTableColumns();
  if (player_result.textContent >= 15 || computer_result.textContent >= 15) {
    checkGameStatus();
    // endGame();
  }
  return result;
}

function Paper() {
  if (isGameOver) return;
  const playerChoice = "Paper";
  const choices = ["Rock", "Paper", "Scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    result = "You Lose!";
  } else result = "You Won!";
  player_played.textContent = `You chose Paper`;
  player_played.style.color = "#40a4f7";
  if (computerChoice === "Rock") {
    computer_played.style.color = "#fb57c6";
  } else if (computerChoice === "Paper") {
    computer_played.style.color = "#40a4f7";
  } else {
    computer_played.style.color = "#ffff75";
  }
  computer_played.textContent = `Computer chose ${computerChoice}`;
  result === "You Won!" ? player_result.textContent++ : player_result;
  result === "You Lose!" ? computer_result.textContent++ : computer_result;
  whoWon.textContent = result;
  if (whoWon.textContent === "You Won!") {
    whoWon.style.color = "green";
  } else if (whoWon.textContent === "You Lose!") {
    whoWon.style.color = "Red";
  } else {
    whoWon.style.color = "white";
  }
  addFourTableColumns();
  if (player_result.textContent >= 15 || computer_result.textContent >= 15) {
    checkGameStatus();
    // endGame();
  }
  return result;
}

function Scissors() {
  if (isGameOver) return;
  const playerChoice = "Scissors";
  const choices = ["Rock", "Paper", "Scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    result = "You Lose!";
  } else result = "You Won!";
  player_played.textContent = `You chose Scissors`;
  player_played.style.color = "#ffff75";
  if (computerChoice === "Rock") {
    computer_played.style.color = "#fb57c6";
  } else if (computerChoice === "Paper") {
    computer_played.style.color = "#40a4f7";
  } else {
    computer_played.style.color = "#ffff75";
  }
  computer_played.textContent = `Computer chose ${computerChoice}`;
  result === "You Won!" ? player_result.textContent++ : player_result;
  result === "You Lose!" ? computer_result.textContent++ : computer_result;
  whoWon.textContent = result;
  if (whoWon.textContent === "You Won!") {
    whoWon.style.color = "green";
  } else if (whoWon.textContent === "You Lose!") {
    whoWon.style.color = "Red";
  } else {
    whoWon.style.color = "white";
  }
  addFourTableColumns();
  if (player_result.textContent >= 15 || computer_result.textContent >= 15) {
    checkGameStatus();
    // endGame();
  }
  return result;
}

function checkGameStatus() {
  if (player_result.textContent >= 15 || computer_result.textContent >= 15) {
    endGame();
  }
}

function endGame() {
  let message;
  isGameOver = true;
  if (player_result.textContent >= 15) {
    message = "Game over! You Won AI!";
  } else {
    message = "Game over! AI Won You!";
  }
  const resetGame = window.confirm(`${message}\n\nDo you want to play again?`);
  if (resetGame) {
    // Reset the game (you may need to implement a reset function)
    reset();
  } else {
    // End the game or continue as needed
  }
}

// Function to reset the game (you need to implement this)
function reset() {
  window.location.reload();
  // Add any additional reset logic you need
}
function addFourTableColumns() {
  const newRow = tableBody.insertRow();
  const cell1 = newRow.insertCell(0);
  cell1.textContent = playCount++;
  const cell2 = newRow.insertCell(1);
  cell2.textContent = player_played.textContent;
  const cell3 = newRow.insertCell(2);
  cell3.textContent = computer_played.textContent.replace(
    "Computer chose ",
    ""
  );
  const cell4 = newRow.insertCell(3);
  cell4.textContent = whoWon.textContent;
}
