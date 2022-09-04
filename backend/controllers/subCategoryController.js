import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'
import SubCategory from '../models/subCategoryModel.js'

// @description Fetch all sub subcategory
// @route Get /api/subcategories
// @access Private/Super Admin || Admin
const getSubCategories = asyncHandler(async (req, res) => {
	const subCategories = await SubCategory.find({})
	res.json(subCategories)
})

// @description Fetch single subcategory
// @route Get /api/categories/:id
// @access Private/Super Admin || Admin
const getSubCategory = asyncHandler(async (req, res) => {
	const subcategory = await SubCategory.findById(req.params.id)

	if (subcategory) {
		res.json(subcategory)
	} else {
		res.status(404)
		throw new Error('Sub Category not found')
	}
})

// @description Create a subcategory
// @route Post /api/categories
// @access Private/Super Admin || Admin
const createSubCategory = asyncHandler(async (req, res) => {
	const { name } = req.body

	const subCategoryExists = await SubCategory.findOne({ name })

	if (subCategoryExists) {
		res.status(400)
		throw new Error('SubCategory already exists')
	}

	const subCategory = await SubCategory.create({
		category: req.category._id,
		name,
	})

	if (subCategory) {
		res.status(201).json({
			_id: subCategory._id,
			name: subCategory.name,
		})
	} else {
		res.status(400)
		throw new Error('Invalid Sub Category data')
	}
})

// @description update a subcategory
// @route Post /api/categories
// @access Private/Super Admin || Admin
const updateSubCategory = asyncHandler(async (req, res) => {
	const { name } = req.body

	const subCategoryFind = await SubCategory.findById(req.params._id)

	if (subCategoryFind) {
		subCategoryFind.category = req.category._id || req.category._id
		subCategoryFind.name = name || findSubCategory.name

		const updatedCategory = await findSubCategory.save()

		res.json(updatedCategory)
	} else {
		res.status(404)
		throw new Error('Sub Category not found')
	}
})

// @description Delete a subcategory
// @route Post /api/categories
// @access Private/Super Admin || Admin
const deleteSubCategory = asyncHandler(async (req, res) => {
	const subCategory = await SubCategory.findById(req.params.id)

	if (subCategory) {
		await subCategory.remove()
		res.json({ message: 'Sub Category removed' })
	} else {
		res.status(404)
		throw new Error('Sub Category not found')
	}
})

export {
	getSubCategories,
	getSubCategory,
	createSubCategory,
	updateSubCategory,
	deleteSubCategory,
}
