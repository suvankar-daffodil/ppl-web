import React, { useState, useCallback, useEffect } from "react";
import $ from "jquery";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllPosts } from "../api";
import { setPosts } from "../redux/posts/post-actions";
import Timeline from "../components/post-container";
import SidePanel from "../components/side-panel";
import ProfileCard from "../components/profile-card";

const HomePage = props => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { currentUser } = props;
  const [selectedCategory, setSelectedCategory] = useState("");

  const onSelectedCategoryChange = useCallback(tag => {
    setSelectedCategory(tag);
  }, []);

  useEffect(() => {
    $("#rght_cat_bg").click(() => {
      $(".rght_list").toggle("slide");
    });

    $("#opn_cat_bg").click(() => {
      $(".sub_dwn").toggle("slide");
    });

    $(".rght_btn1").click(() => {
      $(".drop-menu1").toggle("slide");
    });

    $(".rght_btn2").click(() => {
      $(".drop-menu2").toggle("slide");
    });

    $(".drop-menu1 input[type='submit']").click(() => {
      $(".drop-menu1").toggle("slide");
    });

    $(".drop-menu2 input[type='submit']").click(() => {
      $(".drop-menu2").toggle("slide");
    });

    fetchAllPosts().then(response => {
      dispatch(setPosts(response.data.reverse()));
    });
  }, []);

  useEffect(() => {
    if (location.state?.fromHeader) {
      location.state.fromHeader = false;
      setSelectedCategory("");
    }
  }, [location.state]);

  return (
    <div className="container">
      <div className="content">
        <div className="content_lft">
          <ProfileCard currentUser={currentUser} />
          <Timeline
            selectedCategory={selectedCategory}
            currentUser={currentUser}
          />
        </div>
        <SidePanel
          currentUser={currentUser}
          onSelectedCategoryChange={onSelectedCategoryChange}
        />
      </div>
    </div>
  );
};

export default HomePage;
