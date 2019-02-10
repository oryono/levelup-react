import authReducer from "./authReducer";
import coursesReducer from "./coursesReducer";
import userCorsesReducer from './userCoursesReducer'
import userEnrollments from './enrollmentsReducer'
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    courses: coursesReducer,
    userCourses: userCorsesReducer,
    userEnrollments: userEnrollments
});

export default rootReducer;
