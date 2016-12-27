import { combineReducers } from 'redux';
import counter from "./counterReducer";
import posts from "./postReducer";

const rootReducer = combineReducers({
  counter,
  posts
});

export default rootReducer;