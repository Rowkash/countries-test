import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Country from './pages/Country'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='country/:code' element={<Country />} />
			</Routes>
		</>
	)
}

export default App
