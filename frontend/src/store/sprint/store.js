import React, { createContext, useContext, useReducer } from "react";

import actions from "./constants";

const defaultState = {
  tasks: [],
  sprints: [],
  loadSprintsStatus: "idle",
  selectedIssue: {
    id: "",
    sprint_id: "",
    name: "",
    status: "",
    title: "",
    description: "",
    attachments: [],
    comments: [],
    assignee: {
      id: "",
      first_name: "",
      last_name: "",
      image: null,
      color: "",
    },
    reporter: {
      id: "",
      first_name: "",
      last_name: "",
      image: null,
      color: "",
    },
    development: "",
    labels: [],
    original_estimate: 0,
    time_tracking: "",
    priority: "",
    components: [],
    fix_versions: [],
    epic_link: "",
    epic_color: "",
    completed_sprints: [],
    watchers: [],
  },
};

const reducer = (state = defaultState, action = {}) => {
  const { type } = action;
  switch (type) {
    case actions.SET_VAL:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
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

export const SprintStore = {
  State,
  Dispatch,
  Provider,
  useSprint: () => [useContext(State), useContext(Dispatch)],
};
