let music = new Audio("ring.wav");
let gameover = new Audio("gameover.mp3");
let turn = "X";
var imageStyling = document
  .querySelector(".img-box")
  .getElementsByTagName("img")[0];
let isgameover = false;

//Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// Function to check the win
const checkWin = () => {
  let boxtexts = document.getElementsByClassName("boxTest");
  let wins = [
    [0, 1, 2, 0, 5, 0],
    [3, 4, 5, 0, 15, 0],
    [6, 7, 8, 0, 25, 0],
    [0, 3, 6, -10, 15, 90],
    [1, 4, 7, 0, 15, 90],
    [2, 5, 8, 10, 15, 90],
    [0, 4, 8, 0, 15, 45],
    [2, 4, 6, 0, 15, 135],
  ];
  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[2]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerHTML =
        boxtexts[e[0]].innerText + " Won";
      isgameover = true;
      imageStyling.style.width = "200px";
      document.getElementById(
        "line"
      ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.getElementById("line").style.width = "30vw";
      gameover.play();
    }
  });
};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxTest");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      music.play();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerHTML =
          "Turn for " + turn;
      }
    }
  });
});

// Add event listners to click restart the game.
let restartGame = document.getElementById("restartGame");
restartGame.addEventListener("click", () => {
  let boxtextss = document.getElementsByClassName("boxTest");
  Array.from(boxtextss).forEach((element) => {
    element.innerText = "";
  });
  imageStyling.style.width = "0px";
  turn = "X";
  document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
  isgameover = false;
  document.getElementById("line").style.width = "0px";
});
