import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './css.css'


export default class Sidebar extends React.Component {



	render() {
		return (
			<side className="sidebar" >
				<ul>
					<Link to="/courses">
						<li className="border" id="crc">
							<div className="side-item">
								<h4>My Courses</h4>
							</div>
						</li>
					</Link>
					<Link to="/timetable">
						<li className="border" id="tt">
							<div className="side-item">
								<h4>Time Table</h4>
							</div>
						</li>
					</Link>
					<Link to="/upload">
						<li className="border" id="uplod">
							<div className="side-item">
								<h4>Upload Syllabus/ Question/ Assignment</h4>
							</div>
						</li>
					</Link>
					<Link to="/upload">	
						<li className="border" id="fedbk">
							<div className="side-item">
								<h4>Feedback</h4>
							</div>
						</li>
					</Link>
					<Link to="/upload">
						<li className="border" id="lgout">
							<div className="side-item">
								<h4>Logout</h4>
							</div>
						</li>
					</Link>
				</ul>
			</side>
  
		);
	}
}
