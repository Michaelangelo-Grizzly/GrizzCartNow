import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'

// @description Fetch all categories
// @route Get /api/categories
// @access Private/Super Admin || Admin
const getCategories = asyncHandler(async (req, res) => {
	const categories = await Category.find({})
	res.json(categories)
})

// @description Fetch single category
// @route Get /api/categories/:id
// @access Private/Super Admin || Admin
const getCategory = asyncHandler(async (req, res) => {
	const category = await Category.findById(req.params.id)

	if (category) {
		res.json(category)
	} else {
		res.status(404)
		throw new Error('Category not found')
	}
})

// @description Create a product
// @route Post /api/categories
// @access Private/Super Admin || Admin
const createCategory = asyncHandler(async (req, res) => {
	const { name } = req.body

	const categoryExists = await Category.findOne({ name })

	if (categoryExists) {
		res.status(400)
		throw new Error('Category already exists')
	}

	const category = await Category.create({
		name,
	})

	if (category) {
		res.status(201).json({
			_id: category._id,
			name: category.name,
		})
	} else {
		res.status(400)
		throw new Error('Invalid category data')
	}
})

// @description Update a product
// @route Post /api/categories
// @access Private/Super Admin || Admin
const updateCategory = asyncHandler(async (req, res) => {
	const category = await Category.findById(req.params.id)

	const { name } = req.body

	if (category) {
		category.name = name || category.name

		const updatedCategory = await category.save()

		res.json(updatedCategory)
	} else {
		res.status(404)
		throw new Error('Category not found')
	}
})

// @description Delete a category
// @route Post /api/categories
// @access Private/Super Admin || Admin
const deleteCategory = asyncHandler(async (req, res) => {
	const category = await Category.findById(req.params.id)

	if (category) {
		await category.remove()
		res.json({ message: 'Category removed' })
	} else {
		res.status(404)
		throw new Error('Category not found')
	}
})

export {
	getCategories,
	getCategory,
	createCategory,
	updateCategory,
	deleteCategory,
}
