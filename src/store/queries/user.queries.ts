import { AppState } from "../types";

export const isLoggedIn = (state: AppState): boolean => {
  return state.user.loggedIn;
};
