import mongoose from 'mongoose'
import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'
import SubCategory from '../models/subCategoryModel.js'

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
	const { categoryname } = req.body

	const categoryExists = await Category.findOne({ categoryname })

	if (categoryExists) {
		res.status(400)
		throw new Error('Category already exists')
	}

	const category = await Category.create({
		categoryname,
	})

	if (category) {
		res.status(201).json({
			_id: category._id,
			categoryname: category.categoryname,
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

	const { categoryname } = req.body

	if (category) {
		category.categoryname = categoryname || category.categoryname

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

// Sub Category

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
	const { subcategoryname, categoryname } = req.body

	const subCategoryExists = await SubCategory.findOne({ subcategoryname })

	if (subCategoryExists) {
		res.status(400)
		throw new Error('SubCategory already exists')
	}

	const subCategory = new SubCategory({
		categoryname: categoryname,
		subcategoryname,
	})

	const createdSubCategory = await subCategory.save()

	if (createdSubCategory) {
		res.status(201).json({
			_id: createdSubCategory.id,
			subcategoryname: createdSubCategory.subcategoryname,
		})
	} else {
		res.status(400)
		throw new Error('Invalid SubCategory data')
	}
})

// @description update a subcategory
// @route Post /api/categories
// @access Private/Super Admin || Admin
const updateSubCategory = asyncHandler(async (req, res) => {
	const { subcategoryname, categoryname } = req.body

	const subCategoryFind = await SubCategory.findById(req.params.id)

	if (subCategoryFind) {
		subCategoryFind.categoryname =
			categoryname || subCategoryFind.categoryname
		subCategoryFind.subcategoryname =
			subcategoryname || subCategoryFind.subcategoryname

		const updatedCategory = await subCategoryFind.save()

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
}
