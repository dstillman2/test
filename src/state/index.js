import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

export const StateProvider = props => (
  <StateContext.Provider value={useReducer(props.reducer, props.initialState)}>
    {props.children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

export function reducer(state, action) {
  switch (action.type) {
    case 'increment-test':
      return { ...state, test: state.test + action.value };
    default:
      return state;
  }
}