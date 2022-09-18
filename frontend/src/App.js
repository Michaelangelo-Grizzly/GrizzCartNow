import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import RegisterScreen from './screens/RegisterScreen'

import Header from './components/Header'
const App = () => {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					<Routes>
						<Route path="/register" element={<RegisterScreen />} />
					</Routes>
				</Container>
			</main>
		</Router>
	)
}

export default App
