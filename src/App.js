import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Weather from './components/Weather';
import Wrapper from './components/Wrapper';
import { getData } from './utilities';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			userInput: '',
			lng: '',
			lat: '',
			weatherData: {},
			unit: 'metric',
		}
	};

	saveLocation = (data) => {
		const latLng = data.results[0].locations[0].latLng
		this.setState({
			lng: latLng.lng,
			lat: latLng.lat
		}, this.getWeather);
	};

	getWeather = () => {
		const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${this.state.unit}`
		getData(url).then((weatherData) => this.setState({ weatherData }));
	};

	getGeo = () => {
		const url = `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_GEO_API_KEY}&location=${this.state.userInput}}`;
		getData(url).then((data) => this.saveLocation(data))
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(process.env.REACT_APP_GEO_API_KEY);
		console.log(process.env.REACT_APP_WEATHER_API_KEY);
		this.getGeo();
	};

	handleChange = (userInput) => {
		if (userInput === 'imperial' || userInput === 'metric') {
			this.setState({ unit: userInput }, () => this.getWeather());
			return;
		}
		this.setState({ userInput });
	};

	handleFocus = () => this.setState({ userInput: '' })

	render() {
		return (
			<Wrapper>
				<Header />
				<Form
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
					handleFocus={this.handleFocus}
					value={this.state.userInput}
				/>
				{this.state.weatherData.daily
					? <Weather
						data={this.state.weatherData}
						unit={this.state.unit}
					/>
					: null}
			</Wrapper>
		);
	};
};

export default App;
