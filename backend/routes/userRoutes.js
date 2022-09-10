import express from 'express'
const router = express.Router()
import {
	registerUser,
	authUser,
	getUsers,
	getUserById,
	getUserProfile,
	updateUserProfile,
	updateUser,
	deleteUser,
} from '../controllers/userController.js'
import { protect, superAdmin, admin } from '../middleware/authMiddleware.js'

router
	.route('/')
	.post(registerUser)
	.get(protect, superAdmin || admin, getUsers)
router.post('/login', authUser)
router
	.route('/profile')
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile)

router
	.route('/:id')
	.delete(protect, superAdmin || admin, deleteUser)
	.get(protect, superAdmin || admin, getUserById)
	.put(protect, superAdmin || admin, updateUser)

export default router