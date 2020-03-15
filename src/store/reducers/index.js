import { combineReducers } from "redux";
import imagesReducer from "./images";
import userReducer from "./user";

export default combineReducers({
  images: imagesReducer,
  user: userReducer
});
