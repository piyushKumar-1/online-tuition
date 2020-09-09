import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; 
import { Link, Redirect, withRouter } from 'react-router-dom';
import Sidebar from './Sidebar.js';
import { connect } from 'react-redux';
import { getEvents, postEvents, getEnrCourses } from '../../actions/studentActions.js'
import './css.css'
import ProgressBar from "../common/ProgressBar.js"



export class TimeTable extends React.Component {
	
	componentDidMount(){
		this.props.getEvents();
		this.props.getEnrCourses();
	}

	state = {
		date: null,
		sch: false
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
	    	date: arg.dateStr, sch: true
	    });
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

	makeSch = () => {
		var ele = []
		const { events } = this.props;
		for(let i=0;i<events.length;i++){
			console.log(events[i].event_date, this.state.date)
			if(events[i].event_date==this.state.date){
				var date = new Date(events[i].event_time)
				console.log(date)
				ele.push(
					<>
						<div className="card">
							<div className="card-body">
								<h4 className="card-title float-left w-50">{events[i].topic}</h4>
								<h6 style={{fontWeight:"600"}}>Time: {(events[i].event_time)}</h6>
								<a target="_blank" className="btn btn-dark card-link" href={events[i].live_link}>Meeting link</a>	
							</div>
						</div>
						<br/>
					</>
				)
			}
		}
		console.log(ele)
		return ele
	}

	render() {
		return (
			<div>
				<Sidebar /> 

				<div className="container align">
					<div className="calender">
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
								<h3>Schedule</h3>
								{ this.state.sch ? this.makeSch() : '' }
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


const mapStateToProps= state => ({
	enrCourses: state.student.couresEnrolled,
	events: state.student.events,
	student: state.student
})



export default connect(mapStateToProps, { getEnrCourses, getEvents })(TimeTable);