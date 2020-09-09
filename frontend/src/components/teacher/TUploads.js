import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../student/css.css'
import { connect } from 'react-redux';
import TSidebar from './TSidebar.js';
import { getSyllabus } from '../../actions/teacherActions.js'
import ProgressBar from "../common/ProgressBar.js"



class TUploads extends React.Component {

	componentDidMount(){
		this.props.getSyllabus();
		let links = document.getElementById('getAll').children;
		for(let i=0;i<links.length;i++){
			if(links[i].classList.contains('active')){
				links[i].classList.remove('active')
			}
		}
	}

	make(){
		const { stuUploads } = this.props.teacher;
		let ele = []
		for(let i=0;i<stuUploads.length;i++){
			ele.push(<div className="col-md-4 p-3">
						<div className="bg-white p-4 shadow">
							<div className="card-body">
								<h4>{stuUploads[i].department}</h4>
								<small className="p-1 mb-5">{stuUploads[i].student}</small>
								<h4 className="subxy">{stuUploads[i].text}</h4><br/>
								<a className="btn btn-dark" href={"/api/auth/teacher/download/"+stuUploads[i].syllabus}>
									Download File
								</a>
							</div>
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
				this.props.teacher.isStuUpLoading ?
					<div className="row top-230">
						<div className="m-auto p-5">
							<i className="fa fa-spinner fa-5x fa-spin" />
						</div>
					</div>
				
				:
				
					<div className="container-fluid mr-7 ml-7 top-230">
						<h3><b>Student Uploads:</b></h3>
						<div className="row">
							{this.make()}
						</div>
					</div>
			}

			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			<br/><br/> 
			</div>

		);
	}
}



const mapStateToProps= state => ({
	teacher: state.teacher
})



export default connect(mapStateToProps, { getSyllabus })(TUploads);