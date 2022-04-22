let currentSession = currentSession || "sessionOne";
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const prefix = "myprog";
const markComplete = document.getElementById("complete");
const loomOverlay = document.getElementById("overlay");
const loomAck = document.getElementById("loom-ack");
const markIncomplete = document.getElementById("incomplete");
const videoEmbed = document.getElementById("embed");

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
  } else if (localStorage.getItem("sessionOne") != null) {
    progress.push(25);
  }

  if (localStorage.getItem("sessionTwo") === null) {
    progress.push(0);
  } else if (localStorage.getItem("sessionTwo") !== null) {
    progress.push(25);
  }

  if (localStorage.getItem("sessionThree") === null) {
    progress.push(0);
  } else if (localStorage.getItem("sessionThree") !== null) {
    progress.push(25);
  }

  if (localStorage.getItem("sessionFour") === null) {
    progress.push(0);
  } else if (localStorage.getItem("sessionFour") !== null) {
    progress.push(25);
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
