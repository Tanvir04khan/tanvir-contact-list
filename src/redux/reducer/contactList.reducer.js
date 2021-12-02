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
        loading: false,
      };
    case actionTypes.CONTACT_LIST_FAIL:
      return {
        ...prevState,
        data: null,
        error: action.payload,
        loading: false,
      };
    case actionTypes.DELETE_CONTACT_START:
      return {
        ...prevState,
        contactInfoToDelete: {
          userId: action.payload.userId,
          contactId: action.payload.contactId,
        },
        loading: true,
      };
    case actionTypes.DELETE_CONTACT_SUCCESS:
      return {
        ...prevState,
        contactInfoToDelete: null,
        loading: false,
      };
    case actionTypes.DELETE_CONTACT_FAIL:
      return {
        ...prevState,
        error: action.payload,
      };
    case actionTypes.POST_CONTACT_START:
      return {
        ...prevState,
        newContactDetails: action.payload,
        loading: true,
      };
    case actionTypes.POST_CONTACT_SUCCESS:
      return {
        ...prevState,
        loading: false,
      };
    case actionTypes.POST_CONTACT_FAIL:
      return {
        ...prevState,
        error: action.payload,
        loading: false,
      };
    case actionTypes.EDIT_CONTACT_START:
      return {
        ...prevState,
        loading: true,
        contactToBeEdited: action.payload,
      };
    case actionTypes.EDIT_CONTACT_SUCCESS:
      return {
        ...prevState,
        loading: false,
      };
    case actionTypes.EDIT_CONTACT_FAIL:
      return {
        ...prevState,
        error: action.payload,
        loading: false,
      };

    default:
      return prevState;
  }
};
