import React from 'react'
import { useState } from 'react'
import axios from 'axios'
 
const ZipCodeSearch = () => {
    const [zipCode,setzipCode] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        setzipCode('')

        const weatherData = axios.post('/', {zipCode})
        console.log(weatherData.data)
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Please enter a zipcode' value={zipCode} onChange={e =>setzipCode(e.target.value)} />
      <button>Search</button>
      </form>
    </div>
  )
}

export default ZipCodeSearch
