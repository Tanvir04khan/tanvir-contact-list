import * as actionTypes from "../actionTypes";
import firebase from "firebase/app";
import auth from "../../firebase";

export const login = () => async (dispatch) => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();

    const response = await auth.signInWithPopup(provider);

    const profile = {
      email: response.user.email,
      userName: response.additionalUserInfo.profile.name,
      accessToken: response.credential.accessToken,
      id: response.additionalUserInfo.profile.id,
    };

    sessionStorage.setItem("user-profile", JSON.stringify(profile));

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: profile,
    });
  } catch (error) {
    console.error(error.message);
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  await auth.signOut();

  dispatch({
    type: actionTypes.LOG_OUT,
  });

  sessionStorage.removeItem("user-profile");
};
