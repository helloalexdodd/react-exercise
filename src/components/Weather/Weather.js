import React from 'react';
import WeatherCard from './WeatherCard';
import './weather.scss';

const Weather = ({ data, unit }) => (
	<div className="weather">
		{data.daily.map((day, i) => (
			<WeatherCard key={'weatherCard' + i} data={day} unit={unit} />
		))}
	</div>
);

export default Weather;