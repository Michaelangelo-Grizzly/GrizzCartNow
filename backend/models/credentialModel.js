import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const credentialSchema = mongoose.Schema({
	username: { type: String, unique: true },
	name: {
		type: String,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	cellphoneNumber: {
		type: Number,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: mongoose.Schema.Types.String,
		requied: true,
		ref: 'Role',
	},
	gender: {
		type: String,
		enum: ['Male', 'Female', 'Other'],
	},
	profilePicture: {
		type: String,
	},
})

const User = mongoose.model('User', credentialSchema)

export default User
