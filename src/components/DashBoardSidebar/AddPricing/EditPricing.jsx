import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";

export default function EditPricing({ handleClose, setSelectedCategory }) {
  const initialValues = {
    name: "",
    title: "",
    desc: "",
    mobile: "",
    email: "",
  };

  
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChangeFormVal = (e) => {
    setFormErrors("");
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const [title, settitle] = useState("");
  const [title1, settitle1] = useState("");

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
        <div className="jobpostedformheading">Add Pricing & Budget</div>

        <div>
          <div className="jobpodtedfieldtitile">From ($) *</div>
          <div className="jobpostfieldinputbox">
          
            <input
              type="number"
              name="title"
             
              value={formValues.title1}
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
          <p style={{ color: "red" }}>{formErrors.title1}</p>
          <div className="jobpodtedfieldtitile">To ($) *</div>
          <div className="jobpostfieldinputbox">
            <input
              type="number"
              name="title1"
             
              value={title1}
              onChange={(e)=>settitle1(e.target.value)}
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
                settitle1("");
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
