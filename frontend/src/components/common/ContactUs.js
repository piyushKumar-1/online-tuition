import React from 'react';
import '../../styles/about.css'
import '../../styles/bubble.css'


export default class AboutUs extends React.Component {
componentDidMount() {
 document.getElementById('contact').classList.add('active');
 document.title = "Contact Us | Learnerz Corner"
  window.scrollTo(0, 0)
  const txt = "CONTACT US | "
  var i = 0;
  var speed = 30;
  	function typeWriterAb() {
	  if (i < txt.length) {
	    document.getElementById("msgCn").innerHTML += txt.charAt(i);
	    i++;
	    setTimeout(typeWriterAb, speed);
	  	if(i==txt.length){
		    j=txt.length;
	  	}
	  }
	}
	typeWriterAb();
}

componentWillUnmount(){
	document.getElementById('contact').classList.remove('active');
   
}
	render() {
		return (

			<>



				<div id="background-wrap">
					<div className="w-100 h-300px">
						<div className="text-center wid-max">
							<h3 id="msgCn" data-aos="fade-in" data-aos-duration="30" className="ab"></h3>
							<h3 className="ab" data-aos="fade-in" data-aos-delay="1000" data-aos-duration="1500">&nbsp;LearnerZ Corner</h3>
						</div>
					</div>
				    <div class="bubble x1"></div>
				    <div class="bubble x2"></div>
				    <div class="bubble x3"></div>
				    <div class="bubble x4"></div>
				    <div class="bubble x5"></div>
				    <div class="bubble x6"></div>
				    <div class="bubble x7"></div>
				    <div class="bubble x8"></div>
				    <div class="bubble x9"></div>
				    <div class="bubble x10"></div>
				</div>





				
			<br/><br/>
				<div className="container" data-aos="slide-up" data-aos-once="true" data-aos-delay="1500">
					<div className="row">
						<div className="col-sm-8">
							<div className="title">
								<h3 style={{fontWeight:600}}>LearnerZ Corner</h3>
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
							<h4 className="f-600">Vission Statement</h4>
						</div>
						<div className="statement">
							<p>To make students knowledgeable and outstanding in their studies by providing them excellent online training based on their needs, anywhere anytime.</p>
						</div>
					</div>

					<br/><br/>
					<br/>
					<div className="values">
						<h3 style={{fontWeight:'600'}}>Our Core Values:</h3><br/>
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
				<br/><br/>	
				<br/><br/>	
			</>
		);
	}
}
