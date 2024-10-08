/* eslint-disable react/prop-types */
import { useCallback, useState } from "react";
import ModalContext from "../contexts/ModalContext";

export default function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const updateIsOpen = useCallback((isOpen) => {
    setIsOpen(() => isOpen);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, updateIsOpen }}>
      {isOpen && <div>Fake Modal</div>}
      {children}
    </ModalContext.Provider>
  );
}
