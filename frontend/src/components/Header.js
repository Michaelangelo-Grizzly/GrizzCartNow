import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import StoreMallDirectoryTwoToneIcon from '@mui/icons-material/StoreMallDirectoryTwoTone'
import { Link as LinkUi } from '@mui/material'
import { Link } from 'react-router-dom'

const pages = ['Products', 'Pricing', 'Blog']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const Header = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null)
	const [anchorElUser, setAnchorElUser] = React.useState(null)

	const handleOpenNavMenu = event => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = event => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
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
							href="/"
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							GrizzCartNow
						</Typography>

						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'flex', md: 'none' },
							}}
						>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								fontSize="small"
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}
							>
								{pages.map(page => (
									<MenuItem
										key={page}
										onClick={handleCloseNavMenu}
									>
										<Typography textAlign="center">
											{page}
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>

						<Typography
							variant="h5"
							noWrap
							component="a"
							href=""
							sx={{
								mr: 2,
								display: { xs: 'flex', md: 'none' },
								flexGrow: 1,
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							LOGO
						</Typography>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'none', md: 'flex' },
							}}
						>
							{pages.map(page => (
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										color: 'white',
										display: 'block',
									}}
								>
									{page}
								</Button>
							))}
						</Box>

						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Open settings">
								<IconButton
									onClick={handleOpenUserMenu}
									sx={{ p: 0 }}
								>
									<Avatar
										alt="Jm"
										src="/static/images/avatar/2.jpg"
										sx={{ height: '30px', width: '30px' }}
									/>
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: '45px' }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{settings.map(setting => (
									<MenuItem
										key={setting}
										onClick={handleCloseUserMenu}
									>
										<Typography textAlign="center">
											{setting}
										</Typography>
									</MenuItem>
								))}
							</Menu>
							<LinkUi
								component={Link}
								sx={{ mx: '15px' }}
								color="secondary"
								underline="none"
								to="/login"
							>
								Sign in
							</LinkUi>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</header>
	)
}
export default Header
