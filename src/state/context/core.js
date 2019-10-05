import React from 'react';
import { createContext, useContext, useReducer } from 'react';
import combineReducers from '../lib/combine-reducers';
import applyMiddleware from '../lib/apply-middleware';
import localStorageMiddleware from '../middleware/local-storage';
import fetchFromLocalStorage from '../lib/fetch-local-storage';

import mainReducer from '../reducers/core.reducer';

const StateContext = createContext();

const useStateContext = () => useContext(StateContext);

const initialState = fetchFromLocalStorage('settings', { defaultValue: {} });

const combinedReducers = combineReducers([mainReducer]);

const reducer = applyMiddleware(combinedReducers, [
  localStorageMiddleware('settings')
]);

const StateProvider = (props) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {props.children}
  </StateContext.Provider>
);

export {
  StateProvider,
  StateContext,
  useStateContext
};

export default StateProvider;