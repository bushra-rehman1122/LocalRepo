let user = 0;
let computer = 0;
const choices = document.querySelectorAll(".choice");
const messageShow = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#computer");



const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    //Description of new concept :-
    // (Math.floor) :-
    // is used to remove the decimal like numbers after point.like(from this[1.356444] to this[1])
    // (Math Random) :-
    //is used for creating a number between 0 to 1 
    //(*3) :-
    //means  Math wil create number between 0 to 2 like less than the multiplied number e.g we multiply 5 so number will generate between 0 to 4 ...
    return options[randomIndex];
}

let drawGame = () =>{
    console.log("Game was draw");
    messageShow.innerText = "Game was draw.Play again!";
  messageShow.style.backgroundColor =  "#081b31";
  messageShow.style.color =  "#fff";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        user++;
        userScorePara.innerText = user;
        // console.log("You win!");
        messageShow.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        messageShow.style.backgroundColor = "green"
    }else{
        computer++;
        compScorePara.innerText = computer;
        // console.log("You lose");
        messageShow.innerText = `Sorry,You lose. ${compChoice} beats your ${userChoice}`;
         messageShow.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    // console.log("User Choice = ",userChoice);
    //Generate Computer Choice -> modular
    const compChoice = genCompChoice();
    //Calls the genCompChoice function to get the computer's choice and shows it in the console.
    if (userChoice === compChoice){
        drawGame();//Call draw game function we made above as game draw

    }else{
    let userWin = true;
    if(userChoice === "rock"){
        // scissor , paper
        userWin = compChoice === "paper" ? false:true;
    }else if(userChoice === "paper"){
        // scissor , rock
        userWin = compChoice === "scissor" ? false:true;
    }else{
        //rock,paper
        userWin = compChoice === "rock" ? false:true;
    }
    showWinner(userWin,userChoice,compChoice);
    }
};
    
    //Add event listeners
choices.forEach((choice) => {//Loops through all the buttons or elements with the class choice.
    choice.addEventListener("click",() =>{//Adds a "click" listener to each button, so when the button is clicked, some action happens.
        const userChoice = choice.getAttribute("id"); 
       playGame(userChoice);//Sends the user's choice to the playGame function to decide what happens next
   });
});
