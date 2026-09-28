import { initializeCatFacts } from "./cat-facts.js";
import { initializeCurrencyConverter } from "./currency-converter.js";
import { initializeRockPaperScissors } from "./rock-paper-scissors.js";
import { initializeTicTacToe } from "./tic-tac-toe.js";

document.querySelector("#show-date").addEventListener("click", () => { document.querySelector("#date-output").textContent = new Date().toLocaleString(); });
document.querySelector("#dom-action").addEventListener("click", () => { document.querySelectorAll(".box").forEach((box, index) => { box.textContent = `Updated DOM example ${index + 1}`; }); });
document.querySelector("#theme-toggle").addEventListener("click", (event) => { const enabled = document.body.classList.toggle("dark-theme"); event.currentTarget.setAttribute("aria-pressed", String(enabled)); event.currentTarget.textContent = enabled ? "Use light mode" : "Use dark mode"; });
initializeTicTacToe(); initializeRockPaperScissors(); initializeCatFacts(); initializeCurrencyConverter();
