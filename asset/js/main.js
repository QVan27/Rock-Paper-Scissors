let i = 0;
let atFive = "First at 5 ! Choose one to start !";
let speed = 200;

function typeWriter() {
  if (i < atFive.length) {
    document.getElementById("atFive").innerHTML += atFive.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

const buttons = document.querySelectorAll("button");

function computerPlay() {
  let pickRandom = ["rock", "paper", "scissors"];
  return pickRandom[Math.floor(Math.random() * pickRandom.length)];
}

function disable() {
  buttons.forEach((element) => {
    element.disabled = true;
  });
}

let myScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let result = "";

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    myScore += 1;
    result =
      '<p class="roundResult">You win that one, ' +
      playerSelection +
      " beats " +
      computerSelection +
      "</p>" +
      "<p>" +
      "Player score : " +
      myScore +
      " Computer score : " +
      computerScore +
      "</p>";

    if (myScore == 5) {
      result +=
        '<p class="finalResult">You won the game !</p></br><input type="button" value="Refresh Page" onClick="location.href=location.href"/>';
      disable();
    }
  } else if (playerSelection == computerSelection) {
    result = '<p class="roundResult">That\'s a draw !</p>';
  } else {
    computerScore += 1;
    result =
      '<p class="roundResult">You lose ' +
      computerSelection +
      " beats " +
      playerSelection +
      "</p>" +
      "<p>" +
      "Player score : " +
      myScore +
      " Computer score : " +
      computerScore +
      "</p>";

    if (computerScore == 5) {
      result +=
        '<p class="finalResult">I won the game !</p></br><input type="button" value="Refresh Page" onClick="location.href=location.href"/>';
      disable();
    }
  }
  document.getElementById("result").innerHTML = result;
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.id);
  });
});
