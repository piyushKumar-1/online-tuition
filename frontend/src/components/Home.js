import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../styles/Header.css';

export class Home extends Component {


componentDidMount() {

 document.title = "Home Page | Learnerz Corner"
  window.scrollTo(0, 0)
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
		return (


			<div>
		            <div className="bg-image">

							<div className="cus_container mt content">
								<div className="m-auto wid" data-aos="fade-down" data-aos-duration="600">
									<p className="tag-line">Online learning Platform for B.E/B.Tech Engineering Students to study From Expert Faculty and Peer Instructors.</p><br/><br/>
									<div className="row laga">											
										<div className="col-sm-8">
										<br/>
											<a className="btn expert btn-outline-white">
												<div className="card-title">
													<h5 style={{color: "black"}} id="msg" className="sty"></h5>
												</div>
											</a><br/><br/>
											<Link to="/register" className="btn btn-start btn-dark">Get Started</Link>
										</div>
										<div className="col-sm-4">
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
					<div className="m-auto container" style={{display:"table"}}>
						<div className="">
							<div className="row intro" data-aos="fade-up" data-aos-duration="1000">
								<div className="col-lg-4 shadow">
									<div className="first pt-5 pr-5 pl-5 pb-3">
										<h3 className="tt f-600">Expert Faculty</h3>
										<p>Experienced online tuition teachers who love to spead knowledge of their subjects. Find an experienced tutor from reputed institutes and start learning online.</p>
									</div>
									<div className="icon-text">
										<img src="https://img.icons8.com/wired/50/000000/for-experienced.png" width="80"/>
									</div>
								</div>
								<div className="col-lg-4 shadow">
									<div className="second pt-5 pr-5 pl-5 pb-3">
										<h3 className="tt f-600">Home Learning</h3>
										<p>Attend class anywhere at your comfortable time. Get the best out of the best tutors sitting at your sofa.</p>
									</div>
									<div className="icon-text">
										<img src="https://img.icons8.com/ios-filled/100/000000/collaboration.png" width="80"/>
									</div>
								</div>
								<div className="col-lg-4 shadow">
									<div className="third pt-5 pr-5 pl-5 pb-3">
										<h3 className="tt f-600">one to one interactive session</h3>
										<p>Utilise features provided by the best online tuition site to take your knowledge to higher level.</p>
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
					<div className="cus_container text-left card pp-5 p-5" data-aos="fade-up" data-aos-duration="1000">
						<h3 className="tt f-600" data-aos="fade-up">steps to start</h3>
							<div className="row" data-aos="fade-up">
								<div className="col-sm-6 w-100ic text-left m-auto">
									<ul className="w-100 float-left">
										<li>
											<div className="steps-icon">1</div>
											<div className="step-icon">1</div>
											<div className="steps-explanation">
												<h5 className="step-h4">Create Account</h5>
												<p>Some explainatery text that we can change accordinlgly</p>
											</div>
										</li>

										<li>
											<div className="steps-icon">2</div>
											<div className="step-icon">2</div>
											<div className="steps-explanation">
												<h5 className="step-h4">Enquiry Of Course</h5>
											</div>
										</li>

										<li>
											<div className="steps-icon">3</div>
											<div className="step-icon">3</div>
											<div className="steps-explanation">
												<h5 className="step-h4">Indentification of Faculty</h5>
											</div>
										</li>
										<li>
											<div className="steps-icon">4</div>
											<div className="step-icon">4</div>
											<div className="steps-explanation">
												<h5 className="step-h4">Free demo Session</h5>
											</div>
										</li>
										<li>
											<div className="steps-icon">5</div>
											<div className="step-icon">5</div>
											<div className="steps-explanation">
												<h5 className="step-h4">Payment of fees</h5>
											</div>
										</li>
									</ul>
								</div>
								<div className="col-md-6 m-auto hidic text-center">
									<img className="img-fluid" src="/static/frontend/read.svg" width="280" />
								</div>
							</div>
						</div>
					</div>
				</div>


				<br/><br/><br/>


                <div className="section3 container">
                    <div class="carosel" id="carosel1">
                      <button class="carosel-control carosel-control-left glyphicon glyphicon-chevron-left" onClick={this.left}><i className="fa fa-arrow-left"></i></button>
                      <div class="carosel-inner">
                        <div class="carosel-item" data-aos="flip-up" data-aos-duration="1100">
                            <div className="card testi shadow">
								<div className="p-5">
                                    <div className="ani">
								        <p className="inverted">1Text to be written by the sers, important and nice feedbacks about the servie and all that stuff would be displayed ere, check the font and anything lse that you want to change in this card. this text is randomly written and can be changed to whatever you specify.</p>
                                        <div className="stars">
											<img src={"https://freesvg.org/img/1296082035.png"} width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
                                        </div>
									</div>
								</div>
							</div>
							<div className="name text-center place">
							    <h5 className="name-font">Name</h5>
							    <p className="place-font">PPPPlace</p>

							</div>

                        </div>
                        <div class="carosel-item" data-aos="flip-up" data-aos-duration="1100">
                            <div className="card testi shadow">
								<div className="p-5">
                                    <div className="ani">
								        <p className="inverted">2Text to be written by the sers, important and nice feedbacks about the servie and all that stuff would be displayed ere, check the font and anything lse that you want to change in this card. this text is randomly written and can be changed to whatever you specify.</p>
                                        <div className="stars">
											<img src={"https://freesvg.org/img/1296082035.png"} width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
                                        </div>
									</div>
								</div>
							</div>
							<div className="name text-center place">
							    <h5 className="name-font">Name</h5>
							    <p className="place-font">PPPPlace</p>

							</div>

                        </div>
                        <div class="carosel-item" data-aos="flip-up" data-aos-duration="1100">
                            <div className="card testi shadow">
								<div className="p-5">
                                    <div className="ani">

								        <p className="inverted">3Can see the chnage by the sers, important and nice feedbacks about the servie and all that stuff would be displayed ere, check the font and anything lse that you want to change in this card. this text is randomly written and can be changed to whatever you specify.</p>
                                        <div className="stars">
											<img src={"https://freesvg.org/img/1296082035.png"} width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
										</div>
									</div>
								</div>
							</div>
							<div className="name text-center place">
							    <h5 className="name-font">Name</h5>
							    <p className="place-font">PPPPlace</p>

							</div>

                        </div>
                        <div class="carosel-item" data-aos="flip-up" data-aos-duration="1100">
                            <div className="card testi shadow">
								<div className="p-5">
                                    <div className="ani">

								        <p className="inverted">4Text to be written by the sers, important and nice feedbacks about the servie and all that stuff would be displayed ere, check the font and anything lse that you want to change in this card. this text is randomly written and can be changed to whatever you specify.</p>
                                        <div className="stars">
											<img src={"https://freesvg.org/img/1296082035.png"} width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
										</div>

										</div>
								</div>
							</div>
							<div className="name text-center place">
							    <h5 className="name-font">Name</h5>
							    <p className="place-font">PPPPlace</p>

							</div>

                        </div>
                        <div class="carosel-item" data-aos="flip-up" data-aos-duration="1100">
                            <div className="card testi shadow">
								<div className="p-5">
                                    <div className="ani">

								        <p className="inverted">5A bit different by the sers, important and nice feedbacks about the servie and all that stuff would be displayed ere, check the font and anything lse that you want to change in this card. this text is randomly written and can be changed to whatever you specify.</p>
                                        <div className="stars">
											<img src={"https://freesvg.org/img/1296082035.png"} width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
										</div>

										</div>
								</div>
							</div>
							<div className="name text-center place">
							    <h5 className="name-font">Name</h5>
							    <p className="place-font">PPPPlace</p>

							</div>
                        </div>
                        <div class="carosel-item" data-aos="flip-up" data-aos-duration="1100">
                            <div className="card testi shadow">
								<div className="p-5">
                                    <div className="ani">

								        <p className="inverted">6Text to be written by the sers, important and nice feedbacks about the servie and all that stuff would be displayed ere, check the font and anything lse that you want to change in this card. this text is randomly written and can be changed to whatever you specify.</p>
                                        <div className="stars">
											<img src={"https://freesvg.org/img/1296082035.png"} width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
										</div>

										</div>
								</div>
							</div>
							<div className="name text-center place">
							    <h5 className="name-font">Name</h5>
							    <p className="place-font">PPPPlace</p>

							</div>

                        </div>
                        <div class="carosel-item" data-aos="flip-up" data-aos-duration="1100">
                            <div className="card testi shadow">
								<div className="p-5">
                                    <div className="ani">

								        <p className="inverted">7Little change, important and nice feedbacks about the servie and all that stuff would be displayed ere, check the font and anything lse that you want to change in this card. this text is randomly written and can be changed to whatever you specify.</p>
                                        <div className="stars">
											<img src={"https://freesvg.org/img/1296082035.png"} width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
											<img src="https://freesvg.org/img/1296082035.png" width="25" className="float-left" />
										</div>

										</div>
								</div>
							</div>
							<div className="name text-center place">
							    <h5 className="name-font">Name</h5>
							    <p className="place-font">PPPPlace</p>
							</div>

                        </div>
                      </div>
                      <button class="carosel-control carosel-control-right glyphicon glyphicon-chevron-right" onClick={this.right}><i className="fa fa-arrow-right"></i></button>
                    </div>
                </div>


				<br/><br/><br/>
			</div>
		)
	}
}

export default Home