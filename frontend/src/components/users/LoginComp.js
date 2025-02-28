import React, { Component } from 'react'
import Login from './Login.js';
import '../../styles/users.css';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


export class LoginComp extends Component {
	render() {
		return (
			<div className="m-auto ws">
				{ this.props.isAuthenticated ? this.props.user.teacher!=null ? <Redirect to="/teacher/dashboard"/> : <Redirect to="/student/dashboard"/> : '' }
				<Login />
				<div className="p-5">
                    <p>
                      Dont have an account? <Link to="/register">Register</Link>
                    </p>
                </div>
			</div>
		)
	}
}



const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps )(LoginComp);