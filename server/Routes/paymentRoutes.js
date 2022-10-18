const express = require('express')

const router = express.Router()
const {
    addCard,
    addPayment,
    fetchAllPayments,
    searchPayment,
    updatePayment,
    deletePayment
} = require('../Controllers/paymentController')

const { protect } = require('../Middleware/authMiddleware')


router.post('/add-card', addCard)
router.post('/add-payment', protect, addPayment)
router.get('/fetch-payments', protect,fetchAllPayments)
router.get('/search',protect, searchPayment)
router.patch('/update/:serviceId', protect, updatePayment )
router.delete('/delete/:serviceId',protect,deletePayment)


module.exports = router
