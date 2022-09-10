import express from 'express'
const router = express.Router()
import {
	createRole,
	getRoles,
	getRole,
	updateRole,
	deleteRole,
} from '../controllers/roleController.js'

router.route('/').get(getRoles)
router.route('/').post(createRole)
router.route('/:id').get(getRole).put(updateRole).delete(deleteRole)

export default router
