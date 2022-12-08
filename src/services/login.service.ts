import axios from "axios";
import { API_BASE_URL, AUTH_API_ENDPOINT } from "../config";

export const loginService = async (
  email: string,
  password: string,
  handleResolve: Function,
  handleReject: Function,
) => {
  axios
    .post(`${API_BASE_URL}${AUTH_API_ENDPOINT}`, {
      email,
      password,
    })
    .then((_) => {
      handleResolve();
    })
    .catch((error) => {
      handleReject();
    });
};
