import mongoose from 'mongoose'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import roles from './data/roles.js'
import categories from './data/categories.js'
import subcategories from './data/subcategories.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Role from './models/roleModel.js'
import Category from './models/categoryModel.js'
import SubCategory from './models/subCategoryModel.js'
import Product from './models/productModel.js'

dotenv.config()

const importData = async () => {
	try {
		await connectDB()
		await Product.deleteMany()
		await Category.deleteMany()
		await Role.deleteMany()
		await SubCategory.deleteMany()
		await User.deleteMany()

		const createdCategory = await Category.insertMany(categories)

		const subCategory = createdCategory[0].id

		const subCategoryData = subcategories.map(subcategory => {
			return { ...subcategory, category: subCategory }
		})

		await SubCategory.insertMany(subCategoryData)

		const createdRoles = await Role.insertMany(roles)

		const roleAccess = createdRoles[0].id

		const userAccess = users.map(user => {
			return { ...user, role: roleAccess }
		})

		const createdUsers = await User.insertMany(userAccess)

		const adminUser = createdUsers[0]._id

		const sampleProducts = products.map(product => {
			return { ...product, user: adminUser }
		})
		await Product.insertMany(sampleProducts)

		console.log(`Data Imported!`.green.inverse)
		process.exit()
	} catch (error) {
		console.error(`${error}`.red.inverse)
		process.exit(1)
	}
}

const destroyData = async () => {
	try {
		await connectDB()
		await Product.deleteMany()
		await Category.deleteMany()
		await SubCategory.deleteMany()
		await Role.deleteMany()
		await User.deleteMany()

		console.log(`Data Destroyed!`.red.inverse)
		process.exit()
	} catch (error) {
		console.error(`${error}`.red.inverse)
		process.exit(1)
	}
}

if (process.argv[2] === '-d') {
	destroyData()
} else {
	importData()
}
