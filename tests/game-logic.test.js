import assert from "node:assert/strict";
import test from "node:test";
import { getRpsResult, getTicTacToeResult } from "../js/game-logic.js";

test("Rock–Paper–Scissors returns every outcome correctly", () => {
  assert.equal(getRpsResult("rock", "scissors"), "win"); assert.equal(getRpsResult("paper", "rock"), "win"); assert.equal(getRpsResult("scissors", "paper"), "win");
  assert.equal(getRpsResult("rock", "paper"), "lose"); assert.equal(getRpsResult("paper", "scissors"), "lose"); assert.equal(getRpsResult("scissors", "rock"), "lose");
  assert.equal(getRpsResult("rock", "rock"), "draw");
});
test("Tic-Tac-Toe detects wins, draws, and ongoing games", () => {
  assert.deepEqual(getTicTacToeResult(["X", "X", "X", "", "O", "", "", "", "O"]), { type:"win", winner:"X" });
  assert.deepEqual(getTicTacToeResult(["X", "O", "X", "X", "O", "O", "O", "X", "X"]), { type:"draw" });
  assert.deepEqual(getTicTacToeResult(["X", "", "", "", "O", "", "", "", ""]), { type:"playing" });
});
