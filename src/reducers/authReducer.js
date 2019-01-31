import { LOGIN_ERROR, LOGIN_SUCCESSFUL } from "../actions/types";
const initialState = {
    isAuthenticated: false,
    login_error: null,
    user: JSON.parse(localStorage.getItem("user")) || {
        original: {
            created_at: null,
            email: null,
            email_verified_at: null,
            id: null,
            name: null,
            updated_at: null
        }
    }
};
export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESSFUL:
            return {
                ...state,
                user: action.payload,
                login_error: null,
                isAuthenticated: true
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
