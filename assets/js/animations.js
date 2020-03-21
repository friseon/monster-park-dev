const bigEye = document.querySelector('.big-eye');
let eyeCounter = 0;

setInterval(() => {
    bigEye.style.backgroundPositionX = `${-330 * eyeCounter}px`;
    eyeCounter = (eyeCounter === 5 ? 0 : (eyeCounter + 1));
}, 200);

const danceMan = document.querySelector('.dance-man');
let danceCounter = 0;

setInterval(() => {
    danceMan.style.backgroundPositionX = `${-325 * danceCounter}px`;
    danceCounter = (danceCounter === 3 ? 0 : (danceCounter + 1));
}, 300);

const bubbles = document.querySelector('.bubbles');
let bubblesCounter = 0;

setInterval(() => {
    bubbles.style.backgroundPositionX = `${-543 * bubblesCounter}px`;
    bubblesCounter = (bubblesCounter === 2 ? 0 : (bubblesCounter + 1));
}, 200);

const hand = document.querySelector('.hand');
let handCounter = 0;

setInterval(() => {
    hand.style.backgroundPositionX = `${-346 * handCounter}px`;
    handCounter = (handCounter === 3 ? 0 : (handCounter + 1));
}, 300);

const monument = document.querySelector('.monument');
let monumentCounter = 0;
