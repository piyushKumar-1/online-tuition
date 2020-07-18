import React from 'react'
import '../../styles/practice.css'


export class Practice extends React.Component {
componentDidMount() {
	document.getElementById('practices').classList.add('active');
 document.title = "Our Practices | Learnerz Corner"
  window.scrollTo(0, 0)
}
componentWillUnmount(){
	document.getElementById('practices').classList.remove('active');
   
}
	
	render() {
		return (
			<div>
				<section className="pt-5 pb-5" data-aos="zoom-in-down" data-aos-duration="1200">
					<div className="container mt-5 mb-5">
						<div className="row mt-5 mb-5">
							<div className="col-sm-4 shadow m-auto">
								<div className="rounded">
									<div className="p-3">
										<h3 className="about-h3">Interactive Teaching</h3>
									</div>
								</div>	
							</div>
							<div className="col-sm-8 m-auto">
								<div className="rounded">
									<div className="p-3 m-auto" data-aos="fade-up" data-aos-duration="2000">
										<p>Making the students comfortable about the topic and testing their understandability by conducting online quiz or by asking them to narrate the concept in correspondance to an application.</p>
									</div>
								</div>	
							</div>
						</div>
					</div>
				</section>
				<section className="bg-white pt-5 pb-5" data-aos="zoom-in-down" data-aos-duration="1200">
					<div className="container mt-5 mb-5">
						<div className="row mt-5 mb-5">
							<div className="col-sm-8 m-auto">
								<div className="rounded">
									<div className="p-3 m-auto" data-aos="fade-up" data-aos-duration="2000">
										<p>Based on the grasping capability of students the rate of speed of session is framed.</p>
									</div>
								</div>	
							</div>
							<div className="col-sm-4 shadow m-auto">
								<div className="rounded">
									<div className="p-3">
										<h3 className="about-h3">Adaptive Speed of Delivery</h3>
									</div>
								</div>	
							</div>
						</div>
					</div>
				</section>
				<section className="pt-5 pb-5" data-aos="zoom-in-down" data-aos-duration="1200">
					<div className="container mt-5 mb-5">
					<div className="row mt-5 mb-5">
						<div className="col-sm-4 shadow m-auto">
							<div className="rounded">
								<div className="p-3">
									<h3 className="about-h3">Student Engagement</h3>
								</div>
							</div>	
						</div>
						<div className="col-sm-8 m-auto">
							<div className="rounded">
								<div className="p-3 m-auto" data-aos="fade-up" data-aos-duration="2000">
									<p>Making the session active by involving the students to participate in the discussion of topics. Further, it could be added with more questionnaires from both student and faculty.</p>
								</div>
							</div>	
						</div>
					</div>
					</div>
					</section>
					<section className="bg-white pt-5 pb-5" data-aos="zoom-in-down" data-aos-duration="1200">
					<div className="container mt-5 mb-5">

					<div className="row mt-5 mb-5">
						<div className="col-sm-8 m-auto">
							<div className="rounded">
								<div className="p-3 m-auto" data-aos="fade-up" data-aos-duration="2000">
									<p>Solving problems in the subject along with the student, and asking the student suggestion in each step to cross check the thought process and to teach the student how the faculty is approaching the problem.</p>
								</div>
							</div>	
						</div>
						<div className="col-sm-4 shadow m-auto">
							<div className="rounded">
								<div className="p-3">
									<h3 className="about-h3">Collaborative Study</h3>
								</div>
							</div>	
						</div>
					</div>
					</div>
					</section>

					<section className="pt-5 pb-5" data-aos="zoom-in-down" data-aos-duration="1200">
					<div className="container mt-5 mb-5">

					<div className="row mt-5 mb-5">
						<div className="col-sm-4 shadow m-auto">
							<div className="rounded">
								<div className="p-3">
									<h3 className="about-h3">Usage of online Teaching Tools</h3>
								</div>
							</div>	
						</div>
						<div className="col-sm-8 m-auto">
							<div className="rounded">
								<div className="p-3 m-auto" data-aos="fade-up" data-aos-duration="2000">
									<p>Usage of online teaching  tools to make the session interesting for the students and to give a feel of class room session.</p>
								</div>
							</div>	
						</div>
					</div>
					</div>
					</section>

					<section className="bg-white pt-5 pb-5" data-aos="zoom-in-down" data-aos-duration="1200">
						<div className="container mt-5 mb-5">

							<div className="row mt-5 mb-5">
								<div className="col-sm-8 m-auto">
									<div className="rounded">
										<div className="p-3 m-auto" data-aos="fade-up" data-aos-duration="2000">
											<p>Frequent feedback from both faculty and student about the behaviour and the quality of the session, and the concepts to further customize the session plan and mode of teaching for the students.</p>
										</div>
									</div>	
								</div>
								<div className="col-sm-4 shadow m-auto">
									<div className="rounded">
										<div className="p-3">
											<h3 className="about-h3">Feedback</h3>
										</div>
									</div>	
								</div>
							</div>
						</div>
					</section>


					<section className="pt-5 pb-5" data-aos="zoom-in-down" data-aos-duration="1200">
						<div className="container mt-5 mb-5">
							<div className="row mt-5 mb-5">
								<div className="col-sm-4 shadow m-auto">
									<div className="rounded">
										<div className="p-3">
											<h3 className="about-h3">Performance Monitoring</h3>
										</div>
									</div>	
								</div>
								<div className="col-sm-8 m-auto">
									<div className="rounded">
										<div className="p-3 m-auto" data-aos="fade-up" data-aos-duration="2000">
											<p>Monitoring the performance of the students in the assessment both at the learnerzcorner and the college. Determination of the gap in performing well and corrective measures will be incorporated.</p>
										</div>
									</div>	
								</div>
							</div>
						</div>
					</section>


					<section className="bg-white pt-5 pb-5" data-aos="zoom-in-down" data-aos-duration="1200">
						<div className="container mt-5 mb-5">
							<div className="row mt-5 mb-5">
								<div className="col-sm-8 m-auto">
									<div className="rounded">
										<div className="p-3 m-auto" data-aos="fade-up" data-aos-duration="2000">
											<p>Talk by industry experts or pre-recorded video of them sharing to the students to help them to get a feel of the real time application of the subjects they study in a semester.</p>
										</div>
									</div>	
								</div>
								<div className="col-sm-4 shadow m-auto">
									<div className="rounded">
										<div className="p-3">
											<h3 className="about-h3">Guest talk by Experts</h3>
										</div>
									</div>	
								</div>
							</div>
						</div>
					</section>

					
				
			</div>
		)
	}
}

export default Practice