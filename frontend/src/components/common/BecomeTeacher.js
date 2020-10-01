import React from 'react'
import '../../styles/common.css'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCourses, getSubCourses, getSubjects, jobPost } from '../../actions/commonActions.js';

export class BecomeTeacher extends React.Component {
	state = {
		name: null,
		email: null,
		phone: null,
		qualification: null,
		experience: null,
		department: null,
		sub0: null,
		sub1:null,
		sub2:null,
		sub3:null,
		upload: null,
		em:false,
		fi:false,
		em_help: '',
		fi_help: ''
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
	componentDidMount() {  
		this.props.getSubjects();
        this.props.getCourses();
		this.props.getSubCourses();
		document.getElementById('join').classList.add('active');
		document.title = "Become Teacher | Learnerz Corner"
		window.scrollTo(0, 0)
		const txt = "Become Teacher | "
	var i = 0;
	var speed = 25;
		function typeWriterBC() {
	  if (i < txt.length) {
	    document.getElementById("msgPr").innerHTML += txt.charAt(i);
	    i++;
	    setTimeout(typeWriterBC, speed);
	  	if(i==txt.length){
		    j=txt.length;
	  	}
	  }
	}
	typeWriterBC();
	}

	subject_option(){
		const { subjects } = this.props;
		var ele = []
    	for(var i=0;i<subjects.length;i++){
    		if(subjects[i].sub_course_id==this.state.department){
    			if(this.state.sub0==subjects[i].id || this.state.sub1==subjects[i].id || this.state.sub2==subjects[i].id || this.state.sub3==subjects[i].id){
		    		ele.push(<option value={subjects[i].id} disabled>{subjects[i].subject_name}</option>)
		    	} else {
		    		ele.push(<option value={subjects[i].id}>{subjects[i].subject_name}</option>)
		    	}
		    }
    	}
    	return ele;
	}
	department_option(){
		const { subCourses } = this.props;
		var ele = []
    	for(var i=0;i<subCourses.length;i++){
	    	ele.push(<option value={subCourses[i].id}>{subCourses[i].sub_course_name}</option>)
	    }
    	return ele;
	}

	componentWillUnmount(){
		try{
			document.getElementById('join').classList.remove('active');
		} catch(err){
			console.log("")
		}
	}
	onChange = (e) => {
    	this.setState({ [e.target.name]: e.target.value });
    	console.log(this.state)
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
    onPhoneChange = (e) => {
    	if(e.target.value.length<11){
    		this.setState({ [e.target.name]: e.target.value, ph_help:[<p style={{color:"red"}}>Require 10 digits</p>], ph: false })
    	} 
    	if(e.target.value.length==10) {
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
    	const { name, email, phone, qualification, department, sub0, sub1, sub2, sub3, experience, upload } = this.state;


	    let form_data = new FormData();
	    form_data.append('resume', upload, upload.name);
	    form_data.append('name', name);
	    form_data.append('email', email);
	    form_data.append('ph_no', phone);
	    form_data.append('department', department);
	    form_data.append('qualification', qualification);
	    form_data.append('experience', experience);
	    form_data.append('name', name);
	    form_data.append('sub0', sub0);
	    form_data.append('sub1', sub1);
	    form_data.append('sub2', sub2);
	    form_data.append('sub3', sub3);


    	setTimeout(() => {this.props.jobPost(form_data);}, 1000)
    	

    }


    



	render() {
    	const {  name, email, phone, qualification, department, sub0, sub1, sub2, sub3, experience, upload } = this.state;
		return (



			<div className="bg-white">
				{ this.props.isAuthenticated ? this.props.user.teacher!=null ? <Redirect to="/teacher/dashboard"/> : <Redirect to="/student/dashboard"/> : '' }

			{ this.props.values.joinMsg['success']

				?

				<div className="container mt-20 mb-20 text-center">
					<div className="card p-5 mt-5 mb-5">	
						<h3>Submit Successful&nbsp;&nbsp;<i class='fa fa-check-circle green'></i></h3>
					</div> 
				</div>


				: 
				<>
					<div className="w-100 h-300px" data-aos="fade-in" data-aos-once="true">
						<div className="text-center wid-max">
							<h3 id="msgPr" data-aos="fade-in" data-aos-duration="300" className="ab"></h3>
							<h3 className="ab" data-aos="fade-in" data-aos-delay="1000" data-aos-duration="1500">&nbsp;LearnerZ Corner</h3>
						</div>
					</div>
					<div className="mt-5 mb-5 container">
						<div className="down">
							<div className="text-center">
								<i className="fa fa-angle-down black p-2"/>
							</div>
						</div>
						<form onSubmit={this.onSubmit}  data-aos="fade-up" data-aos-duration="600" className="mt-5 mb-5" encType="multipart/form-data">
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
						    	<div className="col-md-6">
						            <div className="form-group m-auto p-2 md-form w-75">
						                <label for="phone">Contact Number</label>
						                <input
						                  id="phone"
						                  type="number"
						                  className="form-control"
						                  name="phone"
						                  onChange={this.onPhoneChange}
						                  value={phone}
						                />
							            <div className="help"><small>{this.state.ph_help}</small></div>  
						            </div>
						        </div>
						    </div>
						    <div className="form-row mt-3">
						    	<div className="col-md-6">
						            <div className="form-group m-auto p-2 md-form w-75">
						                <label>Department</label>
						                <select class="form-control" onChange={this.onChange} name="department" value={department}>
							                <option>Choose Department</option>
							                { this.checkhshouldi() ? this.department_option() : ''}
							            </select>
						            </div>
						        </div>
						    </div>
						    <div className="form-row mt-3">
						    	<div className="col-md-6">
						            <div className="form-group m-auto p-2 md-form w-75">
						                <label>Subject 1</label>
						                <select class="form-control" id="subjectOptions" onChange={this.onChange} name="sub0" value={sub0}>
							                <option>Choose Subject</option>
							                { this.props.values.isSLoading ? this.subject_option() : ''}
							            </select>
						            </div>
						        </div>
						    	<div className="col-md-6">
						            <div className="form-group m-auto p-2 md-form w-75">
						                <label>Subject 2</label>
						                <select class="form-control" id="subjectOptions" onChange={this.onChange} name="sub1" value={sub1}>
							                <option>Choose Subject</option>
							                { this.props.values.isSLoading ? this.subject_option() : ''}
							            </select>
						            </div>
						        </div>
						    </div>
						    <div className="form-row mt-3">
						    	<div className="col-md-6">
						            <div className="form-group m-auto p-2 md-form w-75">
						                <label>Subject 3</label>
						                <select class="form-control" id="subjectOptions" onChange={this.onChange} name="sub2" value={sub2}>
							                <option>Choose Subject</option>
							                { this.props.values.isSLoading ? this.subject_option() : ''}
							            </select>
						            </div>
						        </div>
						    	<div className="col-md-6">
						            <div className="form-group m-auto p-2 md-form w-75">
						                <label>Subject 4</label>
						                <select class="form-control" id="subjectOptions" onChange={this.onChange} name="sub3" value={sub3}>
							                <option>Choose Subject</option>
							                { this.props.values.isSLoading ? this.subject_option() : ''}
							            </select>
						            </div>
						        </div>
						    </div>
						    <div className="form-row">
						    	<div className="col-md-6">
						            <div className="form-group m-auto p-2 md-form w-75">
						                <label>Experience</label>
						                <input
						                  type="text-box"
						                  className="form-control"
						                  name="experience"
						                  onChange={this.onChange}
						                  value={experience}
						                />
						            </div>
						        </div>
						    	<div className="col-md-6">
						            <div className="form-group m-auto p-2 md-form w-75">
						                <label>Qualification</label>
						                <input
						               	  required
						                  type="text"
						                  className="form-control"
						                  name="qualification"
						                  onChange={this.onChange}
						                  value={qualification}
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
						    	<button type="submit" className="btn m-auto btn-primary">Submit</button>
							</div>
						</form>
					</div>	
				</>	
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
  user: state.auth.user
})


export default connect(mapStateToProps, { jobPost, getSubCourses, getCourses, getSubjects })(BecomeTeacher)