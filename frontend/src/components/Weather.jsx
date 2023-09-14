import React, { useState } from 'react'
import axios from 'axios'

const Weather = () => {
    const [zipCode, setZipCode] = useState('');
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)
    //^ This will see if there's an error when entering an zip code, and if there is one it will show an error message.
    const apiKey = '7de7e6611emshc6288c8e83c04cap1b282cjsn6c7fccaeea66'
    const baseUrl = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${zipCode}`;
    

    const getWeatherByZipCode = async () => {
        try {
            const response = await axios.request(baseUrl, {
                headers: {
                    'X-RapidAPI-Key': apiKey,
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
                },
            });

            if (response.status === 200) {
                const data = response.data;
                console.log(data)
                setWeatherData(data);
                //^ Gathers the data from the API depending on what zipcode is used.
            }
        } catch (err) {
            setError('An error occurred');
        }
    };
    return (
        <div className='weather-display'>
            <h1>Zip Code Weather Search</h1>
            <section className='form-group'>
            <input
                type="text"
                placeholder="Enter ZIP code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
            />
            <button onClick={getWeatherByZipCode} className='btn btn-block'>Search</button>
            </section>

            {weatherData && (
                <div>
                <h2>{weatherData.current.condition.text}</h2>
                {/* Image Icon goes here! */}
                    <h2>{weatherData.location.name}</h2>
                    <p>{weatherData.current.temp_f}°F</p>
                    {/* Add more weather data display here if there's more time to do so. */}
                </div>
            )}

            {error && <p>{error}</p>}
        </div>
    );
};

export default Weather;