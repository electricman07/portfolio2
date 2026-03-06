import { useState } from "react";

const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav-wrapper" onClick={() => setIsOpen(!isOpen)}>
      <div className={isOpen ? "menu-icon active" : "menu-icon"}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
};

export default MenuToggle;
