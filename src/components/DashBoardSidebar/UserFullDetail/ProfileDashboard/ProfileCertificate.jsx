import React, { useState } from "react";
import img1 from "../../assets/My profile – 28/Component 70 – 6.svg";
import "./profile.css";

import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import ProfileCerticateDetails from "./Profilepopup/ProfileCerticateDetails";
import { useDispatch } from "react-redux";
import API_HOST from "../../env";
import axios from "axios";

import { userActions } from "../../store/userSlice";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "48vw",
  bgcolor: "background.paper",

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
export default function ProfileCertificate({ user }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [month1, setMonth1] = useState("");
  const [year1, setyear1] = useState("");
  const [month2, setMonth2] = useState("");
  const [year2, setyear2] = useState("");

  const [anchorElx, setAnchorElx] = React.useState(null);
  const handleClickx = (event) => {
    setAnchorElx(event.currentTarget);
  };

  const handleClosex = () => {
    setAnchorElx(null);
  };

  const openx = Boolean(anchorElx);
  const idx = openx ? "simple-popover" : undefined;

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
  const dispatch = useDispatch();

  const [arrayofmonth, setArrayofmonth] = useState([
    "january",
    "febuary",
    "March",
    "April",
    "May",
  ]);
  const [arrayoflong, setArrayoflong] = useState(arrayofmonth);
  const [arrayoflongto, setArrayoflongto] = useState(arrayof100);
  const [arrayoflong1, setArrayoflong1] = useState(arrayofmonth);
  const [arrayoflongto1, setArrayoflongto1] = useState(arrayof100);

  const handleaddcertificate = () => {
    const formdata = {
      userId: user?.userId,
      certificateName: callagename,
      issueMonth: month1,
      issueYear: parseInt(year1),
      organization: organisation,
      doesNotExpire: checkmarkcertificate,
      expiredMonth: month2,
      expiredYear: year2,
      verifiedUrl: certiurl,
      creditalId: certificateid,
    };
    axios
      .post(`${API_HOST}/users/addCertificates`, formdata)
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
  };
  const [callagename, setcallagename] = useState("");
  const [organisation, setorganisation] = useState("");
  const [certificateid, setcerticateid] = useState("");
  const [certiurl, setcertiurl] = useState("");

  const [checkmarkcertificate, setCheckmarkcertificate] = useState(false);

  return (
    <div style={{ height: "fit-content" }} className="profilebadgecontainer">
      <div
        style={{ padding: "2vw", margin: "0 0vw" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Certifications</div>
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
              <div className="profiledetailstitle">Add Certification</div>
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
                id="outlined-basic"
                label="Title"
                variant="outlined"
                value={callagename}
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
                onChange={(e) => setcallagename(e.target.value)}
              />
            </div>
            <div style={{ left: "0vw", width: "100%" }} className="loginfield">
              <TextField
                id="outlined-basic"
                label="Organization"
                variant="outlined"
                value={organisation}
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
                onChange={(e) => setorganisation(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="checkbox">
                <input
                  type="checkbox"
                  name=""
                  id="checkbox"
                  onChange={() =>
                    setCheckmarkcertificate(!checkmarkcertificate)
                  }
                />
                <div
                  style={{
                    fontSize: "0.91vw",
                    fontFamily: "Poppins",
                    fontStyle: "500",
                    fontWeight: "500",
                    color: "#00000080",
                    display: "inline",
                    margin: "0 1vw",
                    cursor: "pointer",
                  }}
                >
                  Does not expire
                </div>
              </label>
            </div>
            <div className="jobpodtedfieldtitile">Issue Date</div>
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
                  label="Month"
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
                      width: "21.5vw",
                      position: "fixed",
                      background: "white",
                      zIndex: "10",
                    }}
                  >
                    <input
                      onChange={(e) => {
                        setArrayoflong(
                          arrayofmonth.filter((x) => x.includes(e.target.value))
                        );
                        console.log(
                          arrayofmonth.filter((x) => x.includes(e.target.value))
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
                          width: "21.5vw",
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
                  label="Year"
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
                  onChange={handleClickx3}
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
            {!checkmarkcertificate ? (
              <>
                {" "}
                <div className="jobpodtedfieldtitile">Expired Date</div>
                <div style={{ display: "flex", width: "100%" }}>
                  <div
                    style={{
                      left: "0vw",
                      width: "50%",
                      margin: "0.3vw 0",
                    }}
                    className="loginfield"
                    onClick={handleClickx2}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Month"
                      disabled
                      variant="outlined"
                      value={month2}
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
                      onChange={handleClickx2}
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
                    id={idx2}
                    open={openx2}
                    anchorEl={anchorElx2}
                    onClose={handleClosex2}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <div style={{ maxHeight: "17vw", overflow: "scroll" }}>
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
                            setArrayoflong1(
                              arrayofmonth.filter((x) =>
                                x.includes(e.target.value)
                              )
                            );
                            console.log(
                              arrayofmonth.filter((x) =>
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
                          width: "20vw",
                          cursor: "pointer",
                        }}
                      ></Typography>

                      {arrayoflong1.map((data, index) => {
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
                              setMonth2(data);
                              handleClosex2();
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
                    onClick={handleClickx3}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Year"
                      variant="outlined"
                      disabled
                      value={year2}
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
                      onChange={handleClickx3}
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
                    id={idx3}
                    open={openx3}
                    anchorEl={anchorElx3}
                    onClose={handleClosex3}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    style={{}}
                  >
                    <div style={{ maxHeight: "17vw", overflow: "scroll" }}>
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
                            setArrayoflongto1(
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

                      {arrayoflongto1.map((data, index) => {
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
                              setyear2(data);
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
              </>
            ) : (
              ""
            )}

            {/* </div> */}
            <div style={{ left: "0vw", width: "100%" }} className="loginfield">
              <TextField
                id="outlined-basic"
                label="Credital Id"
                variant="outlined"
                value={certificateid}
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
                onChange={(e) => setcerticateid(e.target.value)}
              />
            </div>
            <div style={{ left: "0vw", width: "100%" }} className="loginfield">
              <TextField
                id="outlined-basic"
                label="Verified URL"
                value={certiurl}
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
                onChange={(e) => setcertiurl(e.target.value)}
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
                onClick={handleaddcertificate}
              >
                SAVE
              </div>
            </div>
          </Box>
        </Modal>
      </div>
      <div className="pcertificate-container">
        {user?.certificates?.map((cerificate) => {
          return <ProfileCerticateDetails certificate={cerificate}/>;
        })}
      </div>
    </div>
  );
}
