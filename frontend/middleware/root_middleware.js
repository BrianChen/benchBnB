import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';

const rootMiddleware = applyMiddleware(
  SessionMiddleware
);

export default rootMiddleware;
