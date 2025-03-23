let startTime;  
let elapsedTime = 0;
let interval;
let isRunning = false;

function updateTime() {
    const currentTime = Date.now();
    const timeElapsed = currentTime - startTime + elapsedTime;
    
    const milliseconds = Math.floor((timeElapsed % 1000) / 10);
    const seconds = Math.floor((timeElapsed / 1000) % 60);
    const minutes = Math.floor((timeElapsed / (1000 * 60)) % 60);
    const hours = Math.floor((timeElapsed / (1000 * 60 * 60)));
    
    const formattedTime = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds) + "." +
        (milliseconds < 10 ? "0" + milliseconds : milliseconds);
    
    document.querySelector('.time').textContent = formattedTime;
}

document.querySelector('.start').addEventListener('click', () => {
    if (!isRunning) {
        startTime = Date.now();
        interval = setInterval(updateTime, 10);
        isRunning = true;
        
        document.querySelector('.start').disabled = true;
        document.querySelector('.stop').disabled = false;
    }
});

document.querySelector('.stop').addEventListener('click', () => {
    if (isRunning) {
        clearInterval(interval);
        elapsedTime += Date.now() - startTime;
        isRunning = false;
        
        document.querySelector('.start').disabled = false;
        document.querySelector('.stop').disabled = true;
    }
});

document.querySelector('.reset').addEventListener('click', () => {
    clearInterval(interval);
    elapsedTime = 0;
    isRunning = false;
    document.querySelector('.time').textContent = "00:00:00.00";
    
    document.querySelector('.start').disabled = false;
    document.querySelector('.stop').disabled = false;
});

document.querySelector('.stop').disabled = true;



