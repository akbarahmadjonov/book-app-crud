import { SET_USER, REMOVE_USER } from "./userType";

const initialState = {
  user: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case REMOVE_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
