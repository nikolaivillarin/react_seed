/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { handleActions } from 'redux-actions';
import { loadDeviceList, loadedDeviceList, loadListOfFlights } from './actions';

// The initial state of the Main
export const initialState = {
  deviceList: null,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = handleActions(
  {
    [loadDeviceList]: produce(draft => {
      draft.deviceList = initialState.deviceList;
      return draft;
    }),
    [loadedDeviceList]: produce((draft, action) => {
      draft.deviceList = action.payload.deviceList;
      return draft;
    }),
    [loadListOfFlights]: produce(draft => {
      console.log('LoadListOfFLights from app/containers/homePage');

      return draft;
    }),
  },
  initialState,
);

export default homeReducer;
