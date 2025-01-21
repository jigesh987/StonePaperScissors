let choices = document.querySelectorAll(".choice");


function compChoice() {
    const comChoice = ["rock","paper","scissors"];
    const index=Math.floor(Math.random()*3);
    console.log(comChoice[index]);
}
compChoice();


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log(userChoice);
    });
});