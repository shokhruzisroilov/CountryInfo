import { Search, Main, Filter } from '../components'
import { useContext } from 'react'
import { CountryContext } from '../context/Context'

function HomePage() {
	const { countryData } = useContext(CountryContext)

	return (
		<>
			<div className='bg-bgBlack sm:px-20 px-4 py-12 sm:flex-row flex flex-col gap-y-10 justify-between items-start'>
			<Search />
			<Filter />
			</div>
			<Main countryData={countryData} />
		</>
	)
}

export default HomePage
