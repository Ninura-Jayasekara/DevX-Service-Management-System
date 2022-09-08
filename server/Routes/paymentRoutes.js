const express = require('express')

const router = express.Router()
const {
    addCard,
    addPayment,
    fetchAllPayments
} = require('../Controllers/paymentController')

const { protect } = require('../Middleware/authMiddleware')


router.post('/add-card', addCard)
router.post('/add-payment', addPayment)
router.get('/fetch-payments' ,fetchAllPayments)


module.exports = router
