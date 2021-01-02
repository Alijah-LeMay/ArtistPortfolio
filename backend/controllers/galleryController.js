const asyncHandler = require('express-async-handler')
// Models
const Gallery = require('../models/Gallery')

// desc         Get all images
// @route       GET /api/gallery
// @access      Public

const getImages = asyncHandler(async (req, res) => {
  const images = await Gallery.find()
  res.json(images)
})
// desc         Create gallery entry
// @route       POST /api/gallery
// @access      Private / Admin
const postImage = asyncHandler(async (req, res) => {
  const image = new Gallery({
    alt: 'Sample Alt',
    src: '/uploads/sample.jpg',
    author: req.user._id,
  })

  const createdImage = await Gallery.save()
  res.status(201).json(createdImage)
})

// desc         Update Image Entry
// @route       PUT /api/gallery/:id
// @access      Private / Admin
const updateImage = asyncHandler(async (req, res) => {
  const { src, alt, author } = req.body
  const image = await Gallery.findById(req.params.id)

  if (image) {
    image.src = src ? src : image.src
    image.alt = alt ? alt : image.alt
    image.author = author ? author : image.author
    const updatedImage = await site.save()
    res.json(updatedImage)
  } else {
    res.status(404)
    throw new Error('Image not found')
  }
})
// desc         Delete single site
// @route       DELETE /api/gallery/:id
// @access      Private / Admin

const deleteImage = asyncHandler(async (req, res) => {
  const image = await Gallery.findById(req.params.id)
  if (image) {
    await image.remove()
    res.json({ message: 'Image Removed' })
  } else {
    res.status(404)
    throw new Error('Image not found')
  }
})

module.exports = {
  getImages,
  postImage,
  updateImage,
  deleteImage,
}
