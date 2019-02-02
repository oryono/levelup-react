import React, { Component } from "react";
import { connect } from "react-redux";
import { getCourses } from "../actions";
import { Link } from "react-router-dom";
import Paginator from "@oryono/react-paginator";

class Courses extends Component {
    handlePageChange = page => {
        this.props.getCourses(page);
    };
    componentWillMount() {
        this.props.getCourses();
    }

    render() {
        const courseItems = this.props.courses.data.map(course => (
            <div key={course.id}>
                <h1>
                    <Link to={"/courses/" + course.id}>{course.name}</Link>
                </h1>
            </div>
        ));

        return (
            <div>
                {courseItems}
                <Paginator
                    totalCount={this.props.courses.meta.pagination.total}
                    currentPage={this.props.courses.meta.pagination.current_page}
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
