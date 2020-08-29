import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../student/css.css'

import Sidebar from './TSidebar.js';
import { myCourse, resetUpload, uploadMaterial, getEvents, getEnrCourses, getChat, postChat  } from '../../actions/teacherActions.js'
import ProgressBar from "../common/ProgressBar.js"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";


class TMyCourse extends React.Component {
	componentDidMount(){
		const { myCourseId } = this.props.match.params;
		this.props.myCourse(myCourseId)
		this.props.getEvents();
		this.props.getEnrCourses();
	}
	custructor(){
	    this.makeSelected = this.makeSelected.bind(this);
	    this.chatSubmit = this.chatSubmit.bind(this);
	}
	state = {
	    selected: null,
	    file: null,
	    form:false,
	    fi: false,
	    fi_help: '',	
	    index: null,
	    chat_text: null,
	    student_id:null,
	    no_more: true

	}


	getChat = () =>{
		if(this.state.no_more){
			const enrolled = this.props.student.couresEnrolled;
			const { myCourseId } = this.props.match.params;
			var student_id;
			console.log(enrolled, myCourseId)
			if(enrolled){
				for(let i=0;i<enrolled.length;i++){
					if(enrolled[i].id==myCourseId){
						student_id = enrolled[i].student;
						console.log(student_id)

					}
				}
			}
			this.props.getChat(student_id);
			this.state.student_id=student_id;
			this.setState({
				no_more: false
			});
		}
		return this.makeChat()
	}

	makeChat =() => {
		const chat = this.props.uploads.chat;
		const ele = [];
		var app_req;
		for(let i=0;i<chat.length;i++){
			if(!chat[i].msg_side){
				if(!chat[i].approval){
					app_req = {
						backgroundColor: "#e1e1e1",
						boxShadow: ".1px .1px 3px #e1e1e1"
					}
					ele.push(<small style={{transform:"rotate(180deg)", display:"block", width:"max-content", maxWidth:"100%" }}>Needs Approval</small>)
				} else {
					app_req = {
						backgroundColor: "#98ddc3",
						boxShadow: ".1px .1px 3px #98ddc3"
					}
				}
				ele.push(
					<h6 className="from-me" style={app_req}>{chat[i].msg}</h6>
				)
			} else {
				ele.push(
					<h6 className="from-other">{chat[i].msg}</h6>
				)
			}
		}
		return ele;
	}

