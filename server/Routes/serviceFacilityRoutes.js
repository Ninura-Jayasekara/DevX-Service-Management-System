const express = require('express')

const router = express.Router()
const {
    addFacility,
    viewFacilities
} = require('../Controllers/serviceFaciltyController')


router.post('/add', addFacility)
router.post('/', viewFacilities)

module.exports = router
