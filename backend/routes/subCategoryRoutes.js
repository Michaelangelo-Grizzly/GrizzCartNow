import express from 'express'
const router = express.Router()
import {
	getSubCategories,
	getSubCategory,
	createSubCategory,
	updateSubCategory,
	deleteSubCategory,
} from '../controllers/subCategoryController.js'

router.route('/').get(getSubCategories)
router.route('/').post(createSubCategory)
router
	.route('/:id')
	.get(getSubCategory)
	.put(updateSubCategory)
	.delete(deleteSubCategory)

export default router
