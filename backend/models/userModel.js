import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
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

userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next()
	}

	const salt = await bcrypt.genSalt(10)
	this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User
