import React from 'react';

const Weather = (props) => {
	const minmaxTemp = (min, max) => {
		return (
			<h3>
				<span className="px-4">{min}&deg;</span>
				<span className="px-4">{max}&deg;</span>
			</h3>
		);
	};

	return (
		<div className="card">
			<h3 className="center">
				{props.city}, {props.country}
			</h3>
			<div className="card-content">
				<h2 className="py-4 center">{props.icon}</h2>
				<h2 className="py-2 center">{props.celsius}&deg;</h2>
				{minmaxTemp(props.temp_min, props.temp_max)}
				<h3 className="py-3">{props.description}</h3>
			</div>
		</div>
	);
};

export default Weather;
