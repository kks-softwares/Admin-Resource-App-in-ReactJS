import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";
import img from "../../../../assets/Web 1280 – 14/Icon.svg";
import Box from "@mui/material/Box";
import img1 from "../../../../assets/Web 1280 – 14/Group 9831.svg";
import img21 from "../../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import API_HOST from "../../../../env";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  select: {
    height: "1vw",
    width: "100%",
    padding: "1vw 0.5vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.51vw",
    lineHeight: "100%",
  },
  select2: {
    height: "1vw",
    width: "100%",
    padding: "1vw 0.5vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.51vw",
    lineHeight: "100%",
  },
  select3: {
    height: "1vw",
    width: "100%",
    marginTop: "0.1vw",
    padding: "0vw 0vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.51vw",
    lineHeight: "100%",
    position: "relative",
    top: "0.81vw",
    left: "0.2vw",
  },
  icon: {
    fill: "black",
  },
}));
export default function AddExam() {
  const classes = useStyles();
  const { user } = useSelector((state) => state.user);

  const [arrayofblogs, setArrayofblogs] = useState([
    {
      heading: "",
      toc: "",
      file: "",
      desc: "",
      title: "",
      button: "",
    },
  ]);
  const navigate = useNavigate();
  const [erroeshow, setErroeshow] = useState(false);
  const [title, setTitle] = useState("");
  const [age4, setAge4] = React.useState(10);
  const [age5, setAge5] = React.useState(10);

  const handleChange4x = (event) => {
    setAge4(event.target.value);
  };
  const handleChange5x = (event) => {
    setAge5(event.target.value);
  };
  const [arrayoffiles, setArrayoffiles] = useState([]);
  const [scate, setsCate] = useState("");

  const handlesumbitBlog = () => {
    const formdata = new FormData();
    if (arrayoffiles?.length > 0) {
      arrayoffiles?.map((data) => {
        formdata.append("fileName", data);
      });
    }
    formdata.append("status", "publish");
    formdata.append("contentName", title);
    formdata.append("author", user?.fullName);
    formdata.append("shareDisable", false);
    formdata.append("toC", JSON.stringify(arrayofblogs));
    formdata.append("category", scate);

    axios
      .post(`${API_HOST}/contentManagement/addByAdmin`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        navigate(-1);
      });
  };

  const [erroraddblog, setErroraddblog] = useState(false);

  return (
    <div>
      <div
        style={{
          width: "70vw",
          margin: "auto",
          height: "fit-content",
          marginTop: "2vw",
        }}
        className="home-postjob-container"
      >
        <div
          style={{
            overflowX: "hidden",
            paddingLeft: "4vw",
            width: "70vw",
            paddingTop: "2vw",
          }}
          className="homepostjob-right"
        >
          <div className="jobpostedformheading"> Update Details</div>

          <div>
            <div className="jobpodtedfieldtitile"> Id *</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
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
                  setTitle("");
                }}
              />
            </div>
        
            <div className="jobpodtedfieldtitile"> Name *</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
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
                  setTitle("");
                }}
              />
            </div>
        
           

            <div
              style={{ alignItems: "center", margin: "1vw 0" }}
              className="homjobpost-popbudegt"
            >
              <div className="min-maxhomejob">Date of Exam</div>
              <div
                style={{
                  width: "23vw",
                  marginLeft: "1.92vw",
                  marginRight: "2vw",
                }}
                className="jobpostfieldinputbox"
              >
                <input
                  type="Date"
                  style={{ paddingRight: "0vw" }}
                  onChange={(e) => {}}
                />
              </div>
              <div style={{ marginLeft: "1vw" }} className="min-maxhomejob">
                Duration
              </div>
              <div
                style={{ width: "27vw", margin: "0 1vw" }}
                className="jobpostfieldinputbox"
              >
                <input type="text" onChange={(e) => {}} />
              </div>
            </div>

            <div className="jobpodtedfieldtitile"> Percentage *</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
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
                  setTitle("");
                }}
              />
            </div>
        
           
            <div
              style={{
                marginBottom: "0.0vw",
                marginLeft: "0.01vw",
                marginTop: "2vw",
              }}
              className="jobpodtedfieldtitile"
            >
              Certificate
            </div>
            <div
              style={{
                background: "white",
                padding: "0.51vw",
                marginTop: "0vw",
                paddingRight: "3vw",
              }}
            >
              <div className="inputfilebox">
                <div>
                  <label htmlFor="inputctaelogfile">
                    <div className="inputicon">
                      <img src={img} alt="" />
                    </div>
                    <div className="inputcateaddformfile">
                      Drag and Drop ,Browse to upload
                    </div>
                    <input
                      type="file"
                      id="inputctaelogfile"
                      onChange={(e) => {
                        setArrayoffiles([...arrayoffiles, e.target.files[0]]);
                      }}
                      hidden
                    />
                  </label>
                </div>
              </div>
            </div>
            <div
              className={
                arrayoffiles?.length > 0 ? "inputfilesshowncatebox" : ""
              }
            >
              {arrayoffiles?.length > 0 &&
                arrayoffiles?.map((file, index) => {
                  return (
                    <div className="inputfilesshowncatboxsingle">
                      <div className="inputfilesshowncatboxsingleimg">
                        <img src={img1} alt="" />
                      </div>
                      <div className="fileselctednamecate">{file?.name}</div>
                      <div className="inputfilesshowncatboxsingleimg">
                        <img
                          style={{
                            width: "1.5vw",
                            marginLeft: "1vw",
                            cursor: "pointer",
                          }}
                          src={img21}
                          alt=""
                          onClick={() => {
                            setArrayoffiles([
                              ...arrayoffiles.slice(0, index),
                              ...arrayoffiles.slice(
                                index + 1,
                                arrayoffiles.length
                              ),
                            ]);
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
            {erroraddblog && (
              <div
                style={{ marginLeft: "1vw", color: "red" }}
                className="min-maxhomejob"
              >
                fill all field are cumpulsary these are marked as *
              </div>
            )}
            <div style={{ marginBottom: "4vw" }} className="homejobbuttons">
              <button
                style={{ background: "white" }}
                onClick={() => {
                  navigate(-1);
                }}
              >
                Cancel
              </button>

              <button style={{ color: "white" }}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
