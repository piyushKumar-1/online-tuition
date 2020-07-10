import React, { Component } from 'react'
import Register from './Register.js';
import '../../styles/users.css';
import { Link, Redirect } from 'react-router-dom';


export class RegisterComp extends Component {
	render() {
		return (
			<div className="m-auto ws">
				<Register />
				<div className="p-5">
                    <p>
                      Already have an account? <Link to="/login">Login</Link>
                    </p>
                </div>
			</div>
		)
	}
}

export default RegisterComp