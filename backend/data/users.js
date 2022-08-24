import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'

const users = [
	{
		name: 'Jm Macatangay',
		email: 'jm@grizzcartnow.com',
		password: bcrypt.hashSync('password', 10),
		role: {
			type: mongoose.Schema.Types.ObjectId,
			ref: Role,
		},
	},
	{
		name: 'Grizzly Bear',
		email: 'grizzly@grizzcartnow.com',
		password: bcrypt.hashSync('password', 10),
		role: {
			type: mongoose.Schema.Types.ObjectId,
			ref: Role,
		},
	},
	{
		name: 'Panda Bear',
		email: 'panda@grizzcartnow.com',
		password: bcrypt.hashSync('password', 10),
		role: {
			type: mongoose.Schema.Types.ObjectId,
			ref: Role,
		},
	},
	{
		name: 'User test',
		email: 'user@grizzcartnow.com',
		password: bcrypt.hashSync('password', 10),
		role: {
			type: mongoose.Schema.Types.ObjectId,
			ref: Role,
		},
	},
]

export default users
