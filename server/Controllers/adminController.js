const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

//import mongoose model
const Admin = require('../Models/adminModel')

// Create new admin 

const createAdmin = asyncHandler(async (req, res) => {
    const { id, firstName, lastName, email, password } = req.body
  
    if (!id || !firstName || !email || !password) {
      res.status(400)
      throw new Error('please fill all required fields')
    }
  
    // Check if user alredy exists with provided email
    const userExists = await Admin.findOne({ email })
  
    if (userExists) {
      res.status(400)
      throw new Error('This email address is already being used')
    }
  
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
  
    // Create admin
    const admin = await Admin.create({
      id,
      firstName,
      lastName,
      email,
      password: hashedPassword,
    })
  
    if (admin) {
      res.status(201)
    } else {
      res.status(400)
      throw new Error('Invalid user ! please check again')
    }
  })
  
  
  
  // admin login
  
  const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body
  
    // Check details to fetch user email
    const admin = await Admin.findOne({ email })
  
    if (admin && (await bcrypt.compare(password, admin.password))) {
      res.json({
        _id: admin.id,
        name: admin.firstName,
        email: admin.email,
        token: generateToken(admin._id),
      })
    } else {
      res.status(400)
      throw new Error('Invalid credentials')
    }
  })
  
  
  // Generate JWT
  const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })
  }

  module.exports = {
    createAdmin,
    loginAdmin
  }