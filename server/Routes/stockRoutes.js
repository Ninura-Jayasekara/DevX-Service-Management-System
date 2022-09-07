const express = require('express')

const router = express.Router()
const {
    addStock,
    fetchPart,
    fetchAllParts
} = require('../Controllers/stockController')

const { protect } = require('../Middleware/authMiddleware')


router.post('/', addStock)
router.get('/search', fetchPart)
router.get('/fetch-stock', fetchAllParts)


module.exports = router
