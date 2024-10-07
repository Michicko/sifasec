/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Alert.module.css";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

export default function Alert({ showAlert, message, status, resetFormStatus }) {
  const alertRef = useRef(null);
  const [isModalOpened, setIsModalOpened] = useState(false);

  let timeout = useRef(null);

  const closeModal = useCallback(() => {
    alertRef.current.close();
    setIsModalOpened(false);
    resetFormStatus();
    clearTimeout(timeout.current);
  }, [resetFormStatus]);

  const showModal = useCallback(() => {
    alertRef.current.showModal();
    setIsModalOpened(true);
  }, []);

  useEffect(() => {
    if (showAlert) {
      if (isModalOpened) return;
      showModal();
    }
  }, [isModalOpened, showAlert, showModal]);

  useEffect(() => {
    if (showAlert) {
      timeout.current = setTimeout(() => {
        closeModal();
      }, 4000);

      return () => clearTimeout(timeout.current);
    }
  }, [closeModal, showAlert]);

  return (
    <dialog id={styles["alert-dialog"]} ref={alertRef}>
      <div className={`${styles["alert-box"]} ${styles[status]}`}>
        <p>{message || "Message sent. We'll get back to you shortly."} </p>
        <button className={styles["close-btn"]} onClick={closeModal}>
          <Icon path={mdiClose} className="icon" />
        </button>
      </div>
    </dialog>
  );
}
