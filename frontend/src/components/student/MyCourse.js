import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './css.css'
import { connect } from 'react-redux';
import Sidebar from './Sidebar.js';
import { myCourse } from '../../actions/studentActions.js'
import ProgressBar from "../common/ProgressBar.js"



class MyCourse extends React.Component {
	componentDidMount(){
		const { myCourseId } = this.props.match.params;
		this.props.myCourse(myCourseId)
	}
	custructor(){
	    this.makeSelected = this.makeSelected.bind(this);
	}
	state = {
	    selected: null,
	}
    makeSelected = (e) => {
        const { info } = this.props;
        var sel = document.getElementById('show-selected-area');
        sel.style.display = "flex";
        console.log(e.target.id)
        for(let i=0;i<info.length;i++){
            if(info[i].id=e.target.id){
                if(info[i].uploads==null){
                    sel.innerHTML = "<h3 class="+"m-auto"+" data-aos="+"fade-in"+">Your Teacher Haven't Uploaded any Files for this subject</h3>";
                } else {
                    for(let j=0;j<info[i].uploads.length;j++){
                        sel.innerHTML+="<h3>Material "+j+1+"</h3><div>"+info[i].uploads[j].uploaded_material+"</div>";
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
        	ele.push((<><h3 onClick={this.makeSelected} id={info[i].id} className="p-3 hov-ani shadow heading" style={{"cursor":"pointer",  "transition": "all .3s"}}>{info[i]['subject_name']}</h3><hr/><br/></>))
	    }
	    return ele
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

					<div className="container mr-7 ml-7 top-300">
						<div className="row row-no-gutters">
						    <div className="col-md-6">
							    {this.make()}
							</div>
							<div className="bg-white col-md-6" id="show-selected-area">
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



export default connect(mapStateToProps, { myCourse })(MyCourse);