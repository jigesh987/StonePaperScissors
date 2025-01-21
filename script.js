const userName = document.getElementById("name");
const wel=document.getElementById("wel");
const name = window.prompt("Enter your name ");
if (name === null) {
    userName.textContent = "You";
}
else {
    userName.innerText = name;
    wel.innerText=`Welcome ${name}`;
}

let choices = document.querySelectorAll(".choice");
let userScore = 0;
let compScore = 0;

const user = document.getElementById("user");


const comp = document.getElementById("computer");
const msg = document.getElementById("text");

function compChoice() {
    const comChoice = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    console.log("computer = ", comChoice[index]);
    return comChoice[index];
}

const showWinner = (userWin, userChoice, computer) => {
    if (userWin) {
        console.log("you win");
        userScore++;
        user.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${computer}`;
        msg.style.backgroundColor = "green";
    }
    else {
        console.log("computer win");
        compScore++;
        comp.innerText = compScore;
        msg.innerText = `You lost. ${computer} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const game = (userChoice) => {
    const computer = compChoice();
    if (computer == userChoice) {
        msg.innerText = "Game was Draw. Play again.";
        msg.style.backgroundColor = "rgb(10, 10, 29)";
    }
    else {
        let userWin = true;
        if (userChoice == "rock") {
            userWin = computer == "paper" ? false : true;
        }
        else if (userChoice == "paper") {
            userWin = computer == "scissors" ? false : true;
        }
        else {
            userWin = computer == "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computer);
    }

}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        game(userChoice);
    });
});