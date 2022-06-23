import React from "react";
import "./DashBoard.css";
import img1 from "../../assets/Dashboard/Iconly-Light-outline-Bookmark.svg";
import img2 from "../../assets/Dashboard/Iconly-Light-outline-Buy.svg";
import img3 from "../../assets/Dashboard/Iconly-Light-outline-Chart.svg";
import img5 from "../../assets/Dashboard/Iconly-Light-outline-Paper Plus.svg";
import img7 from "../../assets/Dashboard/Iconly-Light-outline-Paper.svg";

import { Link } from "react-router-dom";

export default function BrowseWorkSiadebar() {
 


  return (
    <div style={{ position: "sticky" }} className="sidebardashbord-container">
      <Link to="/dashbaord/appliedjob">
        <div className="firstsidebarmenu">
          <img src={img1} alt="" />
          Users
        </div>
      </Link>
      <Link to="/dashbaord/appliedjob">
        <div className="firstsidebarmenu">
          <img src={img1} alt="" />
          Jobs
        </div>
      </Link>

      <Link to="/dashbaord/appliedjob">
        <div  className="firstsidebarmenu">
          <img src={img7} alt="" />
          Employee
        </div>
      </Link>
      <Link to="/dashbaord/appliedjob">
        <div  className="firstsidebarmenu">
          <img src={img7} alt="" />
          Blog
        </div>
      </Link>

      <Link to="/dashbaord/shop">
        <div className="firstsidebarmenu">
          <img src={img2} alt="" />
          Shop & Redeem
        </div>
      </Link>

      <Link to="/dashbaord/filemanager">
        <div className="firstsidebarmenu">
          <img src={img5} alt="" />
          Skill Center
        </div>
      </Link>

      <Link to="/dashbaord/faq">
        <div className="firstsidebarmenu">
          <img src={img3} alt="" />
          Membership
        </div>
      </Link>
    </div>
  );
}
