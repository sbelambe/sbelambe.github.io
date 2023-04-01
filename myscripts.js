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