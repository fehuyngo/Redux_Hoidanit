import axios from "axios";
import {
  CREATE_USERS_ERROR,
  CREATE_USERS_REQUEST,
  CREATE_USERS_SUCCESS,
  DECREMENT,
  FETCH_USERS_ERROR,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  INCREMENT,
} from "./types";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const fetchAllUsers = () => {
  return async (dispatch, getState) => {
    dispatch(fetchUsersRequest());
    try {
      const res = await axios.get("http://localhost:8080/users/all");
      const data = res && res.data ? res.data : [];
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchUsersError());
    }
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (data) => {
  return {
    type: FETCH_USERS_SUCCESS,
    dataUsers: data,
  };
};

export const fetchUsersError = () => {
  return {
    type: FETCH_USERS_ERROR,
  };
};

export const createNewUserRedux = (email, password, username) => {
  return async (dispatch, getState) => {
    dispatch(createUsersRequest());
    try {
      const res = await axios.post("http://localhost:8080/users/create", {email, password, username});
      if (res && res.data.errCode === 0) {
        dispatch(createUsersSuccess());
        dispatch(fetchAllUsers());
      }
    } catch (error) {
      console.log(error);
      dispatch(createUsersError());
    }
  };
};

export const createUsersRequest = () => {
  return {
    type: CREATE_USERS_REQUEST,
  };
};

export const createUsersSuccess = () => {
  return {
    type: CREATE_USERS_SUCCESS,
  };
};

export const createUsersError = () => {
  return {
    type: CREATE_USERS_ERROR,
  };
};
