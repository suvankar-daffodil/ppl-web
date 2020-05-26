import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Post from "../components/post";
import CommentBox from "../components/comment-container";

const getPostById = (posts, postId) => {
  return posts.filter(post => post._id === postId)[0];
};

const SinglePostPage = props => {
  const posts = useSelector(state => state.posts.posts);
  const params = useParams();

  const post = getPostById(posts, params.postId);

  return post ? (
    <div className="container">
      <div className="content">
        <Post key={post._id} post={post} {...props} />
        <CommentBox post={post} {...props} />
      </div>
    </div>
  ) : null;
};

export default SinglePostPage;
