import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/Header.css';

import SimpleForm from './chatbot/enquiryBot';


class ScrollButton extends React.Component {
  constructor() {
    super();
  }


  scrollStep() {
    console.log(window.pageYOffset ,this.props.scrollStepInPx, "kalakl")
    window.scroll(0, 0);
  }

  scrollToTop() {
    this.scrollStep();
  }

  render () {
      return <div title='Back to top' className='scroll'
               onClick={ () => { this.scrollToTop(); }}>
                <small className='glyphicon-chevron-up'><i className="fa fa-long-arrow-right" aria-hidden="true"></i></small>
              </div>;
   }
}




export class Home extends Component {


state = {
	theposition: false,
}
componentWillUnmount(){
	document.getElementById('home').classList.remove('active');

}


componentDidMount() {
	document.getElementById('home').classList.add('active');
    document.title = "Home Page | LearnerZ Corner"
    window.scrollTo(0, 0)
    window.addEventListener('scroll', this.listenToScroll)
}


	listenToScroll = () => {
	  const winScroll =
	    document.body.scrollTop || document.documentElement.scrollTop

	  const height =
	    document.documentElement.scrollHeight -
	    document.documentElement.clientHeight

	  const scrolled = winScroll / height
		if(scrolled>0.3){
			console.log("av")
		  this.setState({
		    theposition: true,
		  })
		} else {
			this.setState({
		    theposition: false,
		  })
		}
	}

	left(){
	    $('.carosel-control-left').blur();
	    $('.carosel-control-left').parent().find('.carosel-item').first().insertAfter($('.carosel-control-right').parent().find('.carosel-item').last());
	};


	right(){
	  $('.carosel-control-left').blur();
	  $('.carosel-control-left').parent().find('.carosel-item').last().insertBefore($('.carosel-control-right').parent().find('.carosel-item').first());
	};



