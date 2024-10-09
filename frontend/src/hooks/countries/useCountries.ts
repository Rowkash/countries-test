import { useQuery } from '@tanstack/react-query'
import countriesService from '../../services/countries.service'

export function useCountries() {
	return useQuery({
		queryKey: ['countries'],
		queryFn: async () => countriesService.getAllAvailableCountries()
	})
}
