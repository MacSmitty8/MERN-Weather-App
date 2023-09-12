const express = require('express')
const dotenv = require('dotenv').config()
const errorHandler = require('./middleware/errorMiddleware')
const weatherRoute = require('./routes/weatherRoutes')
const axios = require('axios')
const port = process.env.PORT || 3000
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

const app = express()
app.use(cors(corsOptions)) // Use this after the variable declaration 




app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use(cors())

// app.use('/api/weather', require('./routes/weatherRoutes'))
app.use(errorHandler.errorHandler)


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