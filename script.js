let buttons = document.querySelectorAll(".btn");
let upDownButton = document.querySelectorAll(".up-down-button");
let count = 0;
let isWin = false;

const array = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
let turnO = true;

let reset = () => {
    turnO = true;
    buttons.forEach((btn) => {
        btn.innerText = "";
        btn.disabled = false;
    })
    document.querySelector("#msg-win").classList.add("hide");
    count = 0;
    isWin = false;
} 

let draw = () => {
    document.querySelector("#msg-winner").innerText = `Game Draw`;
    document.querySelector("#msg-win").classList.remove("hide");
    buttons.forEach((btn) => {
        btn.disabled = true;
    })
    isWin = false;
}

let isWinFn = () => {
    array.forEach((ele) => {
        if(buttons[ele[0]].innerText !== "" && buttons[ele[1]].innerText !== "" && buttons[ele[2]].innerText !== ""){
            if(buttons[ele[0]].innerText === buttons[ele[1]].innerText && 
                buttons[ele[0]].innerText === buttons[ele[2]].innerText){
                document.querySelector("#msg-winner").innerText = `Congratulations!! Winner is Me`;
                document.querySelector("#msg-win").classList.remove("hide");
                buttons.forEach((btn) => {
                    btn.disabled = true;
                })
                console.log("Yessss");
                isWin = true;
            }
        }
    })
}


buttons.forEach((btn) => {
    btn.onclick = () => {
        if(turnO === true){
            btn.innerText = "O";
            turnO = false;
            btn.disabled = true;
        }
        else{
            btn.innerText = "X";
            turnO = true;
            btn.disabled = true;
        }
        isWinFn();
        count++;
        if(count === 9 && isWin == false){
            draw();
        }
    }
})

upDownButton.forEach((btn) => {
    btn.onclick = () => {
        reset();
    }
})