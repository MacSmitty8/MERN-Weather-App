const express = require('express')
const dotenv = require('dotenv').config()
const errorHandler = require('./middleware/errorMiddleware')
const weatherRoute = require('./routes/weatherRoutes')
const port = process.env.PORT || 3000


const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))

 app.use('/api/weather', require('./routes/weatherRoutes'))
app.use(errorHandler.errorHandler)
// app.get('/weather', weatherRoute.view)

app.listen(port, () => console.log(`Server started on port ${port}`))