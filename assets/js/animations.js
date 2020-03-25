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

const fire = document.querySelector('.fire');
let fireCounter = 0;

setInterval(() => {
    fire.style.backgroundPositionX = `${-800 * fireCounter}px`;
    fireCounter = (fireCounter === 2 ? 0 : (fireCounter + 1));
}, 120);

const monument = document.querySelector('.monument');
let monumentCounter = 1;
// направление изменения кадров
let diffMonumentCounter = 1;

monument.addEventListener('click', (event) => {
    // останавливаем всплытие события клика, чтобы у нас не отрабатывал зум по двойному клику
    event.preventDefault();
    event.stopPropagation();

    monument.style.backgroundPositionX = `${-240 * monumentCounter}px`;
    if (monumentCounter === 4 && diffMonumentCounter > 0 || monumentCounter === 0 && diffMonumentCounter < 0) {
        // если доходим на крайних кадров, то меняем направление изменения кадров
        diffMonumentCounter = -diffMonumentCounter;
    }
    monumentCounter = monumentCounter + diffMonumentCounter;
});

const flyMonster = document.querySelector('.fly-monster');
let flyMonsterCounter = 0;

setInterval(() => {
    flyMonster.style.backgroundPositionX = `${-256 * flyMonsterCounter}px`;
    flyMonsterCounter = (flyMonsterCounter === 1 ? 0 : (flyMonsterCounter + 1));
}, 500);

const Monster = document.querySelector('.monstr');
let MonsterCounter = 0;

setInterval(() => {
    Monster.style.backgroundPositionX = `${-238 * MonsterCounter}px`;
    MonsterCounter = (MonsterCounter === 1 ? 0 : (MonsterCounter + 1));
}, 500);

// модальные окна
const modalArea = document.querySelectorAll('.modal-area');

const onModalActive = function (item) {
    const modal = item.querySelector('.modal');

    if (modal) {
        item.addEventListener('mouseenter', () => {
            modal.classList.add('showed');
        });
        item.addEventListener('mouseleave', () => {
            modal.classList.remove('showed');
        });
        item.addEventListener('click', () => {
            const showedModal = document.querySelector('.modal.showed');

            if (showedModal && modal !== showedModal) {
                // если у нас есть открытое другое окно, то закрываем его
                showedModal.classList.remove('showed');
            }

            modal.classList.toggle('showed');
        });
    }
};
modalArea.forEach(onModalActive);
