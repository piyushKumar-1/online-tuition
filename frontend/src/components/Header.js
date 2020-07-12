import React, { Fragment, Component } from 'react'
import '../styles/Header.css'
import Login from './users/Login.js'
import Register from './users/Register.js'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../actions/authAction.js';

export class Header extends Component {
	static propTypes= {
		auth: PropTypes.object.isRequired,
		logoutUser: PropTypes.func.isRequired,
	};

	render() {
		
		const { isAuthenticated, user } = this.props.auth;
		const authLinks = (
                    <button onClick={this.props.logoutUser} className="btn logbtn btn-ouline-dark"><i className="fa fa-sign-out black"></i>&nbsp;Logout</button>
					
			)

		const modal = (
		    <Fragment>

				    <button type="button" className="btn logbtn btn-ouline-dark" data-toggle="modal" data-target="#loginModal"><i className="fa fa-sign-in black"></i>&nbsp;Login</button>
                    <button type="button" className="btn logbtn btn-ouline-dark" data-toggle="modal" data-target="#registerModal"><i className="fa fa-user-plus black"></i>&nbsp;Register</button>
                    
                    <div>
					    <div className="modal fade m-auto" id="loginModal" role="dialog">
					        <div className="modal-dialog">
					            <div className="modal-content m-auto">
				                    <button type="button" className="close mt-2 mr-3 text-right" data-dismiss="modal">&times;</button>
					                <div className="model-body">
					                  <Login />
					                </div>
					                <div className="modal-footer">
					                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
				              	    </div>
				              	</div>
				          	</div>
				        </div>
				    </div>
				    <div>
					    <div className="modal fade m-auto" id="registerModal" role="dialog">
					        <div className="modal-dialog">
					            <div className="modal-content text-left">
			                        <button type="button" className="close mt-2 mr-3 text-right" data-dismiss="modal">&times;</button>
					                <div className="model-body">
					                  <Register />
					                </div>
					                <div className="modal-footer">
					                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
				              	    </div>
				              	</div>
				          	</div>
				        </div>
				    </div>
                </Fragment>
			)


const working = (
<Fragment>
					<Link to='/login' className="btn logbtn btn-ouline-dark"><i className="fa fa-sign-in black"></i>&nbsp;Login</Link>
					<Link to='/register' className="btn logbtn btn-ouline-dark"><i className="fa fa-user-plus black"></i>&nbsp;Register</Link>
</Fragment>
			)

		const guestLinks = () => {
		console.log(window.location.href, window.location.href.match(/login+/))
				 if(window.location.href.match(/login+/) || window.location.href.match(/register+/)){
				      return(working);
				 } else { return(modal); }
			}

		return (
			<Fragment>
			<div className="navbar navbar-light bg-light">
				<div className="cus_container">
					<div className="right ml-auto">
						{ isAuthenticated ? authLinks: guestLinks() }
					</div>
				</div>
			</div>
			<nav className="navbar shadow navbar-expand-lg sticky-top navbar-dark bg-navy">
				<div className="cus_container">

						<Link to="/" className="navbar-brand"><img className="logo" src={"/static/frontend/logo.png"} alt="Learnerz Corner" width="180"/></Link>

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">About Us</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">Courses and Programmes</Link>
						</li>
						<li className="nav-item">
							<Link to="/practices" className="nav-link">Our Practices</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">Become An Instructor</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">Contact Us</Link>
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