//The following three lines are to prevent DRY
const balloon = document.querySelector("p")
//delta value for increase and decrease size based on font size value
const d = Number(/.*[^px]/.exec(getComputedStyle(ballon).fontSize)) * 10 / 100;
//define a redline to brust balloon
let redLine = 0;

function getFontSize(elt) {
  return Number(/.*[^px]/.exec(getComputedStyle(ballon).fontSize))
}

function checkRedLine() {
  if (redLine < 10)
    return false
  else
    return true
}

function changeSize(event) {
  event.preventDefault()
  if (checkRedLine()) {
    balloon.textContent = "💥"
    window.removeEventListener("keydown", changeSize)
  } else {
    if (event.key === "ArrowUp") {
      redLine++;
      balloon.style.fontSize = getFontSize(balloon) + d + "px"
    } else if (event.key === "ArrowDown") {
      redLine--;
      balloon.style.fontSize = getFontSize(balloon) - d + "px"
    }
  }
}
window.addEventListener("keydown", changeSize)
