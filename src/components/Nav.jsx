import React from "react";
import {NavLink, Link} from "react-router-dom";
import {connect} from "react-redux";

const Nav = props => {
    return (
        <nav className="navbar navbar-expand-md navbar-light navbar-laravel">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Levelup
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-label="{{ __('Toggle navigation') }}"
                >
                    <span className="navbar-toggler-icon"/>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/courses">
                                All Courses{" "}
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/my-courses">
                                My Courses{" "}
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/enrolled">
                                Enrolled{" "}
                            </NavLink>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto">
                        {!localStorage.getItem("user") && (
                            <React.Fragment>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">
                                        Login{" "}
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/register"
                                    >
                                        Register{" "}
                                    </NavLink>
                                </li>
                            </React.Fragment>
                        )}

                        {localStorage.getItem("user") && (
                            <li className="nav-item dropdown">
                                <a
                                    id="navbarDropdown"
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-toggle="dropdown"
                                >
                                    {fullName(props)} <span className="caret"/>
                                </a>

                                <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <a
                                        className="dropdown-item"
                                        href="/profile"
                                    >
                                        Profile
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </a>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

const fullName = props => {
    return props.auth.user.name;
};

const handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    return window.location.assign("/login");
};

export default connect(
    mapStateToProps,
    null
)(Nav);
