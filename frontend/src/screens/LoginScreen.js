import React, { useState, useEffect } from 'react'
import {
	Container,
	Paper,
	Checkbox,
	Grid,
	TextField,
	FormControlLabel,
	Button,
	FormHelperText,
	FormControl,
	IconButton,
	Input,
	FilledInput,
	OutlinedInput,
	InputLabel,
	InputAdornment,
} from '@mui/material'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const LoginScreen = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [values, setValues] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [checked, setChecked] = React.useState(true)

	const handleClickShowPassword = () => setShowPassword(!showPassword)
	const handleMouseDownPassword = () => setShowPassword(!showPassword)

	// const userLogin = useSelector(state => state.userLogin)
	// const { loading, error, userInfo } = userLogin

	return (
		<Container>
			<div style={{ padding: 30 }}>
				<Paper>
					<form className="form">
						{' '}
						<h2>Sign in</h2>
						<TextField
							id="outlined-basic"
							label="Email"
							variant="outlined"
							style={{ margin: 15 }}
						/>
						<TextField
							label="Password"
							variant="outlined"
							type={showPassword ? 'text' : 'password'} // <-- This is where the magic happens
							style={{ margin: 15 }}
							InputProps={{
								// <-- This is where the toggle button is added.
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}
										>
											{showPassword ? (
												<Visibility />
											) : (
												<VisibilityOff />
											)}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
						<Button type="button" variant="contained" fullWidth>
							Log in
						</Button>
					</form>
				</Paper>
			</div>
		</Container>
	)
}

export default LoginScreen
