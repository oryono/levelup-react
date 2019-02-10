import React, {Component} from 'react'
import {getUserEnrollments} from '../actions'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import Paginator from '@oryono/react-paginator'

class Enrollments extends Component {
    componentDidMount() {
        this.props.getUserEnrollments(null, this.props.user.id, this.props.history, this.props.location)
    }

    handlePageChange = (page) => {
        this.props.getUserEnrollments(page, this.props.user.id, this.props.history, this.props.location);
    }

    render() {
        const enrollments = this.props.enrollments.data.map(enrollment => (
            <div key={enrollment.id}>
                <Link to={"/enrollments/" + enrollment.id}>{enrollment.course.name}</Link>
            </div>
        ))
        return (
            <div>
                <div>{enrollments}</div>
                <Paginator
                    totalCount={this.props.enrollments.meta.pagination.total}
                    currentPage={
                        this.props.enrollments.meta.pagination.current_page
                    }
                    pageSize={this.props.enrollments.meta.pagination.per_page}
                    onPageChange={this.handlePageChange}
                />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        enrollments: state.userEnrollments.enrollments
    }
}

export default connect(mapStateToProps, {getUserEnrollments})(Enrollments)
