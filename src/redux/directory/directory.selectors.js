import { createSelector } from 'reselect';

export const selectDirectoryState = (state) => state.directory;

export const selectSections = createSelector(
  [selectDirectoryState],
  (directory) => directory.sections,
);
