const subCategories = [
	{
		id: 1,
		name: `Sub Audio`,
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: Category,
		},
	},
	{
		id: 2,
		name: `Sub Men's Apparel`,
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: Category,
		},
	},
	{
		id: 3,
		name: `Sub Mobiles & Gadgets`,
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: Category,
		},
	},
	{
		id: 4,
		name: `Sub Mobiles Accessories`,
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: Category,
		},
	},
	{
		id: 5,
		name: `Sub Home Entertainment`,
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: Category,
		},
	},
	{
		id: 6,
		name: `Sub Babies & Kids`,
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: Category,
		},
	},
]

export default subCategories
