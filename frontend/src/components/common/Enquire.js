import React from 'react'
import '../../styles/common.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCourses, getSubCourses, enqPost } from '../../actions/commonActions.js';

export class Enquire extends React.Component {
	state = {
		name: '',
		email: '',
		password: '',
		phone: '',
		std: "",
		country: '',
		department: '',
		year: '',
		service: '',
		subject: '',
		subject_code: '',
		language: '',
		instruct: '',
		time_suit: '',
		day_suit: '',
		upload: '',

	}

	static propTypes = {
	    courses: PropTypes.array,
	    subCourses: PropTypes.array,
		values: PropTypes.object.isRequired,
		getSubCourses: PropTypes.func.isRequired,
		getCourses: PropTypes.func.isRequired,
	}

	checkhshouldi(){
        return (this.props.values.isCLoading && this.props.values.isSCLoading);
    }

	makeCourses = () => {
        const { courses, subCourses } = this.props;
        let j = 0;
        var ele = [];

        console.log(this.props.match.params.subCourseId)
        var str = '';
        	var k =(<><h3 className="">Enquiery About {courses[this.props.match.params.courseId-1]['course_name']} Course: </h3><br/><br/></>
        		)

		    var course = [];
			var jk = (
				<>
				<div className="col-sm-6 mt-3">
					<div className="box">
						<div className="card">
							<div className="row">
        						<div className="col-md-8">
		        					<h4 className='a p-4 float-left mtlbkiw black'>{subCourses[this.props.match.params.subCourseId-1].sub_course_name}</h4>
		        				</div>
        						<div className="col-md-4 jic m-auto">
		        					<img className="pr-2 img-spin float-right" height="50" src={"/static/frontend/"+subCourses[this.props.match.params.subCourseId-1].id+".svg"} />
        						</div>
							</div>
						</div>
					</div>
				</div>
				</>
			)
			course.push(jk)
        	var content = React.createElement("div", {className:'row jc'},  course)
        	var final = (<div className="p-3">{k}{content}</div>)

        	ele.push(final)
        
        return ele;
	}
	componentDidMount() {  
        this.props.getCourses();
		this.props.getSubCourses();
		document.getElementById('courses').classList.add('active');
		document.title = "Course Enquiry | Learnerz Corner"
		window.scrollTo(0, 0)
	}
	componentWillUnmount(){
		document.getElementById('courses').classList.remove('active');
	}
	onChange = (e) => {
    	this.setState({ [e.target.name]: e.target.value });
    } 
    onSubmit = (e) => {
    	e.preventDefault();
    	const { name, email, password, phone, std, country, department, year, service, subject, subject_code, language, instruct, time_suit, day_suit, upload } = this.state;
    	fetch("https://api.ipify.org?format=json")
    	.then(res, ()=>console.log(res))
    	const newEnq = { 
    		name,
    		email, 
    		password, 
    		phone, 
    		std, 
    		country, 
    		department, 
    		year, 
    		service, 
    		subject, 
    		subject_code, 
    		language, 
    		instruct, 
    		time_suit, 
    		day_suit, 
    		upload 
    	};
    	this.props.enqPost(newEnq);

    }

