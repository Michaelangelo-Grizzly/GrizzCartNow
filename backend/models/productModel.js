import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
	{
		name: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},

		rating: {
			type: Number,
			required: true,
		},
		comment: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

const productSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			requied: true,
			ref: 'User',
		},
		name: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		brand: {
			type: String,
			required: true,
		},
		categoryid: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Category',
		},
		subcategoryid: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'SubCategory',
		},
		description: {
			type: String,
			required: true,
		},
		reviews: [reviewSchema],
		rating: {
			type: Number,
			required: true,
			default: 0,
		},
		numReviews: {
			type: Number,
			required: true,
			default: 0,
		},
		price: {
			type: Number,
			required: true,
			default: 0,
		},
		countInStock: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
)
const Product = mongoose.model('Product', productSchema)

export default Product
