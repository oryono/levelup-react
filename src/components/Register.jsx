import React from "react";
import Form from "../components/reusable/Form";
import Joi from "joi-browser";
import { register } from "../actions";
import { connect } from "react-redux";
import SocialButton from '../components/SocialButton'
import Errors from '../components/reusable/Errors'

class Register extends Form {
    state = {
        data: {
            name: "",
            email: "",
            password: ""
        },

        errors: {
            email: "",
            password: ""
        }

    };

    schema = {
        name: Joi.string()
            .required()
            .label("Name"),
        email: Joi.string()
            .email()
            .required()
            .label("Username"),
        password: Joi.string()
            .required()
            .label("Password"),
        password_confirmation: Joi.string()
            .required()
            .label("Password")
    };

    doSubmit = () => {
        this.props.register(this.state.data, this.props.history, this.props.location);
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4" />
                    <div className="col-md-4 mt-5">
                        {this.props.registration_error && (
                            <div className="alert alert-danger">
                                {this.props.registration_error}
                            </div>
                        )}
                        <form action="" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    onChange={this.handleChange}
                                />
                                {this.state.errors["name"] && (
                                    <div className="alert alert-danger">
                                        {this.state.errors["name"]}
                                    </div>
                                )}

                                {this.props.registration_errors['name'] && (<Errors errors={this.props.registration_errors['name']}/>)}
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    name="email"
                                    onChange={this.handleChange}
                                />
                                {this.state.errors["email"] && (
                                    <div className="alert alert-danger">
                                        {this.state.errors["email"]}
                                    </div>
                                )}

                                {this.props.registration_errors['email'] && (<Errors errors={this.props.registration_errors['email']}/>)}
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                    onChange={this.handleChange}
                                />
                                {this.state.errors["password"] && (
                                    <div className="alert alert-danger">
                                        {this.state.errors["password"]}
                                    </div>
                                )}

                                {this.props.registration_errors['password'] && (<Errors errors={this.props.registration_errors['password']}/>)}
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                    name="password_confirmation"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button
                                disabled={this.validate()}
                                className="btn btn-success"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                    <div className="col-md-4" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('state',state)
    return {
        registration_errors: state.auth.registration_errors

    };
};

export default connect(
    mapStateToProps,
    { register }
)(Register);
