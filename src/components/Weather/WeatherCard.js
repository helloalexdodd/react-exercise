import React from 'react';
import { getDay } from '../../utilities';
import './weather.scss';

const temperatureCheck = (key) => {
	if (key === 'max'
		|| key === 'min'
	) return true;
}

const WeatherCard = ({ data, unit, i }) => {
	const { temp, weather } = data;
	const { description, icon } = weather[0];
	return (
		<li className={`weatherCard ${description.includes('clear') ? 'clear' : 'cloudy'}`}>
			<h4>{getDay(i)}</h4>
			<img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
			{
				Object.keys(temp).map((key, i) => {
					return temperatureCheck(key)
						? <p key={'temps' + i}>
							{key === 'min' ? 'low' : 'high'}: {temp[key]}{unit === 'metric' ? '°C' : '°F'}
						</p>
						: null
				})
			}
		</li >
	)
};

export default WeatherCard;
