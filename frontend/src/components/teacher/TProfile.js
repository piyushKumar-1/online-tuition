import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../student/css.css'
import { connect } from 'react-redux';
import TSidebar from './TSidebar.js';
import { myProfile } from '../../actions/teacherActions.js'
import ProgressBar from "../common/ProgressBar.js"



class TProfile extends React.Component {

	componentDidMount(){
		this.props.myProfile();
		let links = document.getElementById('getAll').children;
		for(let i=0;i<links.length;i++){
			if(links[i].classList.contains('active')){
				links[i].classList.remove('active')
			}
		}
	}

	state = {
		message:'',
		bor: {
			background: "#ff8590",
			borderRadius: "26px",
			border: "7px white solid",
			color: "white"
		}
	}


	render() {

		return (
			<div>
			<TSidebar />
			{
				this.props.teacher.isProfileLoading ?
					<div className="row top-230">
						<div className="m-auto p-5">
							<i className="fa fa-spinner fa-5x fa-spin" />
						</div>
					</div>

				:

					<div className="container mt-5 mb-5 top-230">
						<div className="row">
							<div className="col-md-6 rounded p-4 card m-auto">
								<h4 className="text-center">Your Profile Info</h4>
							</div>
							<div className="col-md-6 mb-5">
								<div className="m-auto">
									<table className="table table-stripped">
										<tr>
											<th>Name</th>
											<td>{this.props.teacher.profile[0].name}</td>
										</tr>
										<tr>
											<th>Phone Number</th>
											<td>{this.props.teacher.profile[0].ph_no}</td>
										</tr>
										<tr>
											<th>Email</th>
											<td>{this.props.teacher.profile[0].email}</td>
										</tr>
										<tr>
											<th>Qualification</th>
											<td>{this.props.teacher.profile[0].qualification}</td>
										</tr>
										<tr>
											<th>Experience</th>
											<td>{this.props.teacher.profile[0].experience}</td>
										</tr>
									</table>
								</div>
							</div>
						</div>
					</div>
			}
			</div>

		);
	}
}



const mapStateToProps= state => ({
	student: state.student,
	teacher: state.teacher
})



export default connect(mapStateToProps, { myProfile })(TProfile);
