const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min +1));

let attempts = 0;
let guess;
let running = true;


while(running){
    guess = window.prompt(`Guess a number between ${min} and ${max}`);
    guess = Number(guess);

    
    if(isNaN(guess)) {
        window.alert(`Please enter a valid number between ${min} and ${max}`);
    }
    else if (guess < min || guess > max) {
        window.alert(`Number should be between ${min} and ${max}`);
    } 
    else {
        attempts++;
        if (guess < answer) {
            window.alert(`Too Low! Guess Higher!`);
        }
        else if (guess > answer) {
            window.alert(`Too High! Guess Lower!`);
        }
        else {
            window.alert(`You got it! The Number was ${answer}. It took you ${attempts} attempts to guess the number.`);
            running = false;
        }
    }

}