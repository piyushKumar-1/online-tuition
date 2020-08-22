import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../student/css.css'
import { connect } from 'react-redux';
import TSidebar from './TSidebar.js';
import { getEvents, getEnrCourses } from '../../actions/teacherActions.js'
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


	make(){
		const { enrCourses } = this.props;
		let ele = []
		for(let i=0;i<enrCourses.length;i++){
			ele.push(<div className="col-md-4 p-3">
						<div className="bg-white p-4 shadow">
							<h4>{enrCourses[i].course_enrolled}</h4>
							<h2 className="card-title">{enrCourses[i].department}</h2>
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
				
					<div className="container-fluid mr-7 ml-7 top-230">
						<div className="row">
							{this.make()}
						</div>
					</div>
			}

			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
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



export default connect(mapStateToProps, { getEnrCourses, getEvents })(TDashboard);