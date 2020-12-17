import React, { createContext, useContext, useReducer } from "react";

import actions from "./constants";

const defaultState = {
  isSettingsVisible: false,
};

const reducer = (state = defaultState, action = {}) => {
  const { type } = action;
  switch (type) {
    case actions.Toggle_Settings:
      return {
        ...state,
        isSettingsVisible: action.payload.newValue,
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

export const SettingsStore = {
  State,
  Dispatch,
  Provider,
  useSettings: () => [useContext(State), useContext(Dispatch)],
};
