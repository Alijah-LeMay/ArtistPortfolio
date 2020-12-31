const express = require('express')
require('dotenv').config

const connectDB = require('./config/db')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

const app = express()

// Connect Database
connectDB()

//No longer need to use body parser
app.use(express.json({ extended: false }))

// Define Routes

// Make sure middleware is after other routes

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5003
