import { Link } from 'react-router-dom'

function ListItem({
	name,
	countryCode
}: {
	name: string
	countryCode: string
}) {
	return (
		<>
			<Link to={`country/${countryCode}`}>
				<li className='px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out'>
					{name} ({countryCode})
				</li>
			</Link>
		</>
	)
}

export default ListItem
