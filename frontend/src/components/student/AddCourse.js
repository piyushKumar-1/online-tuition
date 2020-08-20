import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import './css.css'
import { connect } from 'react-redux';
import Sidebar from './Sidebar.js';
import { getCourses, getSubCourses, getSubjects } from '../../actions/commonActions.js';
import { addCourse } from '../../actions/studentActions.js'



class AddCourse extends React.Component {


	constructor(props) {
		super(props);
		this.postIt = this.postIt.bind(this);
	}

	state = {
		selectedCourseId: null,
		selectedSubId: []
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
    	k.push(e.target.id)
    	if(e.target.classList.contains('selected')){
	    	e.target.classList.remove('selected');
	    } else {
	    	e.target.classList.add('selected');
	    	this.setState({'selectedSubId': k});
	    	console.log(this.state.selectedSubId)
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
	        						<div onClick={this.makeSelectedSub} className="overlay m-auto text-center p-4" id={i}>
									</div>
	    						</div>
	    					</div>
    					</div>
	    			</div>
	    		)
	    		sub.push(k)
	    	}
	    	
    	}
    	var content = React.createElement("div", {className:'row p-2 pb-4 sub'},  sub)
	    	var final = (<div className="p-3 shadow" id="selSub">{head}{content}<button className="btn btn-primary" onClick={this.postIt}>Add</button></div>)
        	ele.push(final)

    	return ele;
    }

    postIt(){
    	this.props.addCourse(this.state.selectedCourseId, this.state.selectedSubId);
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
				        					<img className="pr-2 img-spin float-right" height="50" src={"/static/frontend/"+subCourses[j].id+".svg"} />
		        						</div>
        							</div>
	        						<ScrollLink to="selSub" activeClass="active" smooth={true} offset={-80}  onClick={this.makeSelected} className="overlay m-auto text-center p-4" id={j}>
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

		return (
			<div>
			<Sidebar /> 
				<div className="container top-300">
					<div className="m-auto">
				        <div className="p-5 mt-2">
				            <h2 className="text-center">Add Course</h2>
				            <div className="p-5" data-aos="slide-up" data-aos-once="true">
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