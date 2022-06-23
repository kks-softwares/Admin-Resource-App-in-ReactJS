import React, { useState } from "react";
import "./profile.css";
import img2 from "../../assets/My profile – 28/Component 71 – 6.svg";
import img1 from "../../assets/My profile – 28/Component 70 – 6.svg";
import Box from "@mui/material/Box";
import imgxx from "../../assets/Success stories Definition/checkmark (1).svg";
import Modal from "@mui/material/Modal";
import { Popover, TextField, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import Profileuserdetaillanguage from "./Profilepopup/Profileuserdetaillanguage";
import Profileuserdetaleducation from "./Profilepopup/Profileuserdetaleducation";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import API_HOST from "../../env";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userSlice";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  maxHeight: "95vh",
  overflow: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const useStyles = makeStyles((theme) => ({
  input: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "0.91vw",
    color: "#263238",
    border: "yellow !important",
  },
}));
export default function Profileuserdetails() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [month1x1, setMonth1x1] = useState("");
  const [year1x1, setyear1x1] = useState("");
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const [anchorElxp, setAnchorElxp] = React.useState(null);
  const handleClickxp = (event) => {
    setAnchorElxp(event.currentTarget);
  };

  const handleClosexp = () => {
    setAnchorElxp(null);
  };

  const openxp = Boolean(anchorElxp);
  const idxp = openxp ? "simple-popover" : undefined;
  const [anchorElx1p1, setAnchorElx1p1] = React.useState(null);
  const handleClickx1p1 = (event) => {
    setAnchorElx1p1(event.currentTarget);
  };

  const handleClosex1p1 = () => {
    setAnchorElx1p1(null);
  };

  const openx1p1 = Boolean(anchorElx1p1);
  const idx1p1 = openx1p1 ? "simple-popover" : undefined;

  const [month1, setMonth1] = useState("");
  const [year1, setyear1] = useState("");

  const [anchorElx, setAnchorElx] = React.useState(null);
  const handleClickx = (event) => {
    setAnchorElx(event.currentTarget);
  };
  const handleClosex = () => {
    setAnchorElx(null);
  };
  const openx = Boolean(anchorElx);
  const idx = openx ? "simple-popover" : undefined;
  const [arrayof100, setArrayof100] = useState([
    "2022",
    "1900",
    "2000",
    "2021",
    "2020",
    "2019",
    "1999",
    "1998",
    "2012",
    "1995",
    "1997",
  ]);
  const [arrayoflong, setArrayoflong] = useState(arrayof100);
  const [arrayoflongto, setArrayoflongto] = useState(arrayof100);

  const [arrayofdegree, setArrayofdegree] = useState([
    "Master of Computer Application (MCA)",
    "Bachler of Computer Application (MCA)",
  ]);
  const [arrayoflongdegree, setArrayoflongdegree] = useState(arrayofdegree);

  const [arrayofstudy, setArrayofstydy] = useState([
    "Computer Science",
    "Computer Science2",
    "Computer Science3",
  ]);
  const [arrayoflongstudy, setArrayoflongstudy] = useState(arrayofstudy);

  const [anchorElx1, setAnchorElx1] = React.useState(null);
  const handleClickx1 = (event) => {
    setAnchorElx1(event.currentTarget);
  };
  const handleClosex1 = () => {
    setAnchorElx1(null);
  };
  const openx1 = Boolean(anchorElx1);
  const idx1 = openx1 ? "simple-popover" : undefined;

  const [anchorElx2, setAnchorElx2] = React.useState(null);
  const handleClickx2 = (event) => {
    setAnchorElx2(event.currentTarget);
  };

  const handleClosex2 = () => {
    setAnchorElx2(null);
  };

  const openx2 = Boolean(anchorElx2);
  const idx2 = openx2 ? "simple-popover" : undefined;
  const [anchorElx3, setAnchorElx3] = React.useState(null);
  const handleClickx3 = (event) => {
    setAnchorElx3(event.currentTarget);
  };

  const handleClosex3 = () => {
    setAnchorElx3(null);
  };

  const openx3 = Boolean(anchorElx3);
  const idx3 = openx3 ? "simple-popover" : undefined;

  const [anchorElx3c, setAnchorElx3c] = React.useState(null);
  const handleClickx3c = (event) => {
    setAnchorElx3c(event.currentTarget);
  };

  const handleClosex3c = () => {
    setAnchorElx3c(null);
  };

  const openx3c = Boolean(anchorElx3c);
  const idx3c = openx3c ? "simple-popover" : undefined;

  const [callagename, setCallagename] = useState("");

  const [degreeset, setDegreeset] = useState("");
  const [studyset, setstudyset] = useState("");
  const [desc, setDesc] = useState("");
  const [desclength, setDesclength] = useState(desc.length);
  const [descriptioncallageadd, setdescriptioncallageadd] = useState("");
  const handleupdatelang = () => {
    if (month1x1 !== "" && year1x1 !== "") {
      const formdata = {
        userId: user?.userId,
        language: month1x1,
        proficiencyLevel: year1x1,
      };
      axios
        .post(`${API_HOST}/users/updateUserLanguage`, formdata)
        .then((res) => {
          window.localStorage.setItem(
            "user",
            JSON.stringify({ ...res.data.success.data })
          );

          dispatch(
            userActions.setUser({
              user: { ...res.data.success.data },
            })
          );
          handleClose1();
        });
    } else {
      if (month1x1 === "" && year1x1 === "") {
        setLangugaeaddwrong(true);
        setLangugaeaddwrong1(true);
      }
      if (month1x1 === "" && year1x1 !== "") {
        setLangugaeaddwrong(true);
        setLangugaeaddwrong1(false);
      }
      if (month1x1 !== "" && year1x1 === "") {
        setLangugaeaddwrong(false);
        setLangugaeaddwrong1(true);
      }
    }
  };

  const [langugaeaddwrong, setLangugaeaddwrong] = useState(false);
  const [langugaeaddwrong1, setLangugaeaddwrong1] = useState(false);

  const handleaddcallage = () => {
    if (callagename !== "") {
      const formdata = {
        userId: user?.userId,
        description: descriptioncallageadd,
        college: callagename,
        degree: degreeset,
        feildOfStudy: studyset,
        startYear: parseInt(month1),
        endYear: parseInt(year1),
      };
      axios
        .post(`${API_HOST}/users/updateEducationDetails`, formdata)
        .then((res) => {
          window.localStorage.setItem(
            "user",
            JSON.stringify({ ...res.data.success.data })
          );

          dispatch(
            userActions.setUser({
              user: { ...res.data.success.data },
            })
          );
          handleClose();
        });
    } else {
      setWrongcallageaddname(true);
    }
  };
  const [wrongcallageaddname, setWrongcallageaddname] = useState(false);

  const handledescriptionupdate = () => {
    axios
      .post(`${API_HOST}/users/editUser`, {
        fullDescription: desc,
        userId: user?.userId,
      })
      .then((res) => {
        window.localStorage.setItem(
          "user",
          JSON.stringify({ ...res.data.success.data })
        );

        dispatch(
          userActions.setUser({
            user: { ...res.data.success.data },
          })
        );
      });
    handleClose3();
  };
  const handletitleupdate = () => {
    axios
      .post(`${API_HOST}/users/editUser`, {
        title: titleuser,
        userId: user?.userId,
      })
      .then((res) => {
        window.localStorage.setItem(
          "user",
          JSON.stringify({ ...res.data.success.data })
        );

        dispatch(
          userActions.setUser({
            user: { ...res.data.success.data },
          })
        );
      });
    handleClose2();
  };
  const [titleuser, setTitleuser] = useState("");
  return (
    <div className="Profileuserdetails-container">
      <div style={{ marginTop: "1vw" }} className="profileuserdetailsone">
        <div className="profiletitleandmenunav">
          <div className="profiledetailstitle">User profile</div>
          <div className="profiledetailnavmanu"></div>
        </div>
        <div className="profileuserdfirst">
          <div className="profileuserfirstone">
            <div className="profileuserfirstonetitle">Earnings</div>
            <div className="profileuserfirstonedata">$60k+</div>
          </div>
          <div className="profileuserfirstone">
            <div className="profileuserfirstonetitle">Completed</div>
            <div className="profileuserfirstonedata">30</div>
          </div>
          <div className="profileuserfirstone">
            <div className="profileuserfirstonetitle">Success</div>
            <div className="profileuserfirstonedata">90%</div>
          </div>
        </div>
        <div className="profileuserdfirst">
          <div className="profileuserfirstone">
            <div
              style={{
                display: "flex",

                alignItems: "center",
              }}
              className="profileuserfirstonetitle"
            >
              <div>Language</div>

              <div onClick={handleOpen1}>
                <img
                  style={{ width: "2.4vw", cursor: "pointer" }}
                  src={img1}
                  alt=""
                />
              </div>
              <Modal
                open={open1}
                onClose={handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div className="profiletitleandmenunav">
                    <div
                      style={{ width: "200%" }}
                      className="profiledetailstitle"
                    >
                      Add Language
                    </div>
                    <div className="profiledetailnavmanu">
                      <div>
                        <CloseIcon
                          onClick={handleClose1}
                          style={{ fontSize: "1.5vw", cursor: "pointer" }}
                        />
                      </div>
                    </div>
                  </div>

                  <hr style={{ color: "#00000090" }} />

                  <div style={{ display: "flex", width: "100%" }}>
                    <div
                      style={{
                        left: "0vw",
                        width: "49%",
                        margin: "0.3vw 0",
                      }}
                      className="loginfield"
                      onClick={handleClickxp}
                    >
                      <TextField
                        error={!langugaeaddwrong ? false : true}
                        id="outlined-basic"
                        label="Language"
                        variant="outlined"
                        placeholder="English"
                        value={month1x1}
                        style={{ width: "95%" }}
                        InputLabelProps={{
                          style: {
                            fontSize: "1vw",
                            fontFamily: "Poppins",
                            fontStyle: "500",
                            fontWeight: "500",
                            color: !langugaeaddwrong ? "black" : "#dc3545",
                          },
                        }}
                        onChange={handleClickxp}
                        inputProps={{ className: classes.input }}
                      />
                      <span>
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
                      id={idxp}
                      open={openxp}
                      anchorEl={anchorElxp}
                      onClose={handleClosexp}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      style={{}}
                    >
                      <div style={{ maxHeight: "20vw", overflow: "scroll" }}>
                        <Typography
                          sx={{
                            p: 1,
                            pl: 1,
                            ml: 1,
                            width: "19.2vw",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setMonth1x1("English");
                            handleClosexp();
                            setLangugaeaddwrong(false);
                          }}
                        >
                          English
                        </Typography>
                        <Typography
                          sx={{
                            p: 1,
                            pl: 1,
                            ml: 1,
                            width: "19.2vw",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setMonth1x1("Hindi");
                            handleClosexp();
                            setLangugaeaddwrong(false);
                          }}
                        >
                          Hindi
                        </Typography>
                        <Typography
                          sx={{
                            p: 1,
                            pl: 1,
                            ml: 1,
                            width: "19.2vw",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setMonth1x1("French");
                            handleClosexp();
                            setLangugaeaddwrong(false);
                          }}
                        >
                          French
                        </Typography>
                      </div>
                    </Popover>

                    <div
                      style={{
                        width: "49.5%",
                        margin: "0.3vw 0",
                      }}
                      className="loginfield"
                      onClick={handleClickx1p1}
                    >
                      <TextField
                        error={!langugaeaddwrong1 ? false : true}
                        id="outlined-basic"
                        label="Proficiency Level"
                        variant="outlined"
                        placeholder="Intermediate"
                        value={year1x1}
                        style={{
                          width: "95%",
                        }}
                        InputLabelProps={{
                          style: {
                            fontSize: "1vw",
                            fontFamily: "Poppins",
                            fontStyle: "500",
                            fontWeight: "500",
                            color: !langugaeaddwrong1 ? "black" : "#dc3545",
                          },
                        }}
                        onChange={handleClickx1p1}
                        inputProps={{ className: classes.input }}
                      />
                      <span>
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
                      id={idx1p1}
                      open={openx1p1}
                      anchorEl={anchorElx1p1}
                      onClose={handleClosex1p1}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      style={{}}
                    >
                      <div style={{ maxHeight: "20vw", overflow: "scroll" }}>
                        <Typography
                          sx={{ p: 1, pl: 1, ml: 1, width: "20vw" }}
                          onClick={() => {
                            setyear1x1("Learning");
                            handleClosex1p1();
                            setLangugaeaddwrong1(false);
                          }}
                        >
                          Learning
                        </Typography>
                        <Typography
                          sx={{ p: 1, pl: 1, ml: 1, width: "20vw" }}
                          onClick={() => {
                            setyear1x1("Intermediate");
                            handleClosex1p1();
                            setLangugaeaddwrong1(false);
                          }}
                        >
                          Intermediate
                        </Typography>
                        <Typography
                          sx={{ p: 1, ml: 1, width: "20vw" }}
                          onClick={() => {
                            setyear1x1("Highly");
                            handleClosex1p1();
                            setLangugaeaddwrong1(false);
                          }}
                        >
                          Highly
                        </Typography>
                      </div>
                    </Popover>
                  </div>
                  <hr style={{ color: "#00000090" }} />
                  <div
                    style={{ marginTop: "0.31vw" }}
                    className="handlemoreaboutskill"
                  >
                    <div
                      style={{
                        background: "white",
                        color: "black",
                        cursor: "pointer",
                      }}
                      className="handlecirclieaboutsave"
                      onClick={handleClose1}
                    >
                      Cancel
                    </div>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={handleupdatelang}
                      className="handlecirclieaboutsave"
                    >
                      SAVE
                    </div>
                  </div>
                </Box>
              </Modal>
            </div>

            {user?.languages?.map((language) => {
              return <Profileuserdetaillanguage language={language} />;
            })}
          </div>
        </div>
        <div className="profileuserdfirst">
          <div className="profileuserfirstone">
            <div className="profileuserfirstonetitle">Verification</div>
            <div className="profileuserfirstonedata">
              Id-Verified{" "}
              <span>
                <img
                  style={{ width: "1vw", margin: "0.3vw" }}
                  src={imgxx}
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
        <div className="profileuserdfirst">
          <div className="profileuserfirstone">
            <div
              style={{
                display: "flex",
                // justifyContent: "space-between",
                alignItems: "center",
              }}
              className="profileuserfirstonetitle"
            >
              <div>Education</div>

              <div onClick={handleOpen}>
                <img
                  style={{ width: "2.4vw", cursor: "pointer" }}
                  src={img1}
                  alt=""
                />
              </div>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div className="profiletitleandmenunav">
                    <div className="profiledetailstitle">Add Education</div>
                    <div className="profiledetailnavmanu">
                      <div>
                        <CloseIcon
                          onClick={handleClose}
                          style={{ fontSize: "1.5vw" }}
                        />
                      </div>
                    </div>
                  </div>
                  <hr style={{ color: "#00000090" }} />
                  <div
                    style={{ left: "0vw", width: "100%" }}
                    className="loginfield"
                  >
                    <TextField
                      error={!wrongcallageaddname ? false : true}
                      id="outlined-basic"
                      label="College"
                      value={callagename}
                      variant="outlined"
                      style={{ width: "100%" }}
                      InputLabelProps={{
                        style: {
                          fontSize: "1vw",
                          fontFamily: "Poppins",
                          fontStyle: "500",
                          fontWeight: "500",
                          color: !wrongcallageaddname ? "black" : "#dc3545",
                        },
                      }}
                      inputProps={{ className: classes.input }}
                      onChange={(e) => {
                        setWrongcallageaddname(false);
                        if (e.target.value === "") {
                          setCallagename(e.target.value);
                        } else {
                          setCallagename(e.target.value);
                          setAnchorElx3c(e.currentTarget);
                        }
                      }}
                    />
                  </div>
                  <Popover
                    id={idx3c}
                    open={openx3c}
                    anchorEl={anchorElx3c}
                    onClose={handleClosex3c}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    onKeyDown={handleClosex3c}
                  >
                    <div style={{ maxHeight: "20vw", overflow: "scroll" }}>
                      <Typography
                        sx={{ p: 0.51, pl: 1, ml: 1, width: "43vw" }}
                        onClick={() => {
                          setCallagename("K.L.N College of engineering");
                          handleClosex3c();
                          setWrongcallageaddname(false);
                        }}
                      >
                        K.L.N College of engineering
                      </Typography>
                      <Typography
                        sx={{ p: 0.51, pl: 1, ml: 1, width: "43vw" }}
                        onClick={() => {
                          setCallagename("K.L.N College of art");
                          handleClosex3c();
                          setWrongcallageaddname(false);
                        }}
                      >
                        K.L.N College of art
                      </Typography>
                    </div>
                  </Popover>

                  <div className="jobpodtedfieldtitile">
                    Dates Attended (Optional)
                  </div>

                  <div style={{ display: "flex", width: "100%" }}>
                    <div
                      style={{
                        left: "0vw",
                        width: "50%",
                        margin: "0.3vw 0",
                      }}
                      className="loginfield"
                      onClick={handleClickx}
                    >
                      <TextField
                        id="outlined-basic"
                        label="From"
                        disabled
                        variant="outlined"
                        value={month1}
                        style={{ width: "95%" }}
                        InputLabelProps={{
                          style: {
                            fontSize: "1vw",
                            fontFamily: "Poppins",
                            fontStyle: "500",
                            fontWeight: "500",
                            color: "black",
                          },
                        }}
                        onChange={handleClickx}
                        inputProps={{ className: classes.input }}
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
                      id={idx}
                      open={openx}
                      anchorEl={anchorElx}
                      onClose={handleClosex}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <div style={{ maxHeight: "20vw", overflow: "scroll" }}>
                        <Typography
                          sx={{
                            p: 1,
                            pl: 1,
                            ml: 1,
                            width: "20vw",
                            position: "fixed",
                            background: "white",
                            zIndex: "10",
                          }}
                        >
                          <input
                            onChange={(e) => {
                              setArrayoflong(
                                arrayof100.filter((x) =>
                                  x.includes(e.target.value)
                                )
                              );
                              console.log(
                                arrayof100.filter((x) =>
                                  x.includes(e.target.value)
                                )
                              );
                            }}
                            type="number"
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
                            width: "20vw",
                            cursor: "pointer",
                          }}
                        ></Typography>

                        {arrayoflong.map((data, index) => {
                          return (
                            <Typography
                              sx={{
                                p: 0.51,
                                pl: 1,
                                ml: 1,
                                width: "20vw",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                setMonth1(data);
                                handleClosex();
                              }}
                            >
                              {data}
                            </Typography>
                          );
                        })}
                      </div>
                    </Popover>
                    {/* </div> */}
                    <div
                      style={{
                        left: "0vw",
                        width: "50%",
                        margin: "0.3vw 0",
                      }}
                      className="loginfield"
                      onClick={handleClickx1}
                    >
                      <TextField
                        id="outlined-basic"
                        label="To (expected graduation year)"
                        variant="outlined"
                        disabled
                        value={year1}
                        style={{
                          width: "95%",
                        }}
                        InputLabelProps={{
                          style: {
                            fontSize: "1vw",
                            fontFamily: "Poppins",
                            fontStyle: "500",
                            fontWeight: "500",
                            color: "black",
                          },
                        }}
                        onChange={handleClickx1}
                        inputProps={{ className: classes.input }}
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
                      id={idx1}
                      open={openx1}
                      anchorEl={anchorElx1}
                      onClose={handleClosex1}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      style={{}}
                    >
                      <div style={{ maxHeight: "20vw", overflow: "scroll" }}>
                        <Typography
                          sx={{
                            p: 1,
                            pl: 1,
                            ml: 1,
                            width: "20vw",
                            position: "fixed",
                            background: "white",
                            zIndex: "10",
                          }}
                        >
                          <input
                            onChange={(e) => {
                              setArrayoflongto(
                                arrayof100.filter((x) =>
                                  x.includes(e.target.value)
                                )
                              );
                              console.log(
                                arrayof100.filter((x) =>
                                  x.includes(e.target.value)
                                )
                              );
                            }}
                            type="number"
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
                            width: "20vw",
                            cursor: "pointer",
                          }}
                        ></Typography>

                        {arrayoflongto.map((data, index) => {
                          return (
                            <Typography
                              sx={{
                                p: 0.51,
                                pl: 1,
                                ml: 1,
                                width: "20vw",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                setyear1(data);
                                handleClosex1();
                              }}
                            >
                              {data}
                            </Typography>
                          );
                        })}
                      </div>
                    </Popover>
                  </div>

                  <div
                    style={{ left: "0vw", width: "100%" }}
                    className="loginfield"
                    onClick={handleClickx2}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Degree (Optional)"
                      variant="outlined"
                      disabled
                      value={degreeset}
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
                    <div style={{ maxHeight: "18vw", overflow: "scroll" }}>
                      <Typography
                        sx={{
                          p: 1,
                          pl: 1,
                          ml: 1,
                          width: "43vw",
                          position: "fixed",
                          background: "white",
                          zIndex: "10",
                        }}
                      >
                        <input
                          onChange={(e) => {
                            setArrayoflongdegree(
                              arrayofdegree.filter((x) =>
                                x.includes(e.target.value)
                              )
                            );
                            console.log(
                              arrayofdegree.filter((x) =>
                                x.includes(e.target.value)
                              )
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
                          width: "43vw",
                          cursor: "pointer",
                        }}
                      ></Typography>

                      {arrayoflongdegree.map((data, index) => {
                        return (
                          <Typography
                            sx={{
                              p: 0.51,
                              pl: 1,
                              ml: 1,
                              width: "43vw",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              setDegreeset(data);
                              handleClosex2();
                            }}
                          >
                            {data}
                          </Typography>
                        );
                      })}
                    </div>
                  </Popover>
                  <div
                    style={{ left: "0vw", width: "100%" }}
                    className="loginfield"
                    onClick={handleClickx3}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Area of study (Optional)"
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
                    <div style={{ maxHeight: "18vw", overflow: "scroll" }}>
                      <Typography
                        sx={{
                          p: 1,
                          pl: 1,
                          ml: 1,
                          width: "43vw",
                          position: "fixed",
                          background: "white",
                          zIndex: "10",
                        }}
                      >
                        <input
                          onChange={(e) => {
                            setArrayoflongstudy(
                              arrayofstudy.filter((x) =>
                                x.includes(e.target.value)
                              )
                            );
                            console.log(
                              arrayofstudy.filter((x) =>
                                x.includes(e.target.value)
                              )
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
                          width: "43vw",
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
                              width: "43vw",
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

                  <div
                    style={{ left: "0vw", width: "100%" }}
                    className="loginfield"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Description (Optional)"
                      variant="outlined"
                      value={descriptioncallageadd}
                      multiline
                      rows="5"
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
                        setdescriptioncallageadd(e.target.value);
                      }}
                    />
                  </div>
                  <hr style={{ color: "#00000090" }} />
                  <div
                    style={{ marginTop: "0.31vw" }}
                    className="handlemoreaboutskill"
                  >
                    <div
                      style={{
                        background: "white",
                        color: "black",
                        cursor: "pointer",
                      }}
                      className="handlecirclieaboutsave"
                      onClick={handleClose1}
                    >
                      Cancel
                    </div>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={handleaddcallage}
                      className="handlecirclieaboutsave"
                    >
                      SAVE
                    </div>
                  </div>
                </Box>
              </Modal>
            </div>
            {user?.education?.map((education) => {
              return <Profileuserdetaleducation education={education} />;
            })}
          </div>
        </div>
      </div>
      <div className="profileuserdetailstwo"></div>
      <div style={{ marginTop: "1vw" }} className="profileuserdetailsthree">
        <div style={{ margin: "0 1vw" }} className="profiletitleandmenunav">
          <div className="profiledetailstitle">About Me</div>
          <div className="profiledetailnavmanu"></div>
          <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="profiletitleandmenunav">
                <div className="profiledetailstitle">Edit your title</div>
                <div className="profiledetailnavmanu">
                  <div>
                    <CloseIcon
                      onClick={handleClose2}
                      style={{ fontSize: "1.5vw", cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
              <hr style={{ color: "#00000090" }} />
              <div className="jobpodtedfieldtitile">Your Title</div>

              <div
                style={{
                  fontWeight: "400",
                  fontSize: "1vw",
                  lineHeight: "1.3vw",
                }}
                className="jobpodtedfieldtitile"
              >
                Enter a Description for your title in a single sentence (e.g.,
                Expert Web Designer with Back End Development)
              </div>

              <div
                style={{ left: "0vw", width: "100%" }}
                className="loginfield"
              >
                <TextField
                  id="outlined-basic"
                  label="Title"
                  value={titleuser}
                  variant="outlined"
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
                    setTitleuser(e.target.value);
                  }}
                />
              </div>

              <hr style={{ color: "#00000090" }} />
              <div
                style={{ marginTop: "0.31vw" }}
                className="handlemoreaboutskill"
              >
                <div
                  style={{
                    background: "white",
                    color: "black",
                    cursor: "pointer",
                  }}
                  className="handlecirclieaboutsave"
                  onClick={handleClose2}
                >
                  Cancel
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={handletitleupdate}
                  className="handlecirclieaboutsave"
                >
                  SAVE
                </div>
              </div>
            </Box>
          </Modal>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{ fontSize: "1.15vw", margin: "0.91vw 2vw" }}
            className="profiledetailstitle"
          >
            {user?.title ? user?.title : "Update Your Title"}
          </div>
          <div style={{ width: "3vw" }}>
            <img onClick={handleOpen2} src={img2} alt="" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{ fontSize: "1.15vw", margin: "0.91vw 1vw" }}
            className="profiledetailstitle"
          >
            <div className="aboutprofileuser">
              {user?.fullDescription
                ? user?.fullDescription
                : "Enter Your description"}
            </div>
          </div>
          <div style={{ width: "3vw" }}>
            <img onClick={handleOpen3} src={img2} alt="" />
          </div>
        </div>
        <Modal
          open={open3}
          onClose={handleClose3}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="profiletitleandmenunav">
              <div className="profiledetailstitle">Overview</div>
              <div className="profiledetailnavmanu">
                <div>
                  <CloseIcon
                    onClick={handleClose2}
                    style={{ fontSize: "1.5vw", cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
            <hr style={{ color: "#00000090" }} />
            <div
              style={{ color: "#000000g6", fontSize: "1vw" }}
              className="profiledetailstitle"
            >
              Use this space to show clients you have the skills and experience
              they're looking for .
            </div>
            <div style={{ left: "0vw", width: "100%" }} className="loginfield">
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                placeholder={user?.fullDescription}
                multiline
                value={desc}
                rows="7"
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
                  setDesc(e.target.value);
                  setDesclength(e.target.value.length);
                }}
              />
            </div>
            <div
              style={{
                textAlign: "right",
                fontSize: "0.81vw",
                color: "#00000099",
                marginTop: "0vw",
                position: "relative",
                bottom: "1vw",
              }}
            >
              {5000 - desclength} Character Left{" "}
            </div>
            <hr style={{ color: "#00000090" }} />
            <div
              style={{ marginTop: "0.31vw" }}
              className="handlemoreaboutskill"
            >
              <div
                style={{
                  background: "white",
                  color: "black",
                  cursor: "pointer",
                }}
                className="handlecirclieaboutsave"
                onClick={handleClose3}
              >
                Cancel
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={handledescriptionupdate}
                className="handlecirclieaboutsave"
              >
                SAVE
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
