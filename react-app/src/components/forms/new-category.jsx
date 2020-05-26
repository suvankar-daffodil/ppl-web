import React, { useState } from "react";
import { useDispatch } from "react-redux";

import PopUp from "../alert-pop-up";
import FormInput from "../form-input";
import { addCategory } from "../../api";
import { setCurrentUser } from "../../redux/user/user-actions";

const CreateNewCategoryForm = props => {
  const dispatch = useDispatch();
  const { currentUser } = props;
  const [popUpData, setPopUpData] = useState(null);

  const handleNewCategoryFormSubmit = async event => {
    event.preventDefault();
    let formData = new FormData(event.target);
    formData.set("user", currentUser._id);

    try {
      let response = await addCategory(formData);
      if (response.data) {
        setPopUpData({
          title: "",
          message: "New category added successfully!!!"
        });
        dispatch(setCurrentUser(response.data));
      } else setPopUpData({ title: "", message: "Failed. Try again!!" });
    } catch (error) {
      setPopUpData({
        title: "Oops!!Some error occured.",
        message: "Try again!!"
      });
    }
  };

  return (
    <>
      {popUpData ? <PopUp {...popUpData} setPopUpData={setPopUpData} /> : null}

      <div className="drop-menu2">
        <h2>New Category</h2>
        <form onSubmit={handleNewCategoryFormSubmit}>
          <FormInput
            name="category"
            label="Category"
            type="text"
            placeholder="Enter title for your new category"
          />
          <FormInput
            className="custom-file-upload"
            name="image"
            label="Thumbnail"
            type="file"
            placeholder="Upload picture"
          />
          <FormInput type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default CreateNewCategoryForm;
