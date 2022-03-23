import React from "react";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import "./MainLayout.css";

export default function MainLayout(props) {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-between wrapper">
        <LeftSidebar />
        <main>{props.children}</main>
        <RightSidebar />
      </div>
    </>
  );
}
