import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../student/css.css'

import TSidebar from './TSidebar.js';
import { getAvailable, postAvailable  } from '../../actions/teacherActions.js'
import ProgressBar from "../common/ProgressBar.js"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";


class TAvailable extends React.Component {

	componentDidMount(){
		this.props.getAvailable();
	}

	state = {
			toggle:true,
	    selected: null,
	    msg: null,
	    msg_help:'',
	}

	onChange = (e) => {
		if(e.target.value.length<200){
			this.setState({
				[e.target.name]: e.target.value
			});
		} else {
			this.setState({
				msg_help:'Max Limit 200(reached)'
			})
		}
	}

  onSubmit = (e) =>{
  	e.preventDefault();
		this.props.postAvailable(this.props.teacher_id, this.state.selected, this.state.msg);
  }

	makeForm = (e) => {
		console.log(e)
		var all = document.getElementsByClassName("isko-hata");
		var allbtn = document.getElementsByClassName("apply-btn");
		console.log(all)
		for(let i=0;i<all.length;i++){
			all[i].style.display = "none";
		}
		for(let i=0;i<allbtn.length;i++){
			allbtn[i].classList.remove('btn-danger');
			allbtn[i].classList.add('btn-primary');
			allbtn[i].innerHTML="Apply";
		}
		this.setState({selected:e})
		var ele = document.getElementById(e);
		var btn = document.getElementById('btn'+e);

		if(btn.classList.contains("btn-primary")){
			btn.classList.remove('btn-primary');
			btn.classList.add('btn-danger');
			ele.style.display = "block";
			btn.innerHTML="Cancel";
		} else {
			btn.classList.remove('btn-danger');
			btn.classList.add('btn-primary');
			ele.style.display = "none";
			btn.innerHTML="Apply";
		}

		this.setState(prevState => ({
		  toggle: !prevState.toggle
		}))
	}

	makeAvailable = () => {
		const avail = this.props.courseAvailable;
		console.log(this.props.courseAvailable, avail, 'dfsdfsdjhkjhkjhkhkjhk')
		var ele = [];
		var cls;
		for(let i=0;i<avail.length;i++){
			console.log(avail[i].course_enrolled[1], avail[i][1])
			if(avail[i].course_enrolled[1]){
				cls = "bg-white p-4 shadow done"
			} else {
				cls = "bg-white p-4 shadow"
			}
			ele.push(
				<div className="col-md-4 p-3">
					<div className={cls}>
						<h4>{avail[i].course_enrolled[0]}</h4>
							<h2 className="card-title">{avail[i].department}</h2>
						<button className="btn btn-primary apply-btn" id={'btn'+avail[i].id} data={avail[i].id} onClick={() => this.makeForm(avail[i].id)}>Apply</button>
						<div className="extra">
							<button className="btn btn-success">Applied</button>
						</div>
						<div id={avail[i].id} className="hid isko-hata">
							<form onSubmit={this.onSubmit}>
									<div className="form-group">
										<label>Message</label>
										<textarea type="text" className="form-control" value={this.state.msg} onChange={this.onChange} name="msg"/>
										<small className="red">{this.state.msg_help}</small>
									</div>
									<div className="form-group">
										<button type="submit" id="ssbtn" className="btn btn-primary">
											Submit Proposal
										</button>
									</div>
							</form>
						</div>
					</div>
				</div>
			)
		}
		return ele;
	}

	render() {
		return (
			<div>
				<TSidebar/>
				<div className="container mt-5 mb-5 top-230">
					{
						this.props.isAvailableLoading
						?
						<>
							<div className="row top-230">
								<div className="m-auto p-5">
									<i className="fa fa-spinner fa-5x fa-spin" />
								</div>
							</div>
						</>
						:
						<div className="row">
							{this.makeAvailable()}
						</div>
					}
				</div>
			</div>
		)
	}
}



const mapStateToProps= state => ({
	teacher_id:state.auth.user.id,
	courseAvailable: state.teacher.available,
	availLoading: state.teacher.isAvailableLoading
})



export default connect(mapStateToProps, { getAvailable, postAvailable })(TAvailable);
