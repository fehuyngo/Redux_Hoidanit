import {
  CREATE_USERS_ERROR,
  CREATE_USERS_REQUEST,
  CREATE_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "../action/types";

const INITIAL_STATE = {
  listUsers: [],
  isLoading: false,
  isError: false,
  isCreating: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        listUsers: action.dataUsers,
        isLoading: false,
        isError: false
      };

    case FETCH_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
      
    case CREATE_USERS_REQUEST:
      return {
        ...state,
        isCreating: true,
      };

    case CREATE_USERS_SUCCESS:
      return {
        ...state,
        isCreating: false,  
      };

    case CREATE_USERS_ERROR:
      return {
        ...state,
        isCreating: false,
      };

    default:
      return state;
  }
};

export default userReducer;
