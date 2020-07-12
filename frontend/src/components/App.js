import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home.js';
import Footer from './Footer.js';
import AboutUs from './common/AboutUs.js';
import Practice from './common/Practice.js';
import { Provider, useSelector } from 'react-redux';
import AlertTemplate from 'react-alert-template-basic';
import store from '../store.js';
import PrivateRoute from './common/PrivateRoute.js';
import Queries from './queries/Query.js';
import RegisterComp from './users/RegisterComp.js'
import ResetPassword from './users/ResetPassowrd.js'
import LoginComp from './users/LoginComp.js'
import { loadUser } from '../actions/authAction.js';
import '../styles/users.css'




export class App extends React.Component {
    componentDidMount(){
        store.dispatch(loadUser());
    }

	render() {
		return (
            <Provider store={store}>

                    <Router>
                    <Header />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={AboutUs} />
                            <Route exact path="/practices" component={Practice} />
                            <Route exact path="/login" component={LoginComp} />
                            <Route exact path="/register" component={RegisterComp} />
                            <Route exact path={'/reset/confirmation/:uidb64/:token/'} component={ResetPassword} />
                        </Switch>
                    </Router>
                    <Footer />

			</Provider>
		)
	}
}

export default App
const container = document.getElementById("app");
ReactDOM.render(<App />, container);