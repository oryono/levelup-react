import React, { Component } from "react";
import Courses from "../components/Courses";
import "./App.css";
import Nav from "../components/Nav";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "../components/NotFound";
import Login from "../components/Login";
import ProtectedRoute from "../components/reusable/protectedRoute";
import MyCourses from '../components/MyCourses'
import Enrollments from '../components/Enrollments'
import Home from "../components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "../components/Register";

class App extends Component {
    render() {
        return (
            <div className="App">
                <ToastContainer position="bottom-left" autoClose={1500} hideProgressBar={true}/>
                <Nav />
                <div className="container">
                    <Switch>
                        <ProtectedRoute path="/courses" component={Courses} />
                        <ProtectedRoute path="/mycourses" component={MyCourses} />
                        <ProtectedRoute path="/enrollments" component={Enrollments} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/" component={Home} />
                        <Route path="/not-found" component={NotFound} />
                        <Redirect to="/not-found" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
