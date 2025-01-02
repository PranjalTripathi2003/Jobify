import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import links from "../pages/utils/links.";
import { NavLink } from "react-router-dom";


const SmallSidebar = () => {
  const{showSidebar, toggleSidebar} = useDashboardContext();
  const data = useDashboardContext();
  

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes></FaTimes>
          </button>
          <header>
            <Logo></Logo>
          </header>
         
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
