import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import img33 from "../../assets/Landing page/Group 1179.svg";
import img51 from "../../assets/Web 1280 – 14/Group 10219.svg";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";
import Popover from "@mui/material/Popover";
import img4 from "../../assets/Web 1280 – 14/Ellipse 1375.svg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import imgxxx from "../../assets/jobhome/Group 8797.svg";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import img2 from "../../assets/file.svg";
import img3 from "../../assets/close.svg";
import DoneIcon from "@mui/icons-material/Done";
import Modal from "@mui/material/Modal";
import Homejobconfirm from "./Homejobconfirm";
import cuntrycide from "../../helper/c";
import axios from "axios";
import API_HOST from "../../env";
import Typography from "@mui/material/Typography";

import Fade from "@mui/material/Fade";
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
    width: "11vw",
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
    width: "9vw",
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
  select4: {
    height: "8.1vw",
    width: "100%",
    marginTop: "0.3vw",
    padding: "1vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "1vw",
    lineHeight: "120%",

    color: "#FFFFFF",
  },
  select5: {
    height: "8vw",
    width: "30vw",
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
  select6: {
    height: "7vw",
    width: "25vw",
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "50vw",
};

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  textAlign: "center",
  p: 1,
};

const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1.5,
  pr: 1,
};

export default function HomePostjob({
  width,
  handleClose,
  setSelectedCategory,
  setsubSelectedCategory,
}) {
  const classes = useStyles();
  const [age, setAge] = React.useState(10);

  const [age2, setAge2] = React.useState(98);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChange2x = (event) => {
    setAge2(event.target.value);
  };
  const [age3, setAge3] = React.useState(0);
  const handleChange3 = (event) => {
    setAge3(event.target.value);
  };
  const [age3x, setAge3x] = React.useState(0);
  const handleChange3x = (event) => {
    setAge3x(event.target.value);
  };

  const [age4, setAge4] = React.useState(0);
  const [age5, setAge5] = React.useState(0);

  console.log("age2", age2);

  const handleChange4x = (event) => {
    setAge4(event.target.value);
  };
  const handleChange5x = (event) => {
    setAge5(event.target.value);
  };

  const [countryside, setCountryside] = useState(cuntrycide);
  const [mobilecuntry, setMobilecuntry] = useState(1);

  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const handleClosex = () => setOpenx(false);

  const [checkone, setCheckone] = useState(false);
  const [checkone1, setCheckone1] = useState(false);
  const [cateaddcheckbox1, setCateaddcheckbox1] = useState(true);
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

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const phoneno = /^[0-9]{10}$/;
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.title) {
      errors.title = "Title is required!";
    }
    if (!values.desc) {
      errors.desc = "Description is required!";
    }
    if (!phoneno.test(values.mobile)) {
      errors.mobile =
        "Required 10 digits mobile number, match requested format!!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    // if (!values.password) {
    //   errors.password = "Password is required";

    // } else if (values.password.length < 4) {
    //   errors.password = "Password must be more than 4 characters";
    // } else if (values.password.length > 10) {
    //   errors.password = "Password cannot exceed more than 10 characters";
    // }
    return errors;
  };

  const [name, setName] = useState("");
  const [subcate, setsubcate] = useState("");
  const [title, settitle] = useState("");
  const [desc, setDesc] = useState("");

  const [minBudegt, setMinBudegt] = useState();
  const [maxBudegt, setMaxBudegt] = useState();
  const [projectSize, setProjectSize] = useState();
  const [datestart, setDatestart] = useState();
  const [dateend, setDateend] = useState();
  const [file, setFile] = useState();

  const [countrycode, setCountrycode] = useState("+91");
  const [mobile, setMobile] = useState();
  // const [email, setEmail] = useState("");

  const [ErrorCheck, setErrorCheck] = useState(false);
  const [ErrorCheck2, setErrorCheck2] = useState(false);

  const [validateMobile, setValidateMobile] = useState("");
  const [validateEmail, setValidateEmail] = useState("");

  const handlePostJOb = () => {
    // if(file.size > 512000){
    //   alert("File size cannot exceed more than 512 kb")
    // }
    setValidateMobile("");
    setValidateEmail("");
    setFormErrors(validate(formValues));

    if (!(checkone && checkone1)) {
      console.log("first", checkone, checkone1);
      setErrorCheck(true);
      setErrorCheck2(true);
      return false;
    }
    const formdata = new FormData();
    formdata.append("fullName", formValues.name);
    formdata.append("workTitle", formValues.title);
    formdata.append("fileName", file);
    formdata.append("shortDescription", formValues.desc);
    formdata.append("jobPostingDate", datestart);
    formdata.append("terminationDate", dateend);
    formdata.append("category", setSelectedCategory);
    formdata.append("subCategory", subcate);
    formdata.append("maximuBudget", maxBudegt);
    formdata.append("minimumBudget", minBudegt);
    formdata.append("contactNo", countrycode + formValues.mobile);
    formdata.append("emailId", formValues.email);

    formdata.append("remote", !cateaddcheckbox1);

    if (cateaddcheckbox1) {
      formdata.append("onSite", studyset);
    }

    skillset?.length > 0 &&
      skillset?.map((data, index) => {
        formdata.append(`skill${index + 1}`, data);
      });

    axios
      .post(`${API_HOST}/jobPost/newUserJobPost`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setTrackingid(res.data.success?.data?.trackingId);
        setWorktitile(res.data.success?.data?.workTitle);
        setPassword(res.data.success?.userDetails?.password);
        setUsername(res.data.success?.userDetails?.userName);

        handleOpenp();
      })
      .catch((err) => {
        console.log("err", err.response);
        if (
          err.response.data.fails.data.code ===
          "auth/phone-number-already-exists"
        ) {
          setValidateMobile(err.response.data.fails.data.message);
        }
        // if(err.response.data.fails.data.code === "auth/invalid-phone-number"){
        //   setValidateMobile(err.response.data.fails.data.message)
        // }
        if (err.response.data.fails.data.code === "auth/email-already-exists") {
          setValidateEmail(err.response.data.fails.data.message);
        }
        setErroeshow(true);
      });
  };
  const [erroeshow, setErroeshow] = useState(false);

  const [worktitile, setWorktitile] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [trackingid, setTrackingid] = useState("");

  const [openp, setOpenp] = React.useState(false);

  const handleOpenp = () => {
    setOpenp(true);
    setTimeout(function () {
      setOpenp(false);
      handleOpenx();
    }, 5000);
  };

  const handleClosep = () => {
    setOpenp(false);
    handleOpenx();
  };

  const [studyset, setstudyset] = useState("");

  const [anchorElx3, setAnchorElx3] = React.useState(null);
  const handleClickx3 = (event) => {
    setAnchorElx3(event.currentTarget);
  };

  const handleClosex3 = () => {
    setAnchorElx3(null);
  };

  const openx3 = Boolean(anchorElx3);
  const idx3 = openx3 ? "simple-popover" : undefined;
  const [arrayofstudy, setArrayofstydy] = useState([
    "Computer Science",
    "Computer Science2",
    "Computer Science3",
  ]);
  const [arrayoflongstudy, setArrayoflongstudy] = useState(arrayofstudy);

  const [skillset, setskillset] = useState([]);
  const [skilltext, setskilltext] = useState("");

  const handleSearchCategory = (e) => {
    axios
      .get(`${API_HOST}/skill/viewSkill?skill=${e.target.value}`)
      .then((res) => {
        setAllcategory(res?.data?.success?.data?.docs);

        if (res?.data?.success?.data?.docs?.length > 0) {
          setIstdropdown(true);
        }
      });
  };

  const [setSelectedCategory1, setSetSelectedCategory1] = useState("");
  const [istdropdown, setIstdropdown] = useState(false);
  const [allcategory, setAllcategory] = useState([0]);

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  return (
    <div style={{ height: "none" }} className="home-postjob-container">
      {width > 700 && (
        <div className="homepostjob-left">
          <div className="homejobpostimgsec">
            <img
              src={imgxxx}
              style={{ marginBottom: "2vw", marginTop: "2vw" }}
              alt=""
            />
          </div>
          <div className="homepastjobtrustbox">
            <div className="homepostjobtrust">Trusted by 44 Resources</div>
          </div>
        </div>
      )}
      <div
        style={{ overflowX: "hidden", padding: "1vw", paddingLeft: "3vw" }}
        className="homepostjob-right"
      >
        <div className="jobpostedformheading">Booking Details</div>

        <div>
          <div className="jobpodtedfieldtitile">Job Category</div>
          <div className="jobpostfieldinputbox">
            <input type="text" value={setSelectedCategory} disabled />
          </div>
          <div className="jobpodtedfieldtitile">Sub Category</div>
          <div className="jobpostfieldinputbox">
            <input type="text" value={setSelectedCategory} disabled />
          </div>
          <div className="jobpodtedfieldtitile">Name *</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              name="name"
              // value={name}
              // onChange={(e) => {
              //   setName(e.target.value);
              // }}
              value={formValues.name}
              onChange={handleChangeFormVal}
            />
            {width > 700 && (
              <CloseIcon
                style={{
                  position: "relative",
                  right: "2vw",
                  top: "1.1vw",
                  fontSize: "1.5vw",
                  cursor: "pointer",
                }}
                onClick={() => setName("")}
              />
            )}
          </div>
          <p style={{ color: "red" }}>{formErrors.name}</p>
          <div className="jobpodtedfieldtitile">Job Title *</div>
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
            {width > 700 && (
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
            )}
          </div>
          <p style={{ color: "red" }}>{formErrors.title}</p>

          <div className="jobpodtedfieldtitile">Budget *</div>
          <div className="homjobpost-popbudegt">
            <div className="min-maxhomejob">min</div>
            <div className="">
              <Box
                sx={{
                  background: "white",
                  border: "1px solid #7070705b",
                  height: width > 700 ? "2.5vw" : "8vw",
                  width: width > 700 ? "11vw" : "30vw",
                  borderRadius: "5px",
                  margin: "0.5vw 1.5vw",
                }}
                className="setting-toggler"
              >
                <FormControl variant="standard" fullWidth>
                  <Select
                    className={width > 700 ? classes.select2 : classes.select5}
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
                            fontSize: width > 700 ? "0.85vw" : "2.8vw",
                            lineHeight: width > 700 ? "1.4vw" : "4vw",
                            minHeight: width > 700 ? "1.5vw" : "4.5vw",
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
            <div style={{ marginLeft: "1vw" }} className="min-maxhomejob">
              max
            </div>
            <div className="">
              <Box
                sx={{
                  background: "white",
                  border: "1px solid #7070705b",
                  height: width > 700 ? "2.5vw" : "8vw",
                  width: width > 700 ? "11vw" : "30vw",
                  borderRadius: "5px",
                  margin: "0.5vw 1.5vw",
                }}
                className="setting-toggler"
              >
                <FormControl variant="standard" fullWidth>
                  <Select
                    className={width > 700 ? classes.select2 : classes.select5}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age5}
                    disableUnderline
                    inputProps={{
                      classes: {
                        // root: classes.border,
                        icon: classes.icon,
                      },
                    }}
                    onChange={handleChange5x}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          bgcolor: "white",

                          "& .MuiMenuItem-root": {
                            padding: "0.1vw 2vw",
                            width: "10vw",
                            height: "2vw",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: width > 700 ? "0.85vw" : "2.8vw",
                            lineHeight: width > 700 ? "1.4vw" : "4vw",
                            minHeight: width > 700 ? "1.5vw" : "4.5vw",
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
                        setMaxBudegt(100);
                      }}
                      value={10}
                    >
                      $ 100
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setMaxBudegt(200);
                      }}
                      value={20}
                    >
                      $ 200
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setMaxBudegt(500);
                      }}
                      value={30}
                    >
                      $ 500
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
          <div className="jobpodtedfieldtitile">Date *</div>
          <div className="homjobpost-popbudegt">
            <div className="min-maxhomejob">Start</div>
            <div className="">
              <Box
                sx={{
                  background: "white",
                  border: "1px solid #7070705b",
                  height: width > 700 ? "2.5vw" : "8vw",
                  width: width > 700 ? "11vw" : "30vw",
                  borderRadius: "5px",
                  margin: "0.5vw 1.5vw",
                  padding: "0 0.2vw",
                }}
                className="setting-toggler"
              >
                <input
                  style={{
                    lineHeight: width > 700 ? "2vw" : "5vw",
                    width: "100%",
                  }}
                  type="date"
                  placeholder="dd/mm/yyyy"
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
              </Box>
            </div>
            <div style={{ marginLeft: "1vw" }} className="min-maxhomejob">
              End
            </div>
            <div className="">
              <Box
                sx={{
                  background: "white",
                  border: "1px solid #7070705b",
                  height: width > 700 ? "2.5vw" : "8vw",
                  width: width > 700 ? "11vw" : "30vw",
                  borderRadius: "5px",
                  margin: "0.5vw 1.5vw",
                  padding: " 0 0.2vw",
                }}
                className="setting-toggler"
              >
                <input
                  style={{
                    lineHeight: width > 700 ? "2vw" : "5vw",
                    width: "100%",
                  }}
                  type="date"
                  placeholder="dd/mm/yyyy"
                  className="input-homejobformdate"
                  name=""
                  id=""
                  min={disablePastDate()}
                  max={"2025-12-31"}
                  maxlength="4"
                  onChange={(e) => {
                    setDateend(e.target.value);
                  }}
                />
              </Box>
            </div>
          </div>

          <div className="jobpodtedfieldtitile mt-2">Mobile *</div>
          <div className="jobpostfieldinputbox">
            <div style={{ width: "0.1vw", zIndex: "3" }}>
              <div className="okmobilejobform" onClick={handleOpenx}>
                {mobilecuntry}
              </div>
              <Box
                sx={{
                  background: "white",
                  border: "1px solid #7070705b",
                  height: width > 700 ? "3vw" : "9vw",
                  width: width > 700 ? "10vw" : "26vw",
                  borderRadius: "5px",
                  margin: "0vw 0vw",
                  position: "relative",
                  bottom: width > 700 ? "0.71vw" : "0.2vw",
                }}
                className="setting-toggler"
              >
                <FormControl variant="standard" fullWidth>
                  <Select
                    className={width > 700 ? classes.select3 : classes.select6}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age2}
                    defaultValue={age2}
                    disableUnderline
                    inputProps={{
                      classes: {
                        icon: classes.icon,
                      },
                    }}
                    onChange={handleChange2x}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          bgcolor: "white",
                          width: "9vw",
                          maxHeight: width > 700 ? "18vw" : "50vw",
                          "& .MuiMenuItem-root": {
                            padding: "0.1vw 0.1vw",
                            width: "100%",
                            height: "2vw",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: width > 700 ? "0.85vw" : "2.8vw",
                            lineHeight: width > 700 ? "1.2vw" : "3.5vw",
                            minHeight: width > 700 ? "1.5vw" : "5vw",
                            color: "#6b6b6b",
                          },
                        },
                      },
                    }}
                  >
                    <div style={{ width: width > 700 ? "9vw" : "25vw" }}>
                      <input
                        type="number"
                        style={{ width: width > 700 ? "9vw" : "25vw" }}
                        onChange={(e) => {
                          setCountryside(
                            cuntrycide.filter((x) =>
                              x?.dial_code.includes(e.target.value)
                            )
                          );
                          console.log(
                            cuntrycide.filter((x) =>
                              x?.dial_code.includes(e.target.value)
                            )
                          );
                        }}
                      />
                    </div>
                    {/* {countryside &&
                      countryside?.filter(person => person.name == "India").map((filteredPerson, index) => {
                        return (
                          <MenuItem
                            onClick={() => {
                              setCountrycode(filteredPerson?.dial_code);
                            }}
                            value={index + 1}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                marginTop: "0.5vw",
                              }}
                            >
                              {filteredPerson?.dial_code} {" "} {filteredPerson?.code}
                            </div>
                          </MenuItem>
                        );
                      })} */}

                    {countryside &&
                      countryside?.map((code, index) => {
                        // console.log("code?.dial_code index ",)
                        return (
                          <MenuItem
                            onClick={() => {
                              setCountrycode(code?.dial_code);
                            }}
                            value={index + 1}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                marginTop: "0.5vw",
                              }}
                            >
                              {code?.dial_code} {code?.code}
                            </div>
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <input
              type="number"
              style={{ paddingLeft: width > 700 ? "11vw" : "27vw" }}
              name="mobile"
              // value={mobile}
              // onChange={(e) => {
              //   setMobile(e.target.value);
              // }}
              value={formValues.mobile}
              onChange={handleChangeFormVal}
            />
            {width > 700 && (
              <CloseIcon
                style={{
                  position: "relative",
                  right: "2vw",
                  top: "1.3vw",
                  fontSize: "1.3vw",
                }}
              />
            )}
          </div>
          <p style={{ color: "red", fontSize: "1vw" }}>
            {validateMobile ? validateMobile : ""}
          </p>
          <p style={{ color: "red", fontSize: "1vw" }}>{formErrors.mobile}</p>
          <div className="jobpodtedfieldtitile">Email *</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              style={{ width: "29.2vw" }}
              name="email"
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
              // value={email}
              value={formValues.email}
              onChange={handleChangeFormVal}
            />
          </div>
          <p style={{ color: "red", fontSize: "1vw" }}>
            {validateEmail ? validateEmail : ""}
          </p>
          <p style={{ color: "red" }}>{formErrors.email}</p>
          <div className="jobpodtedfieldtitile">Location *</div>
          <div
            style={{ display: "flex", alignItems: "center", fontWeight: "500" }}
          >
            <div
              onClick={() => setCateaddcheckbox1(true)}
              className="checkboxfromcate"
              style={{ marginRight: "2vw" }}
            >
              <div>
                {cateaddcheckbox1 ? <img src={img51} /> : <img src={img4} />}{" "}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "500",
                }}
              >
                On Site
              </div>
            </div>
            <div
              onClick={() => {
                setCateaddcheckbox1(false);
              }}
              className="checkboxfromcate"
            >
              <div>
                {cateaddcheckbox1 ? <img src={img4} /> : <img src={img51} />}{" "}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "500",
                }}
              >
                Remote
              </div>
            </div>
          </div>
          {cateaddcheckbox1 ? (
            <div>
              <div
                style={{
                  left: "0vw",
                  padding: "0vw",
                  width: width > 700 ? "95%" : "100%",
                  marginLeft: "0",
                  marginTop: "2vw",
                }}
                className="loginfield"
                onClick={handleClickx3}
              >
                <TextField
                  id="outlined-basic"
                  label="Location"
                  variant="outlined"
                  disabled
                  value={studyset}
                  style={{ width: "100%", padding: "0vw 1omportant" }}
                  InputLabelProps={{
                    style: {
                      fontSize: width > 700 ? "1vw" : "3vw",
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
                      position: "relative",
                      fontSize: width > 700 ? "1.5vw" : "5vw",
                      right: width > 700 ? "2vw" : "5vw",
                      top: width > 700 ? "1vw" : "3vw",
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
                <div
                  style={{
                    maxHeight: width > 700 ? "40vw" : "40vw",
                    overflow: "scroll",
                  }}
                >
                  <Typography
                    sx={{
                      p: 1,
                      pl: 1,
                      ml: 1,
                      width: width > 700 ? "32.5vw" : "80vw",
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
                        width: "95%",
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
                      width: width > 700 ? "32.5vw" : "80vw",
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
                          width: width > 700 ? "32.5vw" : "80vw",
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
            </div>
          ) : (
            ""
          )}
          <div className="checktemandc">
            <div
              className="checkbox"
              onClick={() => {
                setCheckone(!checkone);
                setErroeshow(!ErrorCheck);
              }}
              required="required"
            >
              {checkone ? (
                <DoneIcon
                  style={{
                    fontSize: width > 700 ? "0.81vw" : "3vw",
                    color: "blueviolet",
                    fontWeight: "600",
                  }}
                />
              ) : (
                ""
              )}{" "}
            </div>
            <div className="checktermandconditiontext">
              I agree the{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => window.open("/termsandconditions", "_blank")}
              >
                Terms and Condition *
              </span>
            </div>
          </div>
          <span style={{ color: "red", fontSize: "10px" }}>
            {ErrorCheck ? <span>Please Click on Terms and Condition</span> : ""}
          </span>
          <div className="checktemandc">
            <div
              className="checkbox"
              onClick={() => {
                setCheckone1(!checkone1);
                setErroeshow(!ErrorCheck2);
              }}
            >
              {checkone1 ? (
                <DoneIcon
                  style={{
                    fontSize: width > 700 ? "0.81vw" : "3vw",
                    color: "blueviolet",
                    fontWeight: "600",
                  }}
                />
              ) : (
                ""
              )}{" "}
            </div>
            <div className="checktermandconditiontext">
              I agree the{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => window.open("/privacypolicy", "_blank")}
              >
                Privacy Policy *
              </span>
            </div>
          </div>
          <span style={{ color: "red", fontSize: "10px" }}>
            {ErrorCheck2 ? <span>Please Click on Privacy Policy *</span> : ""}
          </span>
          <div className="homejobbuttons">
            <button style={{ background: "white" }}
            //  onClick={handleClose}
             onClick={handleOpenx}
             >
              Cancel
            </button>
            <button
              style={{ background: "white" }}
              onClick={() => {
                // setEmail("");
                setMobile();
                setName("");
                setDesc("");
                setFile();
                settitle("");
              }}
            >
              Reset
            </button>
            <button
              // disabled={checkone && checkone1 ? false : true}
              style={{ color: "white" }}
              onClick={handlePostJOb}
            >
              Submit
            </button>
            <Modal
              //   hideBackdrop
              open={openx}
              onClose={handleClosex}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={width > 700 ? style : style2}>
                <Homejobconfirm
                  width={width}
                  handleClose={handleClose}
                  handleClosex={handleClosex}
                  workTitle={worktitile}
                  trackingId={trackingid}
                  password={password}
                  username={username}
                  email={formValues.email}
                />
              </Box>
            </Modal>
          </div>
          {/* {erroeshow ? (
            <div style={{ color: "red" }} className="jobpodtedfieldtitile">
              {" "}
              *Email and Mobile should be Correct and Unique{" "}
            </div>
          ) : (
            ""
          )}{" "} */}
        </div>
      </div>

   </div>
  );
}
