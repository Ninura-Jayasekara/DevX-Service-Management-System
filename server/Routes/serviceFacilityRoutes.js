const express = require('express')

const router = express.Router()
const {
    addFacility
} = require('../Controllers/serviceFaciltyController')

const { protect } = require('../Middleware/authMiddleware')


router.post('/add', protect, addFacility)

module.exports = router
