import authReducer from "./authReducer";
import coursesReducer from "./coursesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  courses: coursesReducer
});

export default rootReducer;
