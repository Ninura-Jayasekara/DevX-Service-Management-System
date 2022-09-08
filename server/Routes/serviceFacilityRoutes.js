const express = require('express')

const router = express.Router()
const {
    addFacility,
    viewFacilities,
    updateFacility
} = require('../Controllers/serviceFaciltyController')

router.get('/', viewFacilities)
router.post('/add', addFacility)
router.put('/update/:fId', updateFacility)

module.exports = router
