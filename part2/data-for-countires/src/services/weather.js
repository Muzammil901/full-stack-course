import axios from "axios";

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';

const getWeatherInfo = (lat, lon) => {
    const request = axios.get(`${baseUrl}lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
    return request.then(weather => weather.data)
}

const weatherService = { getWeatherInfo }
export default weatherService