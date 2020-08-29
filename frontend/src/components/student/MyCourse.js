import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './css.css'
import { connect } from 'react-redux';
import Sidebar from './Sidebar.js';
import { myCourse, getChat, postChat, getEnrCourses } from '../../actions/studentActions.js'
import ProgressBar from "../common/ProgressBar.js"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";


class MyCourse extends React.Component {
	componentDidMount(){
		const { myCourseId } = this.props.match.params;
		this.props.myCourse(myCourseId);
		this.props.getEnrCourses();
	}
	custructor(){
	    this.makeSelected = this.makeSelected.bind(this);
	    this.chatSubmit = this.chatSubmit.bind(this);
	}
	state = {
	    selected: null,
	    index: null,
	    chat_text: null,
	    teacher_id:null,
	    no_more: true
	}

	getChat = () =>{
		if(this.state.no_more){
			const enrolled = this.props.student.couresEnrolled;
			const { myCourseId } = this.props.match.params;
			var teacher_id;
			console.log(enrolled, myCourseId)
			if(enrolled){
				for(let i=0;i<enrolled.length;i++){
					if(enrolled[i].id==myCourseId){
						teacher_id = enrolled[i].teacher;
						console.log(teacher_id)

					}
				}
			}
			this.props.getChat(teacher_id);
			this.state.teacher_id=teacher_id;
			this.setState({
				no_more: false
			});
		}
		return this.makeChat()
	}

	makeChat =() => {
		const chat = this.props.student.chat;
		const ele = [];
		var app_req;
		for(let i=0;i<chat.length;i++){
			if(chat[i].msg_side){
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
		const { chat_text, teacher_id } = this.state;
		console.log(chat_text, teacher_id )
		this.props.postChat(teacher_id, chat_text);
		this.setState({
			chat_text: ''
		});
	}

    makeSelected = (e) => {
        var filepath;
        var filename;
        			
        const { info } = this.props;
        var sel = document.getElementById('show-selected-area');
        sel.innerHTML="";
        console.log(e.target.id)
        for(let i=0;i<info.length;i++){
            if(info[i].id==e.target.id){
            	this.setState({
		        	form: true, selected:e.target.id, index:i
		        });
                if(info[i].uploads==null){
                    sel.innerHTML = "<h3 class="+"m-auto"+" data-aos="+"fade-in"+">Your teacher haven't Uploaded any Files for this subject</h3>";
                } else {
                	sel.innerHTML+='<small>Previously Uploaded Files:</small><br>'

                    for(let j=0;j<info[i].uploads.length;j++){
                    	filepath = info[i].uploads[j].uploaded_material
				        filepath = filepath.replace("http://127.0.0.1:8000/","")
				        filename = filepath.split("/")
				        filename = filename[filename.length-1]
				        var date = new Date(info[i].uploads[j].upload_date)
				        sel.innerHTML+="<small>"+date+"</small>"
                        sel.innerHTML+="<div style='padding:5px; display:grid; width:100%; border-bottom:1px solid black'><h3 style='float:left'>"+filename+"</h3><div class='p-1'><a target='_blank' class='btn btn-primary' style='width:45%; margin:10px; float:right' href=/api/auth/teacher/download/"+filepath+">Download</a></div></div>";
                    }
                }
            }
        }
    }

	make(){
	    const { info } = this.props;
	    console.log(info);
	    var ele = [];
	    for(let i=0;i<info.length;i++){
        	ele.push((<><ScrollLink to="show-selected-area" activeClass="active" duration={100} smooth={true} offset={-240}><h3  onClick={this.makeSelected} id={info[i].id} className="p-3 hov-ani shadow heading" style={{"cursor":"pointer",  "transition": "all .3s"}}>{info[i]['subject_name']}</h3></ScrollLink><hr/><br/></>))
	    }
	    return ele
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}


	render() {
		return (
			<div>
				<Sidebar/>
				{
				    this.props.student.isSubEnLoading

				?
					<div className="row top-300">
						<div className="m-auto p-5">
							<i className="fa fa-spinner fa-5x fa-spin" />
						</div>
					</div>

				:

					<div className="container mr-7 ml-7 top-300 mb-5">
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
										    			<input placeholder="Enter Message For Teacher" className="w-100" type="text" name="chat_text" value={this.state.chat_text} onChange={this.onChange}/>
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
							<div className="bg-white scrollxy col-md-6">
								{ this.state.form ?<h4 className="subxy">{this.props.student.info[this.state.index].subject_name}</h4>: ''}

								<div id="show-selected-area">
									<div>
										<h5 className="m-auto">Select Subject to see the content Uploaded by your teacher</h5>
									</div>
								</div>
								
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
	info: state.student.info
})



export default connect(mapStateToProps, { myCourse, getChat, postChat, getEnrCourses })(MyCourse);