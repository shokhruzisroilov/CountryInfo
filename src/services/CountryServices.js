class CountryServices {
	baseUrl  = 'https://restcountries.com/v3.1'
	getData = async (api) => {
		let res = fetch(`${this.baseUrl}${api}`)

		if(res.ok){
			throw new Error("Error")
		}
		return (await res).json()
	}

	getCountry = (url)  => {
		return this.getData(url)
	}
}

export default new CountryServices