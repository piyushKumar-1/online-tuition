import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { del } from '../../actions/teacherActions.js'
import { connect } from 'react-redux';
import Sidebar from './TSidebar.js';


export class TDelete extends React.Component {
	componentDidMount(){
		const { id, cur_id } = this.props.match.params;
		this.props.del(id, cur_id);
	}
	render() {
		return (
			<div>
				<Sidebar/>
				<div className="row top-230">
					<div className="m-auto p-5">
						<i className="fa fa-spinner fa-5x fa-spin" />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps= state => ({
	enrCourses: state.student.couresEnrolled,
})



export default connect(mapStateToProps, { del })(TDelete);