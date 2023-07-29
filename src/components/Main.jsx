import CountryItem from "./CountryItem"

function Main({ countryData }) {

	return (
		<div className='min-h-[100vh]  bg-bgBlack sm:px-20 px-4 text-white pb-[45px] flex justify-center flex-wrap gap-20'>
			{countryData &&
				countryData.map((data, id) => {
					return (
						<CountryItem
							key={id}
							flags={data.flags.png}
							name={data.name.common}
							population={data.population}
							region={data.region}
							capital={data.capital}
						/>
					)
				})}
		</div>
	)
}

export default Main