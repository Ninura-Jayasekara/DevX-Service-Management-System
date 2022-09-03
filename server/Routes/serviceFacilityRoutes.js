const express = require('express')

const router = express.Router()
const {
    addFacility,
    viewFacilities,
    updateFacility
} = require('../Controllers/serviceFaciltyController')

router.post('/', viewFacilities)
router.post('/add', addFacility)
router.post('/update/:fId', updateFacility)

module.exports = router
