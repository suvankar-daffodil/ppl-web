import Axios from "axios";

// export const url = "http://192.168.100.171:5000";
export const url = "http://localhost:5000";

export const registerUser = async userData => {
  try {
    let response = await Axios.post(`${url}/signup`, userData);
    return response;
  } catch (error) {
    return error;
  }
};

export const loginUser = async userData => {
  try {
    let response = await Axios.post(`${url}/login`, userData);
    return response;
  } catch (error) {
    return error;
  }
};

export const addCategory = async categoryData => {
  try {
    let response = await Axios.post(`${url}/categories`, categoryData);
    return response;
  } catch (error) {
    return error;
  }
};

export const addPost = async postData => {
  try {
    let response = await Axios.post(`${url}/posts`, postData);
    return response;
  } catch (error) {
    return error;
  }
};

export const getUserById = async userId => {
  try {
    let response = await Axios.get(`${url}/users/${userId}`, userId);
    return response;
  } catch (error) {
    return error;
  }
};

export const updatePostById = async postData => {
  try {
    let response = await Axios.put(`${url}/posts/${postData._id}`, postData);
    return response;
  } catch (error) {
    return error;
  }
};

export const fetchAllPosts = async () => {
  try {
    let response = await Axios.get(`${url}/posts`);
    return response;
  } catch (error) {
    return error;
  }
};
