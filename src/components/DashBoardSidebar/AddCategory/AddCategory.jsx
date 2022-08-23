import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import axios from "axios";
import API_HOST from "../../../env";
import img1 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import img22 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import img from "../../../assets/Web 1280 – 14/Icon.svg";
import { useNavigate } from "react-router";

export default function AddCategory({ handleClose, setSelectedCategory }) {
  const [arrayoffile, setArrayoffile] = useState();

  const [name, setName] = useState();

  const [doneSaved, setDoneSaved] = useState(false);

  const navigate = useNavigate();

  const [titileError, setTitileError] = useState("");
  const [imageError, setimageError] = useState("");

  const handlecategory = () => {
    if (!name || !arrayoffile) {
      if (!name) {
        setTitileError("please Enter Category");
      }
      if (!arrayoffile) {
        setimageError("please Select Image");
      }
      return;
    } else {
      const formdata = new FormData();
      formdata.append("category", name);
      formdata.append("fileName", arrayoffile);
      axios
        .post(`${API_HOST}/theCategory/addCategory`, formdata, {
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
          setTitileError("Category Already exist");
        });
    }
  };

  useEffect(() => {
    if (doneSaved) {
      setTimeout(() => {
        setDoneSaved(false);
        setName("");
        setArrayoffile();
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
        <div className="jobpostedformheading">Add Category </div>

        <div>
          <div className="jobpodtedfieldtitile">Category Name *</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              name="title"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setTitileError();
              }}
              placeholder="Category Name"
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
          <p style={{ color: "red", fontSize: "0.91vw" }}>{titileError}</p>

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
          <p style={{ color: "red", fontSize: "0.91vw" }}>{imageError}</p>
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
