import {GET_USER_ENROLLMENTS, GET_USER_ENROLLMENTS_ERROR} from "../actions/types";

const initialState = {
    enrollments: {
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
    error: null
}

export default (state=initialState, action) => {
    switch (action.type) {
        case(GET_USER_ENROLLMENTS):
            return {
                ...state,
                enrollments: action.payload
            };

        case(GET_USER_ENROLLMENTS_ERROR):
            return {
                ...state,
                error: action.payload
            };
        default:
            return state
    }

}
