import React from 'react';
import { createContext, useContext, useReducer } from 'react';
import combineReducers from '../lib/combine-reducers';
import applyMiddleware from '../lib/apply-middleware';
import localStorageMiddleware from '../middleware/local-storage';

import mainReducer from '../reducers/core.reducer';

const StateContext = createContext();

const useStateContext = () => useContext(StateContext);

const stateContextInitialState = {};

const reducer = applyMiddleware(combineReducers([mainReducer]), [
  localStorageMiddleware('settings')
]);

const StateProvider = (props) => (
  <StateContext.Provider value={useReducer(reducer, stateContextInitialState)}>
    {props.children}
  </StateContext.Provider>
);

export {
  StateProvider,
  StateContext,
  useStateContext,
  stateContextInitialState
};

export default StateProvider;