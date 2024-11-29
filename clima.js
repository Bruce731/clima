document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('cityInput').value;

    // Simulando dados climáticos
    const simulatedWeatherData = {
        name: city,
        main: {
            temp: 25 // Temperatura simulada
        },
        weather: [
            {
                description: 'céu limpo' // Descrição simulada
            }
        ]
    };

    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = `
        <h2>Clima em ${simulatedWeatherData.name}</h2>
        <p>Temperatura: ${simulatedWeatherData.main.temp}°C</p>
        <p>Descrição: ${simulatedWeatherData.weather[0].description}</p>
    `;
});

