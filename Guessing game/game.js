let totalAttampts = 5;
let attempts = 0;
let totalWin = 0;
let totalLoss = 0;

//select element
let cardBody = document.querySelector(".card-body");
let form = document.querySelector("form");
let guessNumber = form.querySelector("#guessingNumber");
let checkBtn = form.querySelector("#check-btn");
let resultText = cardBody.querySelector(".result-text");
let remainingAttempts = cardBody.querySelector(".remaining-Attempts");
let lostWinMsg = document.createElement("p");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  attempts++;
  if (attempts > 5) {
    guessNumber.disabled = true;
    checkBtn.disabled = true;
  } else {
    checkResult(guessNumber.value);
    remainingAttempts.innerHTML = `Remaining attempts: 
        ${totalAttampts - attempts}`;
  }
  guessNumber.value = "";
});

checkResult = (guessNumber) => {
  console.log(guessNumber);
  let randomNumber = randomNumFun(5);

  if (guessNumber == randomNumber) {
    resultText.innerHTML = `You have Win; random number was: 
    ${randomNumber}`;
    totalWin++;
  } else {
    resultText.innerHTML = `You have lost; random number was: 
    ${randomNumber}`;
    totalLoss++;
  }
  lostWinMsg.innerHTML = `Won: ${totalWin}, Lost: ${totalLoss}`;
  lostWinMsg.classList.add("big-text");
  cardBody.appendChild(lostWinMsg);
};

let randomNumFun = (getRandomNumber = (limit) => {
  return Math.floor(Math.random() * limit) + 1;
});
