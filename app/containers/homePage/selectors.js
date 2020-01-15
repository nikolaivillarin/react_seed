/**
 * Homepage selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomepage = state => {
  if (state && state.home) {
    return state.home;
  }
  return initialState;
};

export const makeSelectDevices = createSelector(
  selectHomepage,
  state => state.deviceList,
);
