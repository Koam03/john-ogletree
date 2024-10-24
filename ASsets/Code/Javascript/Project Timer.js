// Timer functionality
let timer = document.getElementById('timer');
let seconds = 0;

setInterval(() => {
    seconds++;
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    timer.innerText = `${hours}:${minutes}:${secs}`;
}, 1000);
