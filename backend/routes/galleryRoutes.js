const express = require('express')
const router = express.Router()

// Controllers

const {
  getImages,
  postImage,
  updateImage,
  deleteImage,
} = require('../controllers/galleryController')

// Routes

router.route('/').post(postImage).get(getImages)
router.route('/:id').delete(deleteImage).put(updateImage)

module.exports = router
