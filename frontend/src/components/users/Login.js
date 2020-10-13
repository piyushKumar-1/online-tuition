import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login, resetPass, setDefaultReset } from '../../actions/authAction.js';
import $ from 'jquery';

window.$ = window.jQuery = require('jquery')

export class Login extends Component {
  state = {
    email: '',
    password: '',
    reset: false,
    disabled: true,
    bor: {
      background: "white"
    }
  };

  componentDidMount(){
    if(window.location.href.match(/login+/) || window.location.href.match(/register+/)){
      this.setState({bor:{
          border: "0px solid black",
          borderRadius: "20px",
          background: "white",
          boxShadow: "0px 0px 10px black"
        }
      })
    } else { 
      this.setState({bor:{
          background: "white"
      }})
    }

  }

  static propTypes = {
    setDefaultReset: PropTypes.func.isRequired,
    resetPass: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    isSent: PropTypes.bool,
    message: PropTypes.string,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
    try{
      var k = document.getElementsByClassName('modal-open')[0];
      console.log(k);
      k.classList.remove('modal-open');
      k.style.padding = '0';
      k.style.overflowX = 'hidden';
      document.getElementsByClassName('modal-backdrop')[0].parentNode.removeChild(document.getElementsByClassName('modal-backdrop')[0]);
    } catch(error) {
      console.log("")
    }

  };


  onResetSubmit = (e) => {
    e.preventDefault();
    this.props.resetPass(this.state.email)
    console.log(this.state.email)
    var j = document.getElementsByClassName('yaha-daalo')[0];
    j.innerHTML = "";
    var k = document.getElementsByClassName('result')[0];
    console.log(k)
    k.style.opacity = "1";

  };

  onReset = (e) => {
        this.setState({reset:true});
  }
  onBack = () => {
        this.setState({reset:false});
        this.props.setDefaultReset();
  }
  onResetChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if(e.target.name == 'email'){
      if(e.target.value.length>4){
        this.setState({ disabled: false });
      } else {
        this.setState({ disabled: true });
      }
    }    
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () =>{
          if(this.state.password.length>=4 && this.state.email.length>=4){
            this.setState({ disabled: false });
          } else {
            this.setState({ disabled: true });
          }
      });
  } 
  render() {
    const k = this.props.message;
    const { email, password } = this.state;
    const resetBody = (


                        <div className='m-auto mb-0'>
                        <button className="btn logbtn btn-ouline-dark" onClick={ this.onBack }><i className="fa fa-arrow-left">&nbsp;Back</i></button>

                          <div className='p-5 mt-2 yaha-daalo'>


                            <h2 className='text-center'>Reset Password</h2>
                            <form onSubmit={this.onResetSubmit}>
                              <div className='form-group'>
                                <label>Email</label>
                                <input
                                  type='email'
                                  className='form-control'
                                  name='email'
                                  onChange={this.onResetChange}
                                  value={email}
                                />
                              </div>
                              <div className='form-group'>
                                <button type='submit' disabled={this.state.disabled} id='ssbtn' className='btn btn-primary'>
                                  Submit{this.state.disabled}
                                </button>
                              </div>
                            </form>
                          </div>
                          <div className="result">
                        <div className="kalo p-5 mt-2">
                          { this.props.isSent ? <div dangerouslySetInnerHTML={{__html: k}} /> : <h3>Sending&nbsp;&nbsp;&nbsp;<i className="fas fa-spinner fa-spin"></i></h3> }
                          </div>
                          </div>
                        </div>
            )

     const loginBody = (
            <div className="m-auto p-1" style={this.state.bor}>
          <div className="p-5 mt-2 mb-4" id="form-ahead">
            <h2 className="text-center f-reg">Login</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
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

              <div className="form-group lllin">
                <button type="submit" id="ssbtn" disabled={this.state.disabled} className="btn btn-primary">
                  Login
                </button>
              </div>
              <p className="reset">
                <button className="btn resBtn btn-ouline-dark" onClick={ this.onReset }>Forgot Password?</button>
              </p>
            </form>
          </div>
        </div>
     )

    return (
      <div>
        { this.state.reset ? resetBody : loginBody }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  isSent: state.reset.isSent,
  message: state.reset.message,
});

export default connect(mapStateToProps, { login, resetPass, setDefaultReset })(withRouter(Login));