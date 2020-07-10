import React, { Component } from 'react'
import Login from './Login.js';
import '../../styles/users.css';
import { Link, Redirect } from 'react-router-dom';


export class LoginComp extends Component {
	render() {
		return (
			<div className="m-auto ws">
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

export default LoginComp