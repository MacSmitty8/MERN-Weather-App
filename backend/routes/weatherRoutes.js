const express = require('express')
const router = express.Router()
const {view, updateWeather, setWeather} = require('../controllers/weatherController')

router.route('/').get(view).post(setWeather)
router.route('/:id').put(updateWeather)


module.exports = router

//Needs a get, set, update, and delete location or weather