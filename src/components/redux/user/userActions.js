import { SET_USER, REMOVE_USER } from "./userType";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const RemoveUser = () => {
  return {
    type: REMOVE_USER,
    payload: "",
  };
};
