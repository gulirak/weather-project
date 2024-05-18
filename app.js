document.getElementById("getWeather").addEventListener("click", function () {
  const city = document.getElementById("city").value;
  const apiKey = "0c4b2f19977365f96f204d794ec44a84";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherDiv = document.getElementById("weather");
      if (data.cod === 200) {
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        weatherDiv.innerHTML = `
                  <h2>${data.name}</h2>
                  <p>${temp} °C</p>
                  <p>${description}</p>
                  <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">
              `;
      } else {
        weatherDiv.innerHTML = `<p>City not found</p>`;
      }
    })
    .catch((error) => {
      console.error("Error fetching the weather data:", error);
    });
});
