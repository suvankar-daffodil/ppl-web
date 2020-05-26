import React from "react";

import { url } from "../api";
import CreateNewPostForm from "./forms/new-post";
import CreateNewCategoryForm from "./forms/new-category";

const SidePanel = props => {
  return (
    <div className="content_rgt">
      <div className="rght_btn1">
        <span className="rght_btn_icon">
          <img src="/images/btn_iconb.png" alt="up" />
        </span>
        <span className="btn_sep">
          <img src="/images/btn_sep.png" alt="sep" />
        </span>
        <span className="btn_txt">Upload Post</span>
      </div>
      <CreateNewPostForm {...props} />
      <div className="rght_btn2">
        <span className="rght_btn_icon">
          <img src="/images/btn_icona.png" alt="up" />
        </span>
        <span className="btn_sep">
          <img src="/images/btn_sep.png" alt="sep" />
        </span>
        <span className="btn_txt">Add Categories</span>
      </div>
      <CreateNewCategoryForm {...props} />

      <div className="rght_cate">
        <div className="rght_cate_hd" id="rght_cat_bg">
          Categories
        </div>
        <div className="rght_list">
          <ul>
            {props.currentUser?.categories?.map((category, index) => (
              <li key={index}>
                <div
                  onClick={() => props.onSelectedCategoryChange(category.name)}
                >
                  <span className="list_icon">
                    {(() => {
                      let names = [
                        "CATS",
                        "DOGS",
                        "RABBITS",
                        "BIRDS",
                        "OTHERS"
                      ];
                      return names.indexOf(category.name) !== -1 ? (
                        <img
                          src={`${url}/assets/${category.picture}`}
                          alt="up"
                        />
                      ) : (
                        <img
                          src={`${url}/uploads/${category.picture}`}
                          alt="up"
                        />
                      );
                    })()}
                  </span>
                  {category.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rght_cate">
        <div className="rght_cate_hd" id="opn_cat_bg">
          Featured
          <div className="sub_dwn">
            <div className="feat_sec">
              <div className="feat_sec_img">
                <img src="/images/feat_img1.png" alt="image" />
              </div>
              <div className="feat_txt">Lorem Ipusum Text</div>
              <div className="btm_rgt">
                <div className="btm_arc">Cats</div>
              </div>
            </div>
            <div className="feat_sec">
              <div className="feat_sec_img">
                <img src="/images/feat_img2.png" alt="image" />
              </div>
              <div className="feat_txt">Lorem Ipusum Text</div>
              <div className="btm_rgt">
                <div className="btm_arc">Dogs</div>
              </div>
            </div>
            <div className="feat_sec">
              <div className="feat_sec_img">
                <img src="/images/feat_img3.png" alt="image" />
              </div>
              <div className="feat_txt">Lorem Ipusum Text</div>
              <div className="btm_rgt">
                <div className="btm_arc">Rabbits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
