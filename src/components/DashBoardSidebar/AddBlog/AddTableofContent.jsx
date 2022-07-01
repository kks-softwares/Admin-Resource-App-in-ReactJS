import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";
import img from "../../../assets/Web 1280 – 14/Icon.svg";
import img1 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import img22 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import { TextEditor } from "../BiddingForm/Texteditor";
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
    color: "black",
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
export default function AddTableofContent({
  setArrayofblogs,
  arrayofblogs,
  data,
  index,
  setErroraddblog,
  erroraddblog,
  title,
  scate,
  arrayoffiles,
}) {
  const [description1, setDescription1] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();
  const [age4, setAge4] = React.useState(10);
  const [age5, setAge5] = React.useState(10);

  const [arrayoffile, setArrayoffile] = useState();

  const handleChange4x = (event) => {
    setAge4(event.target.value);
  };
  const handleChange5x = (event) => {
    setAge5(event.target.value);
  };
  const [wrongsec, setwrongsec] = useState(false);

  useEffect(() => {
    setArrayofblogs([
      ...arrayofblogs.slice(0, index),
      {
        toc: description1,
        file: data?.file,
        desc: data?.desc,
        title: data?.title,
        button: data?.button,
      },
      ...arrayofblogs.slice(index + 1, arrayofblogs.length),
    ]);
  }, [description1]);

  useEffect(() => {
    if (data?.toc && data?.desc && data?.title && data?.button) {
      setwrongsec(false);
      if (title && scate && arrayoffiles?.length > 0) {
        setErroraddblog(false);
      } else {
        setErroraddblog(true);
      }
    } else {
      setwrongsec(true);
      setErroraddblog(true);
    }
  }, [data, title, scate, arrayoffiles]);

  const handleuploadimage = (file) => {
    const formdata = new FormData();
    formdata.append("fileName", file);

    axios
      .post(`${API_HOST}/contentManagement/tableContent`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setArrayofblogs([
          ...arrayofblogs.slice(0, index),
          {
            toc: data?.toc,
            file: res?.data?.success?.data?.file,
            desc: data?.desc,
            title: data?.title,
            button: data?.button,
          },
          ...arrayofblogs.slice(index + 1, arrayofblogs.length),
        ]);
      });
  };

  return (
    <>
      {
        <div>
          <div
            style={{
              left: "0vw",
              width: "96%",
              margin: "2vw 0vw 2vw 0vw",
              display: "block",
            }}
            className="loginfield"
          >
            <div
              style={{
                marginBottom: "1vw",
                display: "flex",
                justifyContent: "space-between",
              }}
              className="jobpodtedfieldtitile"
            >
              <div>Table of Content (Minimum 1 section)*</div>
              {arrayofblogs?.length > 1 && (
                <div>
                  <CloseIcon
                    style={{
                      position: "relative",
                      right: "1vw",
                      fontSize: "2vw",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setArrayofblogs([
                        ...arrayofblogs.slice(0, index),
                        ...arrayofblogs.slice(index + 1, arrayofblogs.length),
                      ]);
                    }}
                  />
                </div>
              )}
            </div>
            <div style={{ marginBottom: "2vw" }}>
              <TextEditor
                width={"65vw"}
                setDescription1={setDescription1}
                description1={description1}
              />
            </div>
          </div>
          <div
            style={{
              marginBottom: "0.0vw",

              marginTop: "2vw",
            }}
            className="jobpodtedfieldtitile"
          >
            Image/Documents
          </div>
          <div
            style={{
              background: "white",
              padding: "1vw",
              marginTop: "0vw",
              paddingRight: "2.5vw",
              paddingLeft: "0vw",
            }}
          >
            <div className="inputfilebox">
              <div>
                <label htmlFor={`inputctaelogfile${index}`}>
                  <div className="inputicon">
                    <img src={img} alt="" />
                  </div>
                  <div className="inputcateaddformfile">
                    Drag and Drop ,Browse to upload
                  </div>
                  <input
                    type="file"
                    id={`inputctaelogfile${index}`}
                    onChange={(e) => {
                      handleuploadimage(e.target.files[0]);
                      setArrayoffile(e.target.files[0]);
                    }}
                    hidden
                  />
                </label>
              </div>
            </div>
          </div>
          {arrayoffile && (
            <div
              style={{ marginTop: "0.3vw" }}
              className="inputfilesshowncatebox"
            >
              <div className="inputfilesshowncatboxsingle">
                {console.log(arrayofblogs)}
                <div className="inputfilesshowncatboxsingleimg">
                  <img src={img1} alt="" />
                </div>
                <div className="fileselctednamecate">{arrayoffile?.name}</div>
                <div className="inputfilesshowncatboxsingleimg">
                  <img
                    style={{
                      width: "1.5vw",
                      marginLeft: "1vw",
                      cursor: "pointer",
                    }}
                    src={img22}
                    alt=""
                    onClick={() => {
                      setArrayoffile();
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          <div className="jobpodtedfieldtitile">Call to Action</div>
          <div className="homjobpost-popbudegt">
            <div className="min-maxhomejob">Title</div>
            <div className="">
              <Box
                sx={{
                  background: "white",
                  border: "1px solid #7070705b",
                  height: "2.6vw",
                  width: "24.5vw",
                  borderRadius: "5px",
                  margin: "0.5vw 1.5vw",
                  padding: "0.2vw 0.2vw",
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
                            width: "23vw",
                            height: "2vw",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "0.81vw",
                            lineHeight: "24px",
                            color: "#6b6b6b",
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem hidden value={10}>
                      Select
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setArrayofblogs([
                          ...arrayofblogs.slice(0, index),
                          {
                            toc: data?.toc,
                            file: data?.file,
                            desc: data?.desc,
                            title: "Mobile app Development Tips",
                            button: data?.button,
                          },
                          ...arrayofblogs.slice(index + 1, arrayofblogs.length),
                        ]);
                      }}
                      value={20}
                    >
                      Mobile app Development Tips
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setArrayofblogs([
                          ...arrayofblogs.slice(0, index),
                          {
                            toc: data?.toc,
                            file: data?.file,
                            desc: data?.desc,
                            title: "Mobile app Development Tips",
                            button: data?.button,
                          },
                          ...arrayofblogs.slice(index + 1, arrayofblogs.length),
                        ]);
                      }}
                      value={30}
                    >
                      Mobile app Development Tips
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setArrayofblogs([
                          ...arrayofblogs.slice(0, index),
                          {
                            toc: data?.toc,
                            file: data?.file,
                            desc: data?.desc,
                            title: "Mobile app Development Tips",
                            button: data?.button,
                          },
                          ...arrayofblogs.slice(index + 1, arrayofblogs.length),
                        ]);
                      }}
                      value={40}
                    >
                      Mobile app Development Tips
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div style={{ marginLeft: "1vw" }} className="min-maxhomejob">
              Button Name
            </div>
            <div className="">
              <Box
                sx={{
                  background: "white",
                  border: "1px solid #7070705b",
                  height: "2.6vw",
                  width: "25vw",
                  borderRadius: "5px",
                  margin: "0.5vw 1.5vw",
                  padding: "0.2vw 0.2vw",
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
                            width: "23vw",
                            height: "2vw",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "0.81vw",
                            lineHeight: "24px",
                            color: "#6b6b6b",
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem
                      hidden
                      onClick={() => {
                        setArrayofblogs([
                          ...arrayofblogs.slice(0, index),
                          {
                            toc: data?.toc,
                            file: data?.file,
                            desc: data?.desc,
                            title: data?.title,
                            button: "Join Now",
                          },
                          ...arrayofblogs.slice(index + 1, arrayofblogs.length),
                        ]);
                      }}
                      value={10}
                    >
                      Select
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setArrayofblogs([
                          ...arrayofblogs.slice(0, index),
                          {
                            toc: data?.toc,
                            file: data?.file,
                            desc: data?.desc,
                            title: data?.title,
                            button: "Join Now",
                          },
                          ...arrayofblogs.slice(index + 1, arrayofblogs.length),
                        ]);
                      }}
                      value={20}
                    >
                      Join Now
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setArrayofblogs([
                          ...arrayofblogs.slice(0, index),
                          {
                            toc: data?.toc,
                            file: data?.file,
                            desc: data?.desc,
                            title: data?.title,
                            button: "Join Now",
                          },
                          ...arrayofblogs.slice(index + 1, arrayofblogs.length),
                        ]);
                      }}
                      value={30}
                    >
                      Join Now
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setArrayofblogs([
                          ...arrayofblogs.slice(0, index),
                          {
                            toc: data?.toc,
                            file: data?.file,
                            desc: data?.desc,
                            title: data?.title,
                            button: "Join Now",
                          },
                          ...arrayofblogs.slice(index + 1, arrayofblogs.length),
                        ]);
                      }}
                      value={40}
                    >
                      Join Now
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
          <div className="jobpodtedfieldtitile">Description</div>

          <div className="jobpostfieldinputbox">
            {console.log(arrayofblogs)}
            <textarea
              type="text"
              placeholder="  distinctio debitis est neque dolore ipsum ut amet pariatur laboriosam nisi ipsam?"
              style={{ padding: "0.5vw" }}
              onChange={(e) => {
                setArrayofblogs([
                  ...arrayofblogs.slice(0, index),
                  {
                    toc: data?.toc,
                    file: data?.file,
                    desc: e.target.value,
                    title: data?.title,
                    button: data?.button,
                  },
                  ...arrayofblogs.slice(index + 1, arrayofblogs.length),
                ]);
              }}
            />
          </div>

          {/* {wrongsec && (
            <div
              style={{ marginLeft: "1vw", color: "red" }}
              className="min-maxhomejob"
            >
              fill all field are cumpulsary these are marked as * of this
              section
            </div>
          )} */}
        </div>
      }
    </>
  );
}
