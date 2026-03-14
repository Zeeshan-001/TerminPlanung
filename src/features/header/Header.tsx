import type { JSX } from "react";
import { createPortal } from "react-dom";

const Header = (): JSX.Element => {
  return (
    <header>
      <div className="logo">
        Termin<span>planner</span>
      </div>
      <div className="header-actions">
        <button className="pill">Tag</button>
        <button className="pill">Woche</button>
        <button className="pill active">Monat</button>
      </div>
    </header>
  );
};

export default Header;
