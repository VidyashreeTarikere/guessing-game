//to write cleaner code, like preventing from using undeclared variables
'use strict';

//declaring variables
let score = 22;
let secretNumber = Math.trunc(Math.random() * 22) + 1;
let highscore = 0;

//display message
const displayMsg = function (message) {
    document.querySelector('.message').textContent = message;
}

//display score
const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}

//when click button is pressed
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //when no guess num
    if (!guess) {
        displayMsg('No numbernumber?');
        score--;//score = 22 -1
        displayScore(score);

        //when guess is out of range
    } else if (guess < 0 || guess > 22) {
        displayMsg('Out of range');
        score--;
        displayScore(score);


        // when guess is equal to secret num
    } else if (guess === secretNumber) {
        displayMsg('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        //styling in javascript
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        //setting highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //when guess is lesser than or greater than seceret 
    } else {
        if (score > 1) {
            if (guess === secretNumber + 1 || guess === secretNumber - 1)
                displayMsg('Nearby');
            else if (guess > secretNumber)
                displayMsg('Too High');
            else if (guess < secretNumber)
                displayMsg('Too Low');
            score--;
            displayScore(score);
        } else {
            displayMsg('You lost the game');
            displayScore(0);
        }
    }
});

//when again button is pressed
document.querySelector('.again').addEventListener('click', function () {
    score = 22;
    secretNumber = Math.trunc(Math.random() * 22) + 1;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    displayMsg('Start guessing...');
    displayScore(score);
});