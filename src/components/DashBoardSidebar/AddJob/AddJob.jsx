import React, { useEffect, useState } from "react";
import "./addpost.css";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import img33 from "../../../assets/Landing page/Group 1179.svg";
import img51 from "../../../assets/Web 1280 – 14/Group 10219.svg";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";
import Popover from "@mui/material/Popover";
import img4 from "../../../assets/Web 1280 – 14/Ellipse 1375.svg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import img from "../../../assets/Web 1280 – 14/Icon.svg";
import img1 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import img21 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import DoneIcon from "@mui/icons-material/Done";
import Modal from "@mui/material/Modal";
import axios from "axios";
import API_HOST from "../../../env";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import {  useNavigate } from "react-router";

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

export default function AddJob({ handleClose, setSelectedCategory }) {
  const classes = useStyles();
  const [age4, setAge4] = React.useState(0);
  const [age5, setAge5] = React.useState(0);
  const handleChange4x = (event) => {
    setAge4(event.target.value);
  };
  const handleChange5x = (event) => {
    setAge5(event.target.value);
  };

  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const handleClosex = () => setOpenx(false);

  const [checkone, setCheckone] = useState(false);
  const [checkone1, setCheckone1] = useState(false);
  const [cateaddcheckbox1, setCateaddcheckbox1] = useState(true);
  /* VALIDATION FUNCTIONALITY */

  const validate = () => {
    if (
      title &&
      desc &&
      minBudegt &&
      maxBudegt &&
      dateend &&
      datestart &&
      categogryid &&
      subcateid
    ) {
      return true;
    } else {
      if (!title) {
        settitleerror("Title is required!");
      }
      if (!categogryid) {
        setCategoryerror("Category is required!");
      }
      if (!subcateid) {
        setCategoryerror("Subcategory is required!");
      }
      if (!desc) {
        setDescerror("Description is required!");
      }
      if (!minBudegt && !maxBudegt) {
        setBudgetError("Select Budget value");
      }
      if (!dateend && !datestart) {
        setDateerror("Select Date ");
      }

      return false;
    }
  };

  const [title, settitle] = useState("");
  const [titleerror, settitleerror] = useState("");
  const [desc, setDesc] = useState("");
  const [descerror, setDescerror] = useState("");

  const [Categoryerror, setCategoryerror] = useState("");
  const [Category, setCategory] = useState("");
  const [minBudegt, setMinBudegt] = useState();
  const [maxBudegt, setMaxBudegt] = useState();

  const navigate = useNavigate();

  const [budgetError, setBudgetError] = useState("");
  const [datestart, setDatestart] = useState();
  const [dateend, setDateend] = useState();
  const [dateerror, setDateerror] = useState("");
  const [ErrorCheck, setErrorCheck] = useState(false);
  const [ErrorCheck2, setErrorCheck2] = useState(false);

  const handlePostJOb = () => {
    if (!(checkone && checkone1)) {
      setErrorCheck(true);
      setErrorCheck2(true);
      return false;
    } else if (!validate()) {
      return false;
    }
    const formdata = new FormData();
    formdata.append("workTitle", title);
    arrayoffiles?.map((data) => {
      formdata.append("fileName", data);
    });
    formdata.append("shortDescription", desc);
    formdata.append("jobPostingDate", datestart);
    formdata.append("terminationDate", dateend);
    formdata.append("category", categogryid);
    formdata.append("subCategory", subcateid);
    formdata.append("maximuBudget", maxBudegt);
    formdata.append("minimumBudget", minBudegt);
    formdata.append("remote", !cateaddcheckbox1);

    if (cateaddcheckbox1) {
      formdata.append("onSite", studyset1 ? studyset1 : "Remote");
    }

    skillset?.length > 0 &&
      skillset?.map((data, index) => {
        formdata.append(`skill${index + 1}`, data);
      });

    axios
      .post(`${API_HOST}/jobPost/jobPostBy_admin`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        handleOpenp();
      })
      .catch((err) => {
        console.log("err", err.response);
        if (
          err.response.data.fails.data.code ===
          "auth/phone-number-already-exists"
        )
          setErroeshow(true);
      });
  };
  const [erroeshow, setErroeshow] = useState(false);

  const [openp, setOpenp] = React.useState(false);

  const handleOpenp = () => {
    setOpenp(true);
    setTimeout(function () {
      setOpenp(false);
      handleOpenx();
      navigate("/dashbaord/createWork");
    }, 5000);
  };

  const handleClosep = () => {
    setOpenp(false);
    handleOpenx();
    navigate("/dashbaord/createWork");
  };

  const [studyset, setstudyset] = useState("");
  const [studyset1, setstudyset1] = useState("");

  const [anchorElx3, setAnchorElx3] = React.useState(null);
  const handleClickx3 = (event) => {
    setAnchorElx3(event.currentTarget);
  };

  const handleClosex3 = () => {
    setAnchorElx3(null);
  };

  const openx3 = Boolean(anchorElx3);
  const idx3 = openx3 ? "simple-popover" : undefined;

  const [anchorElx4, setAnchorElx4] = React.useState(null);
  const handleClickx4 = (event) => {
    setAnchorElx4(event.currentTarget);
  };

  const handleClosex4 = () => {
    setAnchorElx4(null);
  };

  const openx4 = Boolean(anchorElx4);
  const idx4 = openx4 ? "simple-popover" : undefined;

  const [arrayoflongstudy, setArrayoflongstudy] = useState([]);
  const [arrayoflongstudy1, setArrayoflongstudy1] = useState([]);

  const [skillset, setskillset] = useState([]);

  const [subcateid, setsubcateid] = useState("");

  const handleSearchCategory = (e) => {
    if (categogryid && subcateid) {
      axios
        .get(
          `${API_HOST}/theSkill/viewSkill?pageSize=8&pageNumber=1&skill=${e.target.value}&categoryId=${categogryid}&subCategoryId=${subcateid}`
        )
        .then((res) => {
          setAllcategory(res?.data?.success?.data);
          setOpenx(true);
          if (res?.data?.success?.data?.length > 0) {
            setIstdropdown(true);
          }
        });
    }
  };
  const [arrayoffiles, setArrayoffiles] = useState([]);
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

  const [arrayoflongdegree, setArrayoflongdegree] = useState();
  const [searchCategorysearch, setSearchCategorysearch] = useState("");
  useEffect(() => {
    axios
      .get(
        `${API_HOST}/theCategory/viewCategory?pageSize=50&pageNumber=1&category=${searchCategorysearch}`
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
  const [searchsubCategorysearch, setSearchsubCategorysearch] = useState("");
  const [categogryid, setCategogryid] = useState();

  useEffect(() => {
    if (categogryid) {
      axios
        .get(
          `${API_HOST}/subCategory/viewSubCategory?pageSize=50&pageNumber=1&subCategory=${searchsubCategorysearch}&categoryId=${categogryid}`
        )
        .then((res) => {
          setArrayoflongstudy(res?.data?.success?.data);
        });
    }
  }, [searchsubCategorysearch, categogryid]);

  const [arrayofminbudget, setArrayofminbudget] = useState([]);
  useEffect(() => {
    axios.get(`${API_HOST}/budget/viewBudget`).then((res) => {
      setArrayofminbudget(res?.data?.success?.data);
    });
  }, []);

  const [locationname, setLocationname] = useState("");

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/location/viewLocation?pageSize=100&pageNumber=1&search=${locationname}`
      )
      .then((res) => {
        setArrayoflongstudy1(res?.data?.success?.data);
      });
  }, [locationname]);

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
          paddingTop: "1vw",
        }}
        className="homepostjob-right"
      >
        <div className="jobpostedformheading">Add Create Work</div>

        <div>
          <div className="jobpodtedfieldtitile">Job Title *</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
                settitleerror("");
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
                settitle("");
              }}
            />
          </div>
          <p style={{ color: "red", fontSize: "0.9vw" }}>{titleerror}</p>

          <div style={{ display: "flex", alignItems: "center", width: "97%" }}>
            <div style={{ width: "50%" }}>
              <div className="jobpodtedfieldtitile">Category *</div>
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
                  value={Category}
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
                  style={{
                    maxHeight: "18vw",
                    overflow: "scroll",
                    width: "31vw",
                  }}
                >
                  <Typography
                    sx={{
                      p: 1,
                      pl: 1,
                      ml: 1,
                      pr: 0,
                      width: "30vw",
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
                            setCategory(data?.category);
                            handleClosex2();
                            setCategoryerror();
                            setCategogryid(data?._id);
                          }}
                        >
                          {data?.category}
                        </Typography>
                      );
                    })}
                </div>
              </Popover>
              <p style={{ color: "red", fontSize: "0.9vw" }}>{Categoryerror}</p>{" "}
            </div>

            <div style={{ width: "50%" }}>
              <div className="jobpodtedfieldtitile">Sub-Category *</div>
              <div
                style={{ left: "0vw", width: "94%", marginLeft: "0%" }}
                className="loginfield"
                onClick={handleClickx3}
              >
                <TextField
                  id="outlined-basic"
                  label="Sub Category *"
                  variant="outlined"
                  disabled
                  value={studyset}
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
                    maxHeight: "18vw",
                    overflow: "scroll",
                    width: "31vw",
                  }}
                >
                  <Typography
                    sx={{
                      p: 1,
                      pl: 1,
                      ml: 1,
                      pr: 0,
                      width: "30vw",
                      position: "fixed",
                      background: "white",
                      zIndex: "10",
                    }}
                  >
                    <input
                      onChange={(e) => {
                        setSearchsubCategorysearch(e.target.value);
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

                  {arrayoflongstudy?.length > 0 &&
                    arrayoflongstudy?.map((data, index) => {
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
                            setstudyset(data?.subCategory);
                            setsubcateid(data?._id);
                            setCategoryerror("");
                            handleClosex3();
                          }}
                        >
                          {data?.subCategory}
                        </Typography>
                      );
                    })}
                </div>
              </Popover>
              <p style={{ color: "red", fontSize: "0.9vw" }}>{Categoryerror}</p>
            </div>
          </div>
          <div
            style={{
              marginBottom: "0.5vw",
              marginTop: "1.3vw",
              fontSize: "1.2vw",
            }}
            className="jobpodtedfieldtitile"
          >
            Skills
          </div>
          <div
            style={{
              marginRight: "4vw",
              height: "fit-content",
              padding: "0.3vw",
            }}
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
                      borderRadius: "1vw",
                      padding: " 0.5vw 1vw",
                      margin: "0.31vw 0.5vw",
                      height: "2.1vw",
                      fontSize: "0.9vw",
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
                          fontSize: "1.4vw",
                          marginLeft: "0.61vw",
                          cursor: "pointer",
                        }}
                      />
                    </div>{" "}
                  </div>
                );
              })}
              <div style={{ height: "3vw" }}>
                {skillset?.length < 10 ? (
                  <input
                    style={{
                      border: "none",
                      outline: "none",
                      background: "white",
                      height: "3vw",
                      padding: "0.5vw",
                      width: "fit-content",
                      minWidth: "5vw",
                      fontSize: "1.1vw",
                    }}
                    type="text"
                    placeholder="type here...."
                    value={setSelectedCategory1}
                    onChange={(e) => {
                      handleSearchCategory(e);
                      setSetSelectedCategory1(e.target.value);
                    }}
                    // onKeyPress={(e) => {
                    //   if (e.key === "Enter") {
                    //     e.preventDefault();
                    //     if (skillset.indexOf(setSelectedCategory1) < 0) {
                    //       setskillset(
                    //         [...skillset, setSelectedCategory1].slice(0, 10)
                    //       );
                    //     }
                    //   }
                    //  setSetSelectedCategory1("")
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
                                setSetSelectedCategory1("");
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

          <div className="jobpodtedfieldtitile">Description</div>
          <div className="jobpostfieldinputbox">
            <textarea
              type="text"
              name="desc"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
                setDescerror("");
              }}
            />
          </div>
          <p style={{ color: "red", fontSize: "0.9vw" }}>{descerror}</p>

          <div className="jobpodtedfieldtitile">Budget *</div>
          <div style={{ display: "flex", alignItems: "center", width: "97%" }}>
            <div style={{ width: "50%" }}>
              <div className="jobpodtedfieldtitile">Minimum *</div>
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
                      {arrayofminbudget?.length > 0 &&
                        arrayofminbudget?.map((data, index) => {
                          return (
                            <MenuItem
                              onClick={() => {
                                setMinBudegt(data?.minimumBudget);
                                setBudgetError("");
                              }}
                              value={index + 1}
                            >
                              $ {data?.minimumBudget}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <p style={{ color: "red", fontSize: "1vw" }}>{budgetError}</p>
            </div>

            <div style={{ width: "50%" }}>
              <div className="jobpodtedfieldtitile">Maximum *</div>
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
                      value={age5}
                      disableUnderline
                      inputProps={{
                        classes: {
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
                      {arrayofminbudget?.length > 0 &&
                        arrayofminbudget?.map((data, index) => {
                          return (
                            <MenuItem
                              onClick={() => {
                                setMaxBudegt(data?.maximumBudget);
                                setBudgetError("");
                              }}
                              value={index + 1}
                            >
                              $ {data?.maximumBudget}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                </Box>
              </div>{" "}
              <p style={{ color: "red", fontSize: "1vw" }}>{budgetError}</p>
            </div>
          </div>
          <div className="jobpodtedfieldtitile">Duration *</div>
          <div style={{ display: "flex", alignItems: "center", width: "97%" }}>
            <div style={{ width: "50%" }}>
              <div className="jobpodtedfieldtitile">Start Date *</div>
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
                    setDateerror("");
                  }}
                />
              </div>

              <p style={{ color: "red" }} className="redp">
                {dateerror}
              </p>
            </div>

            <div style={{ width: "50%" }}>
              <div className="jobpodtedfieldtitile">End Date *</div>

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
                    setDateend(e.target.value);
                    setDateerror("");
                  }}
                />
              </div>

              <p style={{ color: "red" }} className="redp">
                {dateerror}
              </p>
            </div>
          </div>

          <div className="jobpodtedfieldtitile">Image/Documents </div>
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
            style={{
              display: "flex",
              justifyContent: "flex-end",
              fontSize: "0.8vw",
              paddingRight: "4.5vw",
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
                style={{ left: "0vw", width: "41vw", marginLeft: "0" }}
                className="loginfield"
                onClick={handleClickx4}
              >
                <TextField
                  id="outlined-basic"
                  label="Location"
                  variant="outlined"
                  disabled
                  value={studyset1}
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
                id={idx4}
                open={openx4}
                anchorEl={anchorElx4}
                onClose={handleClosex4}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <div style={{ maxHeight: "18vw", overflow: "scroll" }}>
                  <Typography
                    sx={{
                      p: 1,
                      pl: 1,
                      ml: 1,
                      width: "40vw",
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
                      width: "40vw",
                      cursor: "pointer",
                    }}
                  ></Typography>

                  {arrayoflongstudy1?.map((data, index) => {
                    return (
                      <Typography
                        sx={{
                          p: 0.51,
                          pl: 1,
                          ml: 1,
                          width: "32.5vw",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setstudyset1(
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
            <div
              className="checkbox"
              onClick={() => {
                setCheckone(!checkone);
                setErroeshow(!ErrorCheck);
                setErrorCheck(false);
              }}
              required="required"
            >
              {checkone ? (
                <DoneIcon
                  style={{
                    fontSize: "0.81vw",
                    color: "blueviolet",
                    fontWeight: "600",
                  }}
                />
              ) : (
                ""
              )}{" "}
            </div>
            <div className="checktermandconditiontext">
              I agree the <span>Terms and Condition *</span>
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
                setErrorCheck2(false);
              }}
            >
              {checkone1 ? (
                <DoneIcon
                  style={{
                    fontSize: "0.81vw",
                    color: "blueviolet",
                    fontWeight: "600",
                  }}
                />
              ) : (
                ""
              )}{" "}
            </div>
            <div className="checktermandconditiontext">
              I agree the <span>Privacy Policy *</span>
            </div>
          </div>
          <span style={{ color: "red", fontSize: "10px" }}>
            {ErrorCheck2 ? <span>Please Click on Privacy Policy *</span> : ""}
          </span>
          <div className="homejobbuttons">
            <button style={{ background: "white" }} onClick={handleClose}>
              Cancel
            </button>
            <button
              style={{ background: "white" }}
              onClick={() => {
                setDesc("");

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
      </div>

      <Modal
        open={openp}
        onClose={handleClosep}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style1}>
          <div className="imgboxofrewardpostlogo">
            <img src={img33} alt="" />{" "}
            <span>
              {" "}
              <CloseIcon
                style={{
                  position: "relative",
                  left: "23vw",
                  bottom: "22vw",
                  fontSize: "1.5vw",
                  cursor: "pointer",
                }}
                onClick={() => handleClosep()}
              />
            </span>
          </div>
          <div className="rewardtiitle500">Successfully Posted the Job</div>
          <div className="rewardsubtiitle500">Get your Benefits on below</div>
          <div className="buttonbox500reward">Rs 500 added to your Wallet</div>
          <hr style={{ margin: "1vw 0vw", color: "gray" }} />
          <div className="buttonbox500reward">
            50% offer For all Products{" "}
            <span>
              <ContentCopyIcon
                style={{
                  fontSize: "2vw",
                  position: "relative",
                  left: "3.5vw",
                }}
              />
            </span>
          </div>
          <div
            style={{
              fontSize: "1vw",
              width: "30vw",
              margin: " 0 auto",
              textAlign: "left",
            }}
            className="rewardsubtiitle500"
          >
            Copied
          </div>
          <div style={{ height: "2vw" }}></div>
        </Box>
      </Modal>
    </div>
  );
}
