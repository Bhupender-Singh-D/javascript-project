export const RPS_CHOICES = ["rock", "paper", "scissors"];

const WINNING_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
  [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
];

export function getRpsResult(player, computer) {
  if (!RPS_CHOICES.includes(player) || !RPS_CHOICES.includes(computer)) throw new Error("Invalid Rock–Paper–Scissors choice.");
  if (player === computer) return "draw";
  return (player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper") ? "win" : "lose";
}

export function getTicTacToeResult(board) {
  for (const [a, b, c] of WINNING_PATTERNS) if (board[a] && board[a] === board[b] && board[a] === board[c]) return { type: "win", winner: board[a] };
  return board.every(Boolean) ? { type: "draw" } : { type: "playing" };
}
