import axios from "axios";

export const BASE_URL = "https://books.ogaw.uz";

export const api = {
  userRegister: (user) => axios.post(BASE_URL + "/user/register", user),
  userLogin: (user) => axios.post(BASE_URL + "/user/login", user),
};
