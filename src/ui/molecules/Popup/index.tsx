import * as React from "react";
import ReactDOM from "react-dom";
import isClickedOutside from "click-outside-hook";

import { PopupBackground, PopupWindow, CloseButton } from "./styles";

const Portal: React.FC = ({ children }): any => {
  if (typeof document !== "undefined") {
    const el = document.getElementById("___gatsby");
    if (typeof el !== "object") {
      return ReactDOM.createPortal(children, el);
    }
  }

  return null;
};

type PopupProps = {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  closeInside?: boolean;
};

export const Popup: React.FC<PopupProps> = ({ children, toggle, isOpen, closeInside }) => {
  const ref: any = isClickedOutside(() => toggle(true));

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "inherit" : "hidden";
  }, [isOpen]);

  return (
    <Portal>
      <PopupBackground aria-hidden={isOpen}>
        <PopupWindow ref={ref}>
          <CloseButton isInside={closeInside} onClick={() => toggle(false)} />
          {children}
        </PopupWindow>
      </PopupBackground>
    </Portal>
  );
};
