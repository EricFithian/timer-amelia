const startButton = document.querySelector('.start');
let pauseButton = document.querySelector('.stop');
const tenHours = document.getElementById('tenHours');
const oneHour = document.getElementById('oneHour');
const tenMinutes = document.getElementById('tenMinutes');
const oneMinute = document.getElementById('oneMinute');
const tenSeconds = document.getElementById('tenSeconds');
const oneSecond = document.getElementById('oneSecond');
let paused = false;

function countdown() {
    if(!paused) {
        console.log("Running")
        if(!parseInt(tenHours.value) && !parseInt(oneHour.value) && !parseInt(tenMinutes.value) && !parseInt(oneMinute.value) && !parseInt(tenSeconds.value) && !parseInt(oneSecond.value)) return;
        if(parseInt(oneSecond.value)) {
            oneSecond.value = parseInt(oneSecond.value) - 1;
            setTimeout(countdown, 1000);
        } else if(parseInt(tenSeconds.value)) {
            tenSeconds.value -= 1;
            oneSecond.value = 9;
            setTimeout(countdown, 1000);
        } else if(parseInt(oneMinute.value)) {
            oneMinute.value -= 1;
            tenSeconds.value = 5;
            oneSecond.value = 9;
            setTimeout(countdown, 1000);
        } else if(parseInt(tenMinutes.value)) {
            tenMinutes.value -= 1;
            oneMinute.value = 9;
            tenSeconds.value = 5;
            oneSecond.value = 9;
            setTimeout(countdown, 1000);
        }
    } else {
        setTimeout(countdown, 1000);
    }
}

startButton.addEventListener('click', countdown);
pauseButton.addEventListener('click', () => {
    console.log(pauseButton.innerHTML);
    paused = !paused;
    pauseButton.innerHTML === "Pause Timer!" ? pauseButton.innerHTML = "Restart Timer!" : pauseButton.innerHTML = "Pause Timer!"
})