import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/Header.css';

import SimpleForm from './chatbot/enquiryBot';


class ScrollButton extends React.Component {
  constructor() {
    super();


    this.state = {
        intervalId: 0,
        theposition: false
    };
  }

  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return <div title='Back to top' className='scroll' 
               onClick={ () => { this.scrollToTop(); }}>
                <small className='arrow-up glyphicon-chevron-up'>Move to Top <i class="fa fa-long-arrow-right" aria-hidden="true"></i></small>
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
		var i = 0;
		var txt = ['Attend Classes Anywhere Anytime', 'Home Work And Assignment Help', 'Project Guidance']
		var speed = 30;
		var j = txt.length;
		var k = 0;
		document.getElementById('home').classList.add('active');
   
		function clear(){
			if (j <= txt[k].length && j>=0) {
		    document.getElementById("msg").innerHTML = txt[k].slice(0,j);
		    setTimeout(clear, speed);
			j--;
			    if(j==-1){
			    	i=0;
			    	k+=1;
			    	if(k==txt.length){
			    		k=0;
			    	}
		    		setTimeout(typeWriter, 800);
			    }
			}
		}
		function typeWriter() {
		  if (i < txt[k].length) {
		    document.getElementById("msg").innerHTML += txt[k].charAt(i);
		    i++;
		    setTimeout(typeWriter, speed);
		  	if(i==txt[k].length){
			    j=txt[k].length;
		  		setTimeout(clear, 1500);
		  	}
		  }
		}
		typeWriter();
 document.title = "Home Page | Learnerz Corner"
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


			<div>
			   <div className="bg-image">

							<div className="cus_container mt content">
								<div className="m-auto wid" data-aos="fade-down" data-aos-duration="600">
									<p className="tag-line sticky-top shadow">Online Platform for Engineering Students to Learn From
Expert Faculty and Peer Instructors</p><br/><br/><br/><br/>
									<div className="row laga">											
										<div className="col-sm-8">
										<br/>
											<a className="btn expert btn-outline-white">
												<div className="card-title">
													<h5 style={{color: "black"}} id="msg" className="sty"></h5>
												</div>
											</a><br/><br/><br/><br/>
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
							<div className="row">
								<div className="col-sm-4 w-100ic text-left m-auto">
									<div className="card" data-aos="fade-up" data-aos-duration="1000">
											<div className="steps-icon">01.</div>
											<div className="steps-explanation">
												<h5 className="step-h4">Create Account</h5>
												<p className="step-content">Register yourself with your credentials to utilize the platform. A valid email, phone number is mandatory to complete the registration successful.
 </p>
											</div>
									</div>
								</div>

								<div className="col-sm-4 w-100ic text-left m-auto">
								<div className="card" data-aos="fade-up" data-aos-duration="1000">
											<div className="steps-icon">02.</div>
											<div className="steps-explanation">
												<h5 className="step-h4">Course Enquiry</h5>
												<p className="step-content">Specify the expected service such as tuition, revision, and assignment problem solving based on your department,  in the enquiry form.</p>
											</div>
											</div>
								</div>
								<div className="col-sm-4 w-100ic text-left m-auto">
								<div className="card" data-aos="fade-up" data-aos-duration="1000">
											<div className="steps-icon">03.</div>
											<div className="steps-explanation">
												<h5 className="step-h4">Faculty Indentification</h5>
												<p className="step-content">Learnerz Corner will suggest you the best faculty based on your requirements.</p>
											</div>
											</div>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-4 w-100ic text-left m-auto">

								<div className="card" data-aos="fade-up" data-aos-duration="1000">
											<div className="steps-icon">04.</div>
											<div className="steps-explanation">
												<h5 className="step-h4">Free demo Session</h5>
												<p className="step-content">A free demo session for 30 minutes is arranged based on the comfort time to assess the suggested faculty is satisfying your expectations. To have the demo session successful it is advised to have a strong internet connection, earphone and a working phone or laptop.</p>
											</div>
											</div>
								</div>
								<div className="col-sm-4 w-100ic text-left m-auto">
										<div className="card" data-aos="fade-up" data-aos-duration="1000">
											<div className="steps-icon">05.</div>
											<div className="steps-explanation">
												<h5 className="step-h4">Feedback  Collection</h5>
												<p className="step-content">Collection of feedback about the demo session. It helps to decide the expectations are met. If student/parent satisfied with the faculty, the corresponding faculty will be allocated. Else, learnerz corner suggests a new faculty as per the gaps identified.</p>
											</div>
										</div>
								</div>
								<div className="col-sm-4 w-100ic text-left m-auto">
										<div className="card" data-aos="fade-up" data-aos-duration="1000" style={{paddingBottom:'64'}}>
											<div className="steps-icon">06.</div>
											<div className="steps-explanation">
												<h5 className="step-h4">Payment of fees</h5>
												<p className="step-content">Online fee payment, it is for per hour basis or the task based payment. The amount has to be deposited to  Leanerz Corner  account.</p>
											</div>
<small>*Refer terms and conditions for the cancellation policy.</small>

										</div>
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
											<img src={"https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png"} width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
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
											<img src={"https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png"} width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
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
											<img src={"https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png"} width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
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
											<img src={"https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png"} width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
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
											<img src={"https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png"} width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
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
											<img src={"https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png"} width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
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
											<img src={"https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png"} width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
											<img src="https://i.pinimg.com/originals/7e/28/89/7e288947c2c179f39398a72fdad19e0c.png" width="20" className="float-left" />
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

		        { this.state.theposition ? <ScrollButton scrollStepInPx="50" delayInMs="16.66"/> : '' }


				<br/><br/><br/>
			</div>
		)
	}
}


export default Home
















