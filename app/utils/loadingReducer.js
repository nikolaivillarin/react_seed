/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';

const initialState = {};
/* eslint-disable default-case, no-param-reassign */
const loadingReducer = produce((draft, action) => {
  if (action) {
    const { type } = action;
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

    // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
    if (matches) {
      const [, requestName, requestState] = matches;

      draft[requestName] = requestState === 'REQUEST';
    }
  }
  return draft;
}, initialState);

export default loadingReducer;
