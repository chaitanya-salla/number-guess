'use strict';

const input = document.querySelector('.left input');
const checkBtn = document.querySelector('.check');
const guessText = document.querySelector('.message');
const answerLabel = document.querySelector('.number');
const currentScoreLabel = document.querySelector('.score');
const againBtn = document.querySelector('.again');
const highScoreLabel = document.querySelector('.highscore');
const win = document.querySelector('body');

let random = Math.floor(Math.random() * 20) + 1;
const score = 20;
let currentScore = score;
let highscore = highScoreLabel.textContent;

console.log(random);
checkBtn.addEventListener('click', () => {
  const userInput = Number(input.value);
  console.log(random);
  if (!userInput) {
    guessText.textContent = '🚫 Enter Valid Number';
    input.focus();
    return;
  }

  if (userInput === random) {
    guessText.textContent = 'You Won 🏆';
    updateHighScore();
    resetScore();
    return;
  } else if (userInput > random) {
    guessText.textContent = '📈 Too High';
    currentScoreLabel.textContent = --currentScore;
  } else if (userInput < random) {
    guessText.textContent = '📉 Too Low';
    currentScoreLabel.textContent = --currentScore;
  }

  if (currentScore < 1) {
    guessText.textContent = 'You Lost 😢. Try Again !!';
    resetScore();
    return;
  }
  clearInput();
});

againBtn.addEventListener('click', () => {
  resetScore();
  guessText.textContent = 'Start guessing...';
});

function clearInput() {
  input.value = '';
  input.focus();
}

function resetScore() {
  clearInput();
  currentScoreLabel.textContent = currentScore = score;
  random = Math.floor(Math.random() * 20) + 1;
  win.style.transition = 'background 0.5s ease-in';
}

function updateHighScore() {
  if (highscore < currentScore)
    highScoreLabel.textContent = highscore = currentScore;
}
