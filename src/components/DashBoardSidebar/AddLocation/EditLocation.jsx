import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";

import axios from "axios";
import API_HOST from "../../../env";
import img1 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import img22 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import img from "../../../assets/Web 1280 – 14/Icon.svg";
import { useNavigate } from "react-router";

export default function AddLocation({ handleClose, setSelectedCategory }) {
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
        <div className="jobpostedformheading">Edit Location </div>

        <div>
          <div className="jobpodtedfieldtitile">Address *</div>
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
          <div className="jobpodtedfieldtitile">Landmark  *</div>
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
          <div className="jobpodtedfieldtitile">Area *</div>
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
          <div className="jobpodtedfieldtitile">City *</div>
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
          <div className="jobpodtedfieldtitile">Pincode *</div>
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
          <div className="jobpodtedfieldtitile">State*</div>
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
          <div className="jobpodtedfieldtitile">Country*</div>
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
              onClick={() => navigate("/dashbaord/location")}
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
