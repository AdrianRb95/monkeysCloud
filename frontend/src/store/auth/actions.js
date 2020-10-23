import { AuthStore } from "./store";
// import actions from "./constants";

export default function useActions() {
  const [state, dispatch] = AuthStore.useAuthStore();

  
  return {
    state,
    dispatch,
  };
}