import { OrganizationStore } from "./store";
import actions from "./constants";

export default function useActions() {
  const [state, dispatch] = OrganizationStore.useOrganizationStore();

  async function loadOrganizations() {
    try {
      dispatch({
        type: actions.SET_ORGANIZATION_VAL,
        payload: {
          key: "loadOrganizationsStatus",
          value: "loading",
        },
      });

      dispatch({
        type: actions.SET_ORGANIZATION_VAL,
        payload: {
          key: "organizations",
          value: [],
        },
      });

      // Change to API call

      dispatch({
        type: actions.SET_ORGANIZATION_VAL,
        payload: {
          key: "loadOrganizationsStatus",
          value: "success",
        },
      });

      dispatch({
        type: actions.SET_ORGANIZATION_VAL,
        payload: {
          key: "organizations",
          value: [
            { name: "All Organizations", id: -1 },
            { name: "Organization One", id: 1 },
            { name: "Organization Two", id: 2 },
            { name: "Organization Three", id: 3 },
          ],
        },
      });
    } catch (err) {
      console.error(err, "loadOrganizations");
      dispatch({
        type: actions.SET_ORGANIZATION_VAL,
        payload: {
          key: "loadOrganizationsStatus",
          value: "error",
        },
      });

      dispatch({
        type: actions.SET_ORGANIZATION_VAL,
        payload: {
          key: "organizations",
          value: [],
        },
      });
    }
  }

  return {
    state,
    dispatch,
    loadOrganizations,
  };
}
