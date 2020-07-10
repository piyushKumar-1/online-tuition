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
    is_parent: false,
    education:'',
    occupation:'',
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { first_name, last_name, email, password, password2, is_parent, education, occupation } = this.state;
    if (password !== password2) {
      
    } else {
      const newUser = {
        first_name,
        last_name,
        password,
        email,
        is_parent,
        education,
        occupation,
      };
      this.props.register(newUser);
    }

    var k = document.getElementsByClassName('modal-open')[0];
    console.log(k);
    k.classList.remove('modal-open');
    k.style.padding = '0';
    k.style.overflowX = 'hidden';

    document.getElementsByClassName('modal-backdrop')[0].parentNode.removeChild(document.getElementsByClassName('modal-backdrop')[0]);

  };

  onChange = (e) => {
   this.setState({ [e.target.name]: e.target.value });
console.log(e.target.value, e.target.name)
}
  onTypeChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
    if(e.target.value == 'true'){
        this.setState({ education: '' })
    } else {
        this.setState({ occupation: '' })
    }
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { first_name, last_name, email, password, password2, is_parent, education, occupation } = this.state;
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
              <div onChange={this.onTypeChange}>
                <input type="radio" value={false} defaultChecked name="is_parent"/> Student
                <input type="radio" value={true} name="is_parent"/> Parent
              </div>
            </div>

            <div className="form-group">
              <label>{ this.state.is_parent=='true' ? "Occupation" : "Education" }</label>
              <input
                type="text"
                className="form-control"
                name={ this.state.is_parent=='true' ? "occupation" : "education" }
                onChange={this.onChange}
                value={ this.state.is_parent=='true' ? occupation : education }
              />
            </div>
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
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={this.onChange}
                value={password2}
              />
            </div>

            <div className="form-group">
              <button type="submit" id="ssbtn" className="btn btn-primary">
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