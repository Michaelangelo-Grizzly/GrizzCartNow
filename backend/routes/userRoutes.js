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
import {
	protect,
	allAdminAccess,
	isSuperAdmin,
} from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(protect, isSuperAdmin, getUsers)
router.post('/login', authUser)
router
	.route('/profile')
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile)

router
	.route('/:id')
	.delete(protect, isSuperAdmin, deleteUser)
	.get(protect, isSuperAdmin, getUserById)
	.put(protect, allAdminAccess, updateUser)

export default router
