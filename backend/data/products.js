import mongoose from 'mongoose'
const products = [
	{
		name: 'Airpods Wireless Bluetooth Headphones',
		image: '/images/airpods.jpg',
		description:
			'Bluetooth technology lets you connect it with compatible devices wireless.',
		brand: 'Apple',
		category: 'Accessories',
		subcategory: 'Sub Accessories',
		price: 89.99,
		countInStock: 2,
		rating: 4.5,
		numReviews: 4,
	},
	{
		name: 'iPhone 12 Pro 256Gb Memory',
		image: '/images/phone.jpg',
		description: 'Introducing the iPhone 12 Pro.',
		brand: 'Apple',
		category: 'Gadgets',
		subcategory: 'Sub Gadgets',
		price: 89.99,
		countInStock: 2,
		rating: 4.5,
		numReviews: 4,
	},
	{
		name: 'Canon EOS 80D DSLR Camera',
		image: '/images/camera.jpg',
		description:
			'Characterized by versatile imaging specs, the Canon EOS 80D',
		brand: 'Sony',
		category: 'Camera',
		subcategory: 'Sub Camera',
		price: 89.99,
		countInStock: 2,
		rating: 4.5,
		numReviews: 4,
	},
]

export default products