import React, {Component} from 'react'
import {getUserCourses} from "../actions";
import {connect } from 'react-redux'
import {Link} from "react-router-dom";
import Paginator from "@oryono/react-paginator";
import Course from "./Course";

class MyCourses extends Component {
    componentDidMount() {
        this.props.getUserCourses(null, this.props.user.id, this.props.history, this.props.location)
    }

    handlePageChange = page => {
        this.props.getCourses(page, this.props.user.id, this.props.history, this.props.location);
    };

    render() {
        const courseItems = this.props.courses.data.map(course => (
            <Course key={course.id} course={course}/>
        ))

        return (
            <div>
                {courseItems}
                <Paginator
                    totalCount={this.props.courses.meta.pagination.total}
                    currentPage={
                        this.props.courses.meta.pagination.current_page
                    }
                    pageSize={this.props.courses.meta.pagination.per_page}
                    onPageChange={this.handlePageChange}
                />
            </div>
        )

    }

}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        courses: state.userCourses.userCourses

    }
}

export default connect(mapStateToProps, {getUserCourses})(MyCourses)
