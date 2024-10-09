import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import countriesService from '../../services/countries.service'
import { ICountryInfo } from '../../types/countries.types'

export function useCountry(countryCode: string) {
	const { data, isSuccess, isLoading, isError, error } = useQuery({
		queryKey: ['country', countryCode],
		queryFn: async () => await countriesService.getCountryInfo(countryCode),
		enabled: !!countryCode,

	})

	const [country, setCountry] = useState<ICountryInfo | undefined>()

	useEffect(() => {
		if (data) {
			setCountry(data)
		}
	}, [data])
	return { country, setCountry, isSuccess, isLoading, isError, error }
}
