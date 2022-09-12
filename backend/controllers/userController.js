import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
	const {
		username,
		name,
		email,
		cellphoneNumber,
		password,
		role,
		gender,
		profilePicture,
	} = req.body

	const user = await User.findOne({
		$or: [{ username }, { email }, { cellphoneNumber }],
	})

	if (user?.username === username) {
		res.status(400)
		throw new Error(`User's username already exists`)
	}
	if (user?.email === email) {
		res.status(400)
		throw new Error(`User's Email already exists`)
	}

	if (Number(user?.cellphoneNumber) === Number(cellphoneNumber)) {
		res.status(400)
		throw new Error(`User's Cellphonenumber already exists`)
	}

	const createdUser = await User.create({
		username,
		name,
		email,
		cellphoneNumber,
		password,
		role,
		gender,
		profilePicture,
	})

	if (createdUser) {
		res.status(201).json({
			_id: createdUser._id,
			username: createdUser.username,
			name: createdUser.name,
			email: createdUser.email,
			cellphoneNumber: createdUser.cellphoneNumber,
			role: createdUser.role,
			gender: createdUser.gender,
			profilePicture: createdUser.profilePicture,
			token: generateToken(createdUser._id),
		})
	} else {
		res.status(400)
		throw new Error('Invalid user data')
	}
})

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	const user = await User.findOne({ email }).populate('role')

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			username: user.username,
			name: user.name,
			email: user.email,
			cellphoneNumber: user.cellphoneNumber,
			role: user.role.name,
			gender: user.gender,
			profilePicture: user.profilePicture,
			token: generateToken(user._id),
		})
	} else {
		res.status(401)
		throw new Error('Invalid email or password')
	}
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
	const {
		username,
		name,
		email,
		cellphoneNumber,
		password,
		role,
		gender,
		profilePicture,
	} = req.body

	const user = await User.findById(req.user._id)

	const userFind = await User.findOne({
		$or: [{ username }, { email }, { cellphoneNumber }],
	})

	if (userFind?.username === username) {
		res.status(400)
		throw new Error(`User's username already exists`)
	}
	if (userFind?.email === email) {
		res.status(400)
		throw new Error(`User's Email already exists`)
	}

	if (Number(userFind?.cellphoneNumber) === Number(cellphoneNumber)) {
		res.status(400)
		throw new Error(`User's Cellphonenumber already exists`)
	}

	if (user) {
		user.name = name || user.name
		user.email = email || user.email
		if (password) {
			user.password = password
		}

		user.username = username || user.username
		user.name = name || user.name
		user.email = email || user.email
		user.cellphoneNumber = cellphoneNumber || user.cellphoneNumber

		if (user.password) {
			user.password = password
		}
		user.role = role || user.role
		user.gender = gender || user.gender
		user.profilePicture = profilePicture || user.profilePicture

		const updatedUser = await user.save()

		res.json({
			_id: updatedUser._id,
			username: updatedUser.username,
			name: updatedUser.name,
			email: updatedUser.email,
			cellphoneNumber: updatedUser.cellphoneNumber,
			role: updatedUser.role,
			gender: updatedUser.gender,
			profilePicture: updatedUser.profilePicture,
			token: generateToken(updatedUser._id),
		})
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
	const users = await User.find({})
	res.json(users)
})

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id).select('-password')

	if (user) {
		res.json(user)
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id)

	if (user) {
		res.json({
			_id: user._id,
			username: user.username,
			name: user.name,
			email: user.email,
			cellphoneNumber: user.cellphoneNumber,
			role: user.role,
			gender: user.gender,
			profilePicture: user.profilePicture,
		})
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})

// @desc    Update a user
// @route   PUT /api/users
// @access  Public
const updateUser = asyncHandler(async (req, res) => {
	const {
		username,
		name,
		email,
		cellphoneNumber,
		password,
		role,
		gender,
		profilePicture,
	} = req.body

	const userFind = await User.findOne({
		$or: [{ username }, { email }, { cellphoneNumber }],
	})

	if (userFind?.username === username) {
		res.status(400)
		throw new Error(`User's username already exists`)
	}
	if (userFind?.email === email) {
		res.status(400)
		throw new Error(`User's Email already exists`)
	}

	if (Number(userFind?.cellphoneNumber) === Number(cellphoneNumber)) {
		res.status(400)
		throw new Error(`User's Cellphonenumber already exists`)
	}

	const userEdit = await User.findById(req.params.id)

	if (userEdit) {
		userEdit.username = username || userEdit.username
		userEdit.name = name || userEdit.name
		userEdit.email = email || userEdit.email
		userEdit.cellphoneNumber = cellphoneNumber || userEdit.cellphoneNumber
		userEdit.password = password || userEdit.password
		userEdit.role = role || userEdit.role
		userEdit.gender = gender || userEdit.gender
		userEdit.profilePicture = profilePicture || userEdit.profilePicture

		const updatedUser = await userEdit.save()

		res.json(updatedUser)
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id)

	if (user) {
		await user.remove()
		res.json({ message: 'User removed' })
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})

export {
	registerUser,
	authUser,
	getUsers,
	getUserById,
	getUserProfile,
	updateUserProfile,
	updateUser,
	deleteUser,
}
