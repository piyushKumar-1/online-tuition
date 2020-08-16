import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home.js';
import Footer from './Footer.js';
import AboutUs from './common/AboutUs.js';
import Practice from './common/Practice.js';
import Courses from './common/Courses.js';
import ContactUs from './common/ContactUs.js';
import Enquire from './common/Enquire.js';
import BecomeTeacher from './common/BecomeTeacher.js';
import Dashboard from './student/Dashboard.js';
import TimeTable from './student/TimeTable.js';
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
                            <Route exact path="/join" component={BecomeTeacher} />
                            <Route exact path="/contact" component={ContactUs} />
                            <Route exact path="/courses" component={Courses} />
                            <Route path="/courses/:courseId/:subCourseId" render={props => <Enquire  {...this.props} {...props}/>}/>
                            <Route exact path="/practices" component={Practice} />
                            <Route exact path="/login" component={LoginComp} />
                            <Route exact path="/register" component={RegisterComp} />
                            <PrivateRoute exact path="/student/timetable" component={TimeTable} />
                            <PrivateRoute exact path="/student/dashboard" component={Dashboard} />
                            <PrivateRoute exact path="/student/courses" component={Dashboard} />
                            <Route exact path={'/reset/confirmation/:uidb64/:token/'} component={ResetPassword} />
                        </Switch>
                    </Router>
                    <Footer />

			</Provider>
		)
	}
}

export default withRouter(App)
const container = document.getElementById("app");
ReactDOM.render(<App />, container);