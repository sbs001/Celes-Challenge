import React, { FC, ReactNode, useEffect, useRef } from "react";
import { X } from "@phosphor-icons/react";
import useOutsideClickDetector from "../../hooks/use-outside-click-detector";
import styles from "./modal.module.sass";

interface ModalProps {
  children: ReactNode;
  closeFunction: () => void;
  className?: string;
}

const Modal: FC<ModalProps> = ({ children, closeFunction, className }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClickDetector(modalRef, closeFunction);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeFunction();
    }
    document.addEventListener("keydown", handleKeyPress);
    return () => { document.removeEventListener("keydown", handleKeyPress); };
  }, [closeFunction]);

  return (
    <div className={styles.wrapper }data-testid="modal-bg-component">
      <div
        ref={modalRef}
        className={`${styles.modal} ${className}`}
        data-testid="modal-component"
      >
        <X
          className={styles.close}
          onClick={closeFunction}
          data-testid="modal-close-icon"
          size={20}
        />

        {children}
      </div>
    </div>
  );
}

export default Modal;
