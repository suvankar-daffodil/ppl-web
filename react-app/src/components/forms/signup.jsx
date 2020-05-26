import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import PopUp from "../alert-pop-up";
import FormInput from "../form-input";
import { registerUser } from "../../api";

const Register = props => {
  const [formData, setFormData] = useState({ picture: "profile-blank.png" });
  const [popUpData, setPopUpData] = useState(null);

  const handleSubmit = useCallback(
    async event => {
      try {
        event.preventDefault();
        let response = await registerUser(formData);
        response.data
          ? setPopUpData({
              title: "Signup Successfull!!",
              message: "Login to continue!!"
            })
          : setPopUpData({
              title: "User already exists!!",
              message: " Please try again.."
            });
      } catch (error) {
        setPopUpData({ title: "ERROR SAVING USER!!!", message: " TRY LATER." });
      }
    },
    [formData]
  );

  const handleChange = useCallback(
    event => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    },
    [formData]
  );

  return (
    <>
      {popUpData ? <PopUp {...popUpData} setPopUpData={setPopUpData} /> : null}

      <div className="content_rgt">
        <div className="register_sec">
          <h1>Create An Account</h1>
          <ul>
            <form onSubmit={handleSubmit}>
              <FormInput
                changeHandler={handleChange}
                name="firstname"
                label="Firstname"
                type="text"
                placeholder="Enter your firstname"
              />
              <FormInput
                changeHandler={handleChange}
                name="lastname"
                label="Lastname"
                type="text"
                placeholder="Enter your lastname"
              />
              <FormInput
                changeHandler={handleChange}
                name="gender"
                label="Gender"
                type="text"
                placeholder="Enter your gender"
              />
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
                <input type="checkbox" />I agree to Term &amp; Conditions
              </li>
              <li>
                <input type="submit" value="Register" />
              </li>
            </form>
          </ul>
          <div className="addtnal_acnt">
            I already have an account.
            <Link replace to="/auth/signin">
              Login My Account !
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
