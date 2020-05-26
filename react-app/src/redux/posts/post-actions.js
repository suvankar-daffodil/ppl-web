import { postActionTypes } from "./post-action-types";

export const setPosts = posts => ({
    type: postActionTypes.SET_POSTS,
    payload: posts
})