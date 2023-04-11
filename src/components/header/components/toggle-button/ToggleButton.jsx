import React from "react";

function ToggleButton() {
  //switch between x (cross) and 3 bar icon in smaller screen
  const handleToggleCollapseIcon = () => {
    document.querySelector(".navbar-toggler").classList.toggle("opening");
  };
  return (
    <button
      className="navbar-toggler d-lg-none"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={handleToggleCollapseIcon}
    >
      <i className="fa fa-bars"></i>
      <i className="fa fa-times"></i>
    </button>
  );
}

export default ToggleButton;
