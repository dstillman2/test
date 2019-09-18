import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

export const StateProvider = props => (
  <StateContext.Provider value={useReducer(props.reducer, props.initialState)}>
    {props.children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

export const MainContext = createContext();

export const MainProvider = ({ reducer, initialState, children }) => (
  <MainContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </MainContext.Provider>
);

export const useMainValue = () => useContext(MainContext);