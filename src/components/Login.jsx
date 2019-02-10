import React from "react";
import Form from "../components/reusable/Form";
import Joi from "joi-browser";
import { login } from "../actions";
import { connect } from "react-redux";
import SocialButton from '../components/SocialButton'

class Login extends Form {
    state = {
        data: {
            email: "",
            password: ""
        },

        errors: {
            email: "",
            password: ""
        }

    };

    schema = {
        email: Joi.string()
            .email()
            .required()
            .label("Username"),
        password: Joi.string()
            .required()
            .label("Password")
    };

    doSubmit = () => {
        this.props.login(this.state.data, this.props.history, this.props.location);
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4" />
                    <div className="col-md-4 mt-5">
                        {/*{this.props.login_error && (*/}
                            {/*<div className="alert alert-danger">*/}
                                {/*{this.props.login_error}*/}
                            {/*</div>*/}
                        {/*)}*/}
                        <form action="" onSubmit={this.handleSubmit}>
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
    return {
        login_error: state.auth.login_error
    };
};

export default connect(
    mapStateToProps,
    { login }
)(Login);
