import React from "react";
import { useSelector } from "react-redux";

import Post from "./post";

const getFilteredPosts = (posts, selectedCategory) =>
  posts.filter(post =>
    selectedCategory
      ? selectedCategory.toLowerCase().includes(post.tag.toLowerCase())
      : post.tag.toLowerCase().includes(selectedCategory)
  );

const Timeline = props => {
  const posts = useSelector(state => state.posts.posts);
  const { selectedCategory } = props;
  const filteredPosts = getFilteredPosts(posts, selectedCategory);

  return filteredPosts?.map(post => (
    <Post key={post._id} post={post} {...props} />
  ));
};

export default Timeline;
