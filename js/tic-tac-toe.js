import { getTicTacToeResult } from "./game-logic.js";

export function initializeTicTacToe() {
  const boardElement = document.querySelector("#tic-tac-board");
  const status = document.querySelector("#tic-tac-status");
  const resetButton = document.querySelector("#reset-game");
  const newGameButton = document.querySelector("#new-game");
  let board;
  let currentPlayer;
  let complete;

  const render = () => {
    boardElement.replaceChildren(...board.map((mark, index) => {
      const button = document.createElement("button");
      button.type = "button"; button.className = "tic-tac-cell"; button.textContent = mark;
      button.setAttribute("role", "gridcell"); button.setAttribute("aria-label", `Row ${Math.floor(index / 3) + 1}, column ${(index % 3) + 1}${mark ? `: ${mark}` : ", empty"}`);
      button.disabled = Boolean(mark) || complete;
      button.addEventListener("click", () => play(index));
      return button;
    }));
  };
  const play = (index) => {
    if (board[index] || complete) return;
    board[index] = currentPlayer;
    const result = getTicTacToeResult(board);
    if (result.type === "win") { complete = true; status.textContent = `Player ${result.winner} wins!`; }
    else if (result.type === "draw") { complete = true; status.textContent = "It’s a draw! Start a new game to play again."; }
    else { currentPlayer = currentPlayer === "X" ? "O" : "X"; status.textContent = `Player ${currentPlayer}’s turn.`; }
    render();
  };
  const reset = () => { board = Array(9).fill(""); currentPlayer = "X"; complete = false; status.textContent = "Player X’s turn."; render(); };
  resetButton.addEventListener("click", reset); newGameButton.addEventListener("click", reset); reset();
}
