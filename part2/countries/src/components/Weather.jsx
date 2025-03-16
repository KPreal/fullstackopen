import { useState, useEffect } from 'react';
import getWeather from "../services/getWeather";

const Weather = ({ latlng }) => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const weatherData = await getWeather(latlng[0], latlng[1]);
                setWeather(weatherData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchWeather();
    }, [latlng]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching weather data: {error.message}</div>;
    }

    return (
        <div>
            <h2>Weather</h2>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                 alt='weather-icon' />
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Wind: {weather.wind.speed} m/s</p>
        </div>
    );
};

export default Weather;