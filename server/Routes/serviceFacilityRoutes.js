const express = require('express')

const router = express.Router()
const {
    addFacility,
    viewFacilities,
    updateFacility,
    deleteFacility
} = require('../Controllers/serviceFaciltyController')

router.get('/', viewFacilities)
router.post('/add', addFacility)
router.put('/update/:fId', updateFacility)
router.delete('/delete/:fId', deleteFacility)

module.exports = router
