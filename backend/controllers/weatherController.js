//Pass ZIP code so that when entered the api will return it
//Get the data points needed for the display on the page.
// temperture, weather_descriptions, weather_icons, localtime
const apiKey = process.env.API_KEY
const httpsRequest = require('http')

const asyncHandler = require('express-async-handler')
//This will get a weather from a user.
// Route GET /weather
// Access ???
const view =  asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Weather received'})
    //  httpsRequest.get(`http://weatherapi-com.p.rapidapi.com/forecast.json?q=11413`, (httpResponse) =>{
    //        let data = [] 
    //        httpResponse.on('data', (d) =>{
    //         process.stdout.write(d);   
    //         data.push(d)
    //        })
    //        httpResponse.on('end', () => {
    //         console.log(data)
    //         const parseData = JSON.parse(Buffer.concat(data).toString())
    //         res.json(parseData)
            
    //         //Makessure the object is readable by the browser.
    //        })
    //     })
})

//This will set a weather for the user.
// Route PUT /weather
// Access ???
const setWeather = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400).json({message: 'Please enter zipcode'})
    }
    res.status(200).json({message: 'Weather info set.'})
})

//This will update the weather info.
// Route PUT /weather/:id
// Access ???
const updateWeather = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Updated Weather info ${req.params.id}`})
})


module.exports ={
    view,
    setWeather,
    updateWeather,
}