import React from "react";
import "./DashBoard.css";
import img1 from "../../assets/Dashboard/Iconly-Light-outline-Bookmark.svg";
import img2 from "../../assets/Dashboard/Iconly-Light-outline-Buy.svg";
import img3 from "../../assets/Dashboard/Iconly-Light-outline-Chart.svg";
import img7 from "../../assets/Dashboard/Iconly-Light-outline-Paper.svg";
import img8 from "../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-3 User.svg";
import img89 from "../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Profile.svg";
import img9 from "../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Paper Plus.svg";
import { Link } from "react-router-dom";

export default function BrowseWorkSiadebar() {
  return (
    <div style={{ position: "sticky" }} className="sidebardashbord-container">
      <Link to="/dashbaord/users">
        <div className="firstsidebarmenu">
          <img src={img89} alt="" />
          Users
        </div>
      </Link>
      <Link to="/dashbaord/jobs">
        <div className="firstsidebarmenu">
          <img src={img1} alt="" />
          Jobs
        </div>
      </Link>

      <Link to="/dashbaord/employee">
        <div className="firstsidebarmenu">
          <img src={img8} alt="" />
          Employee
        </div>
      </Link>
      <Link to="/dashbaord/blogs">
        <div className="firstsidebarmenu">
          <img src={img7} alt="" />
          Blogs
        </div>
      </Link>

      <Link to="/dashbaord/shop">
        <div className="firstsidebarmenu">
          <img src={img2} alt="" />
          Shop & Redeem
        </div>
      </Link>

      <Link to="/dashbaord/skillCenter/List of Skills">
        <div className="firstsidebarmenu">
          <img src={img3} alt="" />
          Skill Center
        </div>
      </Link>

      <Link to="/dashbaord/membership">
        <div className="firstsidebarmenu">
          <img src={img9} alt="" />
          Membership
        </div>
      </Link>

      <Link to="/dashbaord/category">
        <div className="firstsidebarmenu">
          <img src={img9} alt="" />
          Category
        </div>
      </Link>

      


   </div>
  );
}
