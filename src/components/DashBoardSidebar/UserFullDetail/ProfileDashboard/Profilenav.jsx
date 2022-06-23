import React from "react";
import img from "../../assets/Landing page/logo3.png";
import img4 from "../../assets/My profile – 28/pexels-stefan-stefancik-91227.png";
import img5 from "../../assets/My profile – 28/Iconly-Light-outline-Notification.svg";
import img6 from "../../assets/My profile – 28/Iconly-Light-outline-Setting.svg";
import { useNavigate } from "react-router";
import "./profile.css";
import { Dropdown } from "react-bootstrap";
import Popover from "@mui/material/Popover";
import { useDispatch } from "react-redux";
import DownIcon from "../../assets/icons/ChevronDown.svg";
import UserIcon from "../../assets/icons/user.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import LogoutIcon from "../../assets/icons/log-out.svg";
import { userActions } from "../../store/userSlice";
import { Link } from "react-router-dom";

export default function Profilenav({ user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logoutUser() {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    dispatch(userActions.removeUser());
  }

  return (
    <div className="pnav-container">
      <div className="navlofogo">
        <img
          onClick={() => {
            navigate("/dashbaord/browsework/main");
          }}
          src={img}
          alt=""
        />
      </div>
      <div className="pnav-container2">
        <div className="settinsiconpnav">
          <img
            src={img6}
            style={{
              fontSize: "2vw",
              width: "2vw",
              objectFit: "contain",
              cursor: "pointer",
            }}
            alt=""
          />{" "}
        </div>
        <div onClick={handleClick} className="settinsiconpnav">
          <img
            src={img5}
            style={{
              fontSize: "2vw",
              width: "2vw",
              objectFit: "contain",
              cursor: "pointer",
            }}
            alt=""
          />{" "}
        </div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <div className="notificationpopup">
            <div className="notificationpopuptitile">
              <div className="notification-title">Notifications</div>
              <div className="notificationmarkallread">Mark all read</div>
            </div>
            <div className="notification-entriesbox">
              <div className="notificationentrieslogo">
                <img src={img4} alt="" />
              </div>
              <div style={{ width: "36vw" }}>
                <div className="notificationname">
                  Your bid was created Succesfull
                </div>
                <div className="notificationnamevalue">
                  Here is some tips to "Getting standard with substance"{" "}
                </div>
              </div>
              <div className="notificationtime" style={{ width: "10vw" }}>
                about 3 hours ago
              </div>
            </div>
            <div className="notification-entriesbox">
              <div className="notificationentrieslogo">
                <img src={img4} alt="" />
              </div>
              <div style={{ width: "36vw" }}>
                <div className="notificationname">You have 1 new message </div>
                <div className="notificationnamevalue">
                  What is your basic budget ?{" "}
                </div>
              </div>
              <div className="notificationtime" style={{ width: "10vw" }}>
                about 6 hours ago
              </div>
            </div>
            <div className="notification-entriesbox">
              <div className="notificationentrieslogo">
                <img src={img4} alt="" />
              </div>
              <div style={{ width: "36vw" }}>
                <div className="notificationname">
                  Your bid was created Succesfull
                </div>
                <div className="notificationnamevalue">
                  Here is some tips to "Getting standard with substance"{" "}
                </div>
              </div>
              <div className="notificationtime" style={{ width: "10vw" }}>
                about 3 hours ago
              </div>
            </div>
            <div className="notification-entriesbox">
              <div className="notificationentrieslogo">
                <img src={img4} alt="" />
              </div>
              <div style={{ width: "36vw" }}>
                <div className="notificationname">You have 1 new message </div>
                <div className="notificationnamevalue">
                  What is your basic budget ?{" "}
                </div>
              </div>
              <div className="notificationtime" style={{ width: "10vw" }}>
                about 6 hours ago
              </div>
            </div>
            <div className="notification-entriesbox">
              <div className="notificationentrieslogo">
                <img src={img4} alt="" />
              </div>
              <div style={{ width: "36vw" }}>
                <div className="notificationname">
                  Your bid was created Succesfull
                </div>
                <div className="notificationnamevalue">
                  Here is some tips to "Getting standard with substance"{" "}
                </div>
              </div>
              <div className="notificationtime" style={{ width: "10vw" }}>
                about 3 hours ago
              </div>
            </div>
            <div className="notification-entriesbox">
              <div className="notificationentrieslogo">
                <img src={img4} alt="" />
              </div>
              <div style={{ width: "36vw" }}>
                <div className="notificationname">You have 1 new message </div>
                <div className="notificationnamevalue">
                  What is your basic budget ?{" "}
                </div>
              </div>
              <div className="notificationtime" style={{ width: "10vw" }}>
                about 6 hours ago
              </div>
            </div>

            <div
              onClick={() => {
                handleClose();
                navigate("/notification");
              }}
              className="seeallnotification"
            >
              See all Notification{" "}
            </div>
          </div>
        </Popover>

        <div className="profileDropdown">
          <Dropdown className="d-flex justify-content-center mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true">
              <div
                style={{ margin: "0 1vw" }}
                className="settinsiconpnav pnavusername"
              >
                <div
                  style={{ overflow: "hidden", display: "flex" }}
                  className="pnav-name"
                >
                  {user?.fullName?.length > 11
                    ? user?.fullName?.slice(0, 11)
                    : user?.fullName}
                </div>
                <div className="pnavuserimage">
                  <img src={user?.media ? user?.media : img4} alt="" />
                </div>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="p-2 px-3">
              <div className="py-1 px-1 d-flex align-items-center">
                <Link to={`/dashbaord/postwork`}>
                  <img src={UserIcon} className="mx-1" alt="user" />{" "}
                  <span className="profileDropdownMenu mx-2">Dashboard </span>
                </Link>
              </div>
              <div className="py-2 px-1 d-flex align-items-center">
                <Link to="/dashbaord/setting">
                  <img src={SettingsIcon} className="mx-1" alt="settings" />{" "}
                  <span className="profileDropdownMenu mx-2">Settings </span>
                </Link>
              </div>
              <div
                className="py-2 px-1 d-flex align-items-center cusror-pointer"
                onClick={() => logoutUser()}
              >
                <img src={LogoutIcon} className="mx-1" alt="logout" />{" "}
                <span className="profileDropdownMenu mx-2">Logout</span>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
