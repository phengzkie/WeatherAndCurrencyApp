import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.css';

import Header from './components/UI/Header';
import Landing from './components/UI/Landing';
import Footer from './components/UI/Footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Landing />
				<Footer />
			</div>
		);
	}
}

export default App;
