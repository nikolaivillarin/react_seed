/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';

// The initial state of the Main
export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'sample':
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;
      case 'LOAD_LIST_OF_FLIGHTS':
        console.log('LOAD_LIST_OF_FLIGHTS from app/containers/main');
        break;
    }
  });

export default appReducer;
