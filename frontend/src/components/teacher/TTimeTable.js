import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; 
import TSidebar from './TSidebar.js';
import { connect } from 'react-redux';
import { getEvents, postEvents, getEnrCourses, myCourse } from '../../actions/teacherActions.js'
import '../student/css.css'
import ProgressBar from "../common/ProgressBar.js"



export class TTimeTable extends React.Component {
	
	componentDidMount(){
		this.props.getEvents();
		this.props.getEnrCourses();
	}
	state = {
		date: null,
		form: false,
		student_id: "",
		url: '',
		topic: '',
		time: '',
		u: false,
		top:false,
		st: false,
		tim: false
	}

	handleDateClick = (arg) => { // bind with an arrow function
		console.log(arg)
		try{
	    document.getElementsByClassName("day-highlight")[0].classList.remove("day-highlight");
	    } catch {
	    	console.log("nahi")
	    }
  		arg.dayEl.classList.add("day-highlight");
	    this.setState({
	    	date: arg.dateStr, form: true
	    });
	}

	onSubmit = (e) => {
		e.preventDefault();
		const { date, student_id, url, topic, time,   u, st, top, tim } = this.state;
		if(student_id===""){
			this.setState({
				st: true
			});
			return 0
		} else {
			this.setState({
				st: false
			});
		} 
		if(url===""){
			this.setState({
				u: true
			});
			return 0
		} else {
			this.setState({
				u: false
			});
		}
		if(topic==""){
			this.setState({
				top: true
			});
			return 0
		} else {
			this.setState({
				top: false
			});
		}
		if(time==""){
			this.setState({
				tim: true
			});
			return 0
		} else {
			this.setState({
				tim: false
			});
		}
		if(!u && !st && !top){
			this.props.postEvents(time, date, student_id, url, topic);
		}
	}

	makeEvent = (e) => {
		var ele = []
		const { events } = this.props;
		for(let i=0;i<events.length;i++){
			var k = {}
			k['title'] = events[i].topic
			k['date'] = events[i].event_date	
			ele.push(k)
		}
		console.log(ele)
		return ele
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	makeForm = () => {
		const { couresEnrolled } = this.props;
		let ls = []
	    for(let i=0;i<couresEnrolled.length;i++){
	    	ls.push(<option value={couresEnrolled[i].student}>{couresEnrolled[i].student_name}</option>)
	    }
	    return ls
	}


	render() {
		return (
			<div>
				<TSidebar /> 

				<div className="container align">
					<div className="calender mt-5">
						<div className="row">
							<div className="col-md-8">
								<div className="calender-area">
									<FullCalendar
										plugins={[ dayGridPlugin, interactionPlugin ]}
										weekends={false}
										events={
											this.props.student.isEvLoading ?"": this.makeEvent()
										}
										dateClick={this.handleDateClick}
								    />
								</div>
							</div>
							<div className="col-md-4 mar-t">
								{
									this.state.form
									?
									<div className="m-auto">
								        <div className="p-5 mt-2">
									        <h2 className="text-center">Add Event</h2>
									        <form onSubmit={this.onSubmit}>
												<div className="form-group">
									                  <label>Student</label>
									                  <select className="form-control" name="student_id" onChange={this.onChange}
									                    value={this.state.student_id}>
									                    <option value="">Choose Student</option>
									                    {this.makeForm()}
									                  </select>
									                  { this.state.st ? <small className="form-help red">Please Select a Student</small> : <></>}
									            </div>
									            <div className="form-group">
									            	<label>Url for live Class</label>
									            	<input
										                type="url"
										                className="form-control"
										                name="url"
										                onChange={this.onChange}
										                value={this.state.url}
										            />
									                { this.state.u ? <small className="form-help red">Please Enter a Url</small> : <></>}
									            </div>
									            <div className="form-group">
									            	<label>Time for live Class</label>
									            	<input
										                type="time"
										                className="form-control"
										                name="time"
										                onChange={this.onChange}
										                value={this.state.time}
										            />
									                { this.state.tim ? <small className="form-help red">Please Enter a Time</small> : <></>}
									            </div>
									            <div className="form-group">
									            	<label>Topic</label>
									            	<input
										                type="text"
										                className="form-control"
										                name="topic"
										                onChange={this.onChange}
										                value={this.state.topic}
										            />
									                { this.state.top ? <small className="form-help red">Please Enter a Topic for the event</small> : <></>}
									            </div>
										        <div className="form-group">
									              <button type="submit" id="ssbtn" disabled={this.state.disabled} className="btn btn-primary">
									                Add Event
									              </button>
									            </div>
									        </form>
								        </div>
								    </div>
									:
									<>''</>
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


const mapStateToProps= state => ({
	student: state.student,
	events: state.student.events,
	couresEnrolled: state.student.couresEnrolled
})



export default connect(mapStateToProps, { getEnrCourses, getEvents, myCourse, postEvents })(TTimeTable);