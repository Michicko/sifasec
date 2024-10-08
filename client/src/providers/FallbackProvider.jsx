/* eslint-disable react/prop-types */
import { Suspense, useCallback, useMemo, useState } from "react";
import FallbackContext from "../contexts/FallbackContext";

export default function FallbackProvider({ children }) {
  const [fallback, setFallback] = useState(null);

  const updateFallback = useCallback((fallback) => {
    setFallback(() => fallback);
  }, []);

  const renderChildren = useMemo(() => {
    return children;
  }, [children]);

  return (
    <FallbackContext.Provider value={{ updateFallback }}>
      <Suspense fallback={fallback}>{renderChildren}</Suspense>
    </FallbackContext.Provider>
  );
}
