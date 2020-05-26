import React from "react";
import { Link } from "react-router-dom";

import { url } from "../api";

const ProfileCard = props => {
  return (
    <div className="contnt_1">
      <div className="list_1">
        <ul>
          <li>
            <input type="checkbox" className="chk_bx" />
            Friends
          </li>
          <li>
            <input type="checkbox" className="chk_bx" />
            Flaged
          </li>
        </ul>
      </div>
      <div className="timeline_div">
        <div className="timeline_div1">
          <div className="profile_pic">
            <img src={`${url}/assets/${props.currentUser?.picture}`} />
            <div className="profile_text">
              <span>Change Profile Pic</span>
            </div>
          </div>
          <div className="profile_info">
            <div className="edit_div">
              <Link replace to="#">
                Edit <img src="images/timeline_img.png" />
              </Link>
            </div>
            <div className="profile_form">
              <ul>
                <li>
                  <div className="div_name1">Name :</div>
                  <div className="div_name2">
                    {props.currentUser?.firstname +
                      " " +
                      props.currentUser?.lastname}
                  </div>
                </li>
                <li>
                  <div className="div_name1">Sex :</div>
                  <div className="div_name2">{props.currentUser?.gender}</div>
                </li>
                <li>
                  <div className="div_name1">Description :</div>
                  <div className="div_name3">
                    {props.currentUser?.description}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="timeline_div2">
          <ul>
            <li>
              <Link replace to="#" className="active">
                Timeline
              </Link>
            </li>
            <li>
              <Link replace to="#">
                About{" "}
              </Link>
            </li>
            <li>
              <Link replace to="#">
                Album{" "}
              </Link>
            </li>
            <li>
              <Link replace to="#">
                {" "}
                Pets{" "}
              </Link>
            </li>
            <li>
              <Link replace to="#">
                My Uploads{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
