import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="page-footer light-blue">
					<div className="container">
						<div className="row">
							<div className="col l6 s12">
								<h5 className="white-text">About the Project</h5>
								<p className="grey-text text-lighten-4">
									A Simple Project that calls an outside API for OpenWeatherMap and Currency.
								</p>
							</div>
							<div className="col l3 s12" />
							<div className="col l3 s12">
								<h5 className="white-text">Find me on.</h5>
								<ul>
									<li>
										<a className="white-text" href="https://www.facebook.com/pHenGzkie">
											<i className="fab fa-facebook-square fa-2x" />
										</a>
									</li>
									<li>
										<a className="white-text" href="https://www.facebook.com/pHenGzkie">
											<i className="fab fa-linkedin fa-2x" />
										</a>
									</li>
									<li>
										<a className="white-text" href="https://github.com/phengzkie">
											<i className="fab fa-github-square fa-2x" />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="footer-copyright">
						<div className="container">
							Made by <span className="orange-text text-lighten-3">Alfie Osayan</span>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer;
