import React from 'react';
import WeatherCard from './WeatherCard';
import './weather.scss';

const Weather = ({ data }) => {
	// const splitTimezone = data.timezone.split('/');
	// const city = splitTimezone[splitTimezone.length - 1];
	console.log(data.daily)
	return (
		<div className="weather">
			{/* <h3>{city}</h3> */}
			{data.daily.map((day, i) => (
				<WeatherCard key={'weatherCard' + i} data={day} />
			))}
		</div>
	)
};

export default Weather;