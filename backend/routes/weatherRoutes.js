const express = require('express')
const router = express.Router()
const {view, updateWeather, setWeather, deleteWeather} = require('../controllers/weatherController')

router.route('/').get(view)
router.route('/:id').delete(deleteWeather).put(updateWeather)


module.exports = router

//Needs a get, set, update, and delete location or weather