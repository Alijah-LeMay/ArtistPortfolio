const express = require('express')
require('dotenv').config()
const path = require('path')

const connectDB = require('./config/db')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const userRoutes = require('./routes/userRoutes')
const blogRoutes = require('./routes/blogRoutes')
const uploadRoutes = require('./routes/uploadRoutes')
const imageRoutes = require('./routes/imageRoutes')
const sendEmail = require('./routes/sendEmail')

const app = express()

// Connect Database
connectDB()

//No longer need to use body parser
app.use(express.json({ extended: false }))

// Define Routes
app.use('/api/user', userRoutes)
app.use('/api/blog', blogRoutes)
app.use('/api/image', imageRoutes)

// nodeMailer
app.use('/api/send', sendEmail)

// Image upload route
app.use('/api/upload', uploadRoutes)

// Make uploads folder static
const dirname = path.resolve()
app.use('/uploads', express.static(path.join(dirname, '/uploads')))

// Make sure middleware is after other routes

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5003

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
