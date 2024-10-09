import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer
} from 'recharts'
import { ICountryPopulation } from '../types/countries.types'

interface IProps {
	data: ICountryPopulation[]
}

function PopulationChart({ data }: IProps) {
	const formatPopulation = (value: number) => {
		if (value >= 1000000) {
			return (value / 1000000).toFixed(2) + 'M'
		} else if (value >= 1000) {
			return (value / 1000).toFixed(2) + 'K'
		}
		return value.toString()
	}

	return (
		<div className='w-full h-96'>
			<ResponsiveContainer width='100%' height='100%'>
				<LineChart
					data={data}
					margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='year' />
					<YAxis
						dataKey='value'
						tickFormatter={formatPopulation}
						tick={{ fontSize: 13 }}
						width={70}
					/>
					<Tooltip />
					<Line type='monotone' dataKey='value' stroke='#8884d8' />
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}

export default PopulationChart
