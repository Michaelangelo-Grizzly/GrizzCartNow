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

			const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN)

			req.user = await User.findById(decoded.id)
				.select('-password')
				.populate('role')
			next()
		} catch (error) {
			console.error(error)
			res.status(401)
			throw new Error('Not authorized, token failed')
		}
	}
	if (!token) {
		res.status(401)
		throw new Error('Not authorized, no token')
	}
})

const isSuperAdmin = async (req, res, next) => {
	if (req.user && req.user.role.name === 'Super Admin') {
		next()
	} else {
		return res.status(401).json('Not authorized as a Super Admin')
	}
}

const allAdminAccess = async (req, res, next) => {
	if (
		req.user &&
		(req.user.role.name === 'Super Admin' || req.user.role.name === 'Admin')
	) {
		next()
	} else {
		return res
			.status(401)
			.json('Not authorized as a Super Admin or an Admin')
	}
}

export { protect, allAdminAccess, isSuperAdmin }
