import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {connect } from 'react-redux'
import {enroll} from "../actions";

class Course extends Component {
    handleEnroll = (courseId, userId) => {
        this.props.enroll(courseId, userId, this.props.history)
    };
    render() {
        const {course, user} = this.props
        return (
            <div className="row p-1">
                <div className="col-md-4">
                    <Link to={"/courses/" + course.id}>{course.name}</Link>
                </div>
                <button className="btn btn-info btn-sm" onClick={() => this.handleEnroll(course.id, user.id)} disabled={course.instructor.id === user.id}>Enroll</button>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}



export default connect(mapStateToProps, {enroll})(Course)
