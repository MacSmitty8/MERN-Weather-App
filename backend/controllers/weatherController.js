//Pass ZIP code so that when entered the api will return it
//Get the data points needed for the display on the page.
// temperture, weather_descriptions, weather_icons, localtime
const httpsRequest = require('http')

const asyncHandler = require('express-async-handler')
//This will get a weather from a user.
// Route GET /api/weather
// Access ???
const view =  asyncHandler(async (req, res) => {
     httpsRequest.get(`http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=97001`, (httpResponse) =>{
           let data = [] 
           httpResponse.on('data', (d) =>{
            process.stdout.write(d);   
            data.push(d)
           })
           httpResponse.on('end', () => {
            console.log(data)
            const parseData = JSON.parse(Buffer.concat(data).toString())
            res.json(parseData)
            
            //Makessure the object is readable by the browser.
           })
        })
})

//This will set a weather for the user.
// Route GET /api/weather
// Access ???
const setWeather = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400).json({message: 'Please enter location/zipcode'})
    }
    res.status(200).json({message: 'Weather info set.'})
})

//This will update the weather info.
// Route PUT /api/weather/:id
// Access ???
const updateWeather = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Updated Weather info ${req.params.id}`})
})

//This will delete the weather info
// Route DELETE /api/weather
// Access ???
const deleteWeather = async (req, res) => {
    res.status(200).json({message: 'Weather info receieved.'})
}
module.exports ={
    view,
    setWeather,
    updateWeather,
    deleteWeather,
}