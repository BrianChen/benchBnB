import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT
} from '../actions/session_actions';

import merge from 'lodash/merge';

const defaultState = {
  currentUsernull: null,
  errors: []
}

const sessionReducer = (state=defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return ({
        currentUser: action.currentUser,
        errors: merge([], state.errors)
      });
    case RECEIVE_ERRORS:
      return ({
        currentUser: null,
        errors: action.errors
      });
    case LOGOUT:
      return (merge({}, defaultState));
    default:
      return state;
  }
}

export default sessionReducer;
