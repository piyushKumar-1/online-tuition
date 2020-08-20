import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './css.css'
import { connect } from 'react-redux';
import Sidebar from './Sidebar.js';
import { myCourse } from '../../actions/studentActions.js'
import ProgressBar from "../common/ProgressBar.js"



class MyCourse extends React.Component {
	componentDidMount(){
		const { myCourseId } = this.props.match.params;
		this.props.myCourse(myCourseId)
	}
	render() {
		return (
			<div>
				<Sidebar/>
			</div>
		)
	}
}



const mapStateToProps= state => ({
	enrCourses: state.student.couresEnrolled,
	events: state.student.events,
	student: state.student
})



export default connect(mapStateToProps, { myCourse })(MyCourse);