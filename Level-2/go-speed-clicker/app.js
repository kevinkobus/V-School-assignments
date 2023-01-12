//button to click
const button = document.getElementById("button")

//clicks
let clickCount = 0
let totalClicks = document.getElementById("speedClicks")

function clicking() {
    clickCount++
    localStorage.setItem("clicks", clickCount)
    totalClicks.textContent = "Clicks " + localStorage.getItem("clicks")
    // console.log(clickCount)
}

button.addEventListener("click", clicking)

//clock timer
let timerClock = document.getElementById("timer")
let time = setInterval(clock, 1000)
let startingTime = 10

function clock() {
    startingTime--
    timerClock.textContent = "Time " + startingTime + " seconds"
}

//time expires
function timesUp() {
    button.removeEventListener("click", clicking)
    clearInterval(time)
}

setTimeout(timesUp, 10000)
