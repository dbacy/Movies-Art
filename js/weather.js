/**
 *      Initialization
 *          add listener to the button
 */
document.getElementById('getWeather').addEventListener('click', getWeather);

/*
 *          Get the current weather forecast either of the city or the Lat Long location
 */
function getWeather() {
    let weatherList = document.getElementById('weatherList');        //  all weather reports go here
    let city        = document.getElementById('city');               //  City input field
    let allDays     = document.getElementById('allDays').checked;    //  show all days of the forecast

    if (city.value.length === 0) {
        weatherList.innerHTML = 'Please Enter the City name';
        return;
    }

    let url =`https://api.openweathermap.org/data/2.5/forecast?appid=097bfc28629c9a82fec6c2dde09e35e5&units=imperial&q=${city.value}`;

    console.log(url);
        //  this is all there is to it
    //      make the request
    fetch(url)
        .then(response => response.json())  //  wait for the response and convert it to JSON
        .then(weather => {                  //  with the resulting JSON data do something
                 //  If the city was entered extract weather based on the API
            //  extract the interesting data from the JSON object and show it to the user
            //  We will build the HTML to be inserted later.
            //  The variable innerHTML will hold our work in progress
            let innerHTML = "";

            for (let day of weather.list) {
              //  let's build a nice card for each day of the weather data
                //  this is a GREAT opportunity to Reactify this code. But for now I will keep it simple
                innerHTML +=
                    `<div class="grid-item">
                    <h2>Date: ${niceTime(day.dt, weather.city.timezone)}</h2>
                    <p>Forecast: <img src='http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png'> ${day.weather[0].description}</p>
                    <p>Current Temp: ${day.main.temp}</p>
                    <p>Today Minimum Temp: ${day.main.temp_min}</p>
                    <p>Today Maximum Temp: ${day.main.temp_max}</p>
                    <p>Wind Speed: ${day.wind.speed}</p>
                    <p>Wind Direction: ${day.wind.deg}</p>
                    <p>Population: ${weather.city.population}</p>
                    
                    </div>`;
            }
            //  and finally take the finished URL and stuff it into the web page
            weatherList.innerHTML = innerHTML;
            city.value = weather.city.name;
        });

        //  Strip out just the HH:MM:SS AM/PM from the date
function niceTime(dateTime, offset) {
    let day = new Date(dateTime * 1000 + offset).toLocaleString();
    let hour = day.indexOf(' ') + 1;
    let time = day.substring(hour);
    time = time.substring(0, time.lastIndexOf(':')) + time.substring(time.length-3)
    return time;
}

function windDirection(degrees) {
    let direction = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];

    degrees = Math.round(degrees + 11.25) % 360;
    let index = Math.floor(degrees / 22.5);
    return direction[index];
}
// ${windDirection(day.wind.deg)}
}




