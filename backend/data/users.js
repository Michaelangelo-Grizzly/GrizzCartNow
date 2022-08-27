import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Jm Macatangay',
		username: 'Em',
		email: 'jm@grizzcartnow.com',
		password: bcrypt.hashSync('password', 10),
		role: 1,
		cellphoneNumber: 123456,
	},
	{
		name: 'Grizzly Bear',
		username: 'grizz',
		email: 'grizzly@grizzcartnow.com',
		password: bcrypt.hashSync('password', 10),
		role: 1,
		cellphoneNumber: 234567,
	},
	{
		name: 'Panda Bear',
		username: 'pan',
		email: 'panda@grizzcartnow.com',
		password: bcrypt.hashSync('password', 10),
		role: 1,
		cellphoneNumber: 345678,
	},
	{
		name: 'User test',
		username: 'testing',
		email: 'user@grizzcartnow.com',
		password: bcrypt.hashSync('password', 10),
		role: 2,
		cellphoneNumber: 456789,
	},
]

export default users
