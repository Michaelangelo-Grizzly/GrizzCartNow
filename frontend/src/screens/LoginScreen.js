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
import MuiAlert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const LoginScreen = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)

	const handleClickShowPassword = () => setShowPassword(!showPassword)
	const handleMouseDownPassword = () => setShowPassword(!showPassword)

	const userLogin = useSelector(state => state.userLogin)
	const { loading, error, userInfo } = userLogin

	console.log('Userifo', userInfo)
	console.log('Credentials', email, password)

	const redirect = location.search ? location.search.split('=')[1] : '/'

	const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
	})

	// useEffect(() => {
	// 	if (!userInfo) {
	// 		navigate(redirect)
	// 	}
	// }, [navigate, userInfo, redirect])

	const submitSignIn = e => {
		e.preventDefault()
		dispatch(login(email, password))
		navigate('/')
	}

	return (
		<Container>
			<div style={{ padding: 30 }}>
				<Paper>
					{error && <Alert severity="error">{error}</Alert>}
					{loading && <CircularProgress />}
					<form className="form" onSubmit={submitSignIn}>
						<h2>Sign in</h2>
						<TextField
							id="outlined-basic"
							label="Email"
							variant="outlined"
							style={{ margin: 15 }}
							value={email}
							onChange={e => setEmail(e.target.value)}
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
						<Button
							type="submit button"
							variant="contained"
							fullWidth
						>
							Log in
						</Button>

						<Grid style={{ margin: 15 }}>
							New Customer?
							<Link
								to={
									redirect
										? `/register?redirect=${redirect}`
										: `/register`
								}
							>
								Register
							</Link>
						</Grid>
					</form>
				</Paper>
			</div>
		</Container>
	)
}

export default LoginScreen
