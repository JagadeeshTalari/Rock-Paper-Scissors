const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
const resultUserStatus = document.getElementById("result-user-stat");
const resultCompStatus = document.getElementById("result-comp-stat");
const resultFinalStatus = document.getElementById("result-final-stat");
const userScoreVal = document.getElementById("userScoreVal");
const compScoreVal = document.getElementById("compScoreVal");

let userInput = [ rock, paper, scissors];
let userScoreCount = 0;
let compScoreCount = 0;


// computer's Option
function compRps(){

    let rps = ["rock", "paper", "scissors"];

    return rps[Math.floor(Math.random()*3)];
}

// if user select's Rock
rock.addEventListener("click", () => {

   resultUserStatus.innerText = "User: rock";

   if( compRps() == "scissors"){
        userScoreCount += 1;
        userScoreVal.innerText = userScoreCount;
        resultCompStatus.innerText = "Computer: scissors";
        resultFinalStatus.innerText = "Winner: User";

    }
    else if( compRps() == "paper"){
        compScoreCount += 1;
        compScoreVal.innerText = compScoreCount;
        resultCompStatus.innerText = "Computer: paper";
        resultFinalStatus.innerText = "Winner: Computer";
  
    }
    else{
        
        resultCompStatus.innerText = "Computer: rock";
        resultFinalStatus.innerText = "Winner: Draw";

    }
})


// if user select's Paper
paper.addEventListener("click", () => {

    resultUserStatus.innerText = "User: paper";

    if( compRps() == "rock"){
        userScoreCount += 1;
        userScoreVal.innerText = userScoreCount;
        resultCompStatus.innerText = "Computer: rock";
        resultFinalStatus.innerText = "Winner: User";
    }
    else if ( compRps() == "scissors"){
        compScoreCount += 1;
        compScoreVal.innerText = compScoreCount;
        resultCompStatus.innerText = "Computer: scissors";
        resultFinalStatus.innerText = "Winner: Computer";
    }
    else{
        resultCompStatus.innerText = "Computer: paper";
        resultFinalStatus.innerText = "Winner: Draw";
    }
})


// if user select's Scissors
scissors.addEventListener("click", () => {
    
    resultUserStatus.innerText = "User: scissors";

    if( compRps() == "paper"){
        userScoreCount += 1;
        userScoreVal.innerText = userScoreCount;
        resultCompStatus.innerText = "Computer: paper";
        resultFinalStatus.innerText = "Winner: User";
    }
    else if ( compRps() == "rock"){
        compScoreCount += 1;
        compScoreVal.innerText = compScoreCount;
        resultCompStatus.innerText = "Computer: rock";
        resultFinalStatus.innerText = "Winner: Computer";
    }
    else{
        resultCompStatus.innerText = "Computer: scissors";
        resultFinalStatus.innerText = "Winner: Draw";
    }
})




