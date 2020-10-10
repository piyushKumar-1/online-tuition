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
import PrivacyPolicy from './common/PrivacyPolicy.js';
import Dashboard from './student/Dashboard.js';
import TimeTable from './student/TimeTable.js';
import Feedback from './student/Feedback.js';
import AddCourse from './student/AddCourse.js';
import MyCourse from './student/MyCourse.js';
import Pay from './student/Pay.js';
import UploadSyllabus from './student/UploadSyllabus.js';
import TDashboard from './teacher/TDashboard.js';
import TMyCourse from './teacher/TMyCourse.js';
import TUploads from './teacher/TUploads.js';
import TTimeTable from './teacher/TTimeTable.js';
import TProfile from './teacher/TProfile.js';
import TDelete from './teacher/TDelete.js';
import { Provider, useSelector } from 'react-redux';
import AlertTemplate from 'react-alert-template-basic';
import store from '../store.js';
import PrivateRoute from './common/PrivateRoute.js';
import TeacherRoute from './common/TeacherRoute.js';
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
                            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
                            <Route exact path="/login" component={LoginComp} />
                            <Route exact path="/register" component={RegisterComp} />
                            <Route exact path={'/reset/confirmation/:uidb64/:token/'} component={ResetPassword} />

                            <PrivateRoute exact path="/student/timetable" component={TimeTable} />
                            <PrivateRoute exact path="/student/dashboard" component={Dashboard} />
                            <PrivateRoute exact path="/student/courses" component={Dashboard} />
                            <PrivateRoute exact path="/student/upload" component={UploadSyllabus} />
                            <PrivateRoute exact path="/student/pay" component={Pay} />
                            <PrivateRoute exact path="/student/add-course" component={AddCourse} />
                            <PrivateRoute exact path="/student/feedback" component={Feedback} />
                            <PrivateRoute exact path={'/student/courses/:myCourseId'} component={MyCourse} />

                            <TeacherRoute exact path="/teacher/timetable" component={TTimeTable} />
                            <TeacherRoute exact path="/teacher/dashboard" component={TDashboard}/>
                            <TeacherRoute exact path="/teacher/courses" component={TDashboard}/>
                            <TeacherRoute exact path="/teacher/uploads" component={TUploads}/>
                            <TeacherRoute exact path="/teacher/profile" component={TProfile}/>
                            <TeacherRoute exact path="/teacher/delete/:id/:cur_id" component={TDelete}/>
                            <TeacherRoute exact path={'/teacher/courses/:myCourseId'} component={TMyCourse} />
                        </Switch>
                        <Footer />
                    </Router>

			</Provider>
		)
	}
}

export default withRouter(App)
const container = document.getElementById("app");
ReactDOM.render(<App />, container);