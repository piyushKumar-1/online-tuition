import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

export class Footer extends Component {
	render() {
		return (
			<footer className="height-insmall">
				<div className="hide-insmall">
					<div className="navbar navbar-dark bg-navy2">
						<div className="cus_container p-5">
							<div className="row w-100 m-auto_cus">
								<div className="col-md-8">
									<table cellPadding="5" style={{width: "100%", color: "#dfdfdf"}}>
										<thead>
											<tr>
												<th>Contact Us:</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th>Phone Number</th>
												<th>:</th>
												<td>+91-8667613658</td>
											</tr>
											<tr>
												<th>Email</th>
												<th>:</th>
												<td>support@learnerzcorner.com</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="col-md-4">
									<table cellPadding="5" style={{width: "100%", color: "#dfdfdf"}}>
										<thead>
											<tr>
												<th><Link className="no" to="/privacy-policy">Privacy Policy</Link></th>
											</tr>
											<tr>
												<th><Link className="no" to="#">Terms And Conditions</Link></th>
											</tr>
										</thead>
									</table>

								</div>
							</div>
						</div>
					</div>
					<div className="navbar t">
						<div className="cus_container">
							<div className="t float-left">
								<small>© Copyright 2020 – LearnerZ Corner | All rights reserved</small>
							</div>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer