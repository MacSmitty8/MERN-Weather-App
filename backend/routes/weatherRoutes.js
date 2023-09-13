const express = require('express')
const router = express.Router()
//const {view, updateWeather, setWeather} = require('../controllers/weatherController')

router.get('/', (req, res) =>{
    res.status(200).json({message: 'Weather received'})
})

router.post('/', (req, res) =>{
    res.status(200).json({message: 'Weather set'})
})
router.put('/:id', (req, res) =>{
    res.status(200).json({message: `Update weather ${req.params.id}`})
})

//A delete weather route was not necessary for this.

// router.route('/').get(view).post(setWeather)
// router.route('/:id').put(updateWeather)


module.exports = router

//Needs a get, set, update, and delete location or weather