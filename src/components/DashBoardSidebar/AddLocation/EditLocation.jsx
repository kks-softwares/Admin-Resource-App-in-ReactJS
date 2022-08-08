import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import axios, { Axios } from "axios";
import API_HOST from "../../../env";
import { useNavigate, useParams } from "react-router";

export default function EditLocation({ handleClose, setSelectedCategory }) {
  const [formValues, setFormValues] = useState();
  const [formErrors, setFormErrors] = useState();
  const [formValues2, setFormValues2] = useState();
  const [formErrors2, setFormErrors2] = useState();
  const [formValues3, setFormValues3] = useState();
  const [formErrors3, setFormErrors3] = useState();
  const [formValues4, setFormValues4] = useState();
  const [formErrors4, setFormErrors4] = useState();
  const [formValues5, setFormValues5] = useState();
  const [formErrors5, setFormErrors5] = useState();
  const [formValues6, setFormValues6] = useState();
  const [formErrors6, setFormErrors6] = useState();
  const [formValues7, setFormValues7] = useState();
  const [formErrors7, setFormErrors7] = useState();

  const { id, address, landmark, area, city, pinCode, state, country } =
    useParams();
  useEffect(() => {
    setFormValues(address);
    setFormValues2(landmark);
    setFormValues3(area);
    setFormValues4(city);
    setFormValues5(pinCode);
    setFormValues6(state);
    setFormValues7(country);
  }, [id]);
  const navigate = useNavigate();

  const handleAdd = () => {
    if (
      formValues &&
      formValues2 &&
      formValues3 &&
      formValues4 &&
      formValues5 &&
      formValues6 &&
      formValues7
    ) {
      axios
        .put(`${API_HOST}/location/editLocation`, {
          address: formValues,
          landMark: formValues2,
          area: formValues3,
          city: formValues4,
          pinCode: formValues5,
          state: formValues6,
          country: formValues7,
          locationId:id
        })
        .then((res) => {
          navigate("/dashbaord/location");
        });
    } else {
      if (!formValues) {
        setFormErrors("Please fill Address");
      }
      if (!formValues2) {
        setFormErrors2("Please fill Landmark");
      }
      if (!formValues3) {
        setFormErrors3("Please fill Area");
      }
      if (!formValues4) {
        setFormErrors4("Please fill City");
      }
      if (!formValues5) {
        setFormErrors5("Please fill Pincode");
      }
      if (!formValues6) {
        setFormErrors6("Please fill Status");
      }
      if (!formValues7) {
        setFormErrors7("Please fill Country");
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
        <div className="jobpostedformheading">Add Location </div>

        <div>
          <div className="jobpodtedfieldtitile">Address *</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              name="title"
              value={formValues}
              onChange={(e) => {
                setFormValues(e.target.value);
                setFormErrors();
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
                setFormValues("");
              }}
            />
          </div>
          <p style={{ color: "red" }} className="redp">
            {formErrors}
          </p>
          <div className="jobpodtedfieldtitile">Landmark *</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              name="title"
              value={formValues2}
              onChange={(e) => {
                setFormValues2(e.target.value);
                setFormErrors2();
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
                setFormValues2();
              }}
            />
          </div>
          <p style={{ color: "red" }} className="redp">
            {formErrors2}
          </p>
          <div className="jobpodtedfieldtitile">Area *</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              name="title"
              value={formValues3}
              onChange={(e) => {
                setFormValues3(e.target.value);
                setFormErrors3();
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
                setFormValues3();
              }}
            />
          </div>
          <p style={{ color: "red" }} className="redp">
            {formErrors3}
          </p>
          <div className="jobpodtedfieldtitile">City *</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              name="title"
              value={formValues4}
              onChange={(e) => {
                setFormValues4(e.target.value);
                setFormErrors4();
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
                setFormValues4();
              }}
            />
          </div>
          <p style={{ color: "red" }} className="redp">
            {formErrors4}
          </p>
          <div className="jobpodtedfieldtitile">Pincode *</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              name="title"
              value={formValues5}
              onChange={(e) => {
                setFormValues5(e.target.value);
                setFormErrors5();
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
                setFormValues5();
              }}
            />
          </div>
          <p style={{ color: "red" }} className="redp">
            {formErrors5}
          </p>
          <div className="jobpodtedfieldtitile">State*</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              name="title"
              value={formValues6}
              onChange={(e) => {
                setFormValues6(e.target.value);
                setFormErrors6();
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
                setFormValues6();
              }}
            />
          </div>
          <p style={{ color: "red" }} className="redp">
            {formErrors6}
          </p>
          <div className="jobpodtedfieldtitile">Country*</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              name="title"
              value={formValues7}
              onChange={(e) => {
                setFormValues7(e.target.value);
                setFormErrors7();
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
                setFormValues7();
              }}
            />
          </div>
          <p style={{ color: "red" }} className="redp">
            {formErrors7}
          </p>

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
              onClick={() => handleAdd()}
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
