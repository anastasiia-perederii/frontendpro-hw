const controls = document.querySelectorAll('.controls');
const shownImage = document.querySelector('.shownImage');
let currentSlide = 1;

const loadSlide = () => {
    shownImage.src = `./img/${currentSlide}.png`;
};

const goToSlide = (n) => {
    currentSlide = (n + 9) % 9 + 1;
    loadSlide();
    document.getElementById('previous').style.display = (currentSlide === 1) ? 'none' : 'inline-block';
    document.getElementById('next').style.display = (currentSlide === 9) ? 'none' : 'inline-block';
};

controls.forEach(control => control
    .addEventListener('click', () =>
        goToSlide(currentSlide + (control.id === 'next' ? 1 : -1))));

document.getElementById('previous').style.display = 'none';

loadSlide();