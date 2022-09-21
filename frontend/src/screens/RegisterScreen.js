import React, { useState, useEffect } from 'react'
import {
	Grid,
	Container,
	Paper,
	TextField,
	Button,
	IconButton,
	InputAdornment,
} from '@mui/material'
import { IMaskInput } from 'react-imask'
import MuiAlert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const RegisterScreen = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const [email, setEmail] = useState('')
	const [cellPhoneNumber, setCellPhoneNumber] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)

	const handleClickShowPassword = () => setShowPassword(!showPassword)
	const handleMouseDownPassword = () => setShowPassword(!showPassword)
	const handleClickShowConfirmPassword = () =>
		setShowConfirmPassword(!showConfirmPassword)
	const handleMouseDownConfirmPassword = () =>
		setShowConfirmPassword(!showConfirmPassword)

	const userRegister = useSelector(state => state.userRegister)
	const { loading, error, userInfo } = userRegister

	const redirect = location.search ? location.search.split('=')[1] : '/'

	const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
	})

	useEffect(() => {
		if (userInfo) {
			navigate(redirect)
		}
	}, [navigate, userInfo, redirect])

	const submitSignIn = e => {
		e.preventDefault()
	}

	return (
		<Container>
			<div style={{ padding: 30 }}>
				<Paper>
					{error && <Alert severity="error">{error}</Alert>}
					{loading && <CircularProgress />}
					<form className="form" onSubmit={submitSignIn}>
						<h2>Register</h2>
						<TextField
							id="outlined-basic"
							label="Input Email"
							variant="outlined"
							style={{ margin: 15 }}
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
						<IMaskInput
							mask={Number}
							value={cellPhoneNumber}
							style={{ margin: 15, padding: 20 }}
							onChange={e => setCellPhoneNumber(e.target.value)}
							placeholder="Cellphone number"
						/>
						<TextField
							label="Password"
							variant="outlined"
							value={password}
							onChange={e => setPassword(e.target.value)}
							type={showPassword ? 'text' : 'password'}
							style={{ margin: 15 }}
							InputProps={{
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
						<TextField
							label="Confirm Password"
							variant="outlined"
							value={confirmPassword}
							onChange={e => setConfirmPassword(e.target.value)}
							type={showConfirmPassword ? 'text' : 'password'}
							style={{ margin: 15 }}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={
												handleClickShowConfirmPassword
											}
											onMouseDown={
												handleMouseDownConfirmPassword
											}
										>
											{showConfirmPassword ? (
												<Visibility />
											) : (
												<VisibilityOff />
											)}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
						<Button
							type="submit button"
							variant="contained"
							fullWidth
						>
							Register
						</Button>

						<Grid style={{ margin: 15 }}>
							Already have an account?
							<Link
								to={
									redirect
										? `/login?redirect=${redirect}`
										: '/login'
								}
							>
								Login
							</Link>
						</Grid>
					</form>
				</Paper>
			</div>
		</Container>
	)
}

export default RegisterScreen
