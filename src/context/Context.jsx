import React, { useCallback } from 'react'
import countryServices from '../services/CountryServices'
import { useState, useEffect } from 'react'
export const CountryContext = React.createContext()

export const CountryContextProvider = ({ children }) => {
	const [countryData, setCountryData] = useState([])
	useEffect(() => {
		countryServices.getCountry(`${'/all'}`).then(data => {
			setCountryData(data)
		})
	}, [])
	//search country 
	const searchCountryData = searchValue => {
		if (searchValue.length > 0) {
			let searchData = countryData.filter(item =>
				item.name.common.toLowerCase().includes(searchValue.toLowerCase())
			)
			setCountryData(searchData)
		} else {
			countryServices.getCountry(`${'/all'}`).then(data => {
				setCountryData(data)
			})
		}
	}
	// filter country
	const filteByRegion = filterValue => {
		if (filterValue !== 'All') {
			countryServices.getCountry(`${'/all'}`).then(data => {
				let searchData = data.filter(
					item => item.region.toLowerCase() === filterValue.toLowerCase()
				)
				setCountryData(searchData)
			})
		} else {
			countryServices.getCountry(`${'/all'}`).then(data => {
				setCountryData(data)
			})
		}
	}
	
	return (
		<CountryContext.Provider
			value={{ countryData, setCountryData, searchCountryData, filteByRegion }}
		>
			{children}
		</CountryContext.Provider>
	)
}
