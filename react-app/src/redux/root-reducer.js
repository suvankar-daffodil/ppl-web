import { combineReducers } from "redux";

import userReducer from "./user/user-reducer";
import postReducer from "./posts/post-reducer";

export default combineReducers({
  currentUser: userReducer,
  posts: postReducer
});
