import { combineReducers } from "redux";
import { tokenReducer } from "./token/tokenReducer";
import { userReducer } from "./user/userReducer";

export const rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
});
