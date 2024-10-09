export interface ICountriesListItem {
	countryCode: string
	name: string
}

export interface ICountryInfo {
	name: string
	borders: ICountryBorderItem[]
	flag?: string
	population?: ICountryPopulation[]
}

export interface ICountryPopulation {
	year: number
	value: number
}

export interface ICountryBorderItem {
	commonName: string
	officialName: string
	countryCode: string
	region: string
	borders: null
}
