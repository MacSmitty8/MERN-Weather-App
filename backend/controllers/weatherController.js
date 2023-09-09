const asyncHandler = require('express-async-handler')
//This will get a weather from a user.
// Route GET /api/weather
// Access ???
const getWeather =  asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Weather info receieved.'})
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
    getWeather,
    setWeather,
    updateWeather,
    deleteWeather,
}