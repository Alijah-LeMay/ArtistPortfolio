const asyncHandler = require('express-async-handler')
// Models
const Img = require('../models/Img')

// desc         Get all images
// @route       GET /api/image
// @access      Public

const getImages = asyncHandler(async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 10
  const page = Number(req.query.pageNumber) || 1

  const count = await Img.countDocuments()
  const images = await Img.find()
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ images, page, pages: Math.ceil(count / pageSize) })
})
// desc         Create image entry
// @route       POST /api/image
// @access      Private / Admin
const postImage = asyncHandler(async (req, res) => {
  const image = new Img({
    alt: 'Sample Alt',
    src: '/uploads/sample.jpg',
    author: req.user._id,
  })

  const createdImage = await image.save()
  res.status(201).json(createdImage)
})

// desc         Update Image Entry
// @route       PUT /api/image/:id
// @access      Private / Admin
const updateImage = asyncHandler(async (req, res) => {
  const { src, alt, author } = req.body
  const image = await Img.findById(req.params.id)

  if (image) {
    image.src = src ? src : image.src
    image.alt = alt ? alt : image.alt
    image.author = author ? author : image.author
    const updatedImage = await image.save()
    res.json(updatedImage)
  } else {
    res.status(404)
    throw new Error('Image not found')
  }
})
// desc         Delete single image
// @route       DELETE /api/image/:id
// @access      Private / Admin

const deleteImage = asyncHandler(async (req, res) => {
  const image = await Img.findById(req.params.id)
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
