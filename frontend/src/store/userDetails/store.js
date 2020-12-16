import React, { createContext, useContext, useReducer } from 'react';

import actions from './constants';

const defaultState = {
  user: null,
  isLoading: true,
};

const reducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case actions.SET_USER:
      return {
        ...state,
        user: payload,
        isLoading: false,
      };
    default:
      return state;
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

export const UserDetailsStore = {
  State,
  Dispatch,
  Provider,
  useUserDetails: () => [useContext(State), useContext(Dispatch)],
};
