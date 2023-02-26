console.log("Welcome to Tic Tac Toe")
let music = new Audio("triumph.mp3")
let audioTurn = new Audio("mixkit-handgun-click-1660")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// Function to check for a win
const checkWin = ()=>{
    let boxalp = document.getElementsByClassName('boxalp');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxalp

            
            
            [e[0]].innerText === boxalp
            
            
            [e[1]].innerText) && (boxalp
            
            
                [e[2]].innerText === boxalp
            
            
                [e[1]].innerText) && (boxalp
            
            
                [e[0]].innerText !== "") ){
            document.querySelector('.know').innerText = boxalp[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgcon').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxalp = element.querySelector('.boxalp');
    element.addEventListener('click', ()=>{
        if(boxalp.innerText === ''){
            boxalp.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("know")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxalps = document.querySelectorAll('.boxalp');
    Array.from(boxalps).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("know")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgcon').getElementsByTagName('img')[0].style.width = "0px"
})

