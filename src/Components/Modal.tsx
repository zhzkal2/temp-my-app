import React, { useCallback } from "react";
import { ModalProps } from "../types/Modal";
import { X } from "lucide-react";

// TODO : modal 動的な動き
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <section className="modal-section">
      <div className="modal-article">
        <button className="close-btn" onClick={handleClose}>
          <X className="" />
        </button>
        {children}
      </div>
    </section>
  );
};

export default Modal;
