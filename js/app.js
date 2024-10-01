document.getElementById('getWeatherBtn').addEventListener('click',getWeather);
async function getWeather() {
    const city = document.getElementById('cityInput').ariaValueMax;
    const apiKey ='your_openweather_api_key';        //Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if(data.cod === 200){
            document.getElementById('weatherInfo').classList.remove('hidden');
            document.getElementById('errorMessage').classList.add('hidden');
            document.getElementById('cityName').innerText =`Weather in ${data.name}`;
            document.getElementById(temperature).innerText =`Temperature: ${data.main.temp}°C`;
            document.getElementById('weatherDescription').innerText = `Condition: ${data.weather[0].description}`;
        }
        else {
            showErrorMessage('City not found!');
        }
    } 
    catch (error) {
        showErrorMessage('Error fetching data.');
    }
}

function showErrorMessage(message) {
    document.getElementById('errorMessage').classList.remove('hidden');
    document.getElementById('errorMessage').innerText = message;
    document.getElementById('weatherInfo').classList.add('hidden');
}
        

