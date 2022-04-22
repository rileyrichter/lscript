const currentSession = "sessionOne";
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const prefix = "myprog";
const markComplete = document.getElementById("complete");
const loomOverlay = document.getElementById("overlay");
const loomAck = document.getElementById("loom-ack");
const markIncomplete = document.getElementById("incomplete");
const videoEmbed = document.getElementById("embed");
const homeOne = document.getElementById("home1");
const homeTwo = document.getElementById("home2");
const homeThree = document.getElementById("home3");
const homeFour = document.getElementById("home4");

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
  } else if (localStorage.getItem("sessionOne") != null) {
    progress.push(25);
    homeOne.classList.add("complete");
  }

  if (localStorage.getItem("sessionTwo") === null) {
    progress.push(0);
    homeTwo.classList.remove("complete");
  } else if (localStorage.getItem("sessionTwo") !== null) {
    progress.push(25);
    homeTwo.classList.add("complete");
  }

  if (localStorage.getItem("sessionThree") === null) {
    progress.push(0);
    homeThree.classList.remove("complete");
  } else if (localStorage.getItem("sessionThree") !== null) {
    progress.push(25);
    homeThree.classList.add("complete");
  }

  if (localStorage.getItem("sessionFour") === null) {
    progress.push(0);
    homeFour.classList.remove("complete");
  } else if (localStorage.getItem("sessionFour") !== null) {
    progress.push(25);
    homeFour.classList.add("complete");
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
