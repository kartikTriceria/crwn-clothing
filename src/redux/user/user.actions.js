import { UseractionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UseractionTypes.SET_CURRENT_USER,
  payload: user,
});
