import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";

import axios from "axios";
import API_HOST from "../../../env";

const useStyles = makeStyles((theme) => ({
  select: {
    height: "2.5vw",
    width: "100%",
    marginTop: "0.2vw",
    padding: "1vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "1vw",
    lineHeight: "120%",

    color: "#FFFFFF",
  },
  select2: {
    height: "1vw",
    width: "100%",
    marginTop: "0.1vw",
    padding: "0.9vw 0.5vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.51vw",
    lineHeight: "100%",
    color: "#FFFFFF",
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
    color: "#FFFFFF",
    position: "relative",
    top: "0.81vw",
    left: "0.2vw",
  },
  icon: {
    fill: "white",
  },
}));

export default function AddWork({ handleClose, setSelectedCategory }) {
  const classes = useStyles();

  const [age4, setAge4] = React.useState(0);

  const handleChange4x = (event) => {
    setAge4(event.target.value);
  };

  /* VALIDATION FUNCTIONALITY */
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

  const [minBudegt, setMinBudegt] = useState();

  const [datestart, setDatestart] = useState();

  // const [email, setEmail] = useState("");

  const [validateEmail, setValidateEmail] = useState("");

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  //   const [settingCategory, setsettingCategory] = useState([]);

  //   const [Category, setCategory] = useState("");
  //   const [Category1, setCategory1] = useState("Backend Doveloper");

  //   const [setsubSelectedCategory, setsetsubcategory] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get(`${API_HOST}/category/viewCategory?categories=${Category}`)
  //       .then((res) => {
  //         setsettingCategory(res?.data?.success?.data?.docs);

  //         console.log("viewCategory", res?.data?.success?.data?.docs);
  //       });
  //   }, [Category]);

  //   useEffect(() => {
  //     axios
  //       .get(`${API_HOST}/category/viewCategory?categories=${Category1}`)
  //       .then((res) => {
  //         setsetsubcategory(res.data.success.data?.docs[0]?.subCategories);
  //       });
  //   }, [Category1]);

  return (
    <div
      style={{
        height: "fit-content",
        justifyContent: "center",
        width: "80vw",
        paddingLeft: "3vw",
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
          marginTop: "0vw",
        }}
        className="homepostjob-right"
      >
        <div className="jobpostedformheading">Add a Work</div>

        <div>
          <div className="jobpodtedfieldtitile">Work Title *</div>
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

          <div style={{ display: "flex", alignItems: "center", width: "98%" }}>
            <div style={{ width: "49.5%" }}>
              <div className="jobpodtedfieldtitile">Category *</div>
              <div className="jobpostfieldinputbox">
                <Box
                  sx={{
                    background: "white",
                    border: "1px solid #7070705b",
                    height: "3vw",
                    width: "94%",
                    borderRadius: "5px",
                    padding: "0.4vw",
                    margin: "0.5vw 0vw",
                  }}
                  className="setting-toggler"
                >
                  <FormControl variant="standard" fullWidth>
                    <Select
                      className={classes.select2}
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age4}
                      disableUnderline
                      inputProps={{
                        classes: {
                          icon: classes.icon,
                        },
                      }}
                      onChange={handleChange4x}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            bgcolor: "white",

                            "& .MuiMenuItem-root": {
                              padding: "0.1vw 2vw",
                              width: "100%",
                              height: "2vw",
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "0.81vw",
                              lineHeight: "1vw",
                              color: "#6b6b6b",
                            },
                          },
                        },
                      }}
                    >
                      <MenuItem onClick={() => {}} value={0} hidden>
                        Select
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          setMinBudegt(10);
                        }}
                        value={10}
                      >
                        $ 10
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          setMinBudegt(20);
                        }}
                        value={20}
                      >
                        $ 20
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          setMinBudegt(50);
                        }}
                        value={30}
                      >
                        $ 50
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <p style={{ color: "red", fontSize: "1vw" }}>
                {validateEmail ? validateEmail : ""}
              </p>
              <p style={{ color: "red" }}>{formErrors.email}</p>
            </div>

            <div style={{ width: "49.5%" }}>
              <div className="jobpodtedfieldtitile">Priority *</div>
              <div className="jobpostfieldinputbox">
                <Box
                  sx={{
                    background: "white",
                    border: "1px solid #7070705b",
                    height: "3vw",
                    width: "94%",
                    borderRadius: "5px",
                    padding: "0.4vw",
                    margin: "0.5vw 0vw",
                  }}
                  className="setting-toggler"
                >
                  <FormControl variant="standard" fullWidth>
                    <Select
                      className={classes.select2}
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age4}
                      disableUnderline
                      inputProps={{
                        classes: {
                          icon: classes.icon,
                        },
                      }}
                      onChange={handleChange4x}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            bgcolor: "white",

                            "& .MuiMenuItem-root": {
                              padding: "0.1vw 2vw",
                              width: "100%",
                              height: "2vw",
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "0.81vw",
                              lineHeight: "1vw",
                              color: "#6b6b6b",
                            },
                          },
                        },
                      }}
                    >
                      <MenuItem onClick={() => {}} value={0} hidden>
                        Select
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          setMinBudegt(10);
                        }}
                        value={10}
                      >
                        $ 10
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          setMinBudegt(20);
                        }}
                        value={20}
                      >
                        $ 20
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          setMinBudegt(50);
                        }}
                        value={30}
                      >
                        $ 50
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <p style={{ color: "red", fontSize: "1vw" }}>
                {validateEmail ? validateEmail : ""}
              </p>
              <p style={{ color: "red" }}>{formErrors.email}</p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", width: "98%" }}>
            <div style={{ width: "49.5%" }}>
              <div className="jobpodtedfieldtitile">Start date *</div>
              <div className="jobpostfieldinputbox">
                <input
                  style={{ width: "100%" }}
                  type="date"
                  className="input-homejobformdate"
                  name=""
                  id=""
                  min={disablePastDate()}
                  max={"2025-12-31"}
                  maxlength="4"
                  onChange={(e) => {
                    setDatestart(e.target.value);
                  }}
                />
              </div>
              <p style={{ color: "red", fontSize: "1vw" }}>
                {validateEmail ? validateEmail : ""}
              </p>
              <p style={{ color: "red" }}>{formErrors.email}</p>
            </div>
            <div style={{ width: "49.5%" }}>
              <div className="jobpodtedfieldtitile">Due Date *</div>
              <div className="jobpostfieldinputbox">
                <input
                  style={{ width: "100%" }}
                  type="date"
                  className="input-homejobformdate"
                  name=""
                  id=""
                  min={disablePastDate()}
                  max={"2025-12-31"}
                  maxlength="4"
                  onChange={(e) => {
                    setDatestart(e.target.value);
                  }}
                />
              </div>
              <p style={{ color: "red", fontSize: "1vw" }}>
                {validateEmail ? validateEmail : ""}
              </p>
              <p style={{ color: "red" }}>{formErrors.email}</p>
            </div>
          </div>

          <div className="jobpodtedfieldtitile">Address *</div>
          <div className="jobpostfieldinputbox">
            <textarea
              type="text"
              name="desc"
              // value={desc}
              // onChange={(e) => {
              //   setDesc(e.target.value);
              // }}
              value={formValues.desc}
              onChange={handleChangeFormVal}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.desc}</p>

          <div className="homejobbuttons">
            <button style={{ background: "white" }} onClick={handleClose}>
              Cancel
            </button>
            <button
              // disabled={checkone && checkone1 ? false : true}
              style={{ color: "white" }}
              //   onClick={handlePostJOb}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
