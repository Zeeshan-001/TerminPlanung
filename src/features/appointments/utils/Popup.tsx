import type { JSX, ReactNode } from "react";
import { createPortal } from "react-dom";

interface PopupProps {
  //   isOpen: boolean;
  title?: string;
  children?: ReactNode;
}

const Popup = ({ title, children }: PopupProps): JSX.Element | null => {
  const wrapper = document.getElementById("appointment-form-wrapper") as HTMLElement | null;

  if (!wrapper) {
    throw new Error("Form wrapper not Found");
  }

  //   if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay open" id="modalOverlay">
      <div className="modal">
        {title && <h2 className="modal-title"> {title} </h2>}
        {children}
      </div>
    </div>,
    wrapper,
  );
};

export default Popup;
