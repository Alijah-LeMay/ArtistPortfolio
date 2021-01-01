const asyncHandler = require('express-async-handler')
const { generateToken } = require('../utils/generateToken')

// Models
const User = require('../models/User')

// desc         POST /api/user
// @route       Register user & create token
// @access      Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, isAdmin } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }
  const user = await User.create({
    name,
    email,
    password,
    isAdmin: isAdmin && isAdmin,
  })
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})
// desc         GET /api/user
// @route       Get all users
// @access      Public

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find()
  res.json(users)
})

// desc         POST /api/user/login
// @route       Login user & get user
// @access      Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  console.log(user)

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})
// desc         DELETE /api/user/:id
// @route       Delete User By ID
// @access      Public

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  if (user) {
    await user.remove()
    res.json({ message: 'User Removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

module.exports = { loginUser, getAllUsers, registerUser, deleteUser }
