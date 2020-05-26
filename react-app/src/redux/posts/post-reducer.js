import { postActionTypes } from "./post-action-types";

const INITIAL_STATE = {
  posts: []
};

const PostReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case postActionTypes.SET_POSTS:
      return {
        ...state,
        posts: actions.payload
      };

    default:
      return state;
  }
};

export default PostReducer;
