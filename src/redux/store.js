import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducer/auth.reducer";
import { contactListReducer } from "./reducer/contactList.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  contactList: contactListReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
