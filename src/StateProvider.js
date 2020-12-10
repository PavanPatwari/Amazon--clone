//We need this to track basket
import React , {createContext, useContext, useReducer } from "react";

// This is the data layer
export const StateContext = createContext();

// Build a Provider in which whole app is wrapped

export const StateProvider = ({reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)} >
  {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