	render() {
    const { name, email, password, phone, std, country, department, year, service, subject, subject_code, language, instruct, time_suit, day_suit, upload } = this.state;
		return (
			<div className="container">
				<div className="mt-5 mb-5">
					{ this.checkhshouldi() ? this.makeCourses() : <div className="container m-auto"><i className="fas fa-spinner fa-spin fa-2x"></i></div> }
				</div>
				<div className="mt-5 mb-5 container">
					<form onSubmit="this.onSubmit()" className="mt-5 mb-5" encType="multipart/form-data">
						<div className="form-row">
							<div className="col-md-6">
								<div className="form-group md-form w-75">
					                <label for="name">Name</label>
					                <input
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
					            <div className="form-group md-form w-75">
					                <label for="email">Email</label>
					                <input
					                  id="email"
					                  type="email"
					                  className="form-control"
					                  name="email"
					                  onChange={this.onChange}
					                  value={email}
					                />
					            </div>
					        </div>
					    </div>
					    <div className="form-row">
					    	<div className="col-md-6">
					            <div className="form-group md-form w-75">
					                <label for="phone">Contact Number</label>
					                <input
					                  id="phone"
					                  type="number"
					                  className="form-control"
					                  name="phone"
					                  onChange={this.onChange}
					                  value={phone}
					                />
					            </div>
					        </div>
					    </div>
					    <div className="form-row">
					    	<div className="col-md-6">
					            <div className="form-group md-form w-75">
					                <label for="country">Country</label>
					                <input
					                  id="country"
					                  type="text"
					                  className="form-control"
					                  name="country"
					                  onChange={this.onChange}
					                  value={country}
					                />
					            </div>
					        </div>
					        <div className="col-md-6">
					            <div className="form-group md-form w-75">
					                <label for="std">STD. Code</label>
					                <input
					                  id="std"
					                  type="number"
					                  className="form-control"
					                  name="std"
					                  onChange={this.onChange}
					                  value={std}
					                />
					            </div>
					        </div>
					    </div>
					    <div className="form-row">
					    	<div className="col-md-6">
					            <div className="form-group md-form w-75">
					                <label for="dept">Department</label>
					                <input
					                  id="dept"
					                  type="text"
					                  className="form-control"
					                  name="department"
					                  onChange={this.onChange}
					                  value={department}
					                />
					            </div>
					        </div>
					    	<div className="col-md-6">
					            <div className="form-group md-form w-75">
					                <label for="year">Year</label>
					                <input
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
					    <div className="card form-row w-75 p-4 mt-4 mb-4">
						    <div className="form-group">
						        <label>Service</label>
					            <div onChange={this.onTypeChange} className="">
					            	<div className="form-row">
					            		<div className="col-md-3">
							                <input type="radio" value="assignment" defaultChecked name="service"/> Assignment
							            </div>
					            		<div className="col-md-3">
							                <input type="radio" value="syllabus" name="service"/> Full Syllabus
							            </div>
					            		<div className="col-md-3">
							                <input type="radio" value="revision" name="service"/> Revision
							            </div>
					            		<div className="col-md-3">
							                <input type="radio" value="other" name="service"/> Others
							            </div>
							        </div>
					      		</div>    
					        </div>
			            </div>
			            <div className="form-row">
					    	<div className="col-md-6">
					            <div className="form-group md-form w-75">
					                <label>Subject</label>
					                <input
					                  type="text"
					                  className="form-control"
					                  name="subject"
					                  onChange={this.onChange}
					                  value={subject}
					                />
					            </div>
					        </div>
					    	<div className="col-md-6">
					            <div className="form-group md-form w-75">
					                <label>Subject code</label>
					                <input
					                  type="number"
					                  className="form-control"
					                  name="subject_code"
					                  onChange={this.onChange}
					                  value={subject_code}
					                />
					            </div>
					        </div>
					    </div>
					    <div className="form-row">
					    	<div className="col-md-6">
					            <div className="form-group md-form w-75">
					                <label>Special Instruction</label>
					                <input
					                  type="text-box"
					                  className="form-control"
					                  name="instruct"
					                  onChange={this.onChange}
					                  value={instruct}
					                />
					            </div>
					        </div>
					    </div>
					    <div className="form-row">
					    	<div className="col-md-6">
					            <div className="form-group md-form w-75">
					                <label>Time for training</label>
					                <input
					                  type="time"
					                  className="form-control datetimepicker3"
					                  name="time_suit"
					                  onChange={this.onChange}
					                  value={time_suit}
					                />
					            </div>
					        </div>
					        <div className="col-md-6">
					            <div className="form-group md-form w-75">
					                <label>Day of training</label>
					                <input
					                  type="date"
					                  className="form-control datepicker"
					                  name="day_suit"
					                  onChange={this.onChange}
					                  value={day_suit}
					                />
					            </div>
					        </div>
					    </div>
					    <div className="form-row">
					        <div className="col-md-6">
					            <div className="form-group md-form w-75">
					                <label>Upload(if any)</label>
					                <input
					                  type="file"
					                  className="form-control-file"
					                  name="upload"
					                  onChange={this.onChange}
					                  value={upload}
					                />
					            </div>
					        </div>
					    </div>
					    <button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>			
			</div>
		)
	}
}


const mapStateToProps= state => ({
	courses : state.common.courses,
	subCourses : state.common.subCourses,
	values: state.common,
})


export default connect(mapStateToProps, { enqPost, getSubCourses, getCourses })(Enquire)