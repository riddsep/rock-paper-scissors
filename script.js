const moves = ["rock", "paper", "scissors"];
const score = {
  humanScore: 0,
  computerScore: 0,
};

function getRandomNumbers() {
  return Math.floor(Math.random() * moves.length);
}

function getComputerChoice() {
  const randomMoves = getRandomNumbers();
  const computerMoves =
    randomMoves === 0 ? moves[0] : randomMoves === 1 ? moves[1] : moves[2];
  return computerMoves;
}

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.onclick = () => playRound("rock");
btnPaper.onclick = () => playRound("paper");
btnScissors.onclick = () => playRound("scissors");

function playRound(getHumanChoice) {
  const computerMoves = getComputerChoice();
  const humanMoves = getHumanChoice.toLowerCase();
  if (
    humanMoves !== "rock" &&
    humanMoves !== "paper" &&
    humanMoves !== "scissors"
  ) {
    alert("Please choose rock, paper or scissors");
    playRound();
  }
  let result = "";

  if (computerMoves === "rock") {
    if (humanMoves === "rock") {
      result = "tie";
    } else if (humanMoves === "paper") {
      result = "win";
    } else if (humanMoves === "scissors") {
      result = "lose";
    }
  } else if (computerMoves === "paper") {
    if (humanMoves === "rock") {
      result = "lose";
    } else if (humanMoves === "paper") {
      result = "tie";
    } else if (humanMoves === "scissors") {
      result = "win";
    }
  } else if (computerMoves === "scissors") {
    if (humanMoves === "rock") {
      result = "win";
    } else if (humanMoves === "paper") {
      result = "lose";
    } else if (humanMoves === "scissors") {
      result = "tie";
    }
  }

  let message = "";
  switch (result) {
    case "tie":
      message = `Tie You: ${humanMoves} Computer: ${computerMoves}`;
      break;
    case "win":
      message = `You win!. ${humanMoves} defeat ${computerMoves}`;
      break;
    case "lose":
      message = `You lose!. ${computerMoves} defeat ${humanMoves}`;
      break;
  }

  const resultMsg = document.getElementById("result-message");
  resultMsg.textContent = message;

  if (result === "win") {
    score.humanScore++;
  } else if (result === "lose") {
    score.computerScore++;
  }

  const scoreEl = document.getElementById("score");
  scoreEl.textContent =
    (score.humanScore === 5 && `You Win!`) ||
    (score.computerScore === 5 && `Computer Win`) ||
    `Your score: ${score.humanScore} Computer score: ${score.computerScore}`;
}
