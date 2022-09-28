const express = require('express')

const router = express.Router()
const {
    addService,
    viewServices,
    retrieveFacilities
} = require('../Controllers/serviceController')

router.get('/', viewServices)
router.post('/add', addService)
router.get('/facilities', retrieveFacilities)

module.exports = router
