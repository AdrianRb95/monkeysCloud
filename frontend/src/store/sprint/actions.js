import { SprintStore } from "./store";

import actions from "./constants";
import faker from "faker";

export default function useActions() {
  const [state, dispatch] = SprintStore.useSprint();

  const getStatus = () => {
    switch (Math.floor(Math.random() * (4 - 1)) + 1) {
      case 1:
        return "todo";
      case 2:
        return "working";
      case 3:
        return "done";
      default:
        break;
    }
  };

  const getPriority = () => {
    switch (Math.floor(Math.random() * (4 - 1)) + 1) {
      case 1:
        return "low";
      case 2:
        return "medium";
      case 3:
        return "hight";
      default:
        break;
    }
  };

  async function loadSprints() {
    try {
      dispatch({
        type: actions.SET_VAL,
        payload: {
          key: "sprints",
          value: [],
        },
      });
      dispatch({
        type: actions.SET_VAL,
        payload: {
          key: "loadSprintsStatus",
          value: "loading",
        },
      });

      //   API CALL
      setTimeout(() => {
        let sprint_id = faker.random.uuid();
        dispatch({
          type: actions.SET_VAL,
          payload: {
            key: "sprints",
            value: Array.from(
              { length: Math.round(Math.random() * (99 - 0) + 0) },
              (v, i) => ({
                id: sprint_id,
                name: `MC-${faker.random.uuid()}`,
                start_date: faker.date.past().toLocaleString("en-US"),
                end_date: faker.date.future().toLocaleString("en-US"),
                issues: Array.from(
                  { length: Math.round(Math.random() * (49 - 0) + 0) },
                  (a, j) => ({
                    id: faker.random.uuid(),
                    sprint_id,
                    name: `MC-${j}`,
                    status: getStatus(),
                    title: faker.random.words(
                      Math.round(Math.random() * (10 - 0) + 0)
                    ),
                    description: faker.lorem.paragraph(
                      Math.round(Math.random() * (10 - 0) + 0)
                    ),
                    attachments: [],
                    comments: [],
                    assignee: {
                      id: faker.random.uuid(),
                      first_name: faker.name.firstName(),
                      last_name: faker.name.lastName(),
                      image: Math.round(Math.random())
                        ? faker.image.avatar()
                        : null,
                      color: faker.internet.color(),
                    },
                    reporter: {
                      id: faker.random.uuid(),
                      first_name: faker.name.firstName(),
                      last_name: faker.name.lastName(),
                      image: Math.round(Math.random())
                        ? faker.image.avatar()
                        : null,
                      color: null,
                    },
                    development: faker.random.words(
                      Math.round(Math.random() * (10 - 0) + 0)
                    ),
                    labels: [],
                    original_estimate: Math.round(Math.random() * (10 - 0) + 0),
                    time_tracking: `${Math.round(
                      Math.random() * (10 - 0) + 0
                    )}w logged`,
                    priority: getPriority(),
                    components: [],
                    fix_versions: [],
                    epic_link: faker.git.commitMessage(),
                    epic_color: faker.internet.color(),
                    completed_sprints: [],
                    watchers: [],
                  })
                ),
              })
            ),
          },
        });
        dispatch({
          type: actions.SET_VAL,
          payload: {
            key: "loadSprintsStatus",
            value: "success",
          },
        });
      }, 500);
    } catch (err) {
      // Showing error and rolling back
      console.error(err, "loadSprints");
      dispatch({
        type: actions.SET_VAL,
        payload: {
          key: "sprints",
          value: [],
        },
      });
      dispatch({
        type: actions.SET_VAL,
        payload: {
          key: "loadSprintsStatus",
          value: "error",
        },
      });
    }
  }

  function setVal({ key, value }) {
    dispatch({
      type: actions.SET_VAL,
      payload: {
        key,
        value,
      },
    });
  }

  return {
    state,
    dispatch,
    loadSprints,
    setVal,
  };
}
