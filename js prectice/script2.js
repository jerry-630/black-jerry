let boxes = document.querySelectorAll(".box");
let resetBTN = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let mgsContainer = document.querySelector(".mgs-container");
let mgs = document.querySelector("#mgs");

let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    mgsContainer.classList.add("hide");
}


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box was clicked");
    if (turn0) {
      box.innerText = "o";
      turn0 = false;
    } else {
      box.innerText = "x";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };

const showWinner = (winner) => {
  mgs.innerText = `Congratulation, Winner is ${winner}`;
  mgsContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        // console.log("winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};


newGameBtn.addEventListener("click", resetGame);
resetBTN.addEventListener("click", resetGame);