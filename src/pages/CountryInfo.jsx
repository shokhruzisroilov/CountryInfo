import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { CountryContext } from '../context/Context'
import backArrow from '../assets/svg/back-arrow.svg'
import { styles } from '../util/style'

function CountryInfo() {
	const { countryData, setCountryData } = useContext(CountryContext);
	let {countryName} = useParams()
	const dataFilter = countryData.filter((item) => {
		if(countryName === item.name.common){
			return item
		}
	})

	return (
		dataFilter &&
		dataFilter.map((data, id) => {
			return (
				<React.Fragment key={id}>
					<div className='sm:px-20 px-4'>
						<Link to='/'>
							<button className='w-[136px] h-10 bg-primary flex items-center justify-center gap-x-[10px] my-20 rounded-[6px] drop-shadow-[0px_0px_7px_10px_rgba(0, 0, 0, 0.29)] text-white text-[16px] leading-[20] font-normal'>
								<span>
									<img src={backArrow} alt='back arrow' />
								</span>
								Back
							</button>
						</Link>
						<div className='flex md:flex-row flex-col gap-y-10 justify-center lg:gap-x-[120px] gap-x-10 md:items-center sm:items-start items-center mb-20'>
							<img
								src={data.flags.png}
								alt='country img'
								className='max-w-[560px] w-full lg:min-h-[400px]'
							/>
							<div className='max-w-[574px]'>
								<h3 className='text-white sm:text-[32px] text-[22px] font-[800] leading-normal'>
									{data.name.common}
								</h3>
								<div className='md:flex xs:flex gap-x-[120px] pt-5'>
									<div className=''>
										<p className={`${styles.paragrapInfo}`}>
											Native Name:{' '}
											<span className={`${styles.paragrapInfoSpan}`}>
												{data.name.official}{' '}
											</span>
										</p>
										<p className={`${styles.paragrapInfo}`}>
											Population:{' '}
											<span className={`${styles.paragrapInfoSpan}`}>
												{data.population}{' '}
											</span>
										</p>
										<p className={`${styles.paragrapInfo}`}>
											Region:{' '}
											<span className={`${styles.paragrapInfoSpan}`}>
												{data.region}{' '}
											</span>
										</p>
										<p className={`${styles.paragrapInfo}`}>
											Sub Region:{' '}
											<span className={`${styles.paragrapInfoSpan}`}>
												{data.subregion}{' '}
											</span>
										</p>
										<p className={`${styles.paragrapInfo}`}>
											Capital:{' '}
											<span className={`${styles.paragrapInfoSpan}`}>
												{data.capital}{' '}
											</span>
										</p>
									</div>
									<div>
										<p className={`${styles.paragrapInfo}`}>
											Top Leavel Domain:{' '}
											<span className={`${styles.paragrapInfoSpan}`}>
												{data.tld}{' '}
											</span>
										</p>
										<p className={`${styles.paragrapInfo}`}>
											Currencies:{' '}
											<span className={`${styles.paragrapInfoSpan}`}>
												{Object.keys(data.currencies)}{' '}
											</span>
										</p>
										<p className={`${styles.paragrapInfo}`}>
											Languages:{' '}
											<span className={`${styles.paragrapInfoSpan}`}>
												{Object.keys(data.languages)}{' '}
											</span>
										</p>
									</div>
								</div>
								<div className='pt-[70px] flex items-center gap-x-4'>
									<p className={`${styles.paragrapInfo}`}>BorderCountries: </p>
									<div className='flex flex-wrap gap-[10px]'>
										{data.borders && data.borders.map((item, id) => {
											return (
												<React.Fragment key={id}>
													<span
														className={`${styles.paragrapInfoSpan} ${styles.spanInfo}`}
													>
														{item}
													</span>
												</React.Fragment>
											)
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</React.Fragment>
			)
		})
	)
}

export default CountryInfo
