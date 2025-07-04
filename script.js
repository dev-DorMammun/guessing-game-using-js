"use strict";

let ogNumber = Math.trunc(Math.random() * 20) + 1;
console.log(ogNumber);
let curScore = 20;

let execution = function () {
  let guessed = Number(document.querySelector(".input").value);

  if (document.querySelector(".input").value === "") {
    document.querySelector(".hint").textContent = "Please input a number";
    return;
  } else if (guessed < 0 || guessed > 20) {
    document.querySelector(".hint").textContent = "Please pick between 1 to 20";
  }

  if (guessed >= 0 && guessed <= 20) {
    if (guessed === ogNumber) {
      document.querySelector(".hint").textContent = `You've guessed it right!`;
      document.querySelector(".score").textContent = ogNumber;

      document.querySelector("body").style.backgroundColor = "rgb(0, 170, 0)";
      document.querySelector(".score").style.color = "rgb(0, 170, 0)";

      if (curScore > Number(document.querySelector(".highest").textContent)) {
        document.querySelector(".highest").textContent = curScore - 1;
      }
    } else if (guessed > ogNumber) {
      document.querySelector(".hint").textContent = "Try a lower number";
    } else if (guessed < ogNumber) {
      document.querySelector(".hint").textContent = "Try a higher number";
    }
    curScore--;
    document.querySelector(".curScore").textContent = curScore;
    if (curScore <= 0) {
      document.querySelector(".curScore").textContent = 0;
      document.querySelector(".hint").textContent = `You've failed to guess`;
      document.querySelector("body").style.backgroundColor = "rgb(209, 0, 0)";
      document.querySelector(".score").style.color = "rgb(209, 0, 0)";
    }
  }
  document.querySelector(".input").value = "";
};

document.querySelector(".check-btn").addEventListener("click", execution);

function restore() {
  document.querySelector(".curScore").textContent = 20;
  curScore = 20;
  document.querySelector(".hint").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "rgb(41, 41, 41)";
  document.querySelector(".score").style.color = "rgb(41, 41, 41)";
  document.querySelector(".score").textContent = "?";
  ogNumber = Math.trunc(Math.random() * 20) + 1;
}

document.querySelector(".again-btn").addEventListener("click", restore);
