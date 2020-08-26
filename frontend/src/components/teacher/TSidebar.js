import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../student/css.css'	
import { logoutUser } from '../../actions/authAction.js';
import { connect } from 'react-redux';



class TSidebar extends React.Component {
	render() {
		return (
			<div className="sidebar">
				<ul>
					<Link className="te" to="/teacher/courses">
						<li className="border" id="crc">
							<div className="side-item">
								<h4>Courses</h4>
							</div>
						</li>
					</Link>
					<Link className="te" to="/teacher/timetable">
						<li className="border" id="tt">
							<div className="side-item">
								<h4>Time Table</h4>
							</div>
						</li>
					</Link>
					<Link className="te" to="/teacher/upload">
						<li className="border" id="profile">
							<div className="side-item">
								<h4>Profile</h4>
							</div>
						</li>
					</Link>
					<div className="te" onClick={() => {this.props.logoutUser()}} className="lg">
						<li className="border" id="lgout">
							<div className="side-item">
								<h4>Logout</h4>
							</div>
						</li>
					</div>
				</ul>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});




export default connect(mapStateToProps, { logoutUser })(TSidebar)