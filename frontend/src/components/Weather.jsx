import React, { useState } from 'react'
import axios from 'axios'

const Weather() =>{
    const [zipCode, setZipCode] = useState('');
    const [weatherData, setWeatherData] = useState(null)

    const apiKey = process.env.API_KEY
    const baseUrl = 'http://api.weatherstack.com/current'

  return (
    <div>Weather</div>
  )
}

export default Weather