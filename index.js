let boxes = document.querySelectorAll('.boxes');
let resetButton = document.querySelector('#reset');
let msg = document.querySelector('h2');
let newGameBtn = document.querySelector('#new-game')
let msgForWin = document.querySelector('#msg-for-win')
let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]



boxes.forEach((box) => {
    box.addEventListener('click',()=>{
        if(turnO) {
            box.innerText = 'O';
            turnO = false;
        }
        else {
            box.innerText = 'X';
            turnO = true;
        }
        
        box.disabled = true;
        winner() 
        
    })

});
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

    
const showWinner=(winner)=>{
    msg.innerHTML=`${winner} is the winner`
}
const showDraw = ()=>{
    msg.innerText = `It's a Draw`
}
const winner = ()=>{
    for(let position of winPatterns ){
       
        let position0 = boxes[position[0]].innerText;
        let position1 = boxes[position[1]].innerText;
        let position2 = boxes[position[2]].innerText;
        
        
        if(position0!="" && position1!="" && position2!="" ){
        if(position0===position1 && position1===position2){

            showWinner(position0)
            disableBoxes()
         }    
        } 
     }
     if (Array.from(boxes).every(box => box.innerText !== "")) {
        showDraw();
    }
  }

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msg.innerText = ""
   
}

resetButton.addEventListener('click', resetGame)
newGameBtn.addEventListener('click', resetGame)
