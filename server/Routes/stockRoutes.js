const express = require('express')

const router = express.Router()
const {
    addStock
} = require('../Controllers/stockController')

const { protect } = require('../Middleware/authMiddleware')


router.post('/', protect, addStock)


module.exports = router
