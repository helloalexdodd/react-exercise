import React from 'react';
import './weather.scss';

const temperatureCheck = (key) => {
	if (key === 'morn' || key === 'day' || key === 'night') return true;
}

const weatherCheck = (weather) => {
	if (weather.includes('clear')) {
		return 'clear'
	}
	if (weather.includes('cloud')) {
		return 'cloud'
	}
	return 'sun'
}

const WeatherCard = ({ data, unit }) => {
	const { temp, weather } = data;
	const unitOfMeasure = unit === 'metric' ? '°C' : '°F';
	return (
		<div className={`weatherCard ${weatherCheck(weather.description)}`}>
			<img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" />
			{
				Object.keys(temp).map((key, i) => {
					return temperatureCheck(key)
						? <p key={'temps' + i}>{key}: {temp[key]}{unitOfMeasure}</p>
						: null
				})
			}
		</div >
	)
};

export default WeatherCard;
