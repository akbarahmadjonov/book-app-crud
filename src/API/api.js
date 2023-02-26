import axios from "axios";

export const BASE_URL = "http://localhost:5000";

export const api = {
  userRegister: (user) => axios.post(BASE_URL + "/user/register", user),
  userLogin: (user) => axios.post(BASE_URL + "/user/login", user),
};
