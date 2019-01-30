import React, { Component } from "react";
import Courses from "../components/Courses";
import "./App.css";
import Nav from '../components/Nav'
import {Route, Switch, Redirect} from "react-router-dom";
import NotFound from '../components/NotFound'
import Login from '../components/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <div>
            <Switch>
                <Route path="/courses" component={Courses}/>
                <Route path="/login" component={Login}/>
                <Redirect from="/" to="/courses" exact />
                <Route path="/not-found" component={NotFound} />
                <Redirect to="/not-found" />
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;
