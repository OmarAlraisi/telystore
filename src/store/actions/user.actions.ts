import { createAction } from "redux-actions";

export const logIn = createAction(
  "USER_ACTIONS__LOG_IN",
  (status: boolean): { status: boolean } => ({ status }),
);
