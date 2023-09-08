const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({message: 'Weather info receieved.'})
})
router.post('/', (req, res) => {
    res.status(200).json({message: 'Weather info set.'})
})
router.put('/:id', (req, res) => {
    res.status(200).json({message: `Updated Weather info ${req.params.id}`})
})
router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Deleted Weather info ${req.params.id}`})
})

module.exports = router

//Needs a get, set, update, and delete location