import { useEffect, useState } from "react";

export function useIsOut({ ref, callback = null }) {
  const [isInside, setIsInside] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref) {
        if (ref.current) {
          let _rawContain = ref.current.contains(event.target);
          if (callback) {
            callback(_rawContain);
          }
          setIsInside(_rawContain);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return isInside;
}
