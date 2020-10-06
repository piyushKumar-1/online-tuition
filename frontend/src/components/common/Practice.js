import React from 'react'
import '../../styles/practice.css'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


export class Practice extends React.Component {
componentDidMount() {
	document.getElementById('practices').classList.add('active');
 document.title = "Our Practices | LearnerZ Corner"
  window.scrollTo(0, 0)
  const txt = "OUR PRACTICES | "
	var i = 0;
	var speed = 25;
		function typeWriterAb() {
	  if (i < txt.length) {
	    document.getElementById("msgPr").innerHTML += txt.charAt(i);
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
	document.getElementById('practices').classList.remove('active');
   
}
	
	render() {
		return (
			<div className="bg-white practices-page">
				<div className="w-100 h-300px">
					<div className="text-center wid-max" data-aos="fade-in" data-aos-once="true">
						<h3 id="msgPr" data-aos="fade-in" data-aos-duration="300" className="ab"></h3>
						<h3 className="ab" data-aos="fade-in" data-aos-delay="1000" data-aos-duration="1500">&nbsp;LearnerZ Corner</h3>
					</div>
				</div>
				<div>
					<div className="down" style={{top:'-18px'}}>
						<div className="text-center">
							<i className="fa fa-angle-down black p-2"/>
						</div>
					</div>
					<div className="container-fluid" data-aos="slide-up" data-aos-once="true" data-aos-delay="300">
						<div className="row ">
							<div className="m-auto col-md-5 sti col-sm-6">
								<section className="pt-5 pb-5" data-aos="slide-up" data-aos-duration="600">
									<div className=" b mt-5 mb-5">
										<div className="row w-100 mr-auto ml-auto">
											<div className="col-sm-12 prac text-center">
												<div className="rounded"><div className="p-3"><h3 className="">Interactive Teaching</h3></div>
											</div>
										</div>
									</div>
										<div className="row mt-5 mb-5">
											<div className="col-sm-8 m-auto">
												<div className="rounded">
													<div className="p-0 m-auto" data-aos="fade-up" data-aos-duration="2000">
														<p className="p-prac">Making the students comfortable about the topic and testing their understandability by conducting online quiz or by asking them to narrate the concept in correspondance to an application.</p>
													</div>
												</div>	
											</div>
										</div>
									</div>
								</section>
							</div>
							<div className="m-auto col-md-5 sti col-sm-6">
								<section className="pt-5 pb-5" data-aos="slide-up" data-aos-duration="600">
									<div className=" b2 mt-5 mb-5">
										<div className="row w-100 mr-auto ml-auto ">
											<div className="col-sm-12 prac2 text-center">
												<div className="rounded"><div className="p-3"><h3 className="">Adaptive Speed of Delivery</h3></div>
											</div>
										</div>
									</div>
										<div className="row mt-5 mb-5">
											<div className="col-sm-8 m-auto">
												<div className="rounded">
													<div className="p-0 m-auto" data-aos="fade-up" data-aos-duration="2000">
														<p className="p-prac">Based on the grasping capability of students the rate of speed of session is framed.</p>
													</div>
												</div>	
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
						<div className="row ">
							<div className="m-auto col-md-5 sti col-sm-6">
								<section className="pt-5 pb-5" data-aos="slide-up" data-aos-duration="600">
									<div className=" b2 mt-5 mb-5">
										<div className="row w-100 mr-auto ml-auto">
											<div className="col-sm-12 prac2 text-center">
												<div className="rounded"><div className="p-3"><h3 className="">Student Engagement</h3></div>
											</div>
										</div>
									</div>
										<div className="row mt-5 mb-5">
											<div className="col-sm-8 m-auto">
												<div className="rounded">
													<div className="p-0 m-auto" data-aos="fade-up" data-aos-duration="2000">
														<p className="p-prac">Making the session active by involving the students to participate in the discussion of topics. Further, it could be added with more questionnaires from both student and faculty.</p>
													</div>
												</div>	
											</div>
										</div>
									</div>
								</section>
							</div>
							<div className="m-auto col-md-5 sti col-sm-6">
								<section className="pt-5 pb-5" data-aos="slide-up" data-aos-duration="600">
									<div className=" b mt-5 mb-5">
										<div className="row w-100 mr-auto ml-auto ">
											<div className="col-sm-12 prac text-center">
												<div className="rounded"><div className="p-3"><h3 className="">Collaborative Study</h3></div>
											</div>
										</div>
									</div>
										<div className="row mt-5 mb-5">
											<div className="col-sm-8 m-auto">
												<div className="rounded">
													<div className="p-0 m-auto" data-aos="fade-up" data-aos-duration="2000">
														<p className="p-prac">Solving problems in the subject along with the student, and asking the student suggestion in each step to cross check the thought process and to teach the student how the faculty is approaching the problem.</p>
													</div>
												</div>	
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
						<div className="row ">
							<div className="m-auto col-md-5 sti col-sm-6">
								<section className="pt-5 pb-5" data-aos="slide-up" data-aos-duration="600">
									<div className=" b mt-5 mb-5">
										<div className="row w-100 mr-auto ml-auto">
											<div className="col-sm-12 prac text-center">
												<div className="rounded"><div className="p-3"><h3 className="">Usage of online Teaching Tools</h3></div>
											</div>
										</div>
									</div>
										<div className="row mt-5 mb-5">
											<div className="col-sm-8 m-auto">
												<div className="rounded">
													<div className="p-0 m-auto" data-aos="fade-up" data-aos-duration="2000">
														<p className="p-prac">Usage of online teaching tools to make the session interesting for the students and to give a feel of class room session.</p>
													</div>
												</div>	
											</div>
										</div>
									</div>
								</section>
							</div>
							<div className="m-auto col-md-5 sti col-sm-6">
								<section className="pt-5 pb-5" data-aos="slide-up" data-aos-duration="600">
									<div className=" b2 mt-5 mb-5">
										<div className="row w-100 mr-auto ml-auto ">
											<div className="col-sm-12 prac2 text-center">
												<div className="rounded"><div className="p-3"><h3 className="">Feedback</h3></div>
											</div>
										</div>
									</div>
										<div className="row mt-5 mb-5">
											<div className="col-sm-8 m-auto">
												<div className="rounded">
													<div className="p-0 m-auto" data-aos="fade-up" data-aos-duration="2000">
														<p className="p-prac">Frequent feedback from both faculty and student about the behaviour and the quality of the session, and the concepts to further customize the session plan and mode of teaching for the students.</p>
													</div>
												</div>	
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
						<div className="row ">
							<div className="m-auto col-md-5 sti col-sm-6">
								<section className="pt-5 pb-5" data-aos="slide-up" data-aos-duration="600">
									<div className=" b2 mt-5 mb-5">
										<div className="row w-100 mr-auto ml-auto">
											<div className="col-sm-12 prac2 text-center">
												<div className="rounded"><div className="p-3"><h3 className="">Performance Monitoring</h3></div>
											</div>
										</div>
									</div>
										<div className="row mt-5 mb-5">
											<div className="col-sm-8 m-auto">
												<div className="rounded">
													<div className="p-0 m-auto" data-aos="fade-up" data-aos-duration="2000">
														<p className="p-prac">Monitoring the performance of the students in the assessment both at the learnerZ Corner and the college. Determination of the gap in performing well and corrective measures will be incorporated.</p>
													</div>
												</div>	
											</div>
										</div>
									</div>
								</section>
							</div>
							<div className="m-auto col-md-5 sti col-sm-6">
								<section className="pt-5 pb-5" data-aos="slide-up" data-aos-duration="600">
									<div className=" b mt-5 mb-5">
										<div className="row w-100 mr-auto ml-auto ">
											<div className="col-sm-12 prac text-center">
												<div className="rounded"><div className="p-3"><h3 className="">Guest talk by Experts</h3></div>
											</div>
										</div>
									</div>
										<div className="row mt-5 mb-5">
											<div className="col-sm-8 m-auto">
												<div className="rounded">
													<div className="p-0 m-auto" data-aos="fade-up" data-aos-duration="2000">
														<p className="p-prac">Talk by industry experts or pre-recorded video of them sharing to the students to help them to get a feel of the real time application of the subjects they study in a semester.</p>
													</div>
												</div>	
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


const mapStateToProps= state => ({
	isAuthenticated: state.auth.isAuthenticated,
 	user: state.auth.user
})


export default connect(mapStateToProps)(Practice)