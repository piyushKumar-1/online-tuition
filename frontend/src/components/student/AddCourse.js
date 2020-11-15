import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import './css.css'
import { connect } from 'react-redux';
import Sidebar from './Sidebar.js';
import { getCourses, getSubCourses, getSubjects } from '../../actions/commonActions.js';
import { addCourse } from '../../actions/studentActions.js'
import { HOST } from '../../actions/types';



class AddCourse extends React.Component {


	constructor(props) {
		super(props);
		this.postIt = this.postIt.bind(this);
	}

	state = {
		selectedCourseId: null,
		selectedSubId: [],
		disable:true,
		disabled:0,
		redirect:false
	}
	componentDidMount(){
		this.props.getCourses();
		this.props.getSubCourses();
		this.props.getSubjects();
		document.title = "Student Dashboard | Learnerz Corner"
		window.scrollTo(0, 0)
	}

	checkhshouldi(){
        return (this.props.values.isCLoading && this.props.values.isSCLoading);
    }
    makeSelected = (e) => {
    	try{
        	document.getElementById(this.state.selectedCourseId).classList.remove('selected');
        	var k = document.getElementById("selSub").querySelectorAll(".selected");
        	for(let i=0;i<k.length;i++){
        		k[i].classList.remove('selected')
        	}
    	} catch {
    		console.log('hahahaha')
    	}
    	if(e.target.classList.contains('selected')){
	    	e.target.classList.remove('selected');
	    } else {
	    	e.target.classList.add('selected');
	    	this.setState({'selectedCourseId': e.target.id, 'selectedSubId': []});
	    	console.log(e.target.id)
	    }


    }

    makeSelectedSub = (e) => {

			var k;
			k = this.state.selectedSubId;

			if(e.target.classList.contains('selected')){
	    	e.target.classList.remove('selected');
				k = k.filter(z => z !== e.target.id)
				this.setState({
					selectedSubId:k
				})
	    } else {
	    	e.target.classList.add('selected');
	    	this.setState({'selectedSubId': k});
	    	console.log(this.state.selectedSubId)
				k.push(e.target.id)
	    }
			const sub = this.props.subjects;
			for(let i=0;i<sub.length;i++){
				if(sub[i].id==this.state.selectedSubId[0] && sub[i].subject_name=="Other"){
					console.log("yes....");
				}
			}
			if(k.length==0){
				this.setState({
					disable: true
				})
		  } else {
				this.setState({
					disable: false
				})
			}

    }


    makeSub = () =>{
    	const { subjects } = this.props;
    	var sub = [];
    	var ele = [];
    	var head =(<><br/><h3 className="heading">Select Subject(s)</h3><br/><br/></>);
    	for(let i=0;i<subjects.length;i++){
    		if(subjects[i].sub_course_id-1==this.state.selectedCourseId){
	    		var k = (
					<div className="col-sm-6 mt-3">
						<div className="box">
	    					<div className="main card">
	    						<div className="row">
		       						<div className="col-md-12">
			        					<h4 className='a p-4 float-left black'>{subjects[i].subject_name}</h4>
			        				</div>
	        						<ScrollLink to="post" smooth={true} duration={500} delay={6000} offset={-600} onClick={this.makeSelectedSub} className="overlay m-auto text-center p-4" id={subjects[i].id-1}>
									</ScrollLink>
	    						</div>
	    					</div>
    					</div>
	    			</div>
	    		)
	    		sub.push(k)
	    	}

    	}
    	if(sub.length==0 && this.state.disabled<1){
				this.setState({
					disable:false, disabled:this.state.disabled+1
				});
    		sub.push(<h3>No Subjects For selected Course</h3>)
    	}
    	var content = React.createElement("div", {className:'row p-2 pb-4 sub'},  sub)
	    	var final = (<div className="p-3 shadow mb-70" id="selSub">{head}{content}<button id="post" className="btn btn-primary blink" disabled={this.state.disable} onClick={this.postIt}>Add</button></div>)
        	ele.push(final)

    	return ele;
    }

    postIt(){
			const sub = this.props.subjects;
			for(let i=0;i<sub.length;i++){
				if(sub[i].id==this.state.selectedSubId[0] && sub[i].subject_name=="Other"){
					console.log("");
					this.setState({
						redirect:true
					})
				} else if(sub[i].id==this.state.selectedSubId[0] && sub[i].subject_name!="Other") {
		    	this.props.addCourse(this.state.selectedCourseId, this.state.selectedSubId);
		    }
			}
		}

	makeCourses = () => {
        const { courses, subCourses } = this.props;
        console.log(courses[0], subCourses)
        let j = 0;
        var ele = [];


        var str = '';
        var i=0;
        for(i=0;i<courses.length;i++){
        	var k =(<><h3 className="heading">{courses[i]['course_name']}</h3><br/><br/></>
        		)

		    var course = [];
        	for(j=0;j<subCourses.length;j++){
        		if(courses[i]['id']==subCourses[j]['course_id']){
        			var jk = (
        				<>
    					<div className="col-sm-6 mt-3">
							<div className="box">
	    						<div className="main card">
        							<div className="row">
		        						<div className="col-md-8">
				        					<h4 className='a p-4 float-left mtlbkiw black'>{subCourses[j].sub_course_name}</h4>
				        				</div>
		        						<div className="col-md-4 jic m-auto">
				        					<img className="pr-2 img-spin float-right" height="50" src={HOST+"/static/frontend/"+subCourses[j].id+".svg"} />
		        						</div>
        							</div>
	        						<ScrollLink to="selSub" activeClass="active" smooth={true} offset={-80} duration={100} onClick={this.makeSelected} className="overlay m-auto text-center p-4" id={subCourses[j].id-1}>
									</ScrollLink>

        						</div>
        					</div>
        				</div>
						</>
        			)
        			course.push(jk)
        		}
        	}

        	var content = React.createElement("div", {className:'row jc'},  course)

        	var final = (<div className="p-3">{k}{content}</div>)

        	ele.push(final)
        }
        return ele;
	}


	render() {
		const selCourse = parseInt(this.state.selectedCourseId)+1;

		return (
			<div>
			{ this.state.redirect ? <Redirect to={`/student/courses/1/${selCourse}`}/> : '' }
			<Sidebar />
				<div className="container top-300">
					<div className="m-auto">
				        <div className="p-5 mt-2 p-5s">
				            <h2 className="text-center">Add Course</h2>
				            <div className="p-5 p-5s" data-aos="slide-up" data-aos-once="true">
								<div className="container">
									{ this.checkhshouldi() ? this.makeCourses() : <div className="container m-auto"><i className="fas fa-spinner fa-spin fa-2x"></i></div> }
									<br/><br/>
									{ this.state.selectedCourseId ? this.makeSub(): <div id="selSub" className="container m-auto"><h3>Select a Course</h3></div>}
								</div>
							</div>
				  		</div>
				    </div>
			    </div>
			</div>

		);
	}
}



const mapStateToProps= state => ({
	courses : state.common.courses,
	subCourses : state.common.subCourses,
	values: state.common,
	subjects: state.common.subjects,
})



export default connect(mapStateToProps, { getSubCourses, getCourses, addCourse, getSubjects })(AddCourse);
