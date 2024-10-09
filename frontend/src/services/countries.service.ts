import { ICountriesListItem, ICountryInfo } from '../types/countries.types'
import axios from './axios'

class CountriesService {
	async getAllAvailableCountries() {
		try {
			const { data } = await axios.get<ICountriesListItem[]>('/countries')
			return data
		} catch (error: any) {
			throw error.response.data
		}
	}

	async getCountryInfo(code: string) {
		try {
			const { data } = await axios.get<ICountryInfo>(`/countries/${code}`)
			return data
		} catch (error: any) {
			throw error.response.data
		}
	}
}

export default new CountriesService()
