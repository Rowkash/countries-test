import ListItem from '../components/ListItem'
import Spinner from '../components/Spinner'
import { useCountries } from '../hooks/countries/useCountries'

function Home() {
	const { data } = useCountries()

	if (!data) return <Spinner />

	return (
		<div className='mt-32'>
			<div className='px-4 sm:px-8 max-w-5xl m-auto'>
				<ul className='border border-gray-200 rounded overflow-hidden shadow-md'>
					{data?.map((el, idx) => {
						return (
							<ListItem
								key={idx}
								name={el.name}
								countryCode={el.countryCode}
							></ListItem>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Home
