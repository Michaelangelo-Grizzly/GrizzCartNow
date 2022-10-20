import {
	CATEGORY_LIST_REQUEST,
	CATEGORY_LIST_SUCCESS,
	CATEGORY_LIST_FAIL,
	CATEGORY_DETAILS_REQUEST,
	CATEGORY_DETAILS_SUCCESS,
	CATEGORY_DETAILS_FAIL,
	CATEGORY_CREATE_REQUEST,
	CATEGORY_CREATE_SUCCESS,
	CATEGORY_CREATE_FAIL,
	CATEGORY_CREATE_RESET,
	CATEGORY_UPDATE_REQUEST,
	CATEGORY_UPDATE_SUCCESS,
	CATEGORY_UPDATE_FAIL,
	CATEGORY_UPDATE_RESET,
	CATEGORY_DELETE_REQUEST,
	CATEGORY_DELETE_SUCCESS,
	CATEGORY_DELETE_FAIL,
	SUB_CATEGORY_LIST_REQUEST,
	SUB_CATEGORY_LIST_SUCCESS,
	SUB_CATEGORY_LIST_FAIL,
	SUB_CATEGORY_DETAILS_REQUEST,
	SUB_CATEGORY_DETAILS_SUCCESS,
	SUB_CATEGORY_DETAILS_FAIL,
	SUB_CATEGORY_CREATE_REQUEST,
	SUB_CATEGORY_CREATE_SUCCESS,
	SUB_CATEGORY_CREATE_FAIL,
	SUB_CATEGORY_CREATE_RESET,
	SUB_CATEGORY_UPDATE_REQUEST,
	SUB_CATEGORY_UPDATE_SUCCESS,
	SUB_CATEGORY_UPDATE_FAIL,
	SUB_CATEGORY_UPDATE_RESET,
	SUB_CATEGORY_DELETE_REQUEST,
	SUB_CATEGORY_DELETE_SUCCESS,
	SUB_CATEGORY_DELETE_FAIL,
} from '../constants/categoryConstants'

export const categoryListReducer = (state = { categories: [] }, action) => {
	switch (action.type) {
		case CATEGORY_LIST_REQUEST:
			return { loading: true, categories: [] }
		case CATEGORY_LIST_SUCCESS:
			return {
				loading: false,
				categories: action.payload.categories,
			}
		case CATEGORY_LIST_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const categoryDetailReducer = (state = { category: {} }, action) => {
	switch (action.type) {
		case CATEGORY_DETAILS_REQUEST:
			return { ...state, loading: true }
		case CATEGORY_DETAILS_SUCCESS:
			return {
				loading: false,
				category: action.payload,
			}
		case CATEGORY_DETAILS_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const categoryCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case CATEGORY_CREATE_REQUEST:
			return { loading: true }
		case CATEGORY_CREATE_SUCCESS:
			return {
				loading: false,
				success: true,
				category: action.payload,
			}
		case CATEGORY_CREATE_FAIL:
			return { loading: false, error: action.payload }
		case CATEGORY_CREATE_RESET:
			return {}
		default:
			return state
	}
}

export const categoryUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case CATEGORY_UPDATE_REQUEST:
			return { loading: true }
		case CATEGORY_UPDATE_SUCCESS:
			return {
				loading: false,
				success: true,
				category: action.payload,
			}
		case CATEGORY_UPDATE_FAIL:
			return { loading: false, error: action.payload }
		case CATEGORY_UPDATE_RESET:
			return {}
		default:
			return state
	}
}

export const categoryDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case CATEGORY_DELETE_REQUEST:
			return { loading: true }
		case CATEGORY_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
			}
		case CATEGORY_DELETE_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const subCategoryListReducer = (state = { subcategory: [] }, action) => {
	switch (action.type) {
		case SUB_CATEGORY_LIST_REQUEST:
			return { loading: true, subcategory: [] }
		case SUB_CATEGORY_LIST_SUCCESS:
			return {
				loading: false,
				subcategory: action.payload.subcategory,
			}
		case SUB_CATEGORY_LIST_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const subCategoryDetailReducer = (
	state = { subcategory: {} },
	action
) => {
	switch (action.type) {
		case SUB_CATEGORY_DETAILS_REQUEST:
			return { ...state, loading: true }
		case SUB_CATEGORY_DETAILS_SUCCESS:
			return {
				loading: false,
				subcategory: action.payload,
			}
		case SUB_CATEGORY_DETAILS_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const subCategoryCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case SUB_CATEGORY_CREATE_REQUEST:
			return { loading: true }
		case SUB_CATEGORY_CREATE_SUCCESS:
			return {
				loading: false,
				success: true,
				subcategory: action.payload,
			}
		case SUB_CATEGORY_CREATE_FAIL:
			return { loading: false, error: action.payload }
		case SUB_CATEGORY_CREATE_RESET:
			return {}
		default:
			return state
	}
}

export const subCategoryUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case SUB_CATEGORY_UPDATE_REQUEST:
			return { loading: true }
		case SUB_CATEGORY_UPDATE_SUCCESS:
			return {
				loading: false,
				success: true,
				subcategory: action.payload,
			}
		case SUB_CATEGORY_UPDATE_FAIL:
			return { loading: false, error: action.payload }
		case SUB_CATEGORY_UPDATE_RESET:
			return {}
		default:
			return state
	}
}

export const subCategoryDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case SUB_CATEGORY_DELETE_REQUEST:
			return { loading: true }
		case SUB_CATEGORY_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
			}
		case SUB_CATEGORY_DELETE_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}
