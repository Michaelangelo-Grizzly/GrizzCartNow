import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Jm Macatangay',
		email: 'jm@grizzcartnow.com',
		password: bcrypt.hashSync('password', 10),
		role: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Role',
		},
		cellphoneNumber: 123456,
	},
	{
		name: 'Grizzly Bear',
		email: 'grizzly@grizzcartnow.com',
		password: bcrypt.hashSync('password', 10),
		role: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Role',
		},
		cellphoneNumber: 123456,
	},
	{
		name: 'Panda Bear',
		email: 'panda@grizzcartnow.com',
		password: bcrypt.hashSync('password', 10),
		role: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Role',
		},
		cellphoneNumber: 123456,
	},
	{
		name: 'User test',
		email: 'user@grizzcartnow.com',
		password: bcrypt.hashSync('password', 10),
		role: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Role',
		},
		cellphoneNumber: 123456,
	},
]

export default users
