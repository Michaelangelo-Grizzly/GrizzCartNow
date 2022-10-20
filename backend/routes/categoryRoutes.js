import express from 'express'
const router = express.Router()
import {
	getCategories,
	getCategory,
	createCategory,
	updateCategory,
	deleteCategory,
	getSubCategories,
	getSubCategory,
	createSubCategory,
	updateSubCategory,
	deleteSubCategory,
} from '../controllers/categoryController.js'

// Category
router.route('/').get(getCategories).post(createCategory)
router.route('/:id').get(getCategory).put(updateCategory).delete(deleteCategory)

// Sub Category
router.route('/subcategory/getcategory').get(getSubCategories)
router.route('/subcategory/createcategory').post(createSubCategory)
router
	.route('/subcategory/:id')
	.get(getSubCategory)
	.put(updateSubCategory)
	.delete(deleteSubCategory)

export default router
