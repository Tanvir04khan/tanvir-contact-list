import * as actionTypes from "../actionTypes";

const sessionData = JSON.parse(sessionStorage.getItem("user-profile"));

const initialState = {
  email: sessionData ? sessionData.email : null,
  userName: sessionData ? sessionData.userName : null,
  accessToken: sessionData ? sessionData.accessToken : null,
  id: sessionData ? sessionData.id : null,
};

export const authReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...prevState,
        email: action.payload.email,
        userName: action.payload.userName,
        accessToken: action.payload.accessToken,
        id: action.payload.id,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...prevState,
        accessToken: null,
        email: null,
        userName: null,
        id: null,
        error: action.payload,
      };

    case actionTypes.LOG_OUT:
      return {
        ...prevState,
        accessToken: null,
        email: null,
        userName: null,
        id: null,
      };
    default:
      return prevState;
  }
};
