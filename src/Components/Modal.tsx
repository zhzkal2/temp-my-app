import React, { useCallback } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

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
