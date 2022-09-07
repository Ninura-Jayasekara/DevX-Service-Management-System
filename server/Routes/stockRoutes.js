const express = require('express')

const router = express.Router()
const {
    addStock,
    fetchPart
} = require('../Controllers/stockController')

const { protect } = require('../Middleware/authMiddleware')


router.post('/', addStock)
router.get('/search', fetchPart)


module.exports = router
