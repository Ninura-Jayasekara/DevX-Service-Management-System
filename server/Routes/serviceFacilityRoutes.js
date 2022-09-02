const express = require('express')

const router = express.Router()
const {
    addFacility
} = require('../Controllers/serviceFaciltyController')


router.post('/add', addFacility)

module.exports = router
