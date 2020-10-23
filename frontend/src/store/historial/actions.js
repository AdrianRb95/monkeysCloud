import { HistorialStore } from "./store";
import actions from "./constants";

export default function useActions() {
  const [state, dispatch] = HistorialStore.useHistorial();

  function toggleHistorial(){
    dispatch({
      type: actions.TOGGLE_Historial_BAR
    })
  }

  return {
    state,
    dispatch,
    toggleHistorial
  };
}