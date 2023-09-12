import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const ZipCodeSearch = () => {

  const [zipCode, setZipCode] = useState('')
  const [myWeatherData, setMyWeatherData] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/api/weather/`
    const requestData = {zipCode: zipCode};
    try{
      //Put a http verb below
      const response = await axios.post(url, requestData)
    console.log('WEATHER DATA RESPONSE ', response.data)
    setMyWeatherData(response.data);
    } catch(error) {
      console.error('Error fetching weather data.', error)
      setMyWeatherData(null);
    }
    
  }
  // useEffect(() => {
  //   const getWeather = async () => {

  //     try{
  //         const response = await axios.get(url)
  //         console.log('WEATHER DATA RESPONSE ', response.data)
  //     } catch (error){
  //         console.log(error)
  //         setZipCode('')
  //     }

  //   }


  // }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Please enter a zipcode'
          value={zipCode}
          onChange={e => setZipCode(e.target.value)} />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default ZipCodeSearch
