import React from "react";

const PostFilterPanel = () => {
  return (
    <div class="contnt_1">
      <div class="list_1">
        <ul>
          <li>
            <input type="checkbox" class="chk_bx" />
            Friends
          </li>
          <li>
            <input type="checkbox" class="chk_bx" />
            Flaged
          </li>
        </ul>
      </div>
      <div class="post_div">
        <div class="post_list">
          <ul>
            <li>
              <a href="#">
                <span class="list_img">
                  <img src="images/img_1.png" />
                </span>
                Latest First
              </a>
            </li>
            <li>
              <a href="#">
                <span class="list_img">
                  <img src="images/img_2.png" />
                </span>
                Oldest First
              </a>
            </li>
            <li>
              <a href="#">
                <span class="list_img">
                  <img src="images/img_3.png" />
                </span>
                Most Pet
              </a>
            </li>
            <li>
              <a href="#">
                <span class="list_img">
                  <img src="images/img_4.png" />
                </span>
                Most Clicks
              </a>
            </li>
            <li>
              <a href="#">
                <span class="list_img">
                  <img src="images/img_5.png" />
                </span>
                Most Commented
              </a>
            </li>
          </ul>
        </div>
        <div class="post_txt">4 New Post Updates</div>
      </div>
    </div>
  );
};

export default PostFilterPanel;
