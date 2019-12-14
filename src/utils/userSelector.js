import { createSelector } from "reselect";

const selectUser = state => state.user;

export const seelctCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
