const controls = document.querySelectorAll('.controls');
const shownImage = document.querySelector('.shownImage');
let currentSlide = 0;

const loadSlide = () => {
    shownImage.src = `./img/${currentSlide + 1}.png`;
};

const goToSlide = (n) => {
    currentSlide = (n + 5) % 5;
    loadSlide();
    document.getElementById('previous').style.display = (currentSlide === 0) ? 'none' : 'inline-block';
    document.getElementById('next').style.display = (currentSlide === 4) ? 'none' : 'inline-block';
};

controls.forEach(control => control
    .addEventListener('click', () =>
        goToSlide(currentSlide + (control.id === 'next' ? 1 : -1))));

document.getElementById('previous').style.display = 'none';

loadSlide();