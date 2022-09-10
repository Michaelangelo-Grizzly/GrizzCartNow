import asyncHandler from 'express-async-handler'
import Role from '../models/roleModel.js'

// @description Create role
// @route Get /api/roles
// @access Private/Super Admin || Admin
const createRole = asyncHandler(async (req, res) => {
	const { name, description } = req.body

	const roleExists = await Role.findOne({ name })

	if (roleExists) {
		res.status(400)
		throw new Error('Role already exists')
	}

	const role = await Role.create({
		name,
		description,
	})

	if (role) {
		res.status(201).json({
			_id: role._id,
			name: role.name,
			description: role.description,
		})
	} else {
		res.status(400)
		throw new Error('Invalid role data')
	}
})

// @description Fetch all roles
// @route Get /api/roles
// @access Private/Super Admin || Admin
const getRoles = asyncHandler(async (req, res) => {
	const roles = await Role.find({})
	res.json(roles)
})

// @description Fetch single role
// @route Get /api/roles/:id
// @access Private/Super Admin || Admin
const getRole = asyncHandler(async (req, res) => {
	const role = await Role.findById(req.params.id)

	if (role) {
		res.json(role)
	} else {
		res.status(404)
		throw new Error('Role not found')
	}
})

// @description Update a role
// @route Post /api/roles
// @access Private/Super Admin || Admin
const updateRole = asyncHandler(async (req, res) => {
	const role = await Role.findById(req.params.id)

	const { name, description } = req.body

	if (role) {
		role.name = name || role.name
		role.description = description || role.description

		const updatedRole = await role.save()

		res.json(updatedRole)
	} else {
		res.status(404)
		throw new Error('Role not found')
	}
})

// @description Delete a role
// @route Post /api/roles
// @access Private/Super Admin || Admin
const deleteRole = asyncHandler(async (req, res) => {
	const role = await Role.findById(req.params.id)

	if (role) {
		await role.remove()
		res.json({ message: 'Role removed' })
	} else {
		res.status(404)
		throw new Error('Role not found')
	}
})

export { createRole, getRole, getRoles, updateRole, deleteRole }
