const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = Blog = mongoose.model('Blog', blogSchema)
