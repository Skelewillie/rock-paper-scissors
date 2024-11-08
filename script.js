function getComputerChoice(){
    let random = Math.random()

    if (random <= 1/3){
        return ("rock")
    }else if ((random >= 1/3) && (random <=2/3)){
        return ("paper")
    }else{
        return ("scissors")
    }

}

function playRound(human, computer){
    let winner = ""
    if ((human == "rock") && (computer == "rock")){
        winner = "Tie"
    }else if ((human == "rock") && (computer == "paper")){
        winner = "Computer"
    }else if ((human == "rock") && (computer == "scissors")){
        winner = "Player"
    }

    if ((human == "paper") && (computer == "rock")){
        winner = "Player"
    }else if ((human == "paper") && (computer == "paper")){
        winner = "Tie"
    }else if ((human == "paper") && (computer == "scissors")){
        winner = "Computer"
    }

    if ((human == "scissors") && (computer == "rock")){
        winner = "Computer"
    }else if ((human == "scissors") && (computer == "paper")){
        winner = "Player"
    }else if ((human == "scissors") && (computer == "scissors")){
        winner = "Tie"
    }

    switch(winner){
        case "Tie":
            return winner
    }
    
    return winner
}

function playSection(humanChoice,compChoice){


    let winner= playRound(humanChoice, compChoice);

    if(Cscore+Hscore+ties != 5){
        switch(winner){
            case "Computer":
                Cscore ++
                break
            case "Player":
                Hscore++
                break
            case "Tie":
                ties++
        }
    }else{
        return `Game over! You won ${Hscore} games, the computer won ${Cscore} games. You tied ${ties} games, `
    }

    return `You won ${Hscore} games, the computer won ${Cscore} games. You tied ${ties} games`
}

const rock = document.querySelector("button#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector('.results')

var Cscore = 0
var Hscore = 0
var ties = 0


rock.addEventListener("click",() =>{
    results.textContent = playSection('rock',getComputerChoice())
})
paper.addEventListener("click",() =>{
    results.textContent = playSection('paper',getComputerChoice())
})
scissors.addEventListener("click",() =>{
    results.textContent = playSection('scissors',getComputerChoice())
})
    





