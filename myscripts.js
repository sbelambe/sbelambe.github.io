function displayTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeElement = document.getElementById("time");
  timeElement.innerHTML = hours + ":" + minutes;
}

const timeElem = document.getElementById("time");
const now = new Date();
timeElem.textContent = now.toLocaleString();


function processCommand() {
// Get the user's input
var userInput = document.getElementById("command-input").value;

// Determine which div to show based on the user's input
var divToShow = "";
if (userInput === "about") {
  divToShow = "about";
} else if (userInput === "portfolio") {
  divToShow = "portfolio";
} else if (userInput === "contact") {
  divToShow = "contact";
} else {
  // Default to the homepage if the user's input is not recognized
  divToShow = "about";
}

// Scroll to the selected div
document.getElementById(divToShow).scrollIntoView({ behavior: "smooth" });

// Save the user's input to localStorage
localStorage.setItem("userInput", userInput);
}



