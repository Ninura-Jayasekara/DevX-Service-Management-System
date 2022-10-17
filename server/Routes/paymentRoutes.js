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
router.get('/payment/search',protect, searchPayment)
router.patch('/payment/update/:serviceId', protect, updatePayment )
router.delete('/payment/delete/:serviceId',protect,deletePayment)


module.exports = router
