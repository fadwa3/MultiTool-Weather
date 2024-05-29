import React from "react";
import "./Menu.css";

function Menu({ setSelectedFeature }) {
  return (
    <div className="menu">
      <ul>
        <li onClick={() => setSelectedFeature("weather")}>Weather</li>
        <li onClick={() => setSelectedFeature("calculator")}>Calculator</li>
        <li>More</li>
      </ul>
    </div>
  );
}

export default Menu;
