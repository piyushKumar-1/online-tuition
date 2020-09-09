import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../student/css.css'
import { connect } from 'react-redux';
import TSidebar from './TSidebar.js';
import { getEvents, getEnrCourses, postAdmin } from '../../actions/teacherActions.js'
import ProgressBar from "../common/ProgressBar.js"



class TDashboard extends React.Component {

	componentDidMount(){
		this.props.getEvents();
		this.props.getEnrCourses();
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

	onAdminSubmit = (e) => {
		e.preventDefault();
		const { message } = this.state;
		this.props.postAdmin(message);
		this.setState({
			message:'' 
		})

	}

	onChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value 
		});
	}

	make(){
		const { enrCourses } = this.props;
		let ele = []
		for(let i=0;i<enrCourses.length;i++){
			ele.push(<div className="col-md-4 p-3">
						<div className="bg-white p-4 shadow">
							<h4>{enrCourses[i].course_enrolled}</h4>
							<Link to={"/teacher/courses/"+enrCourses[i].id}>
								<h2 className="card-title">{enrCourses[i].department}</h2>
							</Link>
							<small className="card-title">Enrolled At: {enrCourses[i].enrolled_date}</small><br/>
							<small className="card-title">Student Name: {enrCourses[i].student_name}</small><br/>
							<small className="card-title">Student Email: {enrCourses[i].student_email}</small>
							<ProgressBar key="1" bgcolor="green" completed={enrCourses[i].completed}/>
						</div>
					</div>)
		}

		return ele
	}

	render() {

		return (
			<div>
			<TSidebar /> 
			{	
				this.props.student.isCrsEnLoading ?
					<div className="row top-230">
						<div className="m-auto p-5">
							<i className="fa fa-spinner fa-5x fa-spin" />
						</div>
					</div>
				
				:
				
					<div className="container-fluid mr-7 ml-7 mb-5 top-230">
						<div className="row">
							{this.make()}
						</div>
					</div>
			}
			<div className="row">
				<div className="col-sm-8"></div>
				<div className="col-sm-4">
					<div className="p-5">
						<div className="p-5" style={this.state.bor}>
				            <h2 className="text-center">Contact Admin</h2>
				        	<form onSubmit={this.onAdminSubmit}>
				            	<div className="form-group">
					                <label>Message</label>
					                <input
						                type="text"
						                className="form-control"
						                name="message"
						                onChange={this.onChange}
						                value={this.state.message}
					                />
				                </div>
				                <button type="submit" className="btn btn-primary">Send</button>
				            </form>
				        </div>
					</div>
				</div>
			</div>

			<br/><br/> 
			<br/><br/> 
			</div>

		);
	}
}



const mapStateToProps= state => ({
	enrCourses: state.student.couresEnrolled,
	events: state.student.events,
	student: state.student
})



export default connect(mapStateToProps, { getEnrCourses, getEvents, postAdmin })(TDashboard);