import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resetPassword, checkToken } from '../../actions/authAction.js';


export class ResetPassword extends Component {

  state = {
    password: '',
    password2: '',
    token: '',
    uidb64: '',
    disabled: true,
    misMatch:false,
    show:true,
  };

    componentDidMount(){
        const { uidb64 } = this.props.match.params;
        const { token } = this.props.match.params;
        this.setState({token: token, uidb64: uidb64});

        this.props.checkToken(token, uidb64);
        console.log(this.props.reset.chk);

    }

  static propTypes = {
    checkToken: PropTypes.func.isRequired,
    resetPassword: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { password, password2, token, uidb64 } = this.state;
    console.log(password2, password, token, uidb64)
    if (password !== password2) {

    } else {
      const newPass = {
        password,
        token,
        uidb64,
      };
      this.props.resetPassword(newPass);
    }
    this.setState({show: this.props.reset.isSent})
    try{
        var k = document.getElementsByClassName('modal-open')[0];
        console.log(k);
        k.classList.remove('modal-open');
        k.style.padding = '0';
        k.style.overflowX = 'hidden';

        document.getElementsByClassName('modal-backdrop')[0].parentNode.removeChild(document.getElementsByClassName('modal-backdrop')[0]);
    }
    catch(err){
        console.log("sorry");
    }

  };

  onPass2Change = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () =>{
        if(this.state.password!=this.state.password2){
          this.setState({ misMatch: true, disabled: true });
        } else {
          this.setState({ misMatch: false });
          if(this.state.password.length>=4 && this.state.password2.length>=4){
              this.setState({ disabled: false });
          } else {
            this.setState({ disabled: true });
          }
        }
    });
  }

  render() {

    const { password, password2,  token, uidb64 } = this.state;
    const passwordChangeBody = (
        <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={this.onPass2Change}
                    value={password}
                  />
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
                  {this.state.misMatch ? <span style={{color: "red"}}>Password Didn't match</span> : ""}

                </div>

                <div className="form-group">
                  <button type="submit" id="ssbtn" disabled={this.state.disabled} className="btn btn-primary">
                    Reset Password
                  </button>
                </div>
              </form>
        )

    const loading = () => {
        if(this.props.reset.isSent){
            return <div className="m-auto w-maxc p-5"><h3>{this.props.reset.message}&nbsp;&nbsp;&nbsp;<i className='fa fa-check-circle green'></i></h3></div>
        }
        if(this.props.reset.chkerr){
            return <div className="m-auto w-maxc p-5"><h3>Token Supplied is invalid Try again with a new one...&nbsp;&nbsp;&nbsp;<i className='fa fa-times-circle red'></i></h3></div>
        } else if(this.props.reset.chk){
            return passwordChangeBody
        }

    }


    return (

		<div className="m-auto ws">
          <div className="m-auto">
            <div className="p-5 mt-2">
              <h2 className="text-center">Reset Password</h2>

              {this.props.reset.chk ? loading() : <div className="m-auto w-maxc p-5"><i className="fas fa-spinner fa-5x fa-spin"></i></div> }


            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reset: state.reset,
});

export default connect(mapStateToProps, { resetPassword, checkToken })(ResetPassword);