	render() {
		let showChat = false;
		const startChat = () => {showChat=true};
		const hideChat = () => {showChat=false};

		return (


			<div className="shadow">
			   <div className="bg-image">
			   { this.props.isAuthenticated ? this.props.user.teacher!=null ? <Redirect to="/teacher/dashboard"/> : <Redirect to="/student/dashboard"/> : '' }


							<div className="cus_container mt content">
								<div className="mr-auto ml-auto mt-5 mb-0 wid" data-aos="fade-down" data-aos-duration="600">

									<p className="tag-line2 mt-5">Online Platform for Engineering Students to Learn From Expert Faculty and Peer Instructors</p>

									<div className="row laga">
										<div className="col-sm-8 top--1">
										<br/>
										<div className="p-2">
											<a className="btn expert btn-outline-white">
												<div className="card-title" data-aos="fade" data-aos-once="true" data-aos-delay="600" data-aos-duration="600">
													<h5 style={{color: "black"}} className="sty">Attend Classes Anywhere Anytime</h5>
												</div>
											</a>
										</div>
										<div className="p-2">
											<a className="btn expert btn-outline-white">
												<div className="card-title" data-aos="fade" data-aos-once="true" data-aos-delay="1200" data-aos-duration="600">
													<h5 style={{color: "black"}} className="sty">Homework And Assignment Help</h5>
												</div>
											</a>
										</div>
										<div className="p-2">
											<a className="btn expert btn-outline-white">
												<div className="card-title" data-aos="fade" data-aos-once="true" data-aos-delay="1800" data-aos-duration="600">
													<h5 style={{color: "black"}} className="sty">Project Guidance</h5>
												</div>
											</a>
										</div><br/><br/>
											<Link to="/register" className="btn btn-start">Get Started</Link>
										</div>
										<div className="col-sm-4 top--0">
											<div className="img-fluid scene">
												<article className="clock shadow">
												  <div className="hours-container">
												    <div className="hours"></div>
												  </div>
												  <div className="minutes-container">
												    <div className="minutes"></div>
												  </div>
												  <div className="seconds-container">
												    <div className="seconds"></div>
												  </div>
												</article>
											</div>
										</div>
								    </div>
								</div>
							</div>
						</div>
					<br/><br/>
				<section className="m-auto bg-bitblue">
					<div className="m-auto sticky-top container" style={{display:"table"}}>
						<div className="">
							<div className="row intro" data-aos="fade-up" data-aos-duration="1000">
								<div className="col-lg-4 shadow">
									<div className="first pt-5 pr-5 pl-5 pb-3">
										<h3 className="tt f-600">Expert Faculty</h3>
										<p>Learn at your own pace from expert faculty and peers from different parts of the world, who are the subject matter experts in the corresponding domain.</p>
									</div>
									<div className="icon-text">
										<img src="https://img.icons8.com/wired/50/000000/for-experienced.png" width="80"/>
									</div>
								</div>
								<div className="col-lg-4 shadow">
									<div className="second pt-5 pr-5 pl-5 pb-3">
										<h3 className="tt f-600">CONDUCIVE LEARNING</h3>
										<p>Experience a positive learning environment by having focussed learning goals, customized content delivery model, active engagement and assessment.</p>
									</div>
									<div className="icon-text">
										<img src="https://img.icons8.com/ios-filled/100/000000/collaboration.png" width="80"/>
									</div>
								</div>
								<div className="col-lg-4 shadow">
									<div className="third pt-5 pr-5 pl-5 pb-3">
										<h3 className="tt f-600">1-to-1 Interactive session</h3>
										<p>Micro monitoring for doubt clarification, subject revision in order to improve the performance in examination and to increase the knowledge level in the subject. </p>
									</div>
									<div className="icon-text">
										<img src="https://img.icons8.com/pastel-glyph/128/000000/home.png" width="80"/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<br/><br/><br/>
				</section>

				<div className="section2 bg-bitblue">
					<div className="cus_container  p-3">
					<div className="cus_container text-left pp-5 p-5">
						<h3 className="tt f-600">steps to start</h3><br/><br/><br/><br/><br/><br/>
							<div className="row st1">
								<div className="card  text-left">
									<div className="" data-aos="fade-up" data-aos-duration="1000">
											<div className="steps-icon">01.</div>
											<div className="steps-explanation">
												<h5 className="step-h4">Create Account</h5>
												<p className="step-content">Register yourself with your credentials to utilize the platform. A valid email, phone number is mandatory to complete the registration successful.
 </p>
											</div>
									</div>
								</div>

								<div className="card  text-left">
								<div className="" data-aos="fade-up" data-aos-duration="1000">
											<div className="steps-icon">02.</div>
											<div className="steps-explanation">
												<h5 className="step-h4">Course Enquiry</h5>
												<p className="step-content">Specify the expected service such as tuition, revision, and assignment problem solving based on your department,  in the enquiry form.</p>
											</div>
											</div>
								</div>
								<div className="card  text-left">
								<div className="" data-aos="fade-up" data-aos-duration="1000">
										<div className="steps-icon">03.</div>
											<div className="steps-explanation">
												<h5 className="step-h4">Faculty Identification</h5>
												<p className="step-content">From the pool of expert faculty and talented peer instructors, LearnerZ Corner allocates faculty/ instructor based on your requirements.</p><br/>
											</div>
										</div>
								</div>
							</div>
							<div className="row st1">
								<div className="card text-left">
									<div className="" data-aos="fade-up" data-aos-duration="1000">
											<div className="steps-icon">04.</div>
											<div className="steps-explanation">
												<h5 className="step-h4">Free demo Session</h5>
												<p className="step-content">A free demo session for 30 minutes is arranged based on the comfort time to assess the suggested faculty is satisfying your expectations. To have the demo session successful it is advised to have a strong internet connection, earphone and a working phone or laptop.</p>
											</div>
										</div>
								</div>
								<div className="card  text-left">
										<div className="" data-aos="fade-up" data-aos-duration="1000">
											<div className="steps-icon">05.</div>
											<div className="steps-explanation">
												<h5 className="step-h4">Feedback  Collection</h5>
												<p className="step-content">Collection of feedback about the demo session. It helps to decide the expectations are met or not. If student/parent satisfied with the faculty, the corresponding faculty will be allocated. Else, LearnerZ Corner  re-allocates a new faculty as per the gaps identified.</p>
											</div>
										</div>
								</div>
								<div className="card  text-left">
										<div className="" data-aos="fade-up" data-aos-duration="1000" style={{paddingBottom:'64'}}>
											<div className="steps-icon">06.</div>
											<div className="steps-explanation">
												<h5 className="step-h4">Payment of fees</h5>
												<p className="step-content">Online fee payment, it is for per hour basis or the task based payment. The amount has to be deposited to  Leanerz Corner  account.</p><br/><br/>
											</div>
										</div>
								</div>
							</div>
						</div>
					</div>
				</div>


				<br/><br/><br/>


                <div className="section3 container">
                    <div className="carosel" id="carosel1">
                      <button className="carosel-control carosel-control-left glyphicon glyphicon-chevron-left" onClick={this.right}><i className="fa fa-arrow-left"></i></button>
                      <div className="carosel-inner">
                        <div className="carosel-item" data-aos="flip-up" data-aos-duration="1100">
                            <div className="card testi shadow">
								<div className="p-5">
                                    <div className="ani">
								        <p className="inverted">Design is not how it looks like and feels like. Design is how it works.<br/><br/><br/><br/></p>

									</div>
								</div>
							</div>
							<div className="name text-center place">
							    <h5 className="name-font">Steve Jobs</h5>
							    <p className="place-font">Apple co-founder(CEO)</p>

							</div>

                        </div>
                        <div className="carosel-item" data-aos="flip-up" data-aos-duration="1100">
                            <div className="card testi shadow">
								<div className="p-5">
                                    <div className="ani">
								        <p className="inverted">A good scientist is a person with original ideas. A good engineer is a person who makes a design that works with as few original ideas as possible. There are no prima donnas in engineering.</p>

									</div>
								</div>
							</div>
							<div className="name text-center place">
							    <h5 className="name-font">Freeman Dyson</h5>
							    <p className="place-font">Mathematician and Theoretical Physicist</p>

							</div>

                        </div>
                        <div className="carosel-item" data-aos="flip-up" data-aos-duration="1100">
                            <div className="card testi shadow">
								<div className="p-5">
                                    <div className="ani">

								        <p className="inverted">At its heart, engineering is about using science to find creative, practical solutions. It is a noble profession.<br/><br/><br/></p>

									</div>
								</div>
							</div>
							<div className="name text-center place">
							    <h5 className="name-font">Queen Elizabeth II</h5>
							    <p className="place-font">Queen of the United Kingdom</p>

							</div>

                        </div>
                        <div className="carosel-item" data-aos="flip-up" data-aos-duration="1100">
                            <div className="card testi shadow">
								<div className="p-5">
                                    <div className="ani">

								        <p className="inverted">Scientists investigate that which already is; engineers create that which has never been.<br/><br/><br/><br/></p>


										</div>
								</div>
							</div>
							<div className="name text-center place">
							    <h5 className="name-font">Albert Einstein</h5>
							    <p className="place-font">Scientist</p>

							</div>

                        </div>

                      </div>
                      <button className="carosel-control carosel-control-right glyphicon glyphicon-chevron-right" onClick={this.left}><i className="fa fa-arrow-right"></i></button>
                    </div>
                </div>

		        { this.state.theposition ? <ScrollButton scrollStepInPx="50" delayInMs="16.66"/> : '' }


				<br/><br/><br/>
			</div>
		)
	}
}


const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps )(Home);
