import React from 'react'
import '../../styles/common.css'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCourses, getSubCourses } from '../../actions/commonActions.js';
import ReactHtmlParser from 'react-html-parser';



export class Courses extends React.Component {
	componentDidMount() {
		console.log(window.location.href, window.location.href.match(/login+/))
		this.props.getCourses();
		this.props.getSubCourses();
    	document.getElementById('courses').classList.add('active');
		document.title = "Courses Offered | Learnerz Corner"
		window.scrollTo(0, 0)
		const txt = "COURSES | "
		var i = 0;
		var speed = 30;
	  	function typeWriterAb() {
		  if (i < txt.length) {
		    document.getElementById("msgCr").innerHTML += txt.charAt(i);
		    i++;
		    setTimeout(typeWriterAb, speed);
		  	if(i==txt.length){
			    j=txt.length;
		  	}
		  }
		}
		typeWriterAb();
	}
	componentWillUnmount(){
		document.getElementById('courses').classList.remove('active');	   
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
        						</div>
        						<div className="overlay m-auto text-center p-4">
									<Link to={ "/courses/" + courses[i].id + "/" + subCourses[j].id } className="btn w-50 cen m-auto btn-light">Enquire</Link>
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
				<div className="w-100 h-300px">
					<div className="text-center wid-max">
						<h3 id="msgCr" data-aos="fade-in" data-aos-duration="30" className="ab"></h3>
						<h3 className="ab" data-aos="fade-in" data-aos-delay="800" data-aos-duration="1500">&nbsp;LearnerZ Corner</h3>
					</div>
				</div>

				<div className="p-5" data-aos="slide-up" data-aos-once="true" data-aos-delay="1400">
					<div className="container">
						{ this.checkhshouldi() ? this.makeCourses() : <div className="container m-auto"><i className="fas fa-spinner fa-spin fa-2x"></i></div> }
					</div>
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

export default connect(mapStateToProps, { getCourses, getSubCourses })(Courses)