const controls = document.querySelectorAll('.controls');
const shownImage = document.querySelector('.shownImage');
let currentSlide = 0;
let images = ['1.png', '2.png', '3.png', '4.png', '5.png'];

const loadSlide = () => {
    shownImage.src =  `./img/${images[currentSlide]}`;
};

const goToSlide = () => {
    loadSlide();
    document.getElementById('previous').style.display = (currentSlide === 0) ? 'none' : 'inline-block';
    document.getElementById('next').style.display = (currentSlide === images.length - 1) ? 'none' : 'inline-block';
};
controls.forEach(control => control
    .addEventListener('click', () =>
        goToSlide(control.id === 'next' ? currentSlide++ : currentSlide--)));

document.getElementById('previous').style.display = 'none';

loadSlide();