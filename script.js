const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const prefix = "myprog";
const markComplete = document.getElementById("complete");
const loomOverlay = document.getElementById("overlay");
const loomAck = document.getElementById("loom-ack");
const markIncomplete = document.getElementById("incomplete");
const videoEmbed = document.getElementById("embed");
const menuOne = document.getElementById("menu1");
const menuTwo = document.getElementById("menu2");
const menuThree = document.getElementById("menu3");
const menuFour = document.getElementById("menu4");

loomAck.onclick = (e) => {
  loomOverlay.style.display = "none";
  localStorage.setItem("loom", "true");
  videoEmbed.classList.remove("outline");
};

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
    menuOne.classList.remove("complete");
  } else if (localStorage.getItem("sessionOne") != null) {
    progress.push(25);
    menuOne.classList.add("complete");
  }

  if (localStorage.getItem("sessionTwo") === null) {
    progress.push(0);
    menuTwo.classList.remove("complete");
  } else if (localStorage.getItem("sessionTwo") !== null) {
    progress.push(25);
    menuTwo.classList.add("complete");
  }

  if (localStorage.getItem("sessionThree") === null) {
    progress.push(0);
    menuThree.classList.remove("complete");
  } else if (localStorage.getItem("sessionThree") !== null) {
    progress.push(25);
    menuThree.classList.add("complete");
  }

  if (localStorage.getItem("sessionFour") === null) {
    progress.push(0);
    menuFour.classList.remove("complete");
  } else if (localStorage.getItem("sessionFour") !== null) {
    progress.push(25);
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
  if (localStorage.getItem("loom") === null) {
    loomOverlay.style.display = "flex";
  } else {
    loomOverlay.style.display = "none";
    videoEmbed.classList.remove("outline");
  }
});

markComplete.onclick = (e) => {
  localStorage.setItem(`${currentSession}`, "complete");
  updateProgress();
};

markIncomplete.onclick = (e) => {
  localStorage.removeItem(`${currentSession}`);
  updateProgress();
};
