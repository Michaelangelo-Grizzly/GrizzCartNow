import express from 'express'
const router = express.Router()
import {
	getCategories,
	getCategory,
	createCategory,
	updateCategory,
	deleteCategory,
} from '../controllers/categoryController.js'

router.route('/').get(getCategories)
router.route('/').post(createCategory)
router.route('/:id').get(getCategory).put(updateCategory).delete(deleteCategory)

export default router
