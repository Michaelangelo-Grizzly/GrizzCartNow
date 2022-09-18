import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'

const RegisterScreen = () => {
	const location = useLocation()
	const navigate = useNavigate()

	return <h1>Register</h1>
}

export default RegisterScreen
