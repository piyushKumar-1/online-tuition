import React from 'react'
import { getEnrCourses, getSyllabus, postSyllabus } from '../../actions/studentActions.js'
import { connect } from 'react-redux';
import Sidebar from './Sidebar.js';


export class Pay extends React.Component {

	
	render() {
		return (
			<>
				<Sidebar /> 

				<div className="container top-300">
					<div className="p-5 pt-0">
						<div className="row">
							<div className="col-md-6">
							</div>
							<div className="col-md-6 mb-5">
								<h3>Previous Uploads</h3>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}





export default Pay;