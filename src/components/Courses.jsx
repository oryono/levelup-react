import React, { Component } from "react";
import { connect } from "react-redux";
import { getCourses } from "../actions";
import { Link } from "react-router-dom";
import Paginator from "@oryono/react-paginator";
import Course from "./Course";

class Courses extends Component {
    handlePageChange = page => {
        this.props.getCourses(page, this.props.history, this.props.location);
    };
    componentWillMount() {
        this.props.getCourses(undefined, this.props.history, this.props.location);
    }

    render() {
        const courseItems = this.props.courses.data.map(course => (
            <Course key={course.id} course={course} history={this.props.history}/>
        ));

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
        );
    }
}

const mapStateToProps = state => {
    return {
        courses: state.courses.courses
    };
};

export default connect(
    mapStateToProps,
    { getCourses }
)(Courses);
