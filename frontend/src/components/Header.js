import React, { Fragment, Component } from 'react'
import '../styles/Header.css'
import Login from './users/Login.js'
import Register from './users/Register.js'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';	
import PropTypes from 'prop-types';
import { logoutUser, loadUser } from '../actions/authAction.js';
import { getCourses, getSubCourses } from '../actions/commonActions.js';
import { postAdmin, getAdmin, postAdminSeen } from '../actions/teacherActions.js'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


export class Header extends Component {

    
	static propTypes= {
		loadUser: PropTypes.func.isRequired,
		auth: PropTypes.object.isRequired,
		logoutUser: PropTypes.func.isRequired,

	};

	state = {
		message: null
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value 
		});
	}

	onAdminSubmit = (e) => {
		e.preventDefault();
		const { message } = this.state;
		this.props.postAdmin(message);
		this.setState({
			message:'' 
		})

	}


	componentDidMount() {
		this.props.loadUser();
		this.props.getAdmin();

 	}

 	makeSeen = () => {
 		this.props.postAdminSeen();
		this.props.getAdmin();
 	}

	componentWillMount(){
	}
    /*	 FOR MAKING THE DROPDOWN FOR COURSES LIST DYNAMICALLY
	    makeCourses = () => {
            const { courses, subCourses } = this.props;
            console.log(courses[0], subCourses)
            let j = 0;
            var ele = [];
    
    
            var str = '';
    
            for(i=0;i<courses.length;i++){
            	var k =(<><Link to="/about" className="btn-group" >{courses[i]['course_name']}</Link>
            			<button className="ar btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button></>
            		)
    
    		    var links = [];
            	for(j=0;j<subCourses.length;j++){
            		if(courses[i]['id']==subCourses[j]['course_id']){
            			var jk = (<Link to={ "/courses/" + courses[i].id + "/" + subCourses[j].id } className='dropdown-item'>{subCourses[j].sub_course_name}</Link>)
            			links.push(jk)
            		}
            	}
    
            	var content = React.createElement("div", {className:'dropdown-menu'},  links)
    
            	var final = (<div className="dropright btn-group">{k}{content}</div>)
    
            	ele.push(final)
            }
            return ele;
	    }
  

		#THIS GOES IN THE LINKS //ALSO REMEMBER TO ADD THE COMPONENET DID MOUNT FUNCTION AND CALL THE IMPORTED getCourses()/getSubCourses() function;
		AND COPT THE CHECKSHOULDI() FUNCTION FROM COURSES.JS PAGE.
		<li className="nav-item" id="courses">
			<div class="dropdown-css">
				<div class="nav-link dropbtn">
				    Courses and Programmes&nbsp;&nbsp;<i class="fa fa-caret-down" aria-hidden="true"></i>
				  </div>
				<div class="dropdown-content">
                    { this.checkhshouldi() ? this.makeCourses() : '' }
				</div>
			</div>
		</li>

*/

			adminMessage = () => {
				var k = [];
				if(this.props.values.isAdminReplied){
					var msg = this.props.values.adminMessages['ml'];
					console.log(msg)
					for(var i=0;i<msg.length;i++){
						if(msg[i]['reply']){
							k.push(
								<div className="card p-3 mb-3" style={{transform:'rotate(180deg)'}}>
									<div className="from-other mb-1">{msg[i]['reply']}
									</div>
									<div className="from-me">{msg[i]['message']}
									</div>
								</div>
							)
						} else {
							k.push(
								<div className="card p-3 mb-3" style={{transform:'rotate(180deg)'}}>
									<div className="from-admin mb-1">Not Seen Yet
									</div>
									<div className="from-me">{msg[i]['message']}
									</div>
								</div>
							)
						}
					}
				}
				console.log(k)
				return k
			}


	render() {


		const { isAuthenticated, user } = this.props.auth;
		const teacherL = (
				<Fragment>
		            <button onClick={this.props.logoutUser} className="btn logbtn btn-ouline-dark"><i className="fa fa-sign-out black"></i>&nbsp;Logout</button>
					<Link to='/teacher/dashboard' className="btn logbtn btn-ouline-dark"><i className="fa fa-user-circle black"></i>&nbsp;Dashboard</Link>
				</Fragment>
			)
		const studentL =(
				<Fragment>
		            <button onClick={this.props.logoutUser} className="btn logbtn btn-ouline-dark"><i className="fa fa-sign-out black"></i>&nbsp;Logout</button>
					<Link to='/student/dashboard' className="btn logbtn btn-ouline-dark"><i className="fa fa-user-circle black"></i>&nbsp;Dashboard</Link>
				</Fragment>
		)

		const authLinks = () => { 
			if(user.teacher!=null){
				return (teacherL)
			} else {
				return (studentL)
			}
			
		}

		const teacherAdmin = () => { 
			if(user.teacher!=null){
				return (
					<>
									&nbsp;&nbsp;|&nbsp;
									<span id="group"> 
										<span class="badge badge-light">
										{	
											this.props.values.isAdminReplied 
											? 
												this.props.values.adminMessages.new
												?
												this.props.values.adminMessages.new
												:
												''
											:
											''
										}
										</span>
										<button onClick={this.makeSeen} data-toggle="modal" data-target="#admin" className="btn border btn-ouline-dark"><i className="fa fa-user black"></i>&nbsp;{this.props.auth.user.first_name} {this.props.auth.user.last_name}</button>
										<div>
										    <div className="modal fade m-auto" id="admin" role="dialog">
										        <div className="modal-dialog">
										            <div className="modal-content m-auto">
									                    <button type="button" className="close mt-2 mr-3 text-right" data-dismiss="modal">&times;</button>
										                <div className="model-body p-3">
										                	<h3>Admin Message</h3>
										                  	{this.adminMessage()}
										                </div>
										                <div className="modal-footer">
										                  	<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
									              	    </div>
									              	</div>
									          	</div>
									        </div>
									    </div>
									</span>
								</>
				)
			} else {
				return (
					<>
						&nbsp;&nbsp;|&nbsp;
						<span id="group"> 
							<span class="badge badge-light">
							{	
								this.props.values.isAdminReplied 
								? 
									this.props.values.adminMessages.new
									?
									this.props.values.adminMessages.new
									:
									''
								:
								''
							}
							</span>
							<button onClick={this.makeSeen} className="btn border btn-ouline-dark"><i className="fa fa-user black"></i>&nbsp;{this.props.auth.user.first_name} {this.props.auth.user.last_name}</button>
						</span>				
					</>
				)	
			}
			
		}

		const modal = (
		    <Fragment>

				    <button type="button" className="btn logbtn btn-ouline-dark" data-keyboard="false" data-backdrop="static" data-toggle="modal" data-target="#loginModal"><i className="fa fa-sign-in black"></i>&nbsp;Login</button>
                    <button type="button" className="btn logbtn btn-ouline-dark" data-keyboard="false" data-backdrop="static" data-toggle="modal" data-target="#registerModal"><i className="fa fa-user-plus black"></i>&nbsp;Register</button>

                    <div>
					    <div className="modal fade m-auto" id="loginModal" role="dialog">
					        <div className="modal-dialog">
					            <div className="modal-content m-auto">
				                    <button type="button" className="close mt-2 mr-3 text-right" data-dismiss="modal">&times;</button>
					                <div className="model-body">
					                  <Login />
					                </div>
					                <div className="modal-footer">
					                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
				              	    </div>
				              	</div>
				          	</div>
				        </div>
				    </div>
				    <div>
					    <div className="modal fade m-auto" id="registerModal" role="dialog">
					        <div className="modal-dialog">
					            <div className="modal-content text-left">
			                        <button type="button" className="close mt-2 mr-3 text-right" data-dismiss="modal">&times;</button>
					                <div className="model-body">
					                  <Register />
					                </div>
					                <div className="modal-footer">
					                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
				              	    </div>
				              	</div>
				          	</div>
				        </div>
				    </div>
                </Fragment>
			)


const working = (
<Fragment>
					<Link to='/login' className="btn logbtn btn-ouline-dark"><i className="fa fa-sign-in black"></i>&nbsp;Login</Link>
					<Link to='/register' className="btn logbtn btn-ouline-dark"><i className="fa fa-user-plus black"></i>&nbsp;Register</Link>
</Fragment>
			)

		const guestLinks = () => {
		console.log(window.location.href, window.location.href.match(/login+/))
				 if(window.location.href.match(/login+/) || window.location.href.match(/register+/)){
				      return(working);
				 } else { return(modal); }
			}

			const authNavLinks = (
				<>
					<Link to="/" className="navbar-brand"><img className="logo" src={"/static/frontend/logo.png"} alt="Learnerz Corner" width="180"/></Link>

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="nav navbar-nav ml-auto" id="getAll">
							<li className="nav-item" id="home">
								<Link to="/" className="nav-link">Home</Link>
							</li>
							<li className="nav-item" id="about">
								<Link to="/about" className="nav-link">About Us</Link>
							</li>
							<li className="nav-item" id="practices">
								<Link to="/practices" className="nav-link">Our Practices</Link>
							</li>
							<li className="nav-item" id="contact">
								<Link to="/contact" className="nav-link">Contact Us</Link>
							</li>
						</ul>
					</div>
				</>
			)

			const guestNavLinks = (
				<>
					<Link to="/" className="navbar-brand"><img className="logo" src={"/static/frontend/logo.png"} alt="Learnerz Corner" width="180"/></Link>

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="nav navbar-nav ml-auto" id="getAll">
							<li className="nav-item" id="home">
								<Link to="/" className="nav-link">Home</Link>
							</li>
							<li className="nav-item" id="about">
								<Link to="/about" className="nav-link">About Us</Link>
							</li>
							<li className="nav-item" id="courses">
								<Link to="/courses" className="nav-link">Courses and Programmes</Link>
							</li>

							<li className="nav-item" id="practices">
								<Link to="/practices" className="nav-link">Our Practices</Link>
							</li>
							<li className="nav-item" id="join">
								<Link to="/join" className="nav-link">Become An Instructor</Link>
							</li>
							<li className="nav-item" id="contact">
								<Link to="/contact" className="nav-link">Contact Us</Link>
							</li>
						</ul>
					</div>
				</>
			)


		return (
			<Fragment>

				<div className="navbar navbar-light bg-light">
					<div className="cus_container">
						<div className="right ml-auto">
							{ isAuthenticated ? authLinks() : guestLinks() }
							{ isAuthenticated 
								?
								teacherAdmin()
								:
								''
							}
						</div>
					</div>
				</div>
				<nav className="navbar shadow navbar-expand-lg sticky-top navbar-dark bg-navy high-z">
					<div className="cus_container">
						<button id="back" onClick={() => window.history.back()} className="dis-sm btn"><i className="fa fa-arrow-left"></i></button>
						{ isAuthenticated ? authNavLinks: guestNavLinks }

							
					</div>
				</nav>

			</Fragment>
		)
	}
}

const mapStateToProps= state => ({
	auth :state.auth,
	courses : state.common.courses,
	subCourses : state.common.subCourses,
	values: state.common,
})


export default connect(mapStateToProps, { logoutUser, loadUser, getCourses, getSubCourses, postAdmin, postAdminSeen, getAdmin })(Header);






