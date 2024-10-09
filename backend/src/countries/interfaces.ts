export interface ICountriesListItem {
	countryCode: string
	name: string
}

export interface ICountryInfo {
	commonName: string
	officialName: string
	countryCode: string
	region: string
	borders: ICountryBorderItem[]
}

export interface ICountryBorderItem {
	commonName: string
	officialName: string
	countryCode: string
	region: string
	borders: any
}

export interface ICountryFlag {
	name: string
	flag: string
	iso2: string
	iso3: string
}
