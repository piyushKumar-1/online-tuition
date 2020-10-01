import React from 'react';
import '../../styles/about.css'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../styles/bubble.css'	


class AboutUs extends React.Component {
componentDidMount() {
	document.getElementById('about').classList.add('active');
 	document.title = "About Us | Learnerz Corner"
  	window.scrollTo(0, 0)
}

componentWillUnmount(){
	document.getElementById('about').classList.remove('active');
   
}
	render() {
		return (

			<div className="bg-white">


				<div id="background-wrap" data-aos="fade-in" data-aos-once="true">
					<img src="static/frontend/aboutUs.jpg" />			
				</div>





				
			<br/><br/>
				<div className="container">
					<div className="down">
						<div className="text-center">
							<i className="fa fa-angle-down black p-2"/>
						</div>
					</div>
					<div data-aos="slide-up" data-aos-once="true" data-aos-delay="300">
						<div className="row">
							<div className="col-sm-8">
								<div className="title">
									<h3 style={{fontWeight:600, color:'#1bb35d'}}>LearnerZ Corner</h3>
								</div>
								<div className="about-lernerz">
									<p>LearnerZ Corner is an online platform for engineering students to interact with expert faculty or peer subject matter experts
									in online for learning different subjects of engineering, getting help for assignment and homework and to get project
									guidance. The students from different streams of engineering can get subject revised in an one-to-one interactive manner 
									pertaining to the examination.</p>
									<p>The platform provides a way to earn anybody who aspire to teach to student community from different parts of the world.</p>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="im anima">
									<img className="shadow back" src="/static/frontend/logo_tit.png" />
								</div>
							</div>
						</div>
						<br/><br/>
						<br/>
						<div>
							<div className="vission">
								<h3 style={{fontWeight:'600', color:'#1bb35d'}}>Vission Statement</h3>
							</div>
							<div className="statement">
								<p>To make students knowledgeable and outstanding in their studies by providing them excellent online training based on their needs, anywhere anytime.</p>
							</div>
						</div>

						<br/><br/>
						<br/>
						<div className="values">
							<h3 style={{fontWeight:'600', color:'#1bb35d'}}>Our Core Values:</h3><br/>
							<ul>
								<li>
									<h4 style={{fontWeight:'600'}}>1. Integrity</h4>
									<p>LearnerZ Corner is committed to provide quality education with high standards.</p>
								</li>
								<li>
									<h4 style={{fontWeight:'600'}}>2. Respect</h4>
									<p>LearnerZ Corner maintain professionalism in delivering the content and with customer interaction. We listen to customers to express
	their views to have a better working model which benefits both the company and customers..</p>
								</li>
								<li>
									<h4 style={{fontWeight:'600'}}>3. Passion</h4>
									<p>LearnerZ Corner is passionate about education, and looks way to promote the content delivery model in a conducive manner.</p>
								</li>
								<li>
									<h4 style={{fontWeight:'600'}}>4. Responsibility</h4>
									<p> LearnerZ Corner takes accountability for the results. We  strive towards betterment by finding solutions for the gaps.</p>
								</li>
								<li>
									<h4 style={{fontWeight:'600'}}>5. Innovation</h4>
									<p>LearnerZ Corner provide better solutions to customer requirements through innovative solutions which we implement at every stage of process</p>
								</li>
							</ul>
						</div>
					</div>
				</div>		
				<br/><br/>	
				<br/><br/>	
			</div>
		);
	}
}




const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps )(AboutUs);