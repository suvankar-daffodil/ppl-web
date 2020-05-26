import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PopUp from "../alert-pop-up";
import { loginUser } from "../../api";
import { setCurrentUser } from "../../redux/user/user-actions";
import FormInput from "../form-input";

const SignIn = props => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [popUpData, setPopUpData] = useState();

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();
      try {
        let response = await loginUser(formData);
        if (response.data) {
          localStorage.setItem("currentUser", response.data._id);
          dispatch(setCurrentUser(response.data));
        } else
          setPopUpData({
            title: "Email or password incorrect!!",
            message: "Please try again!!"
          });
      } catch (err) {
        setPopUpData(err);
      }
    },
    [formData]
  );

  const handleChange = useCallback(
    event => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    },
    [formData]
  );

  return (
    <>
      {popUpData ? <PopUp {...popUpData} setPopUpData={setPopUpData} /> : null}

      <div className="content_rgt">
        <div className="login_sec">
          <h1>Log In</h1>
          <ul>
            <form onSubmit={handleSubmit}>
              <FormInput
                changeHandler={handleChange}
                name="email"
                label="Email"
                type="text"
                placeholder="Enter your email"
              />
              <FormInput
                changeHandler={handleChange}
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
              />
              <li>
                <input type="checkbox" />
                Remember me
              </li>
              <li>
                <input type="submit" value="Login" />
                <Link to="/auth/password-reset">Forgot Password</Link>
              </li>
            </form>
          </ul>
          <div className="addtnal_acnt">
            I do not have any account yet.
            <Link replace to="/auth/signup">
              Create My Account Now !
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
