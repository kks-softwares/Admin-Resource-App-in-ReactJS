import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import { makeStyles } from "@material-ui/core";


import {  KeyboardArrowDownOutlined } from "@mui/icons-material";
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
export default function AddSubCategory({ handleClose, setSelectedCategory }) {
  const classes = useStyles();
  const [arrayoffile, setArrayoffile] = useState();

  const [name, setName] = useState();

  const [doneSaved, setDoneSaved] = useState(false);

  const navigate = useNavigate();

  const [cateerror, setcateError] = useState("");
  const [titileError, setTitileError] = useState("");
  const [imageError, setimageError] = useState("");
  const [searchCategorysearch, setSearchCategorysearch] = useState("");

  const [arrayoflongdegree, setArrayoflongdegree] = useState();

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/theCategory/viewCategory?pageSize=10&pageNumber=1&category=${searchCategorysearch}`
      )
      .then((res) => {
        setArrayoflongdegree(res?.data?.success?.data);
      });
  }, [searchCategorysearch]);

  const [anchorElx2, setAnchorElx2] = React.useState(null);
  const handleClickx2 = (event) => {
    setAnchorElx2(event.currentTarget);
  };

  const handleClosex2 = () => {
    setAnchorElx2(null);
  };

  const openx2 = Boolean(anchorElx2);
  const idx2 = openx2 ? "simple-popover" : undefined;

  const [degreeset, setDegreeset] = useState("");
  const [categogryid, setCategogryid] = useState();

  const handlecategory = () => {
    if (!name || !arrayoffile || !categogryid) {
      if (!categogryid) {
        setcateError("please Select Category");
      }
      if (!name) {
        setTitileError("please Enter Sub-Category");
      }
      if (!arrayoffile) {
        setimageError("please Select Image");
      }
      return;
    } 
    else {
      const formdata = new FormData();
      formdata.append("categoryId", categogryid);
      formdata.append("subCategory", name);
      formdata.append("fileName", arrayoffile);
      axios
        .post(`${API_HOST}/subCategory/addSubcategory`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => {
          console.log(res);
          setDoneSaved(true);
        })
        .catch(() => {
          setTitileError("Sub-Category Already exist");
        });
    }
  };

  useEffect(() => {
    if (doneSaved) {
      setTimeout(() => {
        setDoneSaved(false);
        setName("");
        setArrayoffile();
        setCategogryid();
        setDegreeset("");
      }, 3000);
    }
  }, [doneSaved]);

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
        <div className="jobpostedformheading">Add Sub Category </div>

        <div>
          <div
            style={{ left: "0vw", width: "94%", marginLeft: "0%" }}
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
            <div
              style={{ maxHeight: "18vw", overflow: "scroll", width: "36vw" }}
            >
              <Typography
                sx={{
                  p: 1,
                  pl: 1,
                  ml: 1,
                  pr: 0,
                  width: "35vw",
                  position: "fixed",
                  background: "white",
                  zIndex: "10",
                }}
              >
                <input
                  placeholder="search here .."
                  onChange={(e) => {
                    setSearchCategorysearch(e.target.value);
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

              {arrayoflongdegree?.length > 0 &&
                arrayoflongdegree.map((data, index) => {
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
                        setCategogryid(data?._id);
                        setDegreeset(data?.category);
                        handleClosex2();
                        setcateError();
                      }}
                    >
                      {data?.category}
                    </Typography>
                  );
                })}
            </div>
          </Popover>
          <p style={{ color: "red", fontSize: "0.9vw" }}>{cateerror}</p>
          <div className="jobpodtedfieldtitile">Sub Category Name *</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              name="title"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setTitileError();
              }}
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
                setName("");
              }}
            />
          </div>
          <p style={{ color: "red", fontSize: "0.9vw" }}>{titileError}</p>

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
                      setimageError();
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

          <p style={{ color: "red", fontSize: "0.9vw" }}>{imageError}</p>

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
              onClick={() => handlecategory()}
              style={{
                cursor: "pointer",
                marginRight: "1vw",
                background: doneSaved ? "green" : "",
              }}
              className="handlecirclieaboutsave"
            >
              {doneSaved ? "Saved" : "Submit"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
