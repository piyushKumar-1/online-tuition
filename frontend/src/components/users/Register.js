import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authAction.js';
import { getCourses, getSubCourses, getSubjects, jobPost } from '../../actions/commonActions.js';


export class Register extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',
    is_parent: "false",
    occupation:'',
    course: '',
    department: '',
    year: null,
    disabled: true,
    misMatch:false,
    passerr: '',
    bor: {
      border: "3px solid black",
      borderRadius: "20px",
      background: "white"
    }
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };
checkhshouldi(){
        var kl = this.props.values.isCLoading && this.props.values.isSCLoading && this.props.values.isSLoading
        console.log(kl)
        return kl;
    }
  componentDidMount() {  
    this.props.getSubjects();
        this.props.getCourses();
    this.props.getSubCourses();
    window.scrollTo(0, 0)
  }

  department_option(x){
      const { subCourses } = this.props;
      var ele = []
        for(var i=0;i<subCourses.length;i++){
          if(subCourses[i].course_id==x){
          ele.push(<option value={subCourses[i].id}>{subCourses[i].sub_course_name}</option>)
          }
        }
        return ele;
    }

    course_option(){
      const { courses } = this.props;
      var ele = []
        for(var i=0;i<courses.length;i++){
          ele.push(<option value={courses[i].id}>{courses[i].course_name}</option>)
        }
        return ele;
    }

  onSubmit = (e) => {
    e.preventDefault();
    const { first_name, last_name, email, password, password2, is_parent, occupation, year, course, department } = this.state;
    if (password !== password2) {

    } else {
      const newUser = {
        first_name,
        last_name,
        password,
        email,
        is_parent,
        occupation,
        course,
        department,
        year,
      };
      this.props.register(newUser);
    }

    var k = document.getElementsByClassName('modal-open')[0];
    k.classList.remove('modal-open');
    k.style.padding = '0';
    k.style.overflowX = 'hidden';

    document.getElementsByClassName('modal-backdrop')[0].parentNode.removeChild(document.getElementsByClassName('modal-backdrop')[0]);

  };

  onChange = (e) => {
    if(e.target.name=='course'){
        this.setState({  year: null, department: '' })
    }
    this.setState({ [e.target.name]: e.target.value }, () => this.validate());

  }

showPass() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
} 
    validate = () => {
         if(this.state.password!=this.state.password2 && this.state.password.length){
              this.setState({ misMatch: true, disabled: true , passerr: "Password Didn't match" });
            } else {
              this.setState({ misMatch: false });
              if(this.state.password.length>=4 && this.state.email.length>=4 && this.state.password2.length>=4){
                this.setState({ disabled: false, misMatch: false });
              } 
              if(this.state.password.length>8){
                this.setState({ disabled: true, misMatch: true , passerr: "Password Should be less than 8 in size"});
              }
              if(this.state.password == this.state.password.toUpperCase()){
                this.setState({ disabled: true, misMatch: true , passerr: "Password Should have atleast one lowercase letter(a-z)"});
              }
              if(this.state.password == this.state.password.toLowerCase()){
                this.setState({ disabled: true, misMatch: true , passerr: "Password Should have atleast one uppercase letter(A-Z)"});
              } else {
                this.setState({ disabled: false });

              }

            }
         if(this.state.is_parent=='true' && this.state.occupation==''){
          this.setState({ disabled: true });
        } else if((this.state.course=='Other' || this.state.course=='Programming') && this.state.department==''){

          this.setState({ disabled: true });
        } else if(this.state.course=='Engineering' && (this.state.department=='' || this.state.year==null) ){

          this.setState({ disabled: true });
        } else if(this.state.course=='' && this.state.occupation==''){
          this.setState({ disabled: true });
        }

    }


  onPass2Change = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => this.validate());
  }


  onTypeChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
    if(e.target.value == 'true'){
        this.setState({ course: '', year: null, department: '' })
    } else {
        this.setState({ occupation: '' })
    }
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    
    const { first_name, last_name, email, password, password2, is_parent, occupation,year, department, course } = this.state;
    const engineeringForm = (
        <div>
            <div className="form-group">
              <label>Department</label>
              <select className="form-control" name="department" onChange={this.onChange}
                value={department}>
                <option >Choose Department</option>
                { this.checkhshouldi() ? this.department_option(1) : ''}
              </select>
            </div>
            <div className="form-group">
                  <label>Year</label>
                  <select className="form-control" name="year" onChange={this.onChange}
                    value={year}>
                    <option >Choose Current Year</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
            </div>
        </div>
    )
    const programmingForm = (
        <div className="form-group">
          <label>Language</label>
          <select className="form-control" name="department" onChange={this.onChange}
                value={department}>
            <option >Choose Department</option>
              { this.checkhshouldi() ? this.department_option(2) : ''}
          </select>
        </div>
    )

    const otherForm = (
        <div>
            <div className="form-group">
                <label>Type Your Course</label>
                <input
                type="text"
                className="form-control"
                name="department"
                onChange={this.onChange}
                value={department}
                />
            </div>
        </div>
    )

    const k = () => { if(course==1) { return engineeringForm } else if(course==2) { return programmingForm } else if(course=='Other'){ return otherForm }else {return ''}}

    const educationForm = (
        <div>
            <div className="form-group">
              <label>Course</label>
              <select className="form-control" onChange={this.onChange} name="course" value={course}>
                <option>Choose Course</option>
                { this.checkhshouldi() ? this.course_option() : ''}
                <option value="other" >Other</option>
              </select>
            </div>
            { k() }
        </div>
    )
    const occupationForm = (
        <div>
            <div className="form-group">
                <label>Occupatiom</label>
                <input
                type="text"
                className="form-control"
                name="occupation"
                onChange={this.onChange}
                value={occupation}
                />
            </div>
        </div>
    )
    return (

      <div className="m-auto p-1">
        <div className="p-5 mt-2"  style={this.state.bor}>
          <h2 className="text-center">Register</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                onChange={this.onChange}
                value={first_name}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                onChange={this.onChange}
                value={last_name}
              />
            </div>
            <div className="form-group">
              <div onChange={this.onTypeChange} className="pt-3 pb-3">
                <input type="radio" value={false} defaultChecked name="is_parent"/> Student
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" value={true} name="is_parent"/> Parent
              </div>
            </div>



            { this.state.is_parent=='true' ? occupationForm : educationForm }





            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                id="pass"
                type="password"
                className="form-control"
                name="password"
                onChange={this.onPass2Change}
                value={password}
              />
              <div className="btn-showpass btn" onClick={this.showPass}><small>Show Password</small></div>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={this.onPass2Change}
                value={password2}
              />
              {this.state.misMatch ? <small className="help" style={{color: "red"}}>{ this.state.passerr }</small> : ""}

            </div>

            <div className="form-group">
              <button type="submit" id="ssbtn" disabled={this.state.disabled} className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,

  courses : state.common.courses,
  subCourses : state.common.subCourses,
  subjects : state.common.subjects,
  values: state.common,
});

export default connect(mapStateToProps, { register, getCourses, getSubjects, getSubCourses })(Register);