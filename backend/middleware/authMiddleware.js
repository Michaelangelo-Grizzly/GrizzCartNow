import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
	let token

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			token = req.headers.authorization.split(' ')[1]

			const decoded = jwt.verify(token, process.env.JWT_SECRET)

			req.user = await User.findById(decoded.id).select('-password')
			next()
		} catch (error) {
			onsole.error(error)
			res.status(401)
			throw new Error('Not authorized, token failed')
		}
	}
	if (!token) {
		res.status(401)
		throw new Error('Not authorized, no token')
	}
})

const superAdmin = (req, res, next) => {
	if (req.user && req.user.role === 'Super Admin') {
		next()
	} else {
		res.status(401)
		throw new Error('Not authorized as a Super Admin')
	}
}

const admin = (req, res, next) => {
	if (req.user && req.user.role === 'Super Admin') {
		next()
	} else {
		res.status(401)
		throw new Error('Not authorized as a Super Admin')
	}
}

export { protect, superAdmin, admin }
