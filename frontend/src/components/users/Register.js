import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authAction.js';

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
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

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
                <option value="Aerospace">Aerospace</option>
                <option value="Auto">Auto</option>
                <option value="Biotech">Biotech</option>
                <option value="Civil">Civil</option>
                <option value="CSE">CSE</option>
                <option value="EEE">EEE</option>
                <option value="ECE">ECE</option>
                <option value="EL">EL</option>
                <option value="IT">IT</option>
                <option value="Mechanical">Mechanical</option>
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
            <option value="C/C++">C/C++</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="Web_Technologies">Web Technologies</option>
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

    const k = () => { if(course=="Engineering") { return engineeringForm } else if(course=="Programming") { return programmingForm } else if(course=='Other'){ return otherForm }else {return ''}}

    const educationForm = (
        <div>
            <div className="form-group">
              <label>Course</label>
              <select class="form-control" onChange={this.onChange} name="course" value={course}>
                <option>Choose Course</option>
                <option value="Engineering">Engineering</option>
                <option value="Programming">Programming</option>
                <option value="Other">Other</option>
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

      <div className="m-auto">
        <div className="p-5 mt-2">
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
});

export default connect(mapStateToProps, { register })(Register);