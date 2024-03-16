function getWeather() {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperature').textContent = `Температура: ${data.main.temp}°C`;
            document.getElementById('pressure').textContent = `Тиск: ${data.main.pressure} hPa`;
            document.getElementById('description').textContent = `Опис: ${data.weather[0].description}`;
            document.getElementById('humidity').textContent = `Вологість: ${data.main.humidity}%`;
            document.getElementById('wind-speed').textContent = `Швидкість вітру: ${data.wind.speed} м/с`;
            document.getElementById('wind-direction').textContent = `Напрям вітру: ${data.wind.deg}°`;
            document.getElementById('weather-icon').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        })
        .catch(error => console.error('Помилка отримання даних погоди:', error));
}

window.onload = getWeather;