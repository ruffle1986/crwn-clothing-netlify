import { createSelector } from 'reselect';

export const selectUserState = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUserState],
  (userState) => userState.currentUser,
);
