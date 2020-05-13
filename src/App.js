import React from 'react';
import './styles/global.scss'
import Form from './components/Form';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Weather from './components/Weather';
import Footer from './components/Footer';
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
			city: '',
		}
	};

	getCity = () => {
		const url = `http://open.mapquestapi.com/geocoding/v1/reverse?key=${process.env.REACT_APP_GEO_API_KEY}&location=${this.state.lat},${this.state.lng}`;
		getData(url).then((data) => {
			const city = data.results[0].locations[0].adminArea5;
			this.setState({ city });
		});
	}

	getWeather = () => {
		const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${this.state.unit}`
		getData(url).then((weatherData) => this.setState({ weatherData }, this.getCity));
	};

	saveLocation = (data) => {
		const latLng = data.results[0].locations[0].latLng
		this.setState({
			lng: latLng.lng,
			lat: latLng.lat
		}, this.getWeather);
	};

	getGeo = () => {
		const url = `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_GEO_API_KEY}&location=${this.state.userInput}}`;
		getData(url).then((data) => this.saveLocation(data))
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.getGeo();
	};

	handleChange = (e, userInput) => {
		console.log({e});
		console.log({userInput});
		if (userInput === 'imperial' || userInput === 'metric') {
			this.setState({ unit: userInput }, () => this.getWeather());
			return;
		}
		this.setState({ userInput });
	};

	handleFocus = () => this.setState({ userInput: '' });

	render() {
		return (
			<Wrapper>
				<Header />
				<main>
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
							city={this.state.city}
						/>
						: null}
				</main>
				<Footer />
			</Wrapper>
		);
	};
};

export default App;
