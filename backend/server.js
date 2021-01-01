const express = require('express')
require('dotenv').config()

const connectDB = require('./config/db')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const userRoutes = require('./routes/userRoutes')
const blogRoutes = require('./routes/blogRoutes')

const app = express()

// Connect Database
connectDB()

//No longer need to use body parser
app.use(express.json({ extended: false }))

// Define Routes
app.use('/api/user', userRoutes)
app.use('/api/blog', blogRoutes)

// Make sure middleware is after other routes

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5003

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))