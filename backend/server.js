const express = require('express')
const dotenv = require('dotenv').config()
const errorHandler = require('./middleware/errorMiddleware')
const weatherRoute = require('./routes/weatherRoutes')
const axios = require('axios')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const connectDB = require('./config/db')
const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

const app = express()
app.use(cors(corsOptions)) // Use this after the variable declaration 
//^ This was added into the program after one night of struggling with the backend. 
//I got an error mentioning the CORS policy while trying to have the routes work, and after looking somethings up, I installed cors and had it be required.
app.use(bodyParser.json())


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
connectDB()
// app.use(cors())

// app.use('/api/weather', require('./routes/weatherRoutes'))
app.use(errorHandler.errorHandler)

app.get('/', (req, res) =>{
    res.send(('At base route.'))
})

app.use('/weather', require('./routes/weatherRoutes'))
app.use('/users', require('./routes/userRoutes'))
// app.get('/', async(req, res) =>{
//     const zipCode = req.body.text;
//     console.log(zipCode)
//     const weather = axios.get(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=11413`)
//     res.send(weather.data)
//     console.log(weather.data)

// })

// app.post('/',   async(req, res) =>{
//     const zipCode = req.body.text;
//     console.log(zipCode)
//     const weather = axios.get(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=11413`)
//     res.send(weather.data)
//     console.log(weather.data)

// })

app.listen(port, () => console.log(`Server started on port ${port}`))