import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; 
import Sidebar from './Sidebar.js';
import { connect } from 'react-redux';
import { getEvents, getEnrCourses } from '../../actions/studentActions.js'
import './css.css'
import ProgressBar from "../common/ProgressBar.js"



export class TimeTable extends React.Component {
	
	componentDidMount(){
		getEvents();
		getEnrCourses();
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
										events={[
										    { title: 'event 1', date: '2020-08-21' },
										    { title: 'event 2', date: '2020-08-07' }
										]}
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
	events: state.student.events
})



export default connect(mapStateToProps, { getEnrCourses, getEvents })(TimeTable);