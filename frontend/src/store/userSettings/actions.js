import { UserSettingsStore } from "./store";

import actions from "./constants";

export default function useActions() {
  const [state, dispatch] = UserSettingsStore.useUserSettings();
  function toggleUserSettings(flag) {
    dispatch({
      type: actions.Toggle_User_Settings,
      payload: {
        newValue: flag !== undefined ? flag : !state.isUserSettingsVisible,
      },
    });
  }

  return {
    state,
    dispatch,
    toggleUserSettings,
  };
}
