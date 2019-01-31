import { GET_COURSES, LOGIN_ERROR, LOGIN_SUCCESSFUL } from "./types";
import Api from "./api";

export const getCourses = page => {
    return async dispatch => {
        const { data } = await Api.get("/courses/?page=" + page);
        dispatch({
            type: GET_COURSES,
            payload: data
        });
    };
};

export const login = (credentials, history) => {
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

            history.push("courses");
        } catch (e) {
            console.log(e.response);
            dispatch({
                type: LOGIN_ERROR,
                payload: e.response.data.error
            });
        }
    };
};
