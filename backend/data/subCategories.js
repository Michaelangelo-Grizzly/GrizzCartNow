import mongoose from 'mongoose'

const subCategories = [
	{
		name: `Sub Audio`,
		Category: {
			type: mongoose.Schema.Types.ObjectId._id,
			ref: 'Category',
			required: true,
		},
	},
	// {
	// 	name: `Sub Men's Apparel`,
	// 	category: {
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: 'Category',
	// 	},
	// },
	// {
	// 	name: `Sub Mobiles & Gadgets`,
	// 	category: {
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: 'Category',
	// 	},
	// },
	// {
	// 	name: `Sub Mobiles Accessories`,
	// 	category: {
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: 'Category',
	// 	},
	// },
	// {
	// 	name: `Sub Home Entertainment`,
	// 	category: {
	// 		type: mongoose.Schema.Types.ObjectId,

	// 		ref: 'Category',
	// 	},
	// },
	// {
	// 	name: `Sub Gadgets`,
	// 	category: {
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: 'Category',
	// 	},
	// },
]

export default subCategories
