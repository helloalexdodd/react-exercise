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
	console.log(data)
	return (
		<div className={`weatherCard ${description.includes('clear') ? 'clear' : 'cloud'}`}>
			<h3>{getDay(i)}</h3>
			<img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
			{
				Object.keys(temp).map((key, i) => {
					return temperatureCheck(key)
						? <p key={'temps' + i}>
							{key === 'min' ? 'low' : 'high'}: {temp[key]}{unit === 'metric' ? '°C' : '°F'}
						</p>
						: null
				})
			}
		</div >
	)
};

export default WeatherCard;
