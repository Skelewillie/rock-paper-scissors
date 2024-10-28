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

function getHumanChoice(){
    return (prompt("Do you choose rock, paper, or scissors?").toLowerCase())
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
            console.log(`You played ${human}, the computer played ${computer}. Game Tied`)
            return winner
    }
    
    console.log(`You played ${human}, the computer played ${computer}. ${winner} won`)
    return winner
}

function playGame(){
    let compChoice = getComputerChoice()
    
    var Cscore = 0
    var Hscore = 0
    var ties = 0

    for(var i = 0; i < 5 ; i++){
        let humChoice = getHumanChoice()
        let winner = playRound(humChoice, compChoice)

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
        console.log(`You won ${Hscore} games, the computer won ${Cscore} games. You tied ${ties} games`)
    }
}

playGame()
