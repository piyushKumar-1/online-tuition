import React from 'react'
import '../../styles/common.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCourses, getSubCourses, getSubjects, enqPost } from '../../actions/commonActions.js';
import { HOST } from '../../actions/types';

export class Enquire extends React.Component {
	state = {
		name: null,
		email: null,
		phone: null,
		std: null,
		country: null,
		department: null,
		year: null,
		service: 'assignment',
		subject: null,
		sub_code: null,
		other_sub: null,
		project: null,
		other: null,
		instruction: null,
		time: null,
		day: null,
		upload: '',
		ph_help: '',
		ph:false,
		ph_code:false,
		ph_len:false,
		em_help: '',
		em:false,
		fi_help:'(max. 1MB pdf, jpg)',
		fi:true,
		disabled:true,
		spe_in_l:100
	}

	static propTypes = {
    courses: PropTypes.array,
    subCourses: PropTypes.array,
		values: PropTypes.object.isRequired,
		getSubCourses: PropTypes.func.isRequired,
		getCourses: PropTypes.func.isRequired,
		getSubjects: PropTypes.func.isRequired,
	}

	checkhshouldi(){
        var kl = this.props.values.isCLoading && this.props.values.isSCLoading && this.props.values.isSLoading
        console.log(kl)
        return kl;
    }

	makeCourses = () => {
        const { courses, subCourses } = this.props;

        let j = 0;
        let k = 0;
        var ele = [];

        console.log(this.props.match.params.subCourseId)
        var str = '';
    	for(k=0;k<courses.length;k++){
    		console.log(courses[k]['id'], this.props.match.params.courseId )
        	if(courses[k]['id']==this.props.match.params.courseId){
        		var kk =(<><h3 className="">Enquiry About {courses[k]['course_name']} Course: </h3><br/><br/></>)
        	}
        }
	    var course = [];
	    for(k=0;k<subCourses.length;k++){
        	if(subCourses[k]['id']==this.props.match.params.subCourseId){
				var jk = (
					<>
					<div className="col-sm-6 mt-3">
						<div className="box">
							<div className="card">
								<div className="row">
	        						<div className="col-md-8">
			        					<h4 className='a p-4 float-left mtlbkiw black'>{subCourses[k].sub_course_name}</h4>
			        				</div>
	        						<div className="col-md-4 jic m-auto">
			        					<img className="pr-2 img-spin float-right" height="50" src={HOST+"/static/frontend/"+subCourses[k].id+".svg"} />
	        						</div>
								</div>
							</div>
						</div>
					</div>
					</>
				)
			}
		}
		course.push(jk)
    	var content = React.createElement("div", {className:'row jc'},  course)
    	var final = (<div className="p-3">{kk}{content}</div>)

    	ele.push(final)

        return ele;
	}
	componentDidMount() {
		this.props.getSubjects();
        this.props.getCourses();
		this.props.getSubCourses();
		document.getElementById('courses').classList.add('active');
		document.title = "Course Enquiry | LearnerZ Corner"
		window.scrollTo(0, 0)
	}

	subject_option(){
		const { subjects } = this.props;
		var ele = []
    	for(var i=0;i<subjects.length;i++){
    		if(this.props.match.params.subCourseId==subjects[i].sub_course_id){
	    		ele.push(<option value={subjects[i].id}>{subjects[i].subject_name}</option>)
	    	}
    	}
    	ele.push(<option value="other">Other</option>)
    	return ele;
	}

