import { handleActions } from "redux-actions";
import { UserState } from "../types";
import { logIn } from "../actions";

const initState: UserState = {
  loggedIn: false,
};

export const userReducer = handleActions<UserState, any>(
  {
    [logIn.toString()](state, { payload }: ReturnType<typeof logIn>) {
      const { status } = payload;
      return {
        ...state,
        loggedIn: status,
      };
    },
  },
  initState,
);
