const bigEye = document.querySelector('.big-eye');
let eyeCounter = 0;

setInterval(() => {
    bigEye.style.backgroundPositionX = `${-330 * eyeCounter}px`;
    eyeCounter = (eyeCounter === 5 ? 0 : (eyeCounter + 1));
}, 200);

const danceMan = document.querySelector('.dance-man');
let danceCounter = 0;

setInterval(() => {
    danceMan.style.backgroundPositionX = `${-250 * danceCounter}px`;
    danceCounter = (danceCounter === 3 ? 0 : (danceCounter + 1));
}, 300);