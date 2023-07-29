import searchLogo from '../assets/svg/search.svg'
import { useContext } from 'react'
import { CountryContext } from '../context/Context'

function Search() {
	const { searchCountryData } = useContext(CountryContext)

	return (
		<div className='bg-primary sm:w-[480px] w-full flex  gap-x-6 px-8 py-[18px] shadow-[0px_2px_9px_0px_rgba(0, 0, 0, 0.05] rounded-[5px]'>
			<img src={searchLogo} alt='search logo' className='cursonr-pointer' />
			<input
				type='text'
				placeholder='Search for a country…'
				className='w-full bg-primary border-none outline-none text-white text-[14px] font-normal leading-[20px]'
				onChange={e => {
					searchCountryData(e.target.value)
				}}
			/>
		</div>
	)
}

export default Search
