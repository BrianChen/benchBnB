import {
  receiveErrors,
  receiveCurrentUser,
  LOGIN,
  LOGOUT,
  SIGNUP
} from '../actions/session_actions';
import {login, logout, signup} from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const success = user => dispatch(receiveCurrentUser(user));
  const error = xhr => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case LOGIN:
      return login(action.user, success, error);
    case LOGOUT:
      logout(() => next(action));
      break;
    case SIGNUP:
      signup(action.user, success, error);
      return next(action);
    default:
      return next(action);
  }
}
