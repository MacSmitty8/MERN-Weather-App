//This will get a weather from a user.
// Route GET /api/weather
// Access ???
const getWeather = (req, res) => {
    res.status(200).json({message: 'Weather info receieved.'})
}

//This will set a weather for the user.
// Route GET /api/weather
// Access ???
const setWeather = (req, res) => {
    res.status(200).json({message: 'Weather info set.'})
}

//This will update the weather info.
// Route PUT /api/weather/:id
// Access ???
const updateWeather = (req, res) => {
    res.status(200).json({message: `Updated Weather info ${req.params.id}`})
}

//This will delete the weather info
// Route DELETE /api/weather
// Access ???
const deleteWeather = (req, res) => {
    res.status(200).json({message: 'Weather info receieved.'})
}
module.exports ={
    getWeather,
    setWeather,
    updateWeather,
    deleteWeather,
}