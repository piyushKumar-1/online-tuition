import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './css.css'
import { connect } from 'react-redux';
import Sidebar from './Sidebar.js';
import { getEvents, getEnrCourses, delCourse } from '../../actions/studentActions.js'
import ProgressBar from "../common/ProgressBar.js"



class Dashboard extends React.Component {

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

	delCourse(e){
		this.props.delCourse(e.target.id)
	}


	make(){
		const { enrCourses } = this.props;
		let ele = [];
		for(let i=0;i<enrCourses.length;i++){
			var date = new Date(Date.parse(enrCourses[i].enrolled_date));
			ele.push(
					<div className="col-md-4 p-3">
						<div className="bg-white p-4 shadow">
							<h4>{enrCourses[i].course_enrolled}</h4>
							<div onClick={(e) => this.delCourse(e)} className="btn"><i className="fa fa-times-circle del-course" id={enrCourses[i].id}/></div>
							<Link to={"/student/courses/"+enrCourses[i].id}>
								<h2 className="card-title">{enrCourses[i].department}</h2>
							</Link>
							<small className="card-title">Enrolled At: {date.toString()}</small>
							<ProgressBar key="1" bgcolor="green" completed={enrCourses[i].completed}/>
						</div>
					</div>
				)
		}

		return ele
	}

	render() {

		return (
			<div>
			<Sidebar /> 
			{	
				this.props.student.isCrsEnLoading ?
					<div className="row top-300">
						<div className="m-auto p-5">
							<i className="fa fa-spinner fa-5x fa-spin" />
						</div>
					</div>
				
				:
				
					<div className="container-fluid mr-7 ml-7 top-300">
						<div className="row">
							{this.make()}
							<div className="col-md-4 p-3">
								<Link className="td-none" to="/student/add-course">
									<div className="shadow mr-auto ml-auto bor-round text-center p-4">
										<h2 className="m-auto card-title"><i className="fa fa-plus-circle"></i> Add Course</h2>
									</div>
								</Link>
							</div>
						</div>
					</div>
			}
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



export default connect(mapStateToProps, { getEnrCourses, getEvents, delCourse })(Dashboard);