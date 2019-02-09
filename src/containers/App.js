import React, { Component } from "react";
import Courses from "../components/Courses";
import "./App.css";
import Nav from "../components/Nav";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "../components/NotFound";
import Login from "../components/Login";
import ProtectedRoute from "../components/reusable/protectedRoute";
import Home from "../components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <ToastContainer />
                <Nav />
                <div className="container">
                    <Switch>
                        <ProtectedRoute path="/courses" component={Courses} />
                        <Route path="/login" component={Login} />
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
