const currentSession = "sessionOne";
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const prefix = "myprog";
const markComplete = document.getElementById("complete");
const loomOverlay = document.getElementById("overlay");
const loomAck = document.getElementById("loom-ack");
const markIncomplete = document.getElementById("incomplete");
const videoEmbed = document.getElementById("embed");
const homeOne = document.querySelector("#main > div > div > div.u-pr-1 > div.w-dyn-list > div > div:nth-child(1) > a");
const homeTwo = document.querySelector("#main > div > div > div.u-pr-1 > div.w-dyn-list > div > div:nth-child(2) > a");
const homeThree = document.querySelector("#main > div > div > div.u-pr-1 > div.w-dyn-list > div > div:nth-child(3) > a");
const homeFour = document.querySelector("#main > div > div > div.u-pr-1 > div.w-dyn-list > div > div:nth-child(4) > a");
const menuOne = document.getElementById("menu1");
const menuTwo = document.getElementById("menu2");
const menuThree = document.getElementById("menu3");
const menuFour = document.getElementById("menu4");

function updateProgress() {
  if (localStorage.getItem(`${currentSession}`) === null) {
    markIncomplete.style.display = "none";
    markComplete.style.display = "block";
  } else if (localStorage.getItem(`${currentSession}`) !== null) {
    markIncomplete.style.display = "block";
    markComplete.style.display = "none";
  }
  progress = [];
  if (localStorage.getItem("sessionOne") == null) {
    progress.push(0);
    homeOne.classList.remove("complete");
    menuOne.classList.remove("complete");
  } else if (localStorage.getItem("sessionOne") != null) {
    progress.push(25);
    homeOne.classList.add("complete");
    menuOne.classList.add("complete");
  }

  if (localStorage.getItem("sessionTwo") === null) {
    progress.push(0);
    homeTwo.classList.remove("complete");
    menuTwo.classList.remove("complete");
  } else if (localStorage.getItem("sessionTwo") !== null) {
    progress.push(25);
    homeTwo.classList.add("complete");
    menuTwo.classList.add("complete");
  }

  if (localStorage.getItem("sessionThree") === null) {
    progress.push(0);
    homeThree.classList.remove("complete");
    menuThree.classList.remove("complete");
  } else if (localStorage.getItem("sessionThree") !== null) {
    progress.push(25);
    homeThree.classList.add("complete");
    menuThree.classList.add("complete");
  }

  if (localStorage.getItem("sessionFour") === null) {
    progress.push(0);
    homeFour.classList.remove("complete");
    menuFour.classList.remove("complete");
  } else if (localStorage.getItem("sessionFour") !== null) {
    progress.push(25);
    homeFour.classList.add("complete");
    menuFour.classList.add("complete");
  }

  let total = progress.reduce(function (a, b) {
    return a + b;
  }, 0);

  const classes = progressBar.className
    .split(" ")
    .filter((c) => !c.startsWith(prefix));
  progressBar.className = classes.join(" ").trim();

  if (total === 25) {
    progressBar.classList.add("myprog-25");
  } else if (total === 50) {
    progressBar.classList.add("myprog-50");
  } else if (total === 75) {
    progressBar.classList.add("myprog-75");
  } else if (total === 100) {
    progressBar.classList.add("myprog-100");
  }

  progressText.innerText = `${total}%`;

  if (total > 50) {
    progressText.style.color = "white";
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  updateProgress();
  const current = window.location.pathname;
  const mark = document.getElementById("right");

  if (current == "/") {
    mark.style.display = "none";
  }
});
