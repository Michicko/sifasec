import { createContext } from "react";

const FallbackContext = createContext({
  updateFallback: () => {},
});

export default FallbackContext;
