'use strict';
//functions
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0el.classList.toggle('player--active');
  player1el.classList.toggle('player--active');
}
//selecting elements
const player0el = document.querySelector('.player--0');
const player1el = document.querySelector('.player--1');
let score0el = document.querySelector('#score--0');
let score1el = document.querySelector('#score--1');
let current0el = document.getElementById('current--0');
let current1el = document.getElementById('current--1');
let diceEl = document.querySelector('.dice');
let buttonNew = document.querySelector('.btn--new');
let buttonRoll = document.querySelector('.btn--roll');
let buttonHold = document.querySelector('.btn--hold');

//assigning values
score0el.textContent = 0;
score1el.textContent = 0;
diceEl.classList.add('hidden');

const scors = [0, 0];
let currentScore = 0;
let totalScore = 0;
let activePlayer = 0;
let playing = true;

const init = function () {
  const scors = [0, 0];
  let currentScore = 0;
  let totalScore = 0;
  let activePlayer = 0;
  let playing = true;
  diceEl.classList.add('hidden');
  score0el.textContent = 0;
  score1el.textContent = 0;
  current0el.textContent = 0;
  current1el.textContent = 0;
  player0el.classList.remove('player--winner');
  player1el.classList.remove('player--winner');
  diceEl.classList.remove('hidden');
  player0el.classList.add('player--active');
  player1el.classList.remove('player--active');
};

init();

//rolling dice functionality
buttonRoll.addEventListener('click', function () {
  if (playing) {
    //genarating random dice
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //showing dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //if dice is one than switch to other player
    if (dice != 1) {
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

buttonHold.addEventListener('click', function () {
  if (playing) {
    //add current score to active players score
    scors[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scors[activePlayer];
    //check if player score is >=100
    //finish the game

    if (scors[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.remove('remove');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
    //switch to the next player
    switchPlayer();
  }
});

buttonNew.addEventListener('click', function () {
  init();
});
