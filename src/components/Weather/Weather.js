import React from 'react';
import WeatherCard from './WeatherCard';
import './weather.scss';

const Weather = ({
	data, unit, city
}) => (
		<div>
			<h3>{city}</h3>
			<ul className="weather">
				{data.daily.map((day, i) => (
					<WeatherCard
						key={'weatherCard' + i}
						data={day}
						unit={unit}
						city={city}
						i={i}
					/>
				))}
			</ul>

		</div>
	);

export default Weather;