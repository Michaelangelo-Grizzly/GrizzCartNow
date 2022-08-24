import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'

dotenv.config()

connectDB()

const app = express()

const PORT = process.env.PORT || 23000

app.get('/', (req, res) => {
	res.send('API is running...')
})

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
			.bold
	)
)
