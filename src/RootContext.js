import React, { createContext, useReducer, useState } from "react";
import actions from "./reducer/action/action";
import { INTIAL_STATE, reducer } from "./reducer/reducer/reducer";
export const RootContext = createContext({});

export const Rootprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INTIAL_STATE);
  const action = actions(dispatch);
  return (
    <RootContext.Provider value={{ state, action }}>
      {children}
    </RootContext.Provider>
  );
};
