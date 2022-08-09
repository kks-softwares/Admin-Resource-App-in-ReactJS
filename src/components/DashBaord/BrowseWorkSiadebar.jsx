import React from "react";
import "./DashBoard.css";
import img1 from "../../assets/Dashboard/Iconly-Light-outline-Bookmark.svg";
import img2 from "../../assets/Dashboard/Iconly-Light-outline-Buy.svg";
import img3 from "../../assets/Dashboard/Iconly-Light-outline-Chart.svg";
import img7 from "../../assets/Dashboard/Iconly-Light-outline-Paper.svg";
import img12 from "../../assets/walletimage/Iconly-Light-Location.svg";
import img13 from "../../assets/walletimage/Iconly-Light-Wallet.svg";
import img17 from "../../assets/walletimage/Group 12656.svg";
import img8 from "../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-3 User.svg";
import img89 from "../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Profile.svg";
import img9 from "../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Paper Plus.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
export default function BrowseWorkSiadebar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [anchorElp, setAnchorElp] = React.useState(null);

  const handleClickp = (event) => {
    setAnchorElp(event.currentTarget);
  };

  const handleClosep = () => {
    setAnchorElp(null);
  };

  const openp = Boolean(anchorElp);
  const idp = openp ? "simple-popover" : undefined;

  const [anchorElx, setAnchorElx] = React.useState(null);

  const handleClickx = (event) => {
    setAnchorElx(event.currentTarget);
  };

  const handleClosex = () => {
    setAnchorElx(null);
  };

  const openx = Boolean(anchorElx);
  const idx = openx ? "simple-popover" : undefined;
  const navigate = useNavigate();
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

      <div onClick={handleClickx} className="firstsidebarmenu">
        <img src={img17} alt="" />
        Category
      </div>
      
      <div onClick={handleClickp} className="firstsidebarmenu">
        <img src={img13} alt="" />
        Pricing & Budget
      </div>
      <div onClick={handleClick} className="firstsidebarmenu">
        <img src={img12} alt="" />
        Location
      </div>
      <Popover
        id={idx}
        open={openx}
        anchorEl={anchorElx}
        onClose={handleClosex}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography
          sx={{ p: 1, pr: 2, pb: 1, fontSize: "1.1vw", cursor: "pointer" }}
          onClick={() => {
            navigate("/dashbaord/addcategory");
            handleClosex();
          }}
        >
          <AddIcon
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          Add Category
        </Typography>
        <Typography
          sx={{ p: 1, pr: 2, pb: 1, fontSize: "1.1vw", cursor: "pointer" }}
          onClick={() => {
            navigate("/dashbaord/addsubcategory");
            handleClosex();
          }}
        >
          <AddIcon
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          Add Sub Categories
        </Typography>
        <Typography
          sx={{ p: 1, pr: 2, pb: 1, fontSize: "1.1vw", cursor: "pointer" }}
          onClick={() => {
            navigate("/dashbaord/addskill1");
            handleClosex();
          }}
        >
          <AddIcon
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          Add Skill
        </Typography>
        <Typography
          onClick={() => {
            navigate("/dashbaord/category");
            handleClosex();
          }}
          sx={{ p: 1, pr: 2, pb: 1.5, fontSize: "1.1vw", cursor: "pointer" }}
        >
          <img
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          List of Category
        </Typography>
      </Popover>
  
  
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
       
        
        <Typography
          sx={{ p: 1, pr: 2, pb: 1, fontSize: "1.1vw", cursor: "pointer" }}
          onClick={() => {
            navigate("/dashbaord/addlocation");
            handleClose();
          }}
        >
          <AddIcon
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          Add Location
        </Typography>
        <Typography
          onClick={() => {
            navigate("/dashbaord/location");
            handleClose();
          }}
          sx={{ p: 1, pr: 2, pb: 1.5, fontSize: "1.1vw", cursor: "pointer" }}
        >
          <img
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          List of Location
        </Typography>
      </Popover>
  
  
      <Popover
        id={idp}
        open={openp}
        anchorEl={anchorElp}
        onClose={handleClosep}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography
          sx={{ p: 1, pr: 2, pb: 1, fontSize: "1.1vw", cursor: "pointer" }}
          onClick={() => {
            navigate("/dashbaord/addpricing");
            handleClosep();
          }}
        >
          <AddIcon
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          Add Pricing & Budget
        </Typography>
       
        <Typography
          onClick={() => {
            navigate("/dashbaord/pricing");
            handleClosep();
          }}
          sx={{ p: 1, pr: 2, pb: 1.5, fontSize: "1.1vw", cursor: "pointer" }}
        >
          <img
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          List of Pricing & Budget
        </Typography>
      </Popover>
  
  
    </div>
  );
}
