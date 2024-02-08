let mathRandomValue = Math.floor(Math.random() * 100);
console.log(mathRandomValue);
let inputValue;
let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    document.querySelector("#btnReset").setAttribute("disabled", true);
  inputValue = document.querySelector(".userInput").value;
  inputValue = parseInt(inputValue);
  showMsg(inputValue);
  document.querySelector(".userInput").value = "";
});

let allValues;
let count = 0;
let showMsg = (inputValue) => {
  document.querySelector(".allValues").style.display = "block";
  allValues = document.querySelector(".mainValues").innerHTML;
  if (inputValue > mathRandomValue) {
    document.querySelector(".showCorrespodingData").innerHTML = "Too high!👻";
    document.querySelector(".mainValues").innerHTML =
      allValues + inputValue + ", ";
    count++;
  } else if (inputValue < mathRandomValue) {
    document.querySelector(".showCorrespodingData").innerHTML = "Too low!😥";
    document.querySelector(".mainValues").innerHTML =
      allValues + inputValue + ", ";
    count++;
  } else {
    document.querySelector(".showCorrespodingData").innerHTML =
      "You got it! Congrats🎉";
    count++;
    document.querySelector(".mainValues").innerHTML = allValues + inputValue;
    btn.setAttribute("disabled", true);
    btn.style.cursor = "not-allowed";
    document.querySelector(".userInput").setAttribute("disabled", true);
    document.querySelector(".userInput").style.cursor = "not-allowed";
  }
  if (count == 10) {
    document.querySelector(".showCorrespodingData").innerHTML = "You failed";
    btn.setAttribute("disabled", true);
    btn.style.cursor = "not-allowed";
    document.querySelector(".userInput").setAttribute("disabled", true);
    document.querySelector(".userInput").style.cursor = "not-allowed";
    document.querySelector("#btnReset").removeAttribute("disabled");
  }
};


document.querySelector("#btnReset").addEventListener("click", () => {
    btn.removeAttribute("disabled");
    btn.style.cursor = "cursor";
    document.querySelector(".userInput").removeAttribute("disabled");
    document.querySelector(".userInput").style.cursor = "cursor";
    document.querySelector(".showCorrespodingData").innerHTML = '';
    allValues = '';
    document.querySelector("#btnReset").setAttribute("disabled", true);
})