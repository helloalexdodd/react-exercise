import React from 'react';
import '../weather.scss';

const temperatureCheck = (key) => {
	if (key === 'morn' || key === 'day' || key === 'night') return true;
}

const hourCheck = (max) => {
	if (max <= 10) {
		return 'cold'
	}
	if (max >= 11 && max <= 21) {
		return 'warm'
	}
	return 'hot'
}

const WeatherCard = ({ data }) => {
	const { temp, weather } = data;
	return (
		<div className={`weatherCard ${hourCheck(temp.max)}`}>
			<img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" />

			{Object.keys(temp).map((key, i) => temperatureCheck(key) ? <p key={'temps' + i}>{key}: {temp[key]}</p> : null)}
		</div >
	)
};

export default WeatherCard;
