import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware),
    window.___REDUX_DEVTOOLS_EXTENSION__
      ? window.___REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
