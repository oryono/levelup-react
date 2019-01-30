import { LOGIN_ERROR, LOGIN_SUCCESSFUL } from "../actions/types";
const initialState = {
    isAuthenticated: false,
    login_error: null,
    user: {}
};
export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESSFUL:
            return {
                ...state,
                user: action.payload,
                login_error: null
            };
        case LOGIN_ERROR:
            return {
                ...state,
                login_error: action.payload,
                user: null
            };
        default:
            return state;
    }
};
