const express = require('express')
const router = express.Router()

// Middleware
const { protect, admin } = require('../middleware/authMiddleware')
// Controllers

const {
  getImages,
  postImage,
  updateImage,
  deleteImage,
} = require('../controllers/imageController')

// Routes

router.route('/').post(protect, admin, postImage).get(getImages)
router.route('/:id').delete(deleteImage).put(protect, admin, updateImage)

module.exports = router
