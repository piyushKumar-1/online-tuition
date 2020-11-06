import React, { Fragment, Component } from 'react'
import '../styles/Header.css'
import Login from './users/Login.js'
import Register from './users/Register.js'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../actions/authAction.js';
import { HOST } from '../actions/types';

export class Header extends Component {


	static propTypes= {
		logoutUser: PropTypes.func.isRequired,

	};


	render() {


		return (
			<Fragment>



				<div className="navbar navbar-light bg-light">
					<div className="cus_container">
						<div className="right ml-auto">
		                    <button onClick={this.props.logoutUser} className="btn logbtn btn-ouline-dark"><i className="fa fa-sign-out black"></i>&nbsp;Logout</button>
						</div>
					</div>
				</div>
				<nav className="navbar shadow navbar-expand-lg sticky-top navbar-dark bg-navy high-z">
					<div className="cus_container">

							<Link to="/" className="navbar-brand"><img className="logo" src={HOST+"/static/frontend/logo.png"} alt="Learnerz Corner" width="180"/></Link>

						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="nav navbar-nav ml-auto">
							<li className="nav-item" id="home">
								<Link to="/" className="nav-link">Home</Link>
							</li>


							<li className="nav-item" id="practices">
								<Link to="/practices" className="nav-link">Our Practices</Link>
							</li>
							<li className="nav-item" id="join">
								<Link to="/join" className="nav-link">Become An Instructor</Link>
							</li>
							<li className="nav-item" id="contact">
								<Link to="/contact" className="nav-link">Contact Us</Link>
							</li>
						</ul>
						</div>
					</div>
				</nav>

			</Fragment>
		)
	}
}

const mapStateToProps= state => ({
	auth :state.auth,
})


export default connect(mapStateToProps, { logoutUser })(Header);
