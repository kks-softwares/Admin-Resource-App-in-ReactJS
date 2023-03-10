import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";
import img from "../../../../assets/Web 1280 – 14/Icon.svg";
import img1 from "../../../../assets/Web 1280 – 14/Group 9831.svg";
import img22 from "../../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import { TextEditor } from "../../BiddingForm/Texteditor";
import axios from "axios";
import API_HOST from "../../../../env";

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
 

  const [arrayoffile, setArrayoffile] = useState();

 
  const [wrongsec, setwrongsec] = useState(false);

 

  useEffect(() => {
    if (
      data?.toc &&
      data?.desc &&
      data?.title &&
      data?.button &&
      data?.heading
    ) {
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
            heading: data?.heading,
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
              <div>Module (Minimum 1 section)*</div>
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

            <div className="jobpodtedfieldtitile"> Module Title *</div>
            <div style={{ width: "69vw" }} className="jobpostfieldinputbox">
              <input
                type="text"
                onChange={(e) => {
                  setArrayofblogs([
                    ...arrayofblogs.slice(0, index),
                    {
                      heading: e.target.value,
                      toc: data?.toc,
                      file: data?.file,
                      desc: data?.desc,
                      title: data?.title,
                      button: data?.button,
                    },
                    ...arrayofblogs.slice(index + 1, arrayofblogs.length),
                  ]);
                }}
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
        </div>
      }
    </>
  );
}
