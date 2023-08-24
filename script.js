const timerDisplay = document.querySelector('.timer')
const btn = document.querySelectorAll('[data-time]')
const audio = new Audio('kessidi-dzyn.mp3');

function formatTimeLeft(time) {
    let minutes = Math.floor(time / 60)
    let seconds = time % 60

    if (seconds < 10){
        seconds = `0${seconds}`
    }

    const display = `${minutes}:${seconds}`
    timerDisplay.textContent = display
    document.title = display
}

let countdown
function timer(time) {
    clearInterval(countdown)
    const curTime = Date.now()
    const endTime = curTime + time*1000

    countdown = setInterval(() => {
        const secondsLeft = Math.round((endTime - Date.now()) / 1000)

        if(secondsLeft < 0) {
            clearInterval(countdown)
            timer(300)
            return
        }

        formatTimeLeft(secondsLeft)
    }, 1000)
}

function startTimer(){
    const second = parseInt(this.dataset.time)
    timer(second)
} 

btn.forEach(button => button.addEventListener('click', startTimer))