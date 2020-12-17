import { SettingsStore } from "./store";
import actions from "./constants";

export default function useActions() {
  const [state, dispatch] = SettingsStore.useSettings();
  function toggleSettings(flag) {
    dispatch({
      type: actions.Toggle_Settings,
      payload: {
        newValue: flag !== undefined ? flag : !state.isSettingsVisible,
      },
    });
  }

  return {
    state,
    dispatch,
    toggleSettings,
  };
}