	componentWillUnmount(){
		try{
		document.getElementById('courses').classList.remove('active');
		} catch(e){
		console.log(e);;
		}
	}
	onChange = (e) => {
    	console.log(this.state)
    	if(e.target.name==='instruction'){
    		if(100-e.target.value.length>=0){
	    		this.setState({ [e.target.name]: e.target.value, spe_in_l: 100-e.target.value.length });
    		}
    	} else {
    		this.setState({ [e.target.name]: e.target.value });
    	}
    }
    onEmailChange = (e) => {
    	if(e.target.value.length>30){
    		this.setState({ 'em_help': [<p style={{color:"red"}}>max. limit 30</p>]});
    	} else if(e.target.value.length<5){
    		this.setState({  [e.target.name]: e.target.value, 'em_help': [<p style={{color:"red"}}>Email address doesn't exist</p>], 'em': false });
    	} else {
    		if(e.target.value.indexOf("@")==-1 ){
	    		this.setState({  [e.target.name]: e.target.value, 'em_help': [<p style={{color:"red"}}>Email address doesn't exist</p>], 'em': false});
	    	} else if((e.target.value.length - e.target.value.indexOf("@"))<3) {
	    		this.setState({  [e.target.name]: e.target.value, 'em_help': [<p style={{color:"red"}}>Email address doesn't exist</p>], 'em': false});
	    	} else {
	    		this.setState({  [e.target.name]: e.target.value, 'em_help': "Good", 'em': true});
	    	}
    	}
    	console.log(this.state)
    }

		onCountryChange = (e) => {
			console.log(e.target.value.replace("+",""));
			this.setState({
				ph_code:e.target.value,
				std: e.target.value
			})
			var k;
			var country;
			switch(e.target.value) {
			  case "+91":
			    k = 10;
					country = "India";
			    break;
				case "+93":
					k = 10;
					country = "Afganistan";
			    break;
				case "+61":
					k = 10;
					country = "Australia";
			    break;
				case "+54":
					k = 13;
					country = "Argentina";
					break;
				case "+1":
					k = 10;
					country = "USA";
					break;
				case "+39":
					k = 10;
					country = "Itlay";
					break;
				case "+44":
					k = 10;
					country = "UK";
					break;

			  default:
			    k = 10;
			}
			this.setState({
				ph_len: k,
				country: country
			})
			// document.getElementById(e.target.value).innerText = e.target.value;
			console.log(country, "country");
		}

    onPhoneChange = (e) => {
    	if(e.target.value.length<(this.state.ph_len+1)){
    		this.setState({ [e.target.name]: e.target.value, ph_help:[<p style={{color:"red"}}>Require 10 digits</p>], ph: false })
    	}
    	if(e.target.value.length==this.state.ph_len) {
    		this.setState({ ph_help: 'Good', ph:true })
    	}
    }
    onTypeChange = (e) => {
    	this.setState({'project':'', 'other':'', 'subject':null, 'sub_code':null});
    	this.setState({ [e.target.name]: e.target.value});
    	console.log(this.state)


    }
    onFileUpload = (e) => {
    	console.log(e.target.files)
    	if(e.target.files[0].size/1024/1024<=1){
	    	this.setState({
		      upload: e.target.files[0], 'fi':true, fi_help:'Good'
		    })
		} else {
			this.setState({fi_help:[<p style={{color:"red"}}>File size should be less than 1 MB</p>], 'fi':false})
		}
    }
    onSubmit = (e) => {
    	e.preventDefault();
    	const { name, email, phone, std, ph_code, country, department, year, service, subject, sub_code, other_sub, project, other, instruction, time, day, upload } = this.state;
			var ph = ph_code+phone;
		console.log(ph, "phiohsdfhsd");
	    let form_data = new FormData();
			form_data.append('file', upload, upload.name);

	    form_data.append('name', name);
	    form_data.append('email', email);
	    form_data.append('ph_no', ph);
	    form_data.append('std', std );
	    form_data.append('country', country );
	    form_data.append('department', this.props.match.params.subCourseId-1);
	    form_data.append('year', year);
	    form_data.append('service', service);
	    form_data.append('subject', subject);
	    form_data.append('sub_code', sub_code);
	    form_data.append('other_sub', other_sub);
	    if(service=="project"){
		    form_data.append('project', project);
	    }
	    else if(service=="other"){
		    form_data.append('other', other);
	    } else {
			form_data.append('project', null);
		    form_data.append('other', null);
	    }
	    form_data.append('instruction', instruction);
	    form_data.append('time', time);
	    form_data.append('day', day);


    	fetch("https://api.ipify.org?format=json")
    	.then(res => console.log(res))

    	const newEnq = {
    		name,
    		email,
    		phone,
    		std,
    		country,
    		department,
    		year,
    		service,
    		subject,
    		sub_code,
    		project,
    		other,
    		instruction,
    		time,
    		day,
    		upload
    	};


    	setTimeout(() => {console.log(newEnq);this.props.enqPost(form_data);}, 1000)


    }






	render() {
    	const { name, email, phone, std, country, department, year, service, subject, sub_code, other_sub, project, other, instruction, time, day, upload } = this.state;
		const projectForm = (
			<div className="form-row mt-3">
		    	<div className="col-md-6">
		            <div className="form-group m-auto p-2 md-form w-75">
		                <label>Project</label>
		                <input
		                  required

		                  type="text"
		                  className="form-control"
		                  name="project"
		                  onChange={this.onChange}
		                  value={project}
		                />
		        		<div className="help"><small>(max. 150 words)</small></div>
		            </div>
		        </div>
		    </div>
		)
		const otherForm = (
		    <div className="form-row mt-3">
		    	<div className="col-md-6">
		            <div className="form-group m-auto p-2 md-form w-75">
		                <label>Other</label>
		                <input
		                  required
		                  type="text"
		                  className="form-control"
		                  name="other"
		                  onChange={this.onChange}
		                  value={other}
		                />
		        		<div className="help"><small>(max. 150 words)</small></div>
		            </div>
		        </div>
		    </div>

		)
		const otherSub = (
            <div className="form-row mt-3">
				<div className="col-md-6">
		            <div className="form-group m-auto p-2 md-form w-75">
		                <label>Subject</label>
		                <input
		                  required
		                  type="text"
		                  className="form-control"
		                  name="other_sub"
		                  onChange={this.onChange}
		                  value={other_sub}
		                />
		            </div>
		        </div>
				<div className="col-md-6">
		            <div className="form-group m-auto p-2 md-form w-75">
		                <label>Subject code</label>
		                <input
		                  required
		                  type="text"
		                  className="form-control"
		                  name="sub_code"
		                  onChange={this.onChange}
		                  value={sub_code}
		                />
		            </div>
		        </div>
	        </div>

		)
		const subjectForm = (
			<>
	            <div className="form-row mt-3">
			    	<div className="col-md-6">
			            <div className="form-group m-auto p-2 md-form w-75">
			                <label>Subject</label>
			                <select class="form-control" id="subjectOptions" onChange={this.onChange} name="subject" value={subject}>
				                <option>Choose Subject</option>
				                { this.props.values.isSLoading ? this.subject_option() : ''}
				            </select>
			            </div>
			        </div>
			    </div>
			    { this.state.subject == 'other' ? otherSub : '' }
			</>
		)
		const k = () =>{
			const { service } = this.state;
			console.log(service, "yahi hai")
			if(service=='project'){
				return projectForm
			} else if(service=='other'){
				return otherForm
			} else {
				return subjectForm
			}
		}
		return (
			<div className="container">
				<div className="mt-5 mb-5">

					{ this.checkhshouldi() ? this.makeCourses() : <div className="container m-auto"><i className="fas fa-spinner fa-spin fa-2x"></i></div> }
				</div>
				{
					this.props.values.enqMsg ?
					 <div className="m-auto text-center w-maxc p-5 h-75">
						 <h3>
							 Submitted Successfully<i className='fa fa-check-circle green'></i>
						 </h3>
					 </div>

					 :
						<div className="mt-5 mb-5 container">
							<form onSubmit={this.onSubmit} className="mt-5 mb-5" encType="multipart/form-data">
								<div className="form-row">
									<div className="col-md-6">
										<div className="form-group m-auto p-2 md-form w-75">
							                <label for="name">Name</label>
							                <input
							                  required
							                  id="name"
							                  type="text"
							                  className="form-control"
							                  name="name"
							                  onChange={this.onChange}
							                  value={name}
							                />
							            </div>
							        </div>
							    </div>
							    <div className="form-row">
									<div className="col-md-6">
							            <div className="form-group m-auto p-2 md-form w-75">
							                <label for="email">Email</label>
							                <input
							                  required
							                  id="email"
							                  type="email"
							                  className="form-control"
							                  name="email"
							                  onChange={this.onEmailChange}
							                  value={email}
							                />
							                <div className="help"><small>{this.state.em_help}</small></div>
							            </div>
							        </div>
							    </div>
							    <div className="form-row">
										<div className="col-md-6">
											<div className="form-group m-auto p-2 md-form w-75">
												<label for="phone">Contact Number</label>
											</div>
										</div>
									</div>
							    <div className="form-row">
										<div className="col-md-6">
											<div className="form-group m-auto p-2 md-form w-75">
												<div className="form-row">
													<div className="col-md-4">
														<select class="form-control" id="Options" onChange={this.onCountryChange} name="Country" value={this.state.ph_code}>
															<option>Country</option>
															<option value="+91" id="+91">India</option>
															<option value="+1" id="+1">USA</option>
															<option value="+44" id="+44">UK</option>
															<option value="+93" id="+93">Afganistan</option>
															<option value="+54" id="+54">Argentina</option>
															<option value="+61" id="+61">Australia</option>
															<option value="+39" id="+39">Itlay</option>
														</select>
													</div>
													<div className="col-md-8">
														<input
														disabled={ !this.state.ph_len}
														id="phone"
														type="number"
														className="form-control w-100"
														name="phone"
														onChange={this.onPhoneChange}
														value={phone}
														/>
														<div className="help"><small>{this.state.ph_len ? <>Require {this.state.ph_len} Digits </> :'' }</small></div>
													</div>
												</div>
											</div>
								    </div>
									</div>
							    <div className="form-row mb-3">
							    	<div className="col-md-6">
							            <div className="form-group m-auto p-2 md-form w-75">
							                <label for="year">Year</label>
							                <input
							                  required
							                  id='year'
							                  type="text"
							                  className="form-control"
							                  name="year"
							                  onChange={this.onChange}
							                  value={year}
							                />
							            </div>
							        </div>
							    </div>
							    <div className="card form-row w-75 m-auto p-4 mt-5 mb-4">
								    <div className="form-group w-100 m-auto p-2">
								        <label>Service</label>
							            <div onChange={this.onTypeChange} className="">
							            	<div className="form-row">
							            		<div className="col-md-2">
									                <input type="radio" value="assignment" defaultChecked name="service"/> Assignment
									            </div>
							            		<div className="col-md-2">
									                <input type="radio" value="syllabus" name="service"/> Full Syllabus
									            </div>
							            		<div className="col-md-2">
									                <input type="radio" value="revision" name="service"/> Revision
									            </div>
									            <div className="col-md-2">
									                <input type="radio" value="project" name="service"/> Project
									            </div>
							            		<div className="col-md-2">
									                <input type="radio" value="other" name="service"/> Others
									            </div>
									        </div>
							      		</div>
							        </div>
					            </div>


					            { k() }

							    <div className="form-row">
							    	<div className="col-md-6">
							            <div className="form-group m-auto p-2 md-form w-75">
							                <label>Special instruction<small>(max. length {this.state.spe_in_l})</small></label>
							                <input
							                  type="text-box"
							                  className="form-control"
							                  name="instruction"
							                  onChange={this.onChange}
							                  value={instruction}
							                />
							            </div>
							        </div>
							    </div>
							    <div className="form-row">
							    	<div className="col-md-6">
							            <div className="form-group m-auto p-2 md-form w-75">
							                <label>Time for training</label>
							                <input
							               	  required
							                  type="time"
							                  className="form-control datetimepicker3"
							                  name="time"
							                  onChange={this.onChange}
							                  value={time}
							                />
							            </div>
							        </div>
							        <div className="col-md-6">
							            <div className="form-group m-auto p-2 md-form w-75">
							                <label>Day of training</label>
							                <input
							                  required
							                  type="date"
							                  className="form-control datepicker"
							                  name="day"
							                  onChange={this.onChange}
							                  value={day}
							                />
							            </div>
							        </div>
							    </div>
							    <div className="form-row">
							        <div className="col-md-6">
							            <div className="form-group m-auto p-2 md-form w-75">
							                <label>Upload(if any)</label>
							                <input
							                  type="file"
							                  className="form-control-file"
							                  name="upload"
							                  onChange={this.onFileUpload}
							                />
							                <div className="help"><small>{this.state.fi_help}</small></div>
							            </div>
							        </div>
							    </div>
							    <div className="text-center p-5 mt-2">
							    	<button type="submit" disabled={this.state.ph && this.state.em && this.state.fi ? false : true} className="btn m-auto btn-primary">Submit</button>
								</div>
							</form>
						</div>
				}
			</div>
		)
	}
}


const mapStateToProps= state => ({
	courses : state.common.courses,
	subCourses : state.common.subCourses,
	subjects : state.common.subjects,
	values: state.common,
	isAuthenticated: state.auth.isAuthenticated,

})


export default connect(mapStateToProps, { enqPost, getSubCourses, getCourses, getSubjects })(Enquire)
