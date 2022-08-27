import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import categoryRoutes from './routes/categoryRoutes.js'

dotenv.config()

connectDB()

const app = express()

// Enables us to access req.body
app.use(express.json())

app.use((req, res, next) => {
	console.log('Next')
	next()
})

app.get('/', (req, res) => {
	res.send('API is running...')
})

app.use('/api/categories', categoryRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 23000

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
			.bold
	)
)
