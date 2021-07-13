import React from "react";
import "./SidebarOption.css";


function SidebarOption({ active, text, Icon , props,route }) {
  return (
    <a onClick= {()=> props.history.push(route) } className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </a>
  );
}

export default SidebarOption;
