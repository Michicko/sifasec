import { createContext } from "react";

const ModalContext = createContext({
  isOpen: false,
  updateIsOpen: () => {},
});

export default ModalContext;
