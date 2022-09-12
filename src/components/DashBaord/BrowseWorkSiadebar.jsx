import React, { useEffect, useState } from "react";
import "./DashBoard.css";
import img from '../../assets/walletimage/Activity.svg'
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
import { useNavigate, useLocation } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import img23 from "../../assets/Jobs/Iconly-Light-Paper Upload.svg";
import img18 from '../../assets/walletimage/Iconly-Light-outline-Ticket.svg'
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
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const open1 = Boolean(anchorEl1);
  const id1 = open1 ? "simple-popover" : undefined;

  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const open2 = Boolean(anchorEl2);
  const id2 = open2 ? "simple-popover" : undefined;

  const [anchorEl3, setAnchorEl3] = React.useState(null);

  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const open3 = Boolean(anchorEl3);
  const id3 = open3 ? "simple-popover" : undefined;

  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClose4 = () => {
    setAnchorEl4(null);
  };
  const open4 = Boolean(anchorEl4);
  const id4 = open4 ? "simple-popover" : undefined;

  const [anchorEl5, setAnchorEl5] = React.useState(null);
  const handleClick5 = (event) => {
    setAnchorEl5(event.currentTarget);
  };
  const handleClose5 = () => {
    setAnchorEl5(null);
  };
  const open5 = Boolean(anchorEl5);
  const id5 = open5 ? "simple-popover" : undefined;

  const [anchorEl6, setAnchorEl6] = React.useState(null);
  const handleClick6 = (event) => {
    setAnchorEl6(event.currentTarget);
  };
  const handleClose6 = () => {
    setAnchorEl6(null);
  };
  const open6 = Boolean(anchorEl6);
  const id6 = open6 ? "simple-popover" : undefined;

  const [anchorEl7, setAnchorEl7] = React.useState(null);
  const handleClick7 = (event) => {
    setAnchorEl7(event.currentTarget);
  };
  const handleClose7 = () => {
    setAnchorEl7(null);
  };
  const open7 = Boolean(anchorEl7);
  const id7 = open7 ? "simple-popover" : undefined;

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

  const location = useLocation();

  const [colorsidebar, setColorsidebar] = useState(1);

  useEffect(() => {
    if (location.pathname === "/dashbaord") {
      setColorsidebar(1);
    }
    if (location.pathname === "/dashbaord/users") {
      setColorsidebar(2);
    }
    if (location.pathname === "/dashbaord/adduser") {
      setColorsidebar(2);
    }
    if (location.pathname === "/dashbaord/addJob") {
      setColorsidebar(3);
    }
    if (location.pathname === "/dashbaord/jobs") {
      setColorsidebar(3);
    }
    if (location.pathname === "/dashbaord/addemployee") {
      setColorsidebar(4);
    }
    if (location.pathname === "/dashbaord/employee") {
      setColorsidebar(4);
    }
    if (location.pathname === "/dashbaord/blogs") {
      setColorsidebar(5);
    }
    if (location.pathname === "/dashbaord/addblog") {
      setColorsidebar(5);
    }
    if (location.pathname === "/dashbaord/redeem") {
      setColorsidebar(6);
    }
    if (location.pathname === "/dashbaord/addRedeem") {
      setColorsidebar(6);
    }
   
    if (location.pathname === "/dashbaord/skillCenter/List%20of%20Skills") {
      setColorsidebar(7);
    }
    if (location.pathname === "/dashbaord/AddSkill") {
      setColorsidebar(7);
    }
    if (location.pathname === "/dashbaord/skillCenter/membership") {
      setColorsidebar(8);
    }
    if (location.pathname === "/dashbaord/category") {
      setColorsidebar(9);
    }
    if (location.pathname === "/dashbaord/catalogue") {
      setColorsidebar(10);
    }
    if (location.pathname === "/dashbaord/addCatalogue") {
      setColorsidebar(10);
    }
    if (location.pathname === "/dashbaord/location") {
      setColorsidebar(12);
    }
    if (location.pathname === "/dashbaord/addlocation") {
      setColorsidebar(12);
    }
    if (location.pathname === "/dashbaord/pricing") {
      setColorsidebar(11);
    }
    if (location.pathname === "/dashbaord/addpricing") {
      setColorsidebar(11);
    }
  }, [location]);

  return (
    <div style={{ position: "sticky" }} className="sidebardashbord-container">
      <Link to="/dashbaord">
        <div
          className={
            colorsidebar === 1 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
        >
          <img style={{width:"1.8vw"}} src={img} alt="" />
          Dashboard
        </div>
      </Link>

      <div
        onClick={handleClick1}
        className={
          colorsidebar === 2 ? "firstsidebarmenu1" : "firstsidebarmenu"
        }
      >
        <img src={img89} alt="" />
        Users
      </div>

      
        <div
           onClick={handleClick2}
          className={
            colorsidebar === 3 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
        >
          <img src={img1} alt="" />
          Jobs
        </div>
     

      
        <div
        onClick={handleClick3}
          className={
            colorsidebar === 4 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
        >
          <img src={img8} alt="" />
          Employee
        </div>
     
      
        <div
          onClick={handleClick4}
          className={
            colorsidebar === 5 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
        >
          <img src={img7} alt="" />
          Blogs
        </div>
   

      
        <div
          onClick={handleClick5}
          className={
            colorsidebar === 6 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
        >
          <img src={img2} alt="" />
          Shop & Redeem
        </div>
     

      
        <div
            onClick={handleClick6}
          className={
            colorsidebar === 7 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
        >
          <img src={img3} alt="" />
          Skill Center
        </div>
    

   
        <div
          className={
            colorsidebar === 8 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
        >
          <img src={img9} alt="" />
          Membership
        </div>
    

      <div
        onClick={handleClickx}
        className={
          colorsidebar === 9 ? "firstsidebarmenu1" : "firstsidebarmenu"
        }
      >
        <img src={img17} alt="" />
        Category
      </div>
      <div
        onClick={handleClick7}
        className={
          colorsidebar === 10 ? "firstsidebarmenu1" : "firstsidebarmenu"
        }
      >
        <img src={img18} alt="" />
        catalogue
      </div>

      <div
        onClick={handleClickp}
        className={
          colorsidebar === 11 ? "firstsidebarmenu1" : "firstsidebarmenu"
        }
      >
        <img src={img13} alt="" />
        Pricing & Budget
      </div>
      <div
        onClick={handleClick}
        className={
          colorsidebar === 12 ? "firstsidebarmenu1" : "firstsidebarmenu"
        }
      >
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

      <Popover
        id={id1}
        open={open1}
        anchorEl={anchorEl1}
        onClose={handleClose1}
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
            navigate("/dashbaord/adduser");
            handleClose1();
          }}
        >
          <AddIcon
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          Add User
        </Typography>

        <Typography
          onClick={() => {
            navigate("/dashbaord/users");
            handleClose1();
          }}
          sx={{ p: 1, pr: 2, pb: 1.5, fontSize: "1.1vw", cursor: "pointer" }}
        >
          <img
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          List of Users
        </Typography>
      </Popover>
   
      <Popover
        id={id3}
        open={open3}
        anchorEl={anchorEl3}
        onClose={handleClose3}
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
            navigate("/dashbaord/addemployee");
            handleClose3();
          }}
        >
          <AddIcon
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          Add Employees
        </Typography>

        <Typography
          onClick={() => {
            navigate("/dashbaord/employee");
            handleClose3();
          }}
          sx={{ p: 1, pr: 2, pb: 1.5, fontSize: "1.1vw", cursor: "pointer" }}
        >
          <img
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          List of Employees
        </Typography>
      
        <Typography
          onClick={() => {
            navigate("/dashbaord/addwork");
            handleClose3();
          }}
          sx={{ p: 1, pr: 2, pb: 1.5, fontSize: "1.1vw", cursor: "pointer" }}
        >
          <img
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img23}
            alt=""
          />
          Assign a Work
        </Typography>
      
      </Popover>
   
      <Popover
        id={id2}
        open={open2}
        anchorEl={anchorEl2}
        onClose={handleClose2}
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
            navigate("/dashbaord/addJob");
            handleClose2();
          }}
        >
          <AddIcon
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          Add Work
        </Typography>

        <Typography
          onClick={() => {
            navigate("/dashbaord/jobs");
            handleClose2();
          }}
          sx={{ p: 1, pr: 2, pb: 1.5, fontSize: "1.1vw", cursor: "pointer" }}
        >
          <img
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img23}
            alt=""
          />
          List of Work
        </Typography>
      </Popover>
   
      <Popover
        id={id4}
        open={open4}
        anchorEl={anchorEl4}
        onClose={handleClose4}
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
            navigate("/dashbaord/addblog");
            handleClose4();
          }}
        >
          <AddIcon
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          Add Blog
        </Typography>

        <Typography
          onClick={() => {
            navigate("/dashbaord/blogs");
            handleClose4();
          }}
          sx={{ p: 1, pr: 2, pb: 1.5, fontSize: "1.1vw", cursor: "pointer" }}
        >
          <img
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img23}
            alt=""
          />
          List of Blogs
        </Typography>
      </Popover>
   
      <Popover
        id={id5}
        open={open5}
        anchorEl={anchorEl5}
        onClose={handleClose5}
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
            navigate("/dashbaord/addRedeem");
            handleClose5();
          }}
        >
          <AddIcon
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
        Add Redeem
        </Typography>

        <Typography
          onClick={() => {
            navigate("/dashbaord/redeem");
            handleClose5();
          }}
          sx={{ p: 1, pr: 2, pb: 1.5, fontSize: "1.1vw", cursor: "pointer" }}
        >
          <img
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img23}
            alt=""
          />
          List of Redeem
        </Typography>
      </Popover>
   
      <Popover
        id={id6}
        open={open6}
        anchorEl={anchorEl6}
        onClose={handleClose6}
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
            navigate("/dashbaord/AddSkill");
            handleClose6();
          }}
        >
          <AddIcon
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          Add Skills
        </Typography>

        <Typography
          onClick={() => {
            navigate("/dashbaord/skillCenter/List%20of%20Skills");
            handleClose6();
          }}
          sx={{ p: 1, pr: 2, pb: 1.5, fontSize: "1.1vw", cursor: "pointer" }}
        >
          <img
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img23}
            alt=""
          />
          List of Skills
        </Typography>
        <Typography
          sx={{ p: 1, pr: 2, pb: 1, fontSize: "1.1vw", cursor: "pointer" }}
          onClick={() => {
            navigate("/dashbaord/AddExam");
            handleClose6();
          }}
        >
          <AddIcon
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
          Add Exam
        </Typography>

        <Typography
          onClick={() => {
            navigate("/dashbaord/skillCenter/exam");
            handleClose6();
          }}
          sx={{ p: 1, pr: 2, pb: 1.5, fontSize: "1.1vw", cursor: "pointer" }}
        >
          <img
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img23}
            alt=""
          />
          List of Exam
        </Typography>
    
      </Popover>
   
      <Popover
        id={id7}
        open={open7}
        anchorEl={anchorEl7}
        onClose={handleClose7}
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
            navigate("/dashbaord/addCatalogue");
            handleClose7();
          }}
        >
          <AddIcon
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img7}
            alt=""
          />
      Add Catalogue
        </Typography>

        <Typography
          onClick={() => {
            navigate("/dashbaord/catalogue");
            handleClose7();
          }}
          sx={{ p: 1, pr: 2, pb: 1.5, fontSize: "1.1vw", cursor: "pointer" }}
        >
          <img
            style={{ paddingRight: "1vw", width: "2.5vw" }}
            src={img23}
            alt=""
          />
        List of Catalogue
        </Typography>
    
      </Popover>
   
   
    </div>
  );
}
