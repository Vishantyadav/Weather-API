 document.getElementById('submit').addEventListener('click', getData);

        function getData(e) {
            e.preventDefault();
            const cityName = document.getElementById('cityInput').value;
            if (!cityName) {
                console.log("Please enter the name of the city.");
                return;
            }
            const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(cityName)}&appid=0c1fd47ec30f83b8f3fd84e56d73baf4`;

            fetch(apiUrl)
                .then((res) => res.json())
                .then((data) => {
                    displayData(data);
                })
                .catch((error) => {
                   console.log("Invalid city")

                });
        }

        function displayData(data) {
            const weatherDataElement = document.getElementById('weatherdata');
            
            weatherDataElement.innerHTML = '';
            const cityName = data.city.name;
            const country = data.city.country;
            const currentTemperature = data.list[0].main.temp;
            const windSpeed = data.list[0].wind.speed;

             const cityElement = document.createElement('p');
            cityElement.textContent = `City: ${cityName}, Country: ${country}`;

            const temperatureElement = document.createElement('p');
            temperatureElement.textContent = `Current Temperature: ${currentTemperature} K`;

            const windElement = document.createElement('p');
            windElement.textContent = `Wind Speed: ${windSpeed} m/s`;

            weatherDataElement.appendChild(cityElement);
            weatherDataElement.appendChild(temperatureElement);
            weatherDataElement.appendChild(windElement);

        }
 