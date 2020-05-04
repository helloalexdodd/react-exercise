import React from 'react';
import WeatherCard from './WeatherCard';
import './weather.scss';

const Weather = ({ data, unit }) => (
	<ul className="weather">
		{console.log(data)}
		{data.daily.map((day, i) => (
			<WeatherCard
				key={'weatherCard' + i}
				data={day}
				unit={unit}
				i={i}
			/>
		))}
	</ul>
);

export default Weather;