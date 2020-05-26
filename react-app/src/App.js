import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "./api";
import { setCurrentUser } from "./redux/user/user-actions";

import Main from "./components/main";
import Footer from "./components/footer";
import Header from "./components/header";

const App = props => {
  const currentUser = useSelector(state => state.currentUser.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    let value = localStorage.getItem("currentUser");
    loginUser({ _id: value })
      .then(response => {
        dispatch(setCurrentUser(response.data))
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Main currentUser={currentUser} />
      <Footer />
    </>
  );
};

export default App;
