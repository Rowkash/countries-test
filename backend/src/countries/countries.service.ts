import { Injectable, NotFoundException } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { ICountryBorderItem, ICountryInfo } from './interfaces'

export interface ICountry {
	name: string
	borders: ICountryBorderItem[]
	flag?: string
	population?: [year: number, value: number]
}

@Injectable()
export class CountriesService {
	nagerUrl: string
	countriesnowUrl: string

	constructor(private readonly httpService: HttpService) {
		this.nagerUrl = process.env.NAGER_URL
		this.countriesnowUrl = process.env.COUNTRIESNOW_URL
	}

	async findAll() {
		const { data } = await this.httpService.axiosRef.get(
			`${this.nagerUrl}/AvailableCountries`
		)
		return data
	}

	async findOne(countryCode: string) {
		const countryInfo = await this.getCountryInfo(countryCode)
		if (!countryInfo) throw new NotFoundException('Country not found')
		const country: ICountry = { ...countryInfo }
		const countryFlag = await this.getCountryFlag(countryCode)
		if (countryFlag) country.flag = countryFlag

		const population = await this.getCountryPopulation(country.name)
		if (population) country.population = population
		return country
	}

	private async getCountryFlag(countryCode: string) {
		try {
			const { data } = await this.httpService.axiosRef.post(
				`${this.countriesnowUrl}/countries/flag/images`,
				{
					iso2: countryCode
				}
			)
			return data.data.flag
		} catch (error) {
			console.error(error.message)
			return null
		}
	}

	private async getCountryInfo(countryCode: string) {
		try {
			const { data } = await this.httpService.axiosRef.get<ICountryInfo>(
				`${this.nagerUrl}/CountryInfo/${countryCode}`
			)
			return { name: data.commonName, borders: data.borders }
		} catch (error) {
			console.error(error.message)
			return null
		}
	}

	private async getCountryPopulation(country: string) {
		try {
			const { data } = await this.httpService.axiosRef.post(
				`${this.countriesnowUrl}/countries/population`,
				{
					country
				}
			)
			return data.data?.populationCounts
		} catch (error) {
			console.error(error.message)
			return null
		}
	}
}
