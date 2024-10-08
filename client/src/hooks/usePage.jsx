import { useCallback, useContext } from "react";
import FallbackContext from "../contexts/FallbackContext";

export default function usePage() {
  const { updateFallback } = useContext(FallbackContext);

  const onLoad = useCallback(
    (component) => {
      if (component === undefined) component = null;
      updateFallback(component);
    },
    [updateFallback]
  );

  return { onLoad };
}
