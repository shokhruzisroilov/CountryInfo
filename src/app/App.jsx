import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import CountryInfo from "../pages/CountryInfo"
import Layout from "../layout/Layout"
import {CountryContextProvider} from '../context/Context'
function App() {
	
  return (
		<>
			<CountryContextProvider>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path='/info/:countryName' element={<CountryInfo />} />
					</Route>
				</Routes>
			</CountryContextProvider>
		</>
	)
}

export default App
