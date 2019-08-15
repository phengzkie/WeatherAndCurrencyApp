import React, { Component } from 'react';

import Weather from '../Weather/Weather';
import Currency from '../Currency/Currency';

import Axios from 'axios';

const API_KEY = '800869c5db905379fa600af725ed7d08';

class Landing extends Component {
	state = {
		city: null,
		country: null,
		icon: null,
		main: null,
		celsius: null,
		temp_max: null,
		temp_min: null,
		description: '',
		error: false
	};

	convertToCelsius(temp) {
		// default unit of temp is Kelvin.
		return Math.floor(temp - 273.15);
	}

	getIconImage(id) {
		let iconUrl = `http://openweathermap.org/img/wn/${id}@2x.png`;
		return <img src={iconUrl} alt="icon" />;
	}

	getWeather = () => {
		Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Manila&appid=${API_KEY}`).then((res) => {
			console.log(res.data);
			const data = res.data;

			this.setState({
				city: data.name,
				country: data.sys.country,
				icon: this.getIconImage(data.weather[0].icon),
				celsius: this.convertToCelsius(data.main.temp),
				temp_max: this.convertToCelsius(data.main.temp_max),
				temp_min: this.convertToCelsius(data.main.temp_min),
				description: data.weather[0].description
			});
		});
	};

	componentDidMount() {
		this.getWeather();
	}
	render() {
		return (
			<div>
				<div className="section no-pad-bot" id="index-banner">
					<div className="container">
						<div className="row">
							<div className="col s6">
								<div className="icon-block">
									<h5 className="center">Weather Forecast</h5>
									<Weather
										city={this.state.city}
										country={this.state.country}
										icon={this.state.icon}
										celsius={this.state.celsius}
										temp_max={this.state.temp_max}
										temp_min={this.state.temp_min}
										description={this.state.description}
									/>
								</div>
							</div>
							<div className="col s6">
								<div className="icon-block">
									<h5 className="center">Currency Conversion</h5>
									<Currency />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;
