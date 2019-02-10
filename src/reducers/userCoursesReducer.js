import {GET_USER_COURSES, GET_USER_COURSES_ERROR} from "../actions/types";

const initialState = {
    userCourses: {
        data: [],
        meta: {
            pagination: {
                total: null,
                count: null,
                per_page: null,
                current_page: null,
                total_pages: null,
                links: {
                    previous: null,
                    next: null
                }
            }
        }
    },
    errors: {}

}

export default (state=initialState, action) => {
    switch (action.type) {
        case GET_USER_COURSES:
            return {
                ...state,
                userCourses: action.payload
            };
        case GET_USER_COURSES_ERROR:
            return {
                ...state,
                errors: action.payload,
            };
        default:
            return state;
    }
}
