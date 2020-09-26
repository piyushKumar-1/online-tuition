import React from 'react'
import { getEnrCourses, getFeed, postFeed, refresh, resetFeeds } from '../../actions/studentActions.js'
import { connect } from 'react-redux';
import Sidebar from './Sidebar.js';


export class Feedback extends React.Component {

	componentDidMount(){
		this.props.getEnrCourses();
	}
	state = {
		top: false,
		abs: false,
		cc: false,
		abi: false,
		st: false,
		askFeed: true,
		department_id: "",
		conceptClearity: "",
		aboutSession: "",
		aboutInstructor: ""
	}

	componentWillUnmount(){
		this.props.resetFeeds()
	}

	makeForm(){
		const { enCrs } = this.props;
		const ele = [];
		for(let i=0;i<enCrs.length;i++){
			if(enCrs[i].teacher!==null){
					ele.push(<option value={enCrs[i].id}>{enCrs[i].department}</option>)
				}
			}
		return ele;
	}

	makePrev(){
		const { feeds } = this.props;
		var ele = [];
		for(let i=0;i<feeds.length;i++){
			ele.push(
				<>
					<div className="card shadow rounded">
						<div className="card-body">
							<h6>About Session:{feeds[i].about_session}</h6>
							<h6>About Instructor:{feeds[i].about_instructor}</h6>
						</div>
					</div>
					<br/>
				</>
			)
		}

		return ele
	}


	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	
		if(e.target.name=="department_id"){
			this.setState({
				askFeed: true
			});
		}
	}


    getF(){
    	this.props.getFeed(this.state.department_id)
    	this.setState({
    		askFeed: false
    	});
    }

	onSubmit = (e) => {
		e.preventDefault();
		const { department_id, conceptClearity, aboutSession, aboutInstructor, top, st, abs, abi, cc } = this.state;
		if(department_id===""){
			this.setState({
				st: true
			});
			return 0
		} else {
			this.setState({
				st: false
			});
		} 
		if(aboutSession===""){
			this.setState({
				abs: true
			});
			return 0
		} else {
			this.setState({
				abs: false
			});
		}
		if(aboutInstructor===""){
			this.setState({
				abi: true
			});
			return 0
		} else {
			this.setState({
				abi: false
			});
		}
		if(conceptClearity===""){
			this.setState({
				cc: true
			});
			return 0
		} else {
			this.setState({
				cc: false
			});
		}
		if(!st && !top && !abs && !abi && !top){
			this.props.postFeed(department_id, conceptClearity, aboutSession, aboutInstructor);
		}
	}

	render() {
		return (
			<>
				<Sidebar /> 

				<div className="container top-300">
					<div className="p-5 pt-0">
						<div className="row">
							<div className="col-md-6">
							{this.props.student.status===null
								?
								<form onSubmit={this.onSubmit}>
									<div className="form-group">
						                  <label>Department</label>
						                  <select className="form-control" name="department_id" onChange={this.onChange}
						                    value={this.state.department_id}>
						                    <option value="">Choose Department</option>
						                    {this.props.student.isCrsEnLoading ? "" : this.makeForm()}
						                  </select>
						                  { this.state.st ? <small className="form-help red">Please Select a Department</small> : <></>}
						            </div>
						            <div className="form-group">
						            	<label>About Session</label>
						            	<input
							                type="text"
							                className="form-control"
							                name="aboutSession"
							                onChange={this.onChange}
							                value={this.state.aboutSession}
							            />
						                { this.state.abs ? <small className="form-help red">Please Enter something about the session...</small> : <></>}
						            </div>
						            <div className="form-group">
						            	<label>About Instructor</label>
						            	<input
							                type="text"
							                className="form-control"
							                name="aboutInstructor"
							                onChange={this.onChange}
							                value={this.state.aboutInstructor}
							            />
						                { this.state.abi ? <small className="form-help red">Please Enter something about the teacher...</small> : <></>}
						            </div>
						            <div className="form-group">
						            	<label>Understandability of Concept</label>
						            	<input
							                type="text"
							                className="form-control"
							                name="conceptClearity"
							                onChange={this.onChange}
							                value={this.state.conceptClearity}
							            />
						                { this.state.cc ? <small className="form-help red">Please rate the level of concept clearity...</small> : <></>}
						            </div>
							        <div className="form-group">
						              <button type="submit" id="ssbtn" disabled={this.state.disabled} className="btn btn-primary">
						                Upload
						              </button>
						            </div>
						        </form>
						        :
						        <div className="container">
						        	{
						        		this.props.student.status=="success"
						        		?
							        		<div>
								        		<h3><i className="fa fa-check"></i>Feedback Recieved</h3>
								        	</div>
							        	:
							        		<div>
								        		<h3><i className="fa fa-times"></i>Failed to Upload Feedback</h3>
								        	</div>
						        	}
						        		<button onClick={() => this.props.refresh()} className="btn btn-primary">Okay</button>
						        </div>
						    }
							</div>
							<div className="col-md-6">
								<h3>Previous Feedbacks</h3>
		                        {this.state.askFeed ? this.getF() : ''}
		                        {this.props.isLoading ? <h6 style={{fontWeight:"600"}}>You can only give feedback to courses whose teacher is assigned</h6> : this.makePrev()}
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}


const mapStateToProps= state => ({
	student: state.student,
	enCrs: state.student.couresEnrolled,
	feeds: state.student.feeds, 
	isLoading: state.student.isFeedLoading,
	feeds: state.student.feeds
})



export default connect(mapStateToProps, { getEnrCourses, getFeed, postFeed, refresh, resetFeeds })(Feedback);