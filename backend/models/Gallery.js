const mongoose = require('mongoose')

const gallerySchema = new mongoose.Schema(
  {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    author: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = Gallery = mongoose.model('Gallery', gallerySchema)
