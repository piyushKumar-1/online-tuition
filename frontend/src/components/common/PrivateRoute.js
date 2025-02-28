import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";


const PrivateRoute = ({component: Component, auth, ...rest}) => (

	<Route {...rest} 
	render={props => {
		if(auth.isLoading){
			return <h2>Loading....</h2>
		} else if (auth.isAuthenticated && (auth.user.teacher==null)){
			return <Component {...props} />;
		} else {
			return <Redirect to="/login" />;
		}
	}}
	/>
);


const mapStateToProps = state => ({
	auth:state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);