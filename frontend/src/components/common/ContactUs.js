import React from 'react';
import '../../styles/about.css'
import '../../styles/bubble.css'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { contactPost, resetPost } from '../../actions/commonActions.js';



class AboutUs extends React.Component {
componentDidMount() {
	
 	document.getElementById('contact').classList.add('active');
 	document.title = "Contact Us | LearnerZ Corner"
  	window.scrollTo(0, 0)
}

state = {
	name:'',
	subject: '',
	query: '',
	email: '',
	spin: false,
}

onChange = (e) => {
	this.setState({
		[e.target.name]: e.target.value
	});
	this.setState({
		spin:false
	})
	this.props.resetPost();

}

onSubmit = (e) => {
	e.preventDefault();
	const {name, subject, query, email} = this.state;
	this.setState({
		spin: true
	});
	console.log("djskhfksdhfksdkk")
	this.props.contactPost(name, subject, email, query);
}

componentWillUnmount(){
	document.getElementById('contact').classList.remove('active');
   
}

renderPic = () => {
	var k;
	k = (
		<div id="background-wrap" data-aos="fade-in" data-aos-once="true">
			<img src="static/frontend/contactUs.jpg" />			
		</div>
	)
	return [k]
}
	render() {
		const {name, subject, query, email} = this.state;
		return (
				<div className="bg-white">
					{   this.props.isAuthenticated
						? 
						''
						:
						this.renderPic()
					}




					
				<br/><br/>
					<div className="container">
						<div className="down">
							<div className="text-center">
								<i className="fa fa-angle-down black p-2"/>
							</div>
						</div>
						<div className="row"  data-aos="slide-up" data-aos-once="true" data-aos-delay="300">
							<div className="col-sm-4">
								<div className="about-lernerz">
									<h4 className="touch">Get In Touch</h4>
									<div className="border-blue">
									</div>
									<table className="table border bg-white shadow siz-f rounded">
										<tr>
											<th>Phone No.</th>
											<td>: +91-8667613658</td>
										</tr>
										<tr>
											<th>Email</th>
											<td>: support@learnerzcorner.com</td>
										</tr>
									</table>
								</div>
							</div>
							<div className="col-sm-8">
								<h4 className="touch">Submit your Query</h4>
								<div className="border-blue">
								</div>
								<form onSubmit={this.onSubmit} className="">
									<div className="form-row">
										<div className="col-md-12">
											<div className="form-group">
								                <input
								                  required
								                  id="name"
								                  type="text"
								                  className="form-control"
								                  placeholder="Your Name"
								                  name="name"
								                  onChange={this.onChange}
								                  value={name}
								                />
								            </div>
								        </div>
								    </div>
									<div className="form-row">
										<div className="col-md-12">
											<div className="form-group">
								                <input
								                  required
								                  id="subject"
								                  type="text"
								                  className="form-control"
								                  placeholder="Subject"
								                  name="subject"
								                  onChange={this.onChange}
								                  value={subject}
								                />
								            </div>
								        </div>
								    </div>
									<div className="form-row">
										<div className="col-md-12">
											<div className="form-group">
								                <input
								                  required
								                  id="emailaddress"
								                  type="email"
								                  className="form-control"
								                  placeholder="Email Address"
								                  name="email"
								                  onChange={this.onChange}
								                  value={email}
								                />
								            </div>
								        </div>
								    </div>
									<div className="form-row">
										<div className="col-md-12">
											<div className="form-group">
								                <textarea
								                  required
								                  id="query"
								                  className="form-control"
								                  placeholder="Your Question/suggestion"
								                  name="query"
								                  onChange={this.onChange}
								                  value={query}
								                />
								            </div>
								        </div>
								    </div>
									<button type="submit" className="btn btn-dark">Submit</button>
								</form>
							</div>
						</div>
					</div>		
					<br/><br/>	
					<br/><br/>	

				{
					this.props.conPost 
					?
					<>
	            		<div className="m-auto w-maxc p-5">
		            		<h3>
		            			Submitted Successfully<i className='fa fa-check-circle green'></i>
		            		</h3>
	            		</div>
					</>
					:
					<>
						{
							this.state.spin
							?
							<div className="container">
								<div className="row">
									<div className="m-auto">
										<i className="fas fa-spinner fa-spin fa-2x"></i>
									</div>
								</div>
							</div>
							:
							''
						}
					</>
				}
				</div>
		);
	}
}



const mapStateToProps= state => ({
	isAuthenticated: state.auth.isAuthenticated,
 	user: state.auth.user,
 	conPost: state.common.postCon,
})


export default connect(mapStateToProps, {contactPost, resetPost})(AboutUs)