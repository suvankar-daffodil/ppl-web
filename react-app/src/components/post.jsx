import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setPosts } from "../redux/posts/post-actions";
import { url, updatePostById, fetchAllPosts } from "../api";

const Post = props => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const updatePostData = async post => {
    if (!post.likes.includes(props.currentUser._id)) {
      post.likes.push(props.currentUser);
      try {
        let response = await updatePostById(post);
        if (response) {
          let result = await fetchAllPosts();
          if (result) dispatch(setPosts(result.data.reverse()));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="contnt_2">
      <div className="div_a">
        <div className="div_title">{props.post.title}</div>
        <div className="btm_rgt">
          <div className="btm_arc">{props.post.tag}</div>
        </div>
        <div className="div_top">
          <div className="div_top_lft">
            <img src="/images/img_6.png" />
            {props.post.userName}
          </div>
          <div className="div_top_rgt">
            <span className="span_date">{props.post.date}</span>
            <span className="span_time">{props.post.time}</span>
          </div>
        </div>
        <div className="div_image">
          {match.path === "/" ? (
            <Link replace to={`/posts/${props.post._id}`}>
              <img src={`${url}/uploads/${props.post.picture}`} alt="pet" />
            </Link>
          ) : (
            <img src={`${url}/uploads/${props.post.picture}`} alt="pet" />
          )}
        </div>
        <div className="div_btm">
          <div className="btm_list">
            <ul>
              <li>
                <Link replace to="#">
                  <span className="btn_icon">
                    <img src="/images/icon_001.png" alt="share" />
                  </span>
                  Share
                </Link>
              </li>
              <li>
                <Link replace to="#">
                  <span className="btn_icon">
                    <img src="/images/icon_002.png" alt="share" />
                  </span>
                  Flag
                </Link>
              </li>
              <li onClick={() => updatePostData(props.post)}>
                <Link replace to="#">
                  <span className="btn_icon">
                    <img src="/images/icon_003.png" alt="share" />
                  </span>
                  {props.post.likes.length} Likes
                </Link>
              </li>
              <li>
                <Link replace to="#">
                  <span className="btn_icon">
                    <img src="/images/icon_004.png" alt="share" />
                  </span>
                  {props.post.comments.length} Comments
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
