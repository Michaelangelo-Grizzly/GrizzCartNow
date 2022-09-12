import mongoose from 'mongoose'

const subCategorySchema = mongoose.Schema({
	subname: {
		type: String,
		required: true,
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Category',
	},
})

const SubCategory = mongoose.model('SubCategory', subCategorySchema)

export default SubCategory
