import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; 
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


	handleDateClick = (arg) => { // bind with an arrow function
		console.log(arg)
	    try{
	    document.getElementsByClassName("day-highlight")[0].classList.remove("day-highlight");
	    } catch {
	    	console.log("nahi")
	    }
  		arg.dayEl.classList.add("day-highlight");
	    alert(arg.dateStr)
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