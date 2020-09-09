import React from 'react'
import { getEnrCourses, getSyllabus, postSyllabus } from '../../actions/studentActions.js'
import { connect } from 'react-redux';
import Sidebar from './Sidebar.js';


export class UploadSyllabus extends React.Component {

	componentDidMount(){
		this.props.getEnrCourses();
		this.props.getSyllabus();
	}
	state = {
		top: false,
		u: true,
		st: false,
		department_id: "",
		file:false,
		topic:""
	}

	makeForm(){
		const { enCrs } = this.props;
		const ele = [];
		for(let i=0;i<enCrs.length;i++){
			if(enCrs[i].teacher!==null){
					ele.push(<option value={enCrs[i].id}>{enCrs[i].department}</option>)
				}
			}
		return ele;
	}

	makePrev(){
		const { uploads } = this.props;
		var ele = [];
		for(let i=0;i<uploads.length;i++){
			var k = uploads[i].syllabus.split("/")
			var filename = k[k.length-1]
			var filepath = uploads[i].syllabus
			filepath = '/api/auth/teacher/download/'+filepath.replace("http://127.0.0.1:8000/","")
			ele.push(
				<div className='uploadedSyll'>
                    <h3 style={{float:"left"}}>{filename}</h3>
                    <div className='p-1'>
                    	<a target='_blank' className='btn btn-primary uploded-link' href={filepath}>Download</a>
                	</div>
                </div>
			)
		}
		return ele;
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onFileUpload = (e) => {
    	console.log(e.target.files)
    	if(e.target.files[0].size/1024/1024<=1){
	    	this.setState({
		      [e.target.name]: e.target.files[0], 'u': false
		    })
		} else {
			this.setState({'u':true})
		}
    }

	onSubmit = (e) => {
		e.preventDefault();
		const { department_id, topic, u, st, top,file } = this.state;
		if(department_id===""){
			this.setState({
				st: true
			});
			return 0
		} else {
			this.setState({
				st: false
			});
		} 
		if(topic===""){
			console.log("sdfsdfsd", topic)
			this.setState({
				top: true
			});
			return 0
		} else {
			this.setState({
				top: false
			});
		}
		if(!file){
			this.setState({
				u: true
			});
			return 0
		} else {
			this.setState({
				u: false
			});
		}
		if(!u && !st && !top){
			let form_data = new FormData();
		    form_data.append('syllabus', file, file.name);
		    form_data.append('department', department_id);
		    form_data.append('text', topic);
		    var t_id;
		    const { enCrs } = this.props;

		    for(let i=0;i<enCrs.length;i++){
		    	if(enCrs[i].id==department_id){
		    		t_id = enCrs[i].teacher
		    	}
		    }
		    form_data.append('teacher', t_id );
			this.props.postSyllabus(form_data);
		}
	}

	render() {
		return (
			<>
				<Sidebar /> 

				<div className="container top-300">
					<div className="p-5 pt-0">
						<div className="row">
							<div className="col-md-6">
								<form onSubmit={this.onSubmit}>
									<div className="form-group">
						                  <label>Department</label>
						                  <select className="form-control" name="department_id" onChange={this.onChange}
						                    value={this.state.department_id}>
						                    <option value="">Choose Department</option>
						                    {this.props.student.isCrsEnLoading ? "" : this.makeForm()}
						                  </select>
						                  { this.state.st ? <small className="form-help red">Please Select a Department</small> : <></>}
						            </div>
						            <div className="form-group">
						            	<label>Any Information</label>
						            	<input
							                type="text"
							                className="form-control"
							                name="topic"
							                onChange={this.onChange}
							                value={this.state.topic}
							            />
						                { this.state.top ? <small className="form-help red">Please Enter something so that teacher knows what to do...</small> : <></>}
						            </div>

						            <div className="form-group">
						            	<label>Upload File(max 1 mb)</label>
						            	<input
							                type="file"
							                className="form-control"
							                name="file"
							                onChange={this.onFileUpload}
							            />
						                { this.state.u ? <small className="form-help red">Please Select a file Size less than 1 mb</small> : <></>}
						            </div>
							        <div className="form-group">
						              <button type="submit" id="ssbtn" disabled={this.state.disabled} className="btn btn-primary">
						                Upload
						              </button>
						            </div>
						        </form>
							</div>
							<div className="col-md-6 mb-5">
								<h3>Previous Uploads</h3>
		                        {this.makePrev()}
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}


const mapStateToProps= state => ({
	student: state.student,
	events: state.student.events,
	enCrs: state.student.couresEnrolled,
	uploads: state.student.syllabus, 
	isLoaded: state.student.isSylabusLoading
})



export default connect(mapStateToProps, { getEnrCourses, getSyllabus, postSyllabus })(UploadSyllabus);