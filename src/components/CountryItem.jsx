import { styles } from '../util/style'
import { Link } from 'react-router-dom'

function CountryItem({ flags, name, population, region, capital, id }) {
	return (
		<Link to={`/info/${name}`}>
			<div className='w-[264px] bg-primary rounded-[5px] drop-shadow-[0px_0px_7px_2px_rgba(0, 0, 0, 0.03);] cursor-pointer	'>
				<img src={flags} alt='img' className='w-full h-[160px]' />
				<div className='pt-6 pl-6 pb-12'>
					<h3 className='pb-2 text-white	text-[18px] font-[800] leading-[26px]'>
						{name}
					</h3>
					<p className={`${styles.paragrapgItem}`}>
						Population:
						<span className={`${styles.paragrapgItemSpan}`}> {population}</span>
					</p>
					<p className={`${styles.paragrapgItem}`}>
						Region:
						<span className={`${styles.paragrapgItemSpan}`}> {region}</span>
					</p>
					<p className={`${styles.paragrapgItem}`}>
						Capital:
						<span className={`${styles.paragrapgItemSpan}`}> {capital}</span>
					</p>
				</div>
			</div>
		</Link>
	)
}

export default CountryItem
