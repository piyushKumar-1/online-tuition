import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './css.css'	
import { logoutUser } from '../../actions/authAction.js';
import { connect } from 'react-redux';


class Sidebar extends React.Component {

	constructor() {
	    super();
	    this.state = {
	      width:  "",
	      divw: ""
	    }
	}
	makeWid(){
		if(this.props.user.show_payment_option){
			this.setState({
				width:"16.667%",
				 divw: ""
			})
		} else {
			if(window.innerWidth<540){
				this.setState({
					width:"20%",
					divw:"20%"
				})
			} else {
				this.setState({
					width:"",
					divw:""
				})
			}
		}
		
	}
	componentDidMount() {
	    this.makeWid();
	    window.addEventListener("resize", this.makeWid.bind(this));
	}
	componentWillUnmount() {
	    window.removeEventListener("resize", this.makeWid.bind(this));
	}
	render() {
		
		return (
			<div className="sidebar" >
				<ul>
					<Link to="/student/courses" style={{width: this.state.width}}>
						<li className="border" id="crc">
							<div className="side-item">
								<h4>My Courses</h4>
							</div>
						</li>
					</Link>
					<Link to="/student/timetable" style={{width: this.state.width}}>
						<li className="border" id="tt">
							<div className="side-item">
								<h4>Time Table</h4>
							</div>
						</li>
					</Link>
					<Link to="/student/upload" style={{width: this.state.width}}>
						<li className="border" id="uplod">
							<div className="side-item">
								<h4>Upload Syllabus/ Question/ Assignment</h4>
							</div>
						</li>
					</Link>
					<Link to="/student/feedback" style={{width: this.state.width}}>	
						<li className="border" id="fedbk">
							<div className="side-item">
								<h4>Feedback</h4>
							</div>
						</li>
					</Link>
					{ 
						this.props.user.show_payment_option 
						?
						<Link to="/student/pay">	
							<li className="border" id="pay">
								<div className="side-item">
									<h4>Pay Fees</h4>
								</div>
							</li>
						</Link>
						: 
						''
					}
					<div onClick={() => {this.props.logoutUser()}} className="lg" style={{width: this.state.divw}}>
						<li className="border" id="lgout">
							<div className="side-item">
								<h4>Logout</h4>
							</div>
						</li>
					</div>
				</ul>
			</div>
  
		);
	}
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps, { logoutUser })(Sidebar)