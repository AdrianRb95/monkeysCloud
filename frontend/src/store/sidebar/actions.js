import { SidebarStore } from "./store";
import actions from "./constants";

export default function useActions() {
  const [state, dispatch] = SidebarStore.useSidebarStore();

  function toggleSidebar(){
    dispatch({
      type: actions.TOGGLE_SIDEBAR
    })
  }
  
  return {
    state,
    dispatch,
    toggleSidebar
  };
}