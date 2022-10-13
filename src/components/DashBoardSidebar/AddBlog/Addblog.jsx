import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddTableofContent from "./AddTableofContent";
import Cataloguecarosel from "./CatalogCarosel";
import img from "../../../assets/Web 1280 – 14/Icon.svg";
import img1 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import img21 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import API_HOST from "../../../env";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  height: "50vw",
  maxHeight: "50vw",
  bgcolor: "background.paper",
  border: "2px solid #ffffff",
  overflowY: "scroll",
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles((theme) => ({
  select: {
    height: "1vw",
    width: "100%",
    padding: "1vw 0.5vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.51vw",
    lineHeight: "100%",
  },
  select2: {
    height: "1vw",
    width: "100%",
    padding: "1vw 0.5vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.51vw",
    lineHeight: "100%",
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
    position: "relative",
    top: "0.81vw",
    left: "0.2vw",
  },
  icon: {
    fill: "black",
  },
}));
export default function Addblog() {
  const classes = useStyles();
  const { user } = useSelector((state) => state.user);

  const [arrayofblogs, setArrayofblogs] = useState([
    {
      heading: "",
      toc: "",
      file: "",
      desc: "",
      title: "",
      button: "",
    },
  ]);
  const navigate = useNavigate();
  const [erroeshow, setErroeshow] = useState(false);
  const [title, setTitle] = useState("");
  const [imagetitle, setimagetitle] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age3, setAge3] = React.useState(0);
  const handleChange3 = (event) => {
    setAge3(event.target.value);
  };
  const [arrayoffiles, setArrayoffiles] = useState([]);
  const [scate, setsCate] = useState("");

  const handlesumbitBlog = () => {
    const formdata = new FormData();
    if (arrayoffiles?.length > 0) {
      arrayoffiles?.map((data) => {
        formdata.append("fileName", data);
      });
    }
    formdata.append("status", "publish");
    formdata.append("contentName", title);
    formdata.append("author", user?.fullName);
    formdata.append("shareDisable", false);
    formdata.append("toC", JSON.stringify(arrayofblogs));
    formdata.append("category", scate);
    formdata.append("iconTitle", imagetitle);

    axios
      .post(`${API_HOST}/contentManagement/addByAdmin`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        navigate(-1);
      }).catch((err)=>{
        setFirstsumbitblog(false) 
      })
      ;
  };

  const [erroraddblog, setErroraddblog] = useState(false);

  const handlecheck = () => {
    if (
      title &&
      imagetitle &&
      scate &&
      arrayoffiles?.length > 0 &&
      !erroraddblog
    ) {
      handleOpen();
    } else {
      setErroraddblog(true);
    }
  };

  useEffect(() => {
    if (arrayofblogs?.length > 0) {
    } else {
      if (title && imagetitle && scate && arrayoffiles?.length > 0) {
        setErroraddblog(false);
      } else {
        setErroraddblog(true);
      }
    }
  }, [title, scate, arrayoffiles, arrayofblogs, imagetitle]);

  const [firstsumbitblog, setFirstsumbitblog] = useState(false);



  const [allCtitle, setAllCtitle] = useState([]);
  const [allCbutton, setAllCbutton] = useState([]);

  useEffect(() => {
    axios.get(`${API_HOST}/callToActionTitle/viewTitle`).then((res) => {
      setAllCtitle(res?.data?.success?.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${API_HOST}/callToActionButton/viewButton`).then((res) => {
      setAllCbutton(res?.data?.success?.data);
    });
  }, []);

  return (
    <div>
      <div
        style={{
          width: "70vw",
          margin: "auto",
          height: "fit-content",
          marginTop: "2vw",
        }}
        className="home-postjob-container"
      >
        <div
          style={{
            overflowX: "hidden",
            paddingLeft: "4vw",
            width: "70vw",
            paddingTop: "2vw",
          }}
          className="homepostjob-right"
        >
          <div className="jobpostedformheading">Add Blogs</div>

          <div className="jobpodtedfieldtitile"> Blog Category *</div>
          <div className="">
            <Box
              sx={{
                background: "white",
                border: "1px solid #7070705b",
                height: "2.6vw",
                width: "64vw",
                borderRadius: "5px",
                margin: "0.5vw 1.5vw",
                padding: "0.2vw 0.2vw",
                marginLeft: "0vw",
              }}
              className="setting-toggler"
            >
              <FormControl variant="standard" fullWidth>
                <Select
                  className={classes.select2}
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age3}
                  disableUnderline
                  inputProps={{
                    classes: {
                      // root: classes.border,
                      icon: classes.icon,
                    },
                  }}
                  onChange={handleChange3}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: "white",

                        "& .MuiMenuItem-root": {
                          padding: "0.1vw 2vw",
                          width: "100%",
                          height: "3vw",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "1vw",
                          lineHeight: "24px",
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
                      setsCate("Business Ideas");
                    }}
                    value={1}
                  >
                    Business Ideas
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      setsCate("Business Plans");
                    }}
                    value={2}
                  >
                    Business Plans
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setsCate("Business Problems");
                    }}
                    value={3}
                  >
                    Business Problems
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setsCate("Others");
                    }}
                    value={4}
                  >
                    Others
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div>
            <div className="jobpodtedfieldtitile"> Blog Title *</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
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
                  setTitle("");
                }}
              />
            </div>
            <div
              style={{
                marginBottom: "0.0vw",
                marginLeft: "0.01vw",
                marginTop: "1vw",
              }}
              className="jobpodtedfieldtitile"
            >
              Cover Images *
            </div>
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
              <div
                style={{
                  width: "100%",
                  textAlign: "right",
                  fontSize: "0.9vw",
                  fontWeight: "400",
                }}
              >
                Image should be less then 200 kb and Dimension should be in
                ratio (3:5)
              </div>
            </div>
            <div
              className={
                arrayoffiles?.length > 0 ? "inputfilesshowncatebox" : ""
              }
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
       
            <div className="jobpodtedfieldtitile"> Image Title *</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={imagetitle}
                onChange={(e) => {
                  setimagetitle(e.target.value);
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
                  setimagetitle("");
                }}
              />
            </div>
            <div
              style={{ textAlign: "left", fontSize: "1.4vw", marginTop: "1vw" }}
              className="jobpodtedfieldtitile"
            >
              Table of Content
            </div>
            {arrayofblogs.length > 0 &&
              arrayofblogs?.map((data, index) => {
                return (
                  <AddTableofContent
                    setArrayofblogs={setArrayofblogs}
                    arrayofblogs={arrayofblogs}
                    data={data}
                    index={index}
                    setErroraddblog={setErroraddblog}
                    erroraddblog={erroraddblog}
                    title={title}
                    scate={scate}
                    arrayoffiles={arrayoffiles}
                    imagetitle={imagetitle}
                    allCbutton={allCbutton}
                    allCtitle={allCtitle}
                  />
                );
              })}
            <div
              style={{ marginLeft: "1vw" }}
              className="addmoreservicecatalog"
              onClick={() => {
                setArrayofblogs([
                  ...arrayofblogs,
                  {
                    heading: "",
                    toc: "",
                    file: "",
                    desc: "",
                    title: "",
                    button: "",
                  },
                ]);
              }}
            >
              <span>
                <AddIcon style={{ fontSize: "1.3vw" }} />
              </span>{" "}
              Add Paragraph
            </div>
            {erroeshow ? (
              <div style={{ color: "red" }} className="jobpodtedfieldtitile">
                {" "}
                * Fill All the Fields
              </div>
            ) : (
              ""
            )}{" "}
            {erroraddblog && (
              <div
                style={{ marginLeft: "1vw", color: "red" }}
                className="min-maxhomejob"
              >
                fill all field are cumpulsary these are marked as *
              </div>
            )}
            <div style={{ marginBottom: "4vw" }} className="homejobbuttons">
              <button
                style={{ background: "white" }}
                onClick={() => {
                  navigate(-1);
                }}
              >
                Cancel
              </button>

              <button onClick={handlecheck} style={{ color: "white" }}>
                Preview
              </button>
            </div>
          </div>
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
            <div className="profiledetailstitle">Preview Blogs</div>
            <div className="profiledetailnavmanu">
              <div>
                <CloseIcon
                  onClick={handleClose}
                  style={{ fontSize: "1.5vw", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
          <hr style={{ color: "#00000090" }} />
          {arrayoffiles?.length > 0 && (
            <div style={{ padding: "0vw" }} className="Blogdbannercontainer">
              <div className="ctatlogcarouseltitle">
                <button
                  style={{
                    marginLeft: "1vw",
                    width: "10vw",
                    cursor: "auto",
                    position: "relative",
                    top: "4vw",
                    zIndex: "100",
                  }}
                  className="hb-button"
                >
                  {scate}
                </button>
                <div className="textofcontainercatalgue">{imagetitle}</div>
              </div>
              <div style={{ position: "relative", bottom: "2.2vw" }}>
                <Cataloguecarosel
                  img1={arrayoffiles[0]}
                  img2={arrayoffiles[1] ? arrayoffiles[1] : arrayoffiles[0]}
                  img3={
                    arrayoffiles[2]
                      ? arrayoffiles[2]
                      : arrayoffiles[0]
                      ? arrayoffiles[0]
                      : arrayoffiles[1]
                  }
                  img4={
                    arrayoffiles[3]
                      ? arrayoffiles[3]
                      : arrayoffiles[1]
                      ? arrayoffiles[1]
                      : arrayoffiles[2]
                      ? arrayoffiles[2]
                      : arrayoffiles[0]
                  }
                />
              </div>
            </div>
          )}{" "}
          <hr style={{ margin: "0vw", height: "0vw" }} />
          <div style={{ position: "relative", bottom: "1vw" }}>
            <div className="jobpodtedfieldtitile"> Title</div>
            <div className="jobpostfieldinputbox">
              <input type="text" value={title} disabled />
            </div>
            <div className="jobpodtedfieldtitile"> Category</div>
            <div className="jobpostfieldinputbox">
              <input type="text" value={scate} disabled />
            </div>

            <div className="jobpodtedfieldtitile"> Table of Content</div>

            <div className="widthfullblofpreview">
              {arrayofblogs?.length > 0 &&
                arrayofblogs?.map((data, index) => {
                  return (
                    <div>
                      <div
                        className=""
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        {data?.heading}
                      </div>
                      <div
                        className="dataeofblogcontnet1"
                        style={{ color: "black", fontSize: "0.9vw" }}
                        dangerouslySetInnerHTML={{ __html: data?.toc }}
                      ></div>

                      {data?.file && (
                        <div className="blogcontentimagebanner">
                          <img
                            style={{ width: "63vw", objectFit: "contain" }}
                            src={data?.file}
                            alt=""
                          />
                        </div>
                      )}
                      <div
                        style={{ width: "63vw" }}
                        className="Joinwithusblogbox"
                      >
                        <div style={{ width: "60%", textAlign: "center" }}>
                          <div className="Joinwithusblogboxtitle">
                            {data?.title}
                          </div>
                          <div className="Joinwithusblogboxdetail">
                            {data?.desc?.slice(0, 200)}
                          </div>
                        </div>
                        <div style={{ width: "40%", textAlign: "center" }}>
                          <button> {data?.button}</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div
              style={{ marginTop: "0.31vw" }}
              className="handlemoreaboutskill"
            >
              <div
                onClick={() => {
                  handleClose();
                }}
                style={{
                  background: "white",
                  color: "black",
                  cursor: "pointer",
                }}
                className="handlecirclieaboutsave"
              >
                Cancel
              </div>
              <div
                onClick={() => {
                  if (!firstsumbitblog) {
                    setFirstsumbitblog(true)  
                    handlesumbitBlog();
                }
                }}
                style={{ cursor: "pointer" }}
                className="handlecirclieaboutsave"
              >
                Submit
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
