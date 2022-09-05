import mongoose from 'mongoose'

const subCategorySchema = mongoose.Schema({
	subcategoryname: {
		type: String,
		required: true,
	},
	categoryname: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: true,
	},
})

const SubCategory = mongoose.model('SubCategory', subCategorySchema)

export default SubCategory
