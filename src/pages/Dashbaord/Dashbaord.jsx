import React, { useEffect, useLayoutEffect } from "react";
import "./Dashboard.css";
import DashbaordNav from "../../components/DashBaord/DashbaordNav";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import Topbar from "../../components/Topbar/Topbar";
import BrowseWorkSiadebar from "../../components/DashBaord/BrowseWorkSiadebar";

export default function Dashbaord() {
  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  }, []);
  const { user } = useSelector((state) => state.user);
  return (
    <div style={{ height: "100vh" }}>
      <Topbar />
      <DashbaordNav user={user} />
      <div>
        <div style={{ display: "flex", height: "100%", overflow: "scroll" }}>
          <BrowseWorkSiadebar />
          <div
            style={{
              background: "#FBFBFB",
              width: "84vw",
              height: "100%",
              overflow: "scroll",
            }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
