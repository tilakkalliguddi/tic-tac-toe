let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let greet = document.querySelector(".hide")


let turnO = true;

let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]


const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")
}


const dsbBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            box.classList.remove("boxclr")

        } else {
            box.innerText = "X";
            turnO = true;
            box.classList.add("boxclr")
        }
        box.disabled = true;

        checkWin();
    })
})

const showWinner = (winner) => {
    msg.innerText = `Congrajulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    dsbBoxes();
}

const checkWin = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)
