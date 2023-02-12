function random() {
    let rps = 0
    let num = Math.floor(Math.random() * 3) + 1;

    if (num == 1) {
        let rps = 'rock';  
        return rps
    };

    if (num == 2) {
        let rps = 'paper';
        return rps
    };

    if (num == 3) {
        let rps = 'scissors';      
        return rps
    };
};

function game() {
    let rps = random();
    let answer = prompt('Rock, Paper, or Scissors?');
    if (answer == rps) { 
        console.log('You got it right.', 'It was', rps);
    };

    if (answer != rps) {
        console.log('You got it wrong.', 'It was', rps);
    };
};

game()

