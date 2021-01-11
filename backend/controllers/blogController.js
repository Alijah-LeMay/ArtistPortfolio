const asyncHandler = require('express-async-handler')

//Model

const Blog = require('../models/Blog')

// @desc        Get all blog posts
// @route       GET /api/blog
// @access      Public

const getAllBlogs = asyncHandler(async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 10
  const pageNumber = Number(req.query.pageNumber) || 1

  const count = await Blog.countDocuments()

  const blogs = await Blog.find()
    .limit(pageSize)
    .skip(pageSize * (pageNumber - 1))

  res.json({ blogs, pageNumber, pages: Math.ceil(count / pageSize) })
})

// desc         Fetch single blog
// @route       GET /api/blog/:id
// @access      Public

const getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id)
  if (blog) {
    res.json(blog)
  } else {
    res.status(404)
    throw new Error('Blog not found')
  }
})

// desc         Delete single blog
// @route       DELETE /api/blog/:id
// @access      Private / Admin

const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id)
  if (blog) {
    await blog.remove()
    res.json({ message: 'Blog Removed' })
  } else {
    res.status(404)
    throw new Error('Blog not found')
  }
})

// @desc        Create new blog post
// @route       POST /api/blog
// @access      Private / Admin

const createBlog = asyncHandler(async (req, res) => {
  const blog = new Blog({
    title: 'Sample Title',
    image: 'Sample Image',
    content: 'Sample Content',
    description: 'Sample Description',
  })
  const createdBlog = await blog.save()
  res.status(201).json(createdBlog)
})

// @desc        Update blog post
// @route       PUT /api/blog/:id
// @access      Private / Admin
const updateBlog = asyncHandler(async (req, res) => {
  const { title, image, content, description } = req.body

  const blog = await Blog.findById(req.params.id)

  if (blog) {
    blog.title = title
    blog.image = image
    blog.description = description
    blog.content = content
  }

  const updatedBlog = await blog.save()
  res.status(201).json(updatedBlog)
})

module.exports = {
  getAllBlogs,
  createBlog,
  updateBlog,
  getBlogById,
  deleteBlog,
}
