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

function getHumanChoice() {
  const humanMoves = prompt("rock, paper or scissors?");
  return humanMoves;
}

function playRound() {
  const computerMoves = getComputerChoice();
  const humanMoves = getHumanChoice().toLowerCase();
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

  switch (result) {
    case "tie":
      alert(`Tie You: ${humanMoves} Computer: ${computerMoves}`);
      break;
    case "win":
      alert(`You win!. ${humanMoves} defeat ${computerMoves}`);
      break;
    case "lose":
      alert(`You lose!. ${computerMoves} defeat ${humanMoves}`);
      break;
  }

  if (result === "win") {
    score.humanScore++;
  } else if (result === "lose") {
    score.computerScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  alert(
    `Your score: ${score.humanScore} Computer score: ${score.computerScore}`
  );
}
playGame();
console.log("HEllo");
