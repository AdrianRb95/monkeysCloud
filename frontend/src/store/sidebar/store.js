import React, { createContext, useContext, useReducer } from "react";

import actions from "./constants";

const defaultState = {
  isSidebarExpanded: false,
};

const reducer = (state = defaultState, action = {}) => {
  const { type } = action;
  switch (type) {
    case actions.TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarExpanded: !state.isSidebarExpanded,
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

export const SidebarStore = {
  State,
  Dispatch,
  Provider,
  useSidebarStore: () => [useContext(State), useContext(Dispatch)],
};
