import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import role from './data/roles.js'
import category from './data/categories.js'
import subCategories from './data/subCategories.js'
import User from './models/credentialModel.js'
import Role from './models/roleModel.js'
import Category from './models/categoryModel.js'
import SubCategory from './models/subCategoryModel.js'

dotenv.config()

connectDB()

const importData = async () => {
	try {
		await Category.deleteMany()
		await SubCategory.deleteMany()
		await Role.deleteMany()
		await User.deleteMany()

		await Category.insertMany(category)
		await SubCategory.insertMany(subCategories)
		await Role.insertMany(role)
		await User.insertMany(users)
		console.log(`Data Imported!`.green.inverse)
		process.exit()
	} catch (error) {
		console.error(`${error}`.red.inverse)
		process.exit(1)
	}
}

const destroyData = async () => {
	try {
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
