const startButton = document.querySelector('.start');
let pauseButton = document.querySelector('.stop');
const tenMinutes = document.getElementById('tenMinutes');
const oneMinute = document.getElementById('oneMinute');
const tenSeconds = document.getElementById('tenSeconds');
const oneSecond = document.getElementById('oneSecond');
const inputs = document.querySelectorAll('input');
const clear = document.querySelector('.clear')
let paused = false;
let interval;

function countdown() {
    if(!paused) {
        if(!parseInt(tenMinutes.value) && !parseInt(oneMinute.value) && !parseInt(tenSeconds.value) && !parseInt(oneSecond.value)) return;
        if(parseInt(oneSecond.value)) {
            oneSecond.value = parseInt(oneSecond.value) - 1;
        } else if(parseInt(tenSeconds.value)) {
            tenSeconds.value -= 1;
            oneSecond.value = 9;
        } else if(parseInt(oneMinute.value)) {
            oneMinute.value -= 1;
            tenSeconds.value = 5;
            oneSecond.value = 9;
        } else if(parseInt(tenMinutes.value)) {
            tenMinutes.value -= 1;
            oneMinute.value = 9;
            tenSeconds.value = 5;
            oneSecond.value = 9;
        }
    }
}

function populateInputs() {
    for(let i = 0; i < inputs.length; i++) {
        if(!inputs[i].value) inputs[i].value = 0;
    }
}

function resetInputs() {
    clearInterval(interval);
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}

startButton.addEventListener('click', () => {
    paused = false;
    pauseButton.innerHTML = "Pause Timer!"
    populateInputs();
    interval = setInterval(countdown, 1000);
});

clear.addEventListener('click', resetInputs);

pauseButton.addEventListener('click', () => {
    console.log(pauseButton.innerHTML);
    paused = !paused;
    pauseButton.innerHTML === "Pause Timer!" ? pauseButton.innerHTML = "Restart Timer!" : pauseButton.innerHTML = "Pause Timer!"
})