import weatherService from "../services/weather";
import React, { useState, useEffect } from "react";

const Weather = ({ capital, capitalInfo }) => {
    const [weatherData, setWeatherData] = useState([])

    useEffect(() => {
        weatherService
            .getWeatherInfo(capitalInfo.latlng[0], capitalInfo.latlng[1])
            .then(response => setWeatherData(response))
            .catch(error => console.log('something went wrong'))
    }, [capitalInfo])

    if (weatherData.length !== 0) {
        return (
            <div>
                <h1>Weather in {capital}</h1>
                <ul>
                    <li>temperature {Math.round(weatherData.main.temp - 273.15)} celsius</li>
                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="weather icon" />
                    <li>Wind {weatherData.wind.speed} m/s</li>
                </ul>

            </div>
        )
    }
}

export default Weather