document.addEventListener('DOMContentLoaded', function() {
    const randomImageElement = document.getElementById('randomImage');
    const buttonElement = document.querySelector('button');
    let imageArray = [];

    function getImages(numberOfPictures) {
        for (let i = 1; i <= numberOfPictures; i++) {
            let image = new Image();
            image.src = "img/" + i + ".png";
            imageArray.push(image);
        }
    }

    getImages(9);

    function changeImage() {
        const randomIndex = Math.floor(Math.random() * imageArray.length);
        randomImageElement.src = imageArray[randomIndex].src;
    }

    buttonElement.addEventListener('click', changeImage);

    changeImage();
});