import React, { useState } from "react";
import img1 from "../../assets/My profile – 28/Component 70 – 6.svg";
import "./profile.css";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Profileeducationdetails from "./Profilepopup/ProfileEductiondetailas";
import API_HOST from "../../env";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "48vw",
  bgcolor: "background.paper",
  maxHeight: "95vh",
  overflow: "scroll",
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

export default function ProfileEducation({ user }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  const [descriptioncallageadd, setdescriptioncallageadd] = useState("");

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
  return (
    <div style={{ height: "fit-content" }} className="profilebadgecontainer">
      <div
        style={{ padding: "2vw", margin: "0 0vw" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Education</div>
        <div className="profiledetailnavmanu">
          <div>
            <img onClick={handleOpen} src={img1} alt="" />
          </div>
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
            <div style={{ left: "0vw", width: "100%" }} className="loginfield">
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
                          arrayof100.filter((x) => x.includes(e.target.value))
                        );
                        console.log(
                          arrayof100.filter((x) => x.includes(e.target.value))
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
                          arrayof100.filter((x) => x.includes(e.target.value))
                        );
                        console.log(
                          arrayof100.filter((x) => x.includes(e.target.value))
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
                        arrayofdegree.filter((x) => x.includes(e.target.value))
                      );
                      console.log(
                        arrayofdegree.filter((x) => x.includes(e.target.value))
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

            <div style={{ left: "0vw", width: "100%" }} className="loginfield">
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
                onClick={handleClose}
              >
                Cancel
              </div>
              <div
                style={{ cursor: "pointer" }}
                className="handlecirclieaboutsave"
                onClick={handleaddcallage}
              >
                SAVE
              </div>
            </div>
          </Box>
        </Modal>
      </div>
      {user?.education?.map((education) => {
              return <Profileeducationdetails education={education} />;
            })}
     
    </div>
  );
}
