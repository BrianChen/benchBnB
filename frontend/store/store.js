import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';
import RootMiddleware from '../middleware/root_middleware';

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, RootMiddleware);
}

export default configureStore;
