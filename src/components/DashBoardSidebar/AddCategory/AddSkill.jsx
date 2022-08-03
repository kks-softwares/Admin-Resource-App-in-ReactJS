import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import axios from "axios";
import API_HOST from "../../../env";
import img1 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import img22 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import img from "../../../assets/Web 1280 – 14/Icon.svg";
import { useNavigate } from "react-router";
import { TextField } from "@mui/material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  input: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "0.91vw",

    color: "#263238",
    border: "yellow !important",
  },
}));
export default function AddSkill1({ handleClose, setSelectedCategory }) {
  const initialValues = {
    name: "",
    title: "",
    desc: "",
    mobile: "",
    email: "",
  };

  const [arrayoffile, setArrayoffile] = useState();
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChangeFormVal = (e) => {
    setFormErrors("");
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const [title, settitle] = useState("");

  const navigate = useNavigate();

  const [arrayofdegree, setArrayofdegree] = useState([
    "Master of Computer Application (MCA)",
    "Bachler of Computer Application (MCA)",
  ]);
  const [arrayoflongdegree, setArrayoflongdegree] = useState(arrayofdegree);
  const classes = useStyles();
  const [arrayofstudy, setArrayofstydy] = useState([
    "Computer Science",
    "Computer Science2",
    "Computer Science3",
  ]);
  const [arrayoflongstudy, setArrayoflongstudy] = useState(arrayofstudy);
  const [anchorElx2, setAnchorElx2] = React.useState(null);
  const handleClickx2 = (event) => {
    setAnchorElx2(event.currentTarget);
  };

  const handleClosex2 = () => {
    setAnchorElx2(null);
  };

  const openx2 = Boolean(anchorElx2);
  const idx2 = openx2 ? "simple-popover" : undefined;
  const [anchorElx3, setAnchorElx3] = React.useState(null);
  const handleClickx3 = (event) => {
    setAnchorElx3(event.currentTarget);
  };

  const handleClosex3 = () => {
    setAnchorElx3(null);
  };

  const openx3 = Boolean(anchorElx3);
  const idx3 = openx3 ? "simple-popover" : undefined;

  const [anchorElx3c, setAnchorElx3c] = React.useState(null);
  const handleClickx3c = (event) => {
    setAnchorElx3c(event.currentTarget);
  };

  const handleClosex3c = () => {
    setAnchorElx3c(null);
  };

  const openx3c = Boolean(anchorElx3c);
  const idx3c = openx3c ? "simple-popover" : undefined;

  const [callagename, setCallagename] = useState("");

  const [degreeset, setDegreeset] = useState("");
  const [studyset, setstudyset] = useState("");

  return (
    <div
      style={{
        height: "fit-content",
        justifyContent: "center",
        width: "60vw",
        paddingLeft: "16vw",
      }}
      className="home-postjob-container"
    >
      <div
        style={{
          overflowX: "hidden",
          paddingBottom: "3vw",
          width: "70vw",
          margin: "2vw",
          paddingTop: "2vw",
          marginTop: "2vw",
        }}
        className="homepostjob-right"
      >
        <div className="jobpostedformheading">Add Skill </div>

        <div>
        
          <div
            style={{ left: "0vw", width: "94%",marginLeft:"0%" }}
            className="loginfield"
            onClick={handleClickx2}
          >
            <TextField
              id="outlined-basic"
              label="Category *"
              variant="outlined"
              disabled
              value={degreeset}
              style={{ width: "100%" }}
              InputLabelProps={{
                style: {
                  fontSize: "1vw",
                  fontFamily: "Poppins",
                  fontStyle: "500",
                  fontWeight: "500",
                  color: "black",
                },
              }}
              inputProps={{ className: classes.input }}
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <span style={{ width: "0.1vw" }}>
              <KeyboardArrowDownOutlined
                style={{
                  fontSize: "1.5vw",
                  position: "relative",
                  right: "2vw",
                  top: "1vw",
                }}
              />
            </span>
          </div>
          <Popover
            id={idx2}
            open={openx2}
            anchorEl={anchorElx2}
            onClose={handleClosex2}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <div style={{ maxHeight: "18vw", overflow: "scroll",    width: "36vw" , }}>
              <Typography
                sx={{
                  p: 1,
                  pl: 1,
                  ml: 1,
                  pr:0,
                  width: "35vw" ,
                  position: "fixed",
                  background: "white",
                  zIndex: "10",
                }}
              >
                <input
                  onChange={(e) => {
                    setArrayoflongdegree(
                      arrayofdegree.filter((x) => x.includes(e.target.value))
                    );
                    console.log(
                      arrayofdegree.filter((x) => x.includes(e.target.value))
                    );
                  }}
                  style={{
                    width: "97%",
                    border: "1.5px solid #00000050",
                    outline: "none",
                    height: "2.5",
                    borderRadius: "0.21vw",
                  }}
                />
              </Typography>
              <Typography
                sx={{
                  p: 2.5,
                  pl: 1,
                  ml: 1,
                  width: "100%" ,
                  cursor: "pointer",
                }}
              ></Typography>

              {arrayoflongdegree.map((data, index) => {
                return (
                  <Typography
                    sx={{
                      p: 0.51,
                      pl: 1,
                      ml: 1,
                      width: "100%",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setDegreeset(data);
                      handleClosex2();
                    }}
                  >
                    {data}
                  </Typography>
                );
              })}
            </div>
          </Popover>
          <div
             style={{ left: "0vw", width: "94%",marginLeft:"0%" }}
            className="loginfield"
            onClick={handleClickx3}
          >
            <TextField
              id="outlined-basic"
              label="Sub Category *"
              variant="outlined"
              disabled
              value={studyset}
              style={{ width: "100%" }}
              InputLabelProps={{
                style: {
                  fontSize: "1vw",
                  fontFamily: "Poppins",
                  fontStyle: "500",
                  fontWeight: "500",
                  color: "black",
                },
              }}
              inputProps={{ className: classes.input }}
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <span style={{ width: "0.1vw" }}>
              <KeyboardArrowDownOutlined
                style={{
                  fontSize: "1.5vw",
                  position: "relative",
                  right: "2vw",
                  top: "1vw",
                }}
              />
            </span>
          </div>
          <Popover
            id={idx3}
            open={openx3}
            anchorEl={anchorElx3}
            onClose={handleClosex3}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
       <div style={{ maxHeight: "18vw", overflow: "scroll",    width: "36vw" , }}>
              <Typography
                sx={{
                  p: 1,
                  pl: 1,
                  ml: 1,
                  width: "35vw",
                  position: "fixed",
                  background: "white",
                  zIndex: "10",
                }}
              >
                <input
                  onChange={(e) => {
                    setArrayoflongstudy(
                      arrayofstudy.filter((x) => x.includes(e.target.value))
                    );
                    console.log(
                      arrayofstudy.filter((x) => x.includes(e.target.value))
                    );
                  }}
                  style={{
                    width: "97%",
                    border: "1.5px solid #00000050",
                    outline: "none",
                    height: "2.5",
                    borderRadius: "0.21vw",
                  }}
                />
              </Typography>
              <Typography
                sx={{
                  p: 2.5,
                  pl: 1,
                  ml: 1,
                  width: "100%",
                  cursor: "pointer",
                }}
              ></Typography>

              {arrayoflongstudy.map((data, index) => {
                return (
                  <Typography
                    sx={{
                      p: 0.51,
                      pl: 1,
                      ml: 1,
                      width: "100%",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setstudyset(data);
                      handleClosex3();
                    }}
                  >
                    {data}
                  </Typography>
                );
              })}
            </div>
          </Popover>
          <div className="jobpodtedfieldtitile">Skill Name *</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              name="title"
              // value={title}
              // onChange={(e) => {
              //   settitle(e.target.value);
              // }}
              value={formValues.title}
              onChange={handleChangeFormVal}
            />
            <CloseIcon
              style={{
                position: "relative",
                right: "2vw",
                top: "1.1vw",
                fontSize: "1.5vw",
                cursor: "pointer",
              }}
              onClick={() => {
                settitle("");
              }}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.title}</p>
          <div
            style={{
              marginBottom: "0.0vw",

              marginTop: "2vw",
            }}
            className="jobpodtedfieldtitile"
          >
            Upload Files
          </div>
          <div
            style={{
              background: "white",
              padding: "1vw",
              marginTop: "0vw",
              paddingRight: "0.5vw",
              paddingLeft: "0vw",
            }}
          >
            <div className="inputfilebox">
              <div>
                <label htmlFor={`inputctaelogfile`}>
                  <div className="inputicon">
                    <img src={img} alt="" />
                  </div>
                  <div className="inputcateaddformfile">
                    Drag and Drop ,Browse to upload
                  </div>
                  <input
                    type="file"
                    id={`inputctaelogfile`}
                    onChange={(e) => {
                      setArrayoffile(e.target.files[0]);
                    }}
                    hidden
                  />
                </label>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                textAlign: "right",
                fontSize: "0.9vw",
                fontWeight: "400",
              }}
            >
              Image should be less then 200 kb
            </div>
          </div>
          {arrayoffile && (
            <div
              style={{ marginTop: "0.3vw" }}
              className="inputfilesshowncatebox"
            >
              <div className="inputfilesshowncatboxsingle">
                <div className="inputfilesshowncatboxsingleimg">
                  <img src={img1} alt="" />
                </div>
                <div className="fileselctednamecate">{arrayoffile?.name}</div>
                <div className="inputfilesshowncatboxsingleimg">
                  <img
                    style={{
                      width: "1.5vw",
                      marginLeft: "1vw",
                      cursor: "pointer",
                    }}
                    src={img22}
                    alt=""
                    onClick={() => {
                      setArrayoffile();
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          <div style={{ marginTop: "0.31vw" }} className="handlemoreaboutskill">
            <div
              style={{
                background: "white",
                color: "#064C87",
                cursor: "pointer",
                border: "1px solid #064C87",
                margin: "1vw",
                marginBottom: "0vw",
              }}
              className="handlecirclieaboutsave"
              onClick={() => navigate("/dashbaord/category")}
            >
              Cancel
            </div>
            <div
              style={{
                background: "white",
                color: "#064C87",
                cursor: "pointer",
                border: "1px solid #064C87",
                margin: "1vw",
                marginBottom: "0vw",
              }}
              className="handlecirclieaboutsave"
            >
              Reset
            </div>
            <div
              // onClick={() => handledeleteBlog()}
              style={{ cursor: "pointer", marginRight: "1vw" }}
              className="handlecirclieaboutsave"
            >
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
