const express = require('express')

const router = express.Router()
const {
    createAdmin,
    loginAdmin
} = require('../Controllers/adminController')


router.post('/', createAdmin)
router.post('/login', loginAdmin)

module.exports = router
