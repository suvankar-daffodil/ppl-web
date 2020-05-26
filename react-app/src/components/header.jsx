import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../redux/user/user-actions";

const Header = props => {
  const history = useHistory();
  const currentUser = useSelector(state => state.currentUser.currentUser);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="navbar-inner">
          <div className="container">
            <button
              type="button"
              className="btn btn-navbar"
              data-toggle="collapse"
              data-target=".nav-collapse"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <span
              className="brand"
              onClick={() =>
                history.push({
                  pathname: "/",
                  state: { fromHeader: true }
                })
              }
            >
              PPL
            </span>
            <div className="pro_info pull-right">
              <div className="pro_icn">
                <img src="/images/pic_small.png" />
              </div>
              <div className="pro_txt">
                Me<b className="caret"></b>
              </div>
              <ul
                className="dropdown-menu"
                role="menu"
                aria-labelledby="dLabel"
              >
                <li>
                  <Link replace tabIndex="-1" to="#">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link replace tabIndex="-1" to="#">
                    Message Box
                  </Link>
                </li>
                <li>
                  <Link replace tabIndex="-1" to="#">
                    Change Language
                  </Link>
                </li>
                <li className="divider"></li>
                <li>
                  <Link replace tabIndex="-1" to="#">
                    <input type="text" placeholder="search" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-collapse collapse">
              <ul className="nav">
                <li className="active">
                  <span
                    onClick={() =>
                      history.push({
                        pathname: "/",
                        state: { fromHeader: true }
                      })
                    }
                  >
                    Home
                  </span>
                </li>
                <li className="">
                  <Link replace to="">
                    E-Coupons
                  </Link>
                </li>
                <li className="">
                  <Link replace to="">
                    E-Brands
                  </Link>
                </li>
                <li className="">
                  <Link replace to="">
                    Resuse Market
                  </Link>
                </li>
                <li className="">
                  <Link replace to="">
                    Lost and Found
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="header_lft">
          <div className="logo">
            <span
              onClick={() =>
                history.push({
                  pathname: "/",
                  state: { fromHeader: true }
                })
              }
            >
              <img src="/images/logo.png" />
            </span>
          </div>
          <div className="navigatn">
            <ul>
              <li>
                <span
                  className="active"
                  onClick={() =>
                    history.push({
                      pathname: "/",
                      state: { fromHeader: true }
                    })
                  }
                >
                  Home
                </span>
              </li>
              <li>
                <Link replace to="#">
                  E-Coupons
                </Link>
              </li>
              <li>
                <Link replace to="#">
                  E-Brands
                </Link>
              </li>
              <li>
                <Link replace to="#">
                  Resuse Market
                </Link>
              </li>
              {/* <li>
                <Link replace to="#"> Lost and Found</Link>
              </li> */}
              {currentUser ? (
                <li>
                  <span
                    onClick={() => {
                      localStorage.removeItem("currentUser");
                      dispatch(setCurrentUser(null));
                    }}
                  >
                    Signout
                  </span>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
        <div className="header_rgt">
          <div className="flag_div">
            <img src="/images/flag.png" />
          </div>
          <input type="text" placeholder="Search" className="txt_box" />

          {currentUser ? (
            <>
              <div className="msg_box">
                <Link replace to="#">
                  <span className="msg_count">100</span>
                </Link>
              </div>
              <div className="info_div">
                <div className="image_div">
                  <img src="/images/pic.png" />
                </div>
                <div className="info_div1">Me</div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
