import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import Wrapper from "../assets/wrappers/Dashboard";

//creating a context and calling context api
const DashboardContext = createContext();
const DashboardLayout = () => {
  // temp
  const user = { name: "john" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleDarkTheme = () => {
    console.log("toggle dark theme");
  };
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log("sidebar clicked");
  };
  const logoutUser = async () => {
    console.log("logout user");
  };
  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar></SmallSidebar>
          <BigSidebar></BigSidebar>
          <div>
            <Navbar></Navbar>
            <div className="dashboard-page"></div>
          </div>
        </main>
        <Outlet></Outlet>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

//custom hook
export const useDashboardContext = () => {
  return useContext(DashboardContext);
};
export default DashboardLayout;
