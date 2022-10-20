import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import StoreMallDirectoryTwoToneIcon from '@mui/icons-material/StoreMallDirectoryTwoTone'
import Link from '@mui/material/Link'
import { Link as ReactLink } from 'react-router-dom'
import { logout } from '../actions/userActions'

const Header = () => {
	const [anchorElUser, setAnchorElUser] = React.useState(null)
	const dispatch = useDispatch()

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const logoutHandler = () => {
		dispatch(logout())
	}

	const handleUserMenu = (event) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorElUser(null)
	}

	return (
		<header>
			<AppBar color="primary" position="static" enableColorOnDark>
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<StoreMallDirectoryTwoToneIcon
							sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
						/>
						<Typography
							variant="h6"
							noWrap
							component="a"
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'cursive',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							<Link
								component={ReactLink}
								color="inherit"
								underline="none"
								to="/"
							>
								GrizzCartNow
							</Link>
						</Typography>
						<Typography
							variant="h6"
							noWrap
							component="a"
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'menlo',
								fontWeight: 150,
								letterSpacing: '.1rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							<Link
								component={ReactLink}
								color="inherit"
								underline="none"
								to="/category"
							>
								Category
							</Link>
						</Typography>

						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'none', md: 'flex' },
							}}
						></Box>

						<div>
							{userInfo ? (
								<>
									<Tooltip title="Open settings">
										<IconButton
											onClick={handleUserMenu}
											sx={{ p: 0 }}
										>
											<Avatar
												alt="Jm"
												src="/static/images/avatar/2.jpg"
												sx={{
													height: '30px',
													width: '30px',
												}}
											/>
										</IconButton>
									</Tooltip>
									<Menu
										id="menu-appbar"
										anchorEl={anchorElUser}
										anchorOrigin={{
											vertical: 'bottom',
											horizontal: 'left',
										}}
										keepMounted
										transformOrigin={{
											vertical: 'top',
											horizontal: 'left',
										}}
										open={Boolean(anchorElUser)}
										onClose={handleClose}
									>
										<MenuItem onClick={handleClose}>
											Profile
										</MenuItem>
										<MenuItem onClick={handleClose}>
											My account
										</MenuItem>
										<MenuItem onClick={logoutHandler}>
											Logout
										</MenuItem>
									</Menu>
								</>
							) : (
								<Link
									component={ReactLink}
									sx={{ mx: '15px' }}
									color="secondary"
									underline="none"
									to="/login"
								>
									Sign in
								</Link>
							)}
						</div>
					</Toolbar>
				</Container>
			</AppBar>
		</header>
	)
}
export default Header
