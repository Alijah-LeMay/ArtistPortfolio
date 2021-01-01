const express = require('express')
const router = express.Router()

// Controllers

const {
  loginUser,
  getAllUsers,
  registerUser,
  deleteUser,
} = require('../controllers/userController')

// Routes

router.route('/').post(registerUser).get(getAllUsers)
router.route('/:id').delete(deleteUser)
router.post('/login', loginUser)

module.exports = router