	chatSubmit =(e) => {
		e.preventDefault();
		const { chat_text, student_id } = this.state;
		console.log(chat_text, student_id )
		this.props.postChat(student_id, chat_text);
		this.setState({
			chat_text: ''
		});
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
		      file: e.target.files[0], 'fi':true, fi_help:'Good'
		    })
		} else {
			this.setState({fi_help:[<p style={{color:"red"}}>File size should be less than 1 MB</p>], 'fi':false})
		}
    }
    makeSelected = (e) => {

        const { info } = this.props;
        var filepath;
        var filename;
        var sel = document.getElementById('show-selected-area');
        sel.innerHTML="";
        console.log(e.target.id);
        for(let i=0;i<info.length;i++){
            if(info[i].id==e.target.id){
            	this.setState({
		        	form: true, selected:e.target.id, index:i
		        });
                if(info[i].uploads==null){
                    sel.innerHTML = "<h3 class="+"m-auto"+" data-aos="+"fade-in"+">You Haven't Uploaded any Files for this subject</h3>";
                } else {
                	sel.innerHTML+='<small>Previously Uploaded Files:</small><br>'

                    for(let j=0;j<info[i].uploads.length;j++){
                    	filepath = info[i].uploads[j].uploaded_material
				        filepath = filepath.replace("http://127.0.0.1:8000/","")
				        filename = filepath.split("/")
				        filename = filename[filename.length-1]
				        var date = new Date(info[i].uploads[j].upload_date)
				        sel.innerHTML+="<small>"+date+"</small>"
                        sel.innerHTML+="<div style='padding:5px; display:grid; width:100%; border-bottom:1px solid black'><h3 style='float:left'>"+filename+"</h3><div class='p-1'><a target='_blank' class='btn btn-dark' style='width:45%; margin:10px; float:right' href=/api/auth/teacher/download/"+filepath+">Download</a><a target='_blank' class='btn btn-primary' style='float:right; width:45%; margin:10px; ' href=/api/auth/teacher/delete/"+filepath+">Delete</a></div></div>";
                    }
                }
            }	
        }
        

    }
    recall = () => {
    	const { myCourseId } = this.props.match.params;
		this.props.myCourse(myCourseId)

    }
    onSubmit = (e) =>{
    	e.preventDefault();
		const { myCourseId } = this.props.match.params;
		const { file, selected } = this.state;
    	let form_data = new FormData();
	    form_data.append('file', file, file.name);
	    form_data.append('CourseEnrolledId', myCourseId);
	    form_data.append('subjectID', selected);
    	console.log(form_data);
    	this.props.uploadMaterial(form_data);
    	this.setState({
    		form: fa-times-circle
    	});

    }

	make(){
	    const { info } = this.props;
	    console.log(info);
	    var ele = [];
	    for(let i=0;i<info.length;i++){
        	ele.push((<><ScrollLink to="show-selected-area" activeClass="active" duration={100} smooth={true} offset={-240}><h3  onClick={this.makeSelected} id={info[i].id} class="p-3 hov-ani shadow heading" style={{"cursor":"pointer",  "transition": "all .3s"}}>{info[i]['subject_name']}</h3></ScrollLink><hr/><br/></>))
	    }
	    return ele
	}


	render() {
		const { myCourseId } = this.props.match.params;

		return (
			<div>
				<Sidebar/>
				{
    				this.props.uploads.uploaded 
							? this.props.uploads.fail 
							    ?
									<div className="top-230">
										<div className="row">
											<div className="m-auto p-5">
												{this.props.uploads.message}<i className="fa fa-times-circle red"/>
											</div>
										</div>
										<div className="row">
											{this.recall()}
											<div className="btn m-auto btn-danger" onClick={this.props.resetUpload}>Okay</div>
											
										</div>
									</div>
								    
							    :

							    	<div className="top-230">
										<div className="row">
											<div className="m-auto p-5">
												{this.props.uploads.message}<i className="fa fa-check-circle green"/>
											</div>
										</div>
										<div className="row">
											{this.recall()}
											<div className="btn m-auto btn-success" onClick={this.props.resetUpload}>Okay</div>
										</div>
									</div>
							:


				
				    this.props.student.isSubEnLoading

				?
					<div className="row top-230">
						<div className="m-auto p-5">
							<i className="fa fa-spinner fa-5x fa-spin" />
						</div>
					</div>

				:

					<div className="container mr-7 ml-7 top-230 mb-5">
						<div className="mt-3">
							{
								this.props.student.isCrsEnLoading 
							? 
								''
							: 
								this.props.student.couresEnrolled.map((val)=>(
									val.id==myCourseId ? (<h5>Enrolled Date: {val.enrolled_date}<time datetime={val.enrolled_date}></time></h5>)	: console.log(val.id)
								))
							}
						</div>
						<div className="row row-no-gutters">
						    <div className="col-md-6">
							    {this.make()}
							    <div className="p-1">
							    	<div className="contact-border">
							    		<div className="contact-head">
							    			<h4>Teacher</h4>
							    			<small>(Chat Window)</small>
							    		</div>
							    		<div className="contact-body" id="chat">
							    			<div className="contact-body-in">
							    			<br/>
							    			<br/>
							    			<br/>
							    			{ this.props.student.isCrsEnLoading? <div className="m-auto"><i className="fa fa-spinner fa-spin"></i></div>: this.getChat() }
											</div>
							    		</div>
							    		<div className="contact-input w-75">
							    			<div className="row">
								    			<form className="form-chat" onSubmit={this.chatSubmit}>
									    			<div className="col-sm8 col-md-10">
										    			<input placeholder="Enter Message For Student" className="w-100" type="text" name="chat_text" value={this.state.chat_text} onChange={this.onChange}/>
									    			</div>
									    			<div className="col-sm4 col-md-2 m-auto">
										    			<button className="btn m-auto btn-danger"><i className="fa fa-paper-plane"></i></button>
													</div>
								    			</form>
								    		</div>
							    		</div>
							    	</div>
							    </div>
							</div>
							<div className="bg-white col-md-6 scrollxy">
  							{ this.state.form ?<h4 className="subxy">{this.props.student.info[this.state.index].subject_name}</h4>: ''}

							<div id="show-selected-area">
							</div>
								{ 
  									this.state.form 
  									?
  										<>
		  									<form style={{display:"flex"}} className="mt-5 mb-5 upform" onSubmit={this.onSubmit}>
								              <div className="form-row">
										        <div className="">
										            <div className="form-group m-auto p-2 md-form w-75">
										                <label>Upload(if any)</label>
										                <input
										                  type="file"
										                  className="form-control-file"
										                  name="file"
										                  onChange={this.onFileUpload}
										                />
										                <div className="help"><small>{this.state.fi_help}</small></div>
										            </div>
										        </div>
										    </div>

								              <div className="form-group m-auto">
								                <button type="submit" id="ssbtn" className="btn btn-primary">
								                  Submit
								                </button>
								              </div>
								            </form>												
										</>	
										
									:
									''
								}							
							<br/><br/><br/><br/>
							</div>
						</div>
					</div>
    			
    			}
			</div>
		)
	}
}



const mapStateToProps= state => ({
	enrCourses: state.student.couresEnrolled,
	inSubEnLoading: state.student.isSubEnLoading,
	student: state.student,
	info: state.student.info,
	uploads: state.teacher
})



export default connect(mapStateToProps, { myCourse, resetUpload, uploadMaterial, getEvents, getEnrCourses, getChat, postChat })(TMyCourse);