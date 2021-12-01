import axios from "axios";
import * as actionTypes from "../actionTypes";

export const getContactList = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://tanvir-contact-app-default-rtdb.firebaseio.com/contacts/${id}.json`
    );

    if (!response.data) {
      dispatch({
        type: actionTypes.CONTACT_LIST_NULL,
        payload: [],
      });
      return;
    }

    const keys = Object.keys(response.data);
    const contactList = keys.map((key) => ({
      ...response.data[key],
      id: key,
    }));

    console.log(contactList);

    dispatch({
      type: actionTypes.CONTACT_LIST_SUCCESS,
      payload: contactList,
    });
  } catch (error) {
    console.error(error.message);
    dispatch({
      type: actionTypes.CONTACT_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const postContact = (id, values) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.POST_CONTACT_START,
      payload: {
        userID: id,
        newContact: values,
      },
    });

    await axios.post(
      `https://tanvir-contact-app-default-rtdb.firebaseio.com/contacts/${id}.json`,
      values
    );

    dispatch({
      type: actionTypes.POST_CONTACT_SUCCESS,
    });
  } catch (error) {
    console.error(error.message);
    dispatch({
      type: actionTypes.POST_CONTACT_FAIL,
      payload: error.message,
    });
  }
};

export const deleteContact = (id, contactInfoId) => async (dispatch) => {
  dispatch({
    type: actionTypes.DELETE_CONTACT_START,
    payload: {
      userID: id,
      contactId: contactInfoId,
    },
  });
  try {
    await axios.delete(
      `https://tanvir-contact-app-default-rtdb.firebaseio.com/contacts/${id}/${contactInfoId}.json`
    );

    dispatch({
      type: actionTypes.DELETE_CONTACT_SUCCESS,
    });
  } catch (error) {
    console.error(error.message);
    dispatch({
      type: actionTypes.DELETE_CONTACT_FAIL,
      payload: error.message,
    });
  }
};
