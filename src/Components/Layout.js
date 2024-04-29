import React from "react";
import { Outlet } from "react-router-dom";
// import Footer from "./Footer";
import './styles.css'
import MainContent from "./MainRouter";
import Navbar from "./Navbar";



const Layout = () => {
  return (
    <>
    <div id='main-container'>
      {/* <Navbar/> */}
      {/* <Outlet /> */}
      <MainContent/>
    
     </div>
     </>
  );
};

export default Layout; 