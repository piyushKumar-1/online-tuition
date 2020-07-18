import React from 'react';
import '../../styles/about.css'


export default class AboutUs extends React.Component {
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
			<>
			<br/><br/>
				<div className="container">
					<div className="row">
						<div className="col-sm-8">
							<div className="title">
								<h3 styles={{fontWeight:'600'}}>LearnerZ Corner</h3>
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
								<img className="shadow" src="/static/frontend/logo-ab.png" />
							</div>
						</div>
					</div>
					<br/><br/>
					<br/>
					<div>
						<div className="vission">
							<h4 styles={{fontWeight:'600'}}>Vission Statement</h4>
						</div>
						<div className="statement">
							<p>To make students knowledgeable and outstanding in their studies by providing them excellent online training based on their needs, anywhere anytime.</p>
						</div>
					</div>

					<br/><br/>
					<br/>
					<div className="values">
						<h3 styles={{fontWeight:'600'}}>Our Core Values:</h3><br/>
						<ul>
							<li>
								<h4>1. Integrity</h4>
								<p>LearnerZ Corner is committed to provide quality education with high standards.</p>
							</li>
							<li>
								<h4>2. Respect</h4>
								<p>LearnerZ Corner maintain professionalism in delivering the content and with customer interaction. We listen to customers to express
their views to have a better working model which benefits both the company and customers..</p>
							</li>
							<li>
								<h4>3. Passion</h4>
								<p>LearnerZ Corner is passionate about education, and looks way to promote the content delivery model in a conducive manner.</p>
							</li>
							<li>
								<h4>4. Responsibility</h4>
								<p> LearnerZ Corner takes accountability for the results. We  strive towards betterment by finding solutions for the gaps.</p>
							</li>
							<li>
								<h4>5. Innovation</h4>
								<p>LearnerZ Corner provide better solutions to customer requirements through innovative solutions which we implement at every stage of process</p>
							</li>
						</ul>
					</div>
				</div>		
				<br/><br/>	
				<br/><br/>	
			</>
		);
	}
}
