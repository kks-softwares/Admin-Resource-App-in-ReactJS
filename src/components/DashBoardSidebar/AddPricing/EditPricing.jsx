import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import API_HOST from "../../../env";

export default function AddPricing({ handleClose, setSelectedCategory }) {
  const [formValues, setFormValues] = useState();
  const [formValues1, setFormValues1] = useState();
  const {id,min,max}= useParams()
  const [title, settitle] = useState("");
  const [title1, settitle1] = useState("");

  const navigate = useNavigate();

   useEffect(() => {
       setFormValues(min)
       setFormValues1(max)
   }, [id])
   

  const handleSumbit = () => {
    if (!parseInt(formValues) || !parseInt(formValues1)) {
      if (!parseInt(formValues) && !parseInt(formValues1)) {
        settitle("Please enter minimum value of budget");
        settitle1("Please enter Maximum value of budget");
        return;
      }
      if (!parseInt(formValues)) {
        settitle("Please enter minimum value of budget");
        return;
      }
      if (!parseInt(formValues1)) {
        settitle1("Please enter Maximum value of budget");
        return;
      }
    } else {
      if (parseInt(formValues1) < parseInt(formValues)) {
        settitle("From value less than To value");
        settitle1("To value Greater than From value");
      } else {
        axios
          .put(`${API_HOST}/budget/editBudget`, {
            minimumBudget: parseInt(formValues),
            maximumBudget: parseInt(formValues1),
            budgetId:id
          })
          .then((res) => {
            if (res?.data?.success?.data?.budgetId) {
              navigate("/dashbaord/pricing");
            } else {
              if (res?.data?.success?.data?.keyPattern?.minimumBudget) {
                settitle("already exist");
              } else {
                settitle1("already exist");
              }
            }
          })
          .catch((err) => {
            if (err.response.data?.keyPattern?.minimumBudget) {
              settitle("already exist");
              settitle1();
            } else {
              settitle1("already exist");
              settitle();
            }
          });
      }
    }
  };

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
              value={formValues}
              onChange={(e) => {
                setFormValues(e.target.value);
                settitle();
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
              onClick={() => setFormValues()}
            />
          </div>
          <p style={{ color: "red" }}>{title}</p>

          <div className="jobpodtedfieldtitile">To ($) *</div>
          <div className="jobpostfieldinputbox">
            <input
              type="number"
              name="title1"
              value={formValues1}
              onChange={(e) => {
                setFormValues1(e.target.value);
                settitle1();
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
              onClick={() => setFormValues1()}
            />
          </div>
          <p style={{ color: "red" }}>{title1}</p>

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
              onClick={() => navigate("/dashbaord/pricing")}
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
              onClick={() => handleSumbit()}
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
