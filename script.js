// variables declarations
let human_score = 0;
let computer_score = 0;

function getComputerChoice() {
    const num_choice = Math.random();
    if (num_choice <= 0.3) {
        return "rock";
    } else if (num_choice <= 0.6) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter 'rock', 'paper', or 'scissors' not a number, not anything else").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice){
        return "tie"
    } else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            human_score++;
            return "human";
        } else { // paper
            computer_score++;
            return "computer";
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            human_score++;
            return "human";
        } else { // scissors
            computer_score++;
            return "computer";
        }
    } else { // if human choose scissors
        if (computerChoice == "paper") {
            human_score++;
            return "human";
        } else { // rock
            computer_score++;
            return "computer";
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        const decision = playRound(humanChoice, computerChoice);
        if (decision == "tie") {
            console.log("this round is a tie");
        } else {
            console.log(decision + " is the winner of this round");
        }

    }
    
    if (human_score > computer_score) {
        console.log("Human wins!");
    } else if (computer_score > human_score) {
        console.log("Computer wins!");
    } else {
        console.log("Weirdly, the scores is tie")
    }
}

// the main part:
playGame();