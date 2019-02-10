import {
    GET_ALL_COURSES,
    GET_USER_COURSES,
    LOGIN_ERROR,
    LOGIN_SUCCESSFUL,
    GET_USER_ENROLLMENTS,
    USER_ENROLLMENT,
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from "./types";

import Api from "./api";
import {toast} from "react-toastify";

export const getCourses = (page, history, location) => {
    return async dispatch => {
        try {
            const { data } = await Api.get("/courses/?page=" + page);
            dispatch({
                type: GET_ALL_COURSES,
                payload: data
            });
        } catch (error) {
            if (error.response && error.response.status === 401) {
                toast.error(`${error.response.data.message}, Please login`)
                history.push({
                    pathname: '/login',
                    state: {
                        from: location
                    }
                });
            }
        }
    };
};

export const login = (credentials, history, location) => {
    return async dispatch => {
        try {
            const { data } = await Api.post("auth/login", credentials);
            localStorage.setItem("token", data.access_token);
            localStorage.setItem("user", JSON.stringify(data.user.original));
            localStorage.setItem("isAuthenticated", true);
            dispatch({
                type: LOGIN_SUCCESSFUL,
                payload: data.user.original
            });

            if (location.state) {
                return window.location.assign(location.state.from.pathname);
            }
            toast.success('Successfully logged In')
            return history.push('/')
        } catch (e) {
            toast.error(e.response.data.error)
            dispatch({
                type: LOGIN_ERROR,
                payload: e.response.data.error
            });
        }
    };
};

export const register = (credentials, history, location) => {
    return async dispatch => {
        try {
            const { data } = await Api.post("auth/register", credentials);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: data
            });
            toast.success('Successfully registered')
            return history.push('login')
        } catch (e) {
            console.log(e.response.data.errors)
            dispatch({
                type: REGISTER_ERROR,
                payload: e.response.data.errors
            });
        }
    };
};

export const getUserCourses = (page, userId, history, location) => {
    return async dispatch => {
        try {
            const { data } = await Api.get(`/users/${userId}/courses`);
            console.log(data)
            dispatch({
                type: GET_USER_COURSES,
                payload: data
            });
        } catch (error) {
            if (error.response && error.response.status === 401) {
                toast.error(`${error.response.data.message}, Please login`)
                history.push({
                    pathname: '/login',
                    state: {
                        from: location
                    }
                });
            }
        }
    };
};

export const getUserEnrollments = (page, userId, history, location) => {
    return async dispatch => {
        try {
            const { data } = await Api.get(`/users/${userId}/enrollments/?page=${page}`);
            dispatch({
                type: GET_USER_ENROLLMENTS,
                payload: data
            });

        } catch (error) {
            if (error.response && error.response.status === 401) {
                toast.error(`${error.response.data.message}, Please login`)
                history.push({
                    pathname: '/login',
                    state: {
                        from: location
                    }
                });
            }
        }
    };
};

export const enroll = (courseId, userId, history, location) => {
    console.log('History', history)
    return async dispatch => {
        try {
            const { data } = await Api.post(`/courses/${courseId}/enroll/${userId}`);
            console.log(data)
            dispatch({
                type: USER_ENROLLMENT,
                payload: data
            });
            return history.push('/enrollments')
        } catch (error) {
            toast.error(`${error.response.data.message}`)

            if (error.response && error.response.status === 401) {
                toast.error(`${error.response.data.message}, Please login`)
                history.push({
                    pathname: '/login',
                    state: {
                        from: location
                    }
                });
            }
        }
    };
};

export const isAuthenticated = () => {
    return localStorage.getItem("isAuthenticated");
};
