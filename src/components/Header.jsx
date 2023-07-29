import darkLogo from '../assets/svg/dark-logo.svg'

function Header() {
	return (
		<div className='w-full bg-primary shadow-[0px_2px_4px_0px_rgba(0, 0, 0, 0.06)]'>
			<div className='sm:px-20 px-4 sm:py-6 py-[30px] flex justify-between items-center'>
				<div>
					<h1 className='text-white sm:text-[24px] text-[14px] font-extrabold leading-normal'>
						Where in the world?
					</h1>
				</div>
				<div className='flex gap-x-2 items-center'>
					<img
						src={darkLogo}
						alt='dark logo'
						className='sm:w-[20px] sm:h-[20px] w-[16px] cursor-pointer'
					/>
					<h3 className='text-white sm:text-[16px] text-[12px] font-[600] leading-normal'>
						Dark Mode
					</h3>
				</div>
			</div>
		</div>
	)
}

export default Header