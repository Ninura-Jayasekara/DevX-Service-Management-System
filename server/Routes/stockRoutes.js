const express = require('express')

const router = express.Router()
const {
    addStock,
    fetchPart,
    fetchAllParts,
    updatePrice,
    deletePart
} = require('../Controllers/stockController')

const { protect } = require('../Middleware/authMiddleware')


router.post('/', protect, addStock)
router.get('/search', fetchPart)
router.get('/fetch-stock', protect ,fetchAllParts)
router.put('/update/:itemCode',updatePrice)
router.delete('/delete/:itemCode',deletePart)

module.exports = router
