import mongoose from 'mongoose'

const subCategorySchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	Category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: true,
	},
})

const SubCategory = mongoose.model('SubCategory', subCategorySchema)

export default SubCategory
