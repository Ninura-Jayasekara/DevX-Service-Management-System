const express = require('express')

const router = express.Router()
const {
    addStock,
    fetchPart,
    fetchAllParts
} = require('../Controllers/stockController')

const { protect } = require('../Middleware/authMiddleware')


router.post('/', protect, addStock)
router.get('/search', fetchPart)
router.get('/fetch-stock', protect ,fetchAllParts)


module.exports = router
