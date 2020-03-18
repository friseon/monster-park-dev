const bigEye = document.querySelector('.big-eye');
let eyeCounter = 0;

setInterval(() => {
    bigEye.style.backgroundPositionX = `${-330 * eyeCounter}px`;
    eyeCounter = (eyeCounter === 5 ? 0 : (eyeCounter + 1));
}, 200);