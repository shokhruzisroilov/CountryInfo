import { CountryContext } from '../context/Context'
import { useContext } from 'react'

function Filter() {
	const { filteByRegion } = useContext(CountryContext)

	const selectHandler = e => {
		const reginName = e.target.value
		filteByRegion(reginName)
	}

	return (
		<>
			<select
				onChange={selectHandler}
				className='bg-primary shadow-shadowFilter rounded-[5px] px-6 py-[18px] text-white text-[14px] font-normal leading-[20px] outline-none'
			>
				<option value='All'>All Region</option>
				<option value='Asia'>Asia</option>
				<option value='Europe'>Europe</option>
				<option value='Africa'>Africa</option>
				<option value='Americas'>Americas</option>
				<option value='Oceania'>Oceania</option>
			</select>
		</>
	)
}

export default Filter
