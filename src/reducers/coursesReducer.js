import {GET_COURSES} from "../actions/types";

const initialState = {
    courses: {
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
    }
}

export default (state = initialState,  action) => {
    switch (action.type) {
        case GET_COURSES:
            return {
                ...state,
                courses: action.payload
            };
        default:
            return state;
    }
}