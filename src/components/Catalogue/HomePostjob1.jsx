import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import img51 from "../../assets/Web 1280 – 14/Group 10219.svg";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { Backdrop, TextField } from "@mui/material";
import Popover from "@mui/material/Popover";
import img4 from "../../assets/Web 1280 – 14/Ellipse 1375.svg";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import imgxxx from "../../assets/jobhome/Group 8797.svg";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import img2 from "../../assets/file.svg";
import img3 from "../../assets/close.svg";

import axios from "axios";
import API_HOST from "../../env";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Fade from "@mui/material/Fade";
import { useNavigate } from "react-router";

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

export default function HomePostjob1({
  width,
  handleClose,
  SelectedCategory,
  SelectedCategoryId,
  showBudget,
  showDuration,
  SubSelectedCategory,
  SubSelectedCategoryId,
  catalogueID,
  catalogue,
}) {
  const classes = useStyles();

  const [arrayoffiles, setArrayoffiles] = useState([]);

  const [cateaddcheckbox1, setCateaddcheckbox1] = useState(true);
  /* VALIDATION FUNCTIONALITY */
  const initialValues = {
    name: "",
    title: "",
    // desc: "",
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

    if (!values.title) {
      errors.title = "Title is required!";
    }

    setLoading(false);
    return errors;
  };

  const [name, setName] = useState("");
  const [open121, setOpen121] = React.useState(false);
  const handleClose121 = () => {
    setOpen121(false);
  };
  const handleToggle121 = () => {
    setOpen121(!open121);
  };
  const navigate = useNavigate();
  const [title, settitle] = useState("");
  const [desc, setDesc] = useState("");

  const [datestart, setDatestart] = useState();
  const [dateend, setDateend] = useState();

  const [mobile, setMobile] = useState();

  const [validateMobile, setValidateMobile] = useState("");
  const [validateEmail, setValidateEmail] = useState("");
  const [checkedtocompany, setCheckedtocompany] = useState(false);
  const [checkedtocompany_2, setCheckedtocompany_2] = useState(false);
  const [checkboxValidaData, setcheckboxValidaData] = useState("");
  const [checkboxValidaData_2, setcheckboxValidaData_2] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePostJOb = () => {
    if (checkedtocompany === false) {
      setcheckboxValidaData("Please Select the Terms & Condition");
      return false;
    }
    if (checkedtocompany_2 === false) {
      setcheckboxValidaData_2("Please Select the Privacy Policy");
      return false;
    }
    // if(file.size > 512000){
    //   alert("File size cannot exceed more than 512 kb")
    // }
    setValidateMobile("");
    setValidateEmail("");
    if (Object.getOwnPropertyNames(validate(formValues)).length !== 0) {
      setFormErrors(validate(formValues));
      return false;
    }
    if (Object.getOwnPropertyNames(validate(formValues)).length === 0) {
      setFormErrors(validate(formValues));
    }

    const formdata = new FormData();

    formdata.append("jobTitle", formValues.title);
    formdata.append("budget", showBudget);
    formdata.append("duration", showDuration);
    formdata.append("startDate", datestart);
    formdata.append("endDate", dateend);
    formdata.append("description", catalogue?.description);
    formdata.append("catalogueId", catalogueID);
    formdata.append("remote", !cateaddcheckbox1);
    formdata.append("location", studyset);
    arrayoffiles?.map((data) => {
      formdata.append("fileName", data);
    });
    formdata.append("skills", JSON.stringify(skillset));
    handleToggle121();
    axios
      .post(`${API_HOST}/bookings/userBook`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        handleClose121();
        navigate("/dashbaord/createWork");
      })
      .catch((err) => {
        setLoading(false);
        setErroeshow(true);
        handleClose121();
        if (
          err.response.data.fails.data.code ===
          "auth/phone-number-already-exists"
        ) {
          setValidateMobile(err.response.data.fails.data.message);
        }

        if (err.response.data.fails.data.code === "auth/email-already-exists") {
          setValidateEmail(err.response.data.fails.data.message);
        }
      });
  };
  const [erroeshow, setErroeshow] = useState(false);

  const [studyset, setstudyset] = useState("");

  const [arrayoflongstudy, setArrayoflongstudy] = useState([]);

  const [skillset, setskillset] = useState([]);
  // const [skilltext, setskilltext] = useState("");
  const [setSelectedCategory, setSetSelectedCategory] = useState("");
  // const [subcateid, setsubcateid] = useState("");

  const [locationname, setLocationname] = useState("");

  const [anchorElx4, setAnchorElx4] = useState(null);

  const openx4 = Boolean(anchorElx4);
  const idx4 = openx4 ? "simple-popover" : undefined;

  const handleClickx4 = (event) => {
    setAnchorElx4(event.currentTarget);
  };

  const handleClosex4 = () => {
    setAnchorElx4(null);
  };
  useEffect(() => {
    axios
      .get(
        `${API_HOST}/location/viewLocation?pageSize=100&pageNumber=1&search=${locationname}`
      )
      .then((res) => {
        setArrayoflongstudy(res?.data?.success?.data);
      });
  }, [locationname]);

  const handleSearchCategory = (e) => {
    if (SelectedCategoryId && SubSelectedCategoryId) {
      axios
        .get(
          `${API_HOST}/theSkill/viewSkill?pageSize=8&pageNumber=1&skill=${e.target.value}&categoryId=${SelectedCategoryId}&subCategoryId=${SubSelectedCategoryId}`
        )
        .then((res) => {
          setAllcategory(res?.data?.success?.data);
          if (res?.data?.success?.data?.length > 0) {
            setIstdropdown(true);
          }
        });
    }
  };

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
          <div
            className="loader_circular"
            style={{ display: "flex", justifyContent: "flex-end" }}
          ></div>
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
            <input type="text" value={SelectedCategory} disabled />
          </div>
          <div className="jobpodtedfieldtitile">Sub Category</div>
          <div className="jobpostfieldinputbox">
            <input type="text" value={SubSelectedCategory} disabled />
          </div>

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
          </div>
          <p style={{ color: "red" }}>{formErrors.title}</p>

          <div className="jobpodtedfieldtitile"></div>
          <div className="row">
            <div
              style={{ width: width <= 700 && "50%" }}
              className="col-sm-6 jobpodtedfieldtitile"
            >
              Budget
            </div>
            <div
              style={{ width: width <= 700 && "50%" }}
              className="col-sm-6 jobpodtedfieldtitile"
            >
              Duration
            </div>
          </div>
          <div
            style={{ left: "0vw", width: "99%", margin: "0vw 0.5vw 2vw 0vw" }}
            className="loginfield"
          >
            <div className="jobpostfieldinputbox">
              <input type="text" value={showBudget} disabled />
            </div>
            <div className="jobpostfieldinputbox ms-3">
              <input type="text" value={showDuration} disabled />
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
          <div className="jobpodtedfieldtitile">Image/Documents </div>
          <div className="fileinputbox1">
            <label htmlFor="fileupload">
              <div>
                <FileUploadIcon
                  style={{
                    fontSize: width > 700 ? "3vw" : "9vw",
                    color: "#8f92a173",
                    cursor: "pointer",
                  }}
                />
              </div>
              <input
                type="file"
                name="fileupload"
                id="fileupload"
                hidden
                onChange={(e) => {
                  setArrayoffiles([...arrayoffiles, e.target.files[0]]);
                }}
              />
              <div
                className="min-maxhomejob"
                style={{ textAlign: "center", width: "100%" }}
              >
                Drag and Drop or Browse to upload
              </div>
            </label>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              fontSize: width > 700 ? "0.8vw" : "2.8vw",
              paddingRight: "2vw",
              textAlign: "right",
            }}
          >
            Please upload file having extensions .jpeg/ .jpg/ .png only.
            <br />
            Image should be less then 512 kb.
          </div>
          <div
            className={arrayoffiles?.length > 0 ? "inputfilesshowncatebox" : ""}
          >
            {arrayoffiles?.length > 0 &&
              arrayoffiles?.map((file, index) => {
                return (
                  <div className="inputfilesshowncatboxsingle">
                    <div className="inputfilesshowncatboxsingleimg">
                      <img src={img2} alt="" />
                    </div>
                    <div className="fileselctednamecate">{file?.name}</div>
                    <div className="inputfilesshowncatboxsingleimg">
                      <img
                        style={{
                          width: width > 700 ? "1.5vw":"4vw",
                          marginLeft: "1vw",
                          cursor: "pointer",
                        }}
                        src={img3}
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

          <div
            style={{
              marginBottom: "0.5vw",
              marginTop: "1.3vw",
              fontSize: width > 700 ? "1.2vw" : "3.3vw",
            }}
            className="jobpodtedfieldtitile"
          >
            Skills
          </div>
          <div
            style={{ marginRight: "4vw", height: "fit-content" }}
            className="boxofskillsp"
            onClick={() => {
              setIstdropdown(false);
            }}
          >
            <div className="savedskillpopupcardp">
              {skillset?.slice(0, 10)?.map((skill, index) => {
                return (
                  <div
                    style={{
                      borderRadius: "2vw",
                      padding: " 0.5vw 1vw",
                      margin: "0.51vw 0.5vw",
                    }}
                    className="savedskillwrapsinglep"
                  >
                    {skill}
                    <div
                      onClick={() => {
                        setskillset([
                          ...skillset.slice(0, index),
                          ...skillset.slice(index + 1, skillset.length),
                        ]);
                      }}
                    >
                      <CloseIcon
                        style={{
                          fontSize:  width > 700 ?"1.4vw":"4vw",
                          marginLeft: "0.61vw",
                          cursor: "pointer",
                        }}
                      />
                    </div>{" "}
                  </div>
                );
              })}
              <div style={{ height:width > 700 ? "3vw":"9vw" }}>
                {skillset?.length < 10 ? (
                  <input
                    style={{
                      border: "none",
                      outline: "none",
                      background: "white",
                      height:width > 700 ? "3vw":"7vw",
                      padding: "0.5vw",
                      width: "fit-content",
                      minWidth: "5vw",
                      fontSize:width > 700 ? "1.1vw":"3vw",
                    }}
                    type="text"
                    placeholder="type here...."
                    value={setSelectedCategory}
                    onChange={(e) => {
                      handleSearchCategory(e);
                      setSetSelectedCategory(e.target.value);
                    }}
                    // onKeyPress={(e) => {
                    //   if (e.key === "Enter") {
                    //     e.preventDefault();
                    //     if (skillset.indexOf(setSelectedCategory) < 0) {
                    //       setskillset(
                    //         [...skillset, setSelectedCategory].slice(0, 10)
                    //       );
                    //     }
                    //   }
                    //  setSetSelectedCategory("")
                    // }}
                  />
                ) : (
                  ""
                )}
                {istdropdown ? (
                  <Fade timeout={100}>
                    <div
                      onMouseLeave={() => setIstdropdown(false)}
                      className="dropdownboxhoverdefault"
                      style={{
                        left: "1vw",
                        width: "fit-content",
                        opacity: "1",
                        visibility: "visible",
                        zIndex: "300",
                      }}
                    >
                      {allcategory?.length > 0 &&
                        allcategory?.slice(0, 8)?.map((data) => {
                          return (
                            <Typography
                              sx={{
                                p: 2,
                                pb: 0.5,
                                pt: 1,
                                fontSize: "1vw",
                                fontWeight: "500",
                                fontFamily: "poppins",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                if (skillset.indexOf(data?.skill) < 0) {
                                  setskillset(
                                    [...skillset, data?.skill].slice(0, 10)
                                  );
                                }
                                setIstdropdown(false);
                                setSetSelectedCategory("");
                              }}
                            >
                              {data?.skill}
                            </Typography>
                          );
                        })}
                    </div>
                  </Fade>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

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
          {/*------------- Location Code Starts ---------------- */}
          {cateaddcheckbox1 ? (
            <div>
              <div
                style={{ left: "0vw", width:width > 700 ? "31vw":"84vw", marginLeft: "0" }}
                className="loginfield"
                onClick={handleClickx4}
              >
                <TextField
                  id="outlined-basic"
                  label="Location"
                  variant="outlined"
                  value={studyset}
                  style={{ width: "100%" }}
                  InputLabelProps={{
                    style: {
                      fontSize:width > 700 ? "1vw":"3vw",
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
                      fontSize:width > 700 ? "1.5vw":"4vw",
                      position: "relative",
                      right:width > 700 ? "2vw":"5vw",
                      top: width > 700 ?"1vw":"2vw",
                    }}
                  />
                </span>
              </div>
              <Popover
                id={idx4}
                open={openx4}
                anchorEl={anchorElx4}
                onClose={handleClosex4}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <div style={{ maxHeight:width > 700 ? "18vw":"40vw", overflow: "scroll" }}>
                  <Typography
                    sx={{
                      p: 1,
                      pl: 1,
                      ml: 1,
                      width: width > 700 ?"40vw":"80vw",
                      position: "fixed",
                      background: "white",
                      zIndex: "10",
                    }}
                  >
                    <input
                      onChange={(e) => {
                        setLocationname(e.target.value);
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
                      width:width > 700 ? "40vw":"80vw",
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
                          setstudyset(
                            data?.area + ", " + data?.city + ", " + data?.state
                          );
                          handleClosex4();
                        }}
                      >
                        {data?.area + ", " + data?.city + ", " + data?.state}
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
            <input
              type="checkbox"
              onChange={() => {
                setCheckedtocompany(!checkedtocompany);
                setcheckboxValidaData("");
              }}
              name=""
              id="checkbox"
            />
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
            {checkboxValidaData}
          </span>
          <div className="checktemandc">
            <input
              type="checkbox"
              onChange={() => {
                setCheckedtocompany_2(!checkedtocompany_2);
                setcheckboxValidaData_2("");
              }}
              name=""
              id="checkbox"
            />
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
            {checkboxValidaData_2}
          </span>
          <div className="homejobbuttons">
            <button
              style={{ background: "white" }}
              onClick={handleClose}
              //  onClick={handleOpenx}
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
                // setFile();
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
          </div>
        </div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open121}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </div>
  );
}
