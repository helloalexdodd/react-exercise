import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Weather from './components/Weather';
import Wrapper from './components/Wrapper';
import { getData, WEATHER_API_URL, GEO_API_URL } from './utilities';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			userInput: '',
			lng: '',
			lat: '',
			weatherData: {},
			units: 'metric',
		}
	};

	getWeather = () => {
		const url = WEATHER_API_URL(this.state.lat, this.state.lng, this.state.units)
		getData(url).then((weatherData) => {
			console.log(weatherData)
			this.setState({ weatherData }, () => {
				this.setState({ userInput: '' });
			});
		});
	};

	saveLocation = (data) => {
		const latLng = data.results[0].locations[0].latLng
		this.setState({
			lng: latLng.lng,
			lat: latLng.lat
		}, this.getWeather);
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const url = GEO_API_URL(this.state.userInput);
		getData(url).then((data) => this.saveLocation(data))
	};

	handleChange = (userInput) => this.setState({ userInput });

	render() {
		return (
			<Wrapper>
				<Header />
				<Form
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
					value={this.state.userInput}
				/>
				{this.state.weatherData.daily ? <Weather data={this.state.weatherData} /> : null}
			</Wrapper>
		);
	};
};

export default App;
