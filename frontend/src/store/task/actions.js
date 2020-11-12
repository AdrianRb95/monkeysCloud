import { TaskStore } from "./store";

import actions from "./constants";

export default function useActions() {
  const [state, dispatch] = TaskStore.useTask();

  function setVal(key, value) {
    dispatch({
      type: actions.SET_VAL,
      payload: {
        key,
        value,
      },
    });
  }

  async function loadTasks() {
    try {
      dispatch({
        type: actions.SET_VAL,
        payload: {
          key: "tasks",
          value: [],
        },
      });
      dispatch({
        type: actions.SET_VAL,
        payload: {
          key: "loadTasksStatus",
          value: "loading",
        },
      });

      //   API CALL
      setTimeout(() => {
        dispatch({
          type: actions.SET_VAL,
          payload: {
            key: "tasks",
            value: [
              { id: 1, name: "Tag", date: "MM/DD/YY", state: "todo" },
              { id: 2, name: "Tag", date: "MM/DD/YY", state: "working" },
              { id: 3, name: "Tag", date: "MM/DD/YY", state: "done" },
            ],
          },
        });
        dispatch({
          type: actions.SET_VAL,
          payload: {
            key: "loadTasksStatus",
            value: "success",
          },
        });
      }, 500);
    } catch (err) {
      // Showing error and rolling back
      console.error(err, "loadTasks");
      dispatch({
        type: actions.SET_VAL,
        payload: {
          key: "tasks",
          value: [],
        },
      });
      dispatch({
        type: actions.SET_VAL,
        payload: {
          key: "loadTasksStatus",
          value: "error",
        },
      });
    }
  }

  return {
    state,
    dispatch,
    loadTasks,
    setVal,
  };
}
