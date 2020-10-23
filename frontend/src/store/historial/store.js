import React, { createContext, useContext, useReducer } from "react";

import actions from "./constants";

const defaultState = {
  isHistorialVisible: false
};

const reducer = (state = defaultState, action = {}) => {
  const { type } = action;
  switch (type) {
    case actions.TOGGLE_Historial_BAR:
      return {
        ...state,
        isHistorialVisible: !state.isHistorialVisible,
      };
    default: {
      return state;
    }
  }
};

const State = createContext(null);
const Dispatch = createContext(null);

export function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  );
}

export const HistorialStore = {
  State,
  Dispatch,
  Provider,
  useHistorial: () => [useContext(State), useContext(Dispatch)],
};
