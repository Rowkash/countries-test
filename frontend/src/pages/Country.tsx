import { Link, useParams } from 'react-router-dom'
import { useCountry } from '../hooks/countries/useCountry'
import Spinner from '../components/Spinner'
import PopulationChart from '../components/Chart'
import { ICountryBorderItem } from '../types/countries.types'

export default function Country() {
	const { code = '' } = useParams<string>()
	const { country, isLoading, error, isError } = useCountry(code)

	if (isLoading) return <Spinner />
	if (isError) {
		// console.log(error)
    return <p>Ошибка: {error?.message || 'Не удалось загрузить данные о стране'}</p>;
  }

  if (!country) {
    return <p>Страна не найдена</p>;
  }
	// if (!country) return null

	return (
		<div className='p-8 w-full mx-auto'>
			<div className='flex items-center mb-8'>
				<h1 className='text-3xl font-bold'>{country.name}</h1>
				{country.flag && (
					<img
						className='ml-4 w-12 h-12 rounded-full shadow-lg'
						src={country.flag}
						alt={country.name}
					/>
				)}
			</div>

			{country.population && (
				<div className='mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Population</h2>
					<PopulationChart data={country.population} />
				</div>
			)}

			{country.borders && country.borders.length > 0 && (
				<div>
					<h2 className='text-2xl font-semibold mb-4'>Bordering countries</h2>
					<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
						{country.borders.map(
							(neighbor: ICountryBorderItem, idx: number) => (
								<Link to={`/country/${neighbor.countryCode}`} key={idx}>
									<div className='border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center'>
										<span className='text-lg font-medium'>
											{neighbor.commonName}
										</span>
									</div>
								</Link>
							)
						)}
					</div>
				</div>
			)}
		</div>
	)
}
