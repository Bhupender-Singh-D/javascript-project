import { getRpsResult, RPS_CHOICES } from "./game-logic.js";

export function initializeRockPaperScissors(random = Math.random) {
  const status = document.querySelector("#rps-status");
  const userScore = document.querySelector("#user-score");
  const computerScore = document.querySelector("#computer-score");
  let user = 0; let computer = 0;
  document.querySelectorAll(".choice").forEach((button) => button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = RPS_CHOICES[Math.floor(random() * RPS_CHOICES.length)];
    const result = getRpsResult(playerChoice, computerChoice);
    if (result === "win") { user += 1; status.textContent = `You win! ${playerChoice} beats ${computerChoice}.`; }
    else if (result === "lose") { computer += 1; status.textContent = `Computer wins: ${computerChoice} beats ${playerChoice}.`; }
    else status.textContent = `Draw: you both chose ${playerChoice}.`;
    userScore.textContent = user; computerScore.textContent = computer;
  }));
}
