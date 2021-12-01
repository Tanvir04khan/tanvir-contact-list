import * as actionTypes from "../actionTypes";

const initialState = {
  loading: false,
  data: null,
  firebaseHasData: true,
  contactInfoToDelete: null,
};

export const contactListReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionTypes.CONTACT_LIST_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case actionTypes.CONTACT_LIST_NULL:
      return {
        ...prevState,
        data: [],
        firebaseHasData: false,
      };

    case actionTypes.CONTACT_LIST_SUCCESS:
      return {
        ...prevState,
        data: action.payload,
        firebaseHasData: true,
      };
    case actionTypes.CONTACT_LIST_FAIL:
      return {
        ...prevState,
        data: null,
        error: action.payload,
      };
    case actionTypes.DELETE_CONTACT_START:
      return {
        ...prevState,
        contactInfoToDelete: {
          userId: action.payload.userId,
          contactId: action.payload.contactId,
        },
      };
    case actionTypes.DELETE_CONTACT_SUCCESS:
      return {
        ...prevState,
        contactInfoToDelete: null,
      };

    default:
      return prevState;
  }
};
