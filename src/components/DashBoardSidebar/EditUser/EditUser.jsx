import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./setting.css";
import cuntrycide from "../../../helper/c";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";


import "./profile.css";
import axios from "axios";
import API_HOST from "../../../env";

const useStyles = makeStyles((theme) => ({
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
  select2: {
    height: "1vw",
    width: "34vw",
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
    textAlign: "left",
  },
  icon: {
    fill: "white",
  },
}));

export default function EditUser() {

  const { userName } = useParams();

  const [user, setUser] = useState();

  useEffect(() => {
    axios.get(`${API_HOST}/users/viewUser?userName=${userName}`).then((res) => {
      setUser(res?.data?.success?.data);
    });
  }, [userName]);

  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const handleClosex = () => setOpenx(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Designation, setdesignation] = useState("");
  const [desc, setDesc] = useState("");
  const [mobile, setMobile] = useState();
  const [age2, setAge2] = React.useState(98);
  const [age5, setAge5] = React.useState(1);
  const [countrycode, setCountrycode] = useState("+91");
  const [countryside, setCountryside] = useState(cuntrycide);
  const [Category, setCategory] = useState("Backend Doveloper");
  const [mobilecuntry, setMobilecuntry] = useState(1);
  const [SettingAccEmail, setSettingAccEmail] = useState("");


 
  const classes = useStyles();
  const handleChange2x = (event) => {
    setAge2(event.target.value);
  };
  const handleChangeCategory = (event) => {
    setAge5(event.target.value);
  };

  useEffect(() => {
    axios.get(`${API_HOST}/category/viewCategory`).then((res) => {
      setsettingCategory(res?.data?.success?.data?.docs);

      console.log("viewCategory", res?.data?.success?.data?.docs);
    });

    if (user) {
      setName(user?.fullName);
      setCategory(user?.category);
      setdesignation(user?.designation);
      setEmail(user?.emailId);
      setCountrycode(user?.countryCode);
      setMobile(user?.contactNo);
      setDesc(user?.address);
    }
    console.log(user);
  }, [user]);


  

  const [settingCategory, setsettingCategory] = useState([]);


  console.log("countrycode", countrycode);


 

  const [color, setColor] = useState("#064c87");
  const [btnText, setbtnText] = useState("SAVE");

  // Save Main Setting +++++++++++++
  const handlesavededitSetting = () => {
    const formdata = new FormData();

    formdata.append("userId", user?.userId);
    formdata.append("fullName", Name);
    formdata.append("category", Category);
    formdata.append("designation", Designation);
    formdata.append("countryCode", countrycode);
    // formdata.append("emailId", email);
    formdata.append("contactNo", mobile);
    formdata.append("address", desc);

    axios
      .post(`${API_HOST}/users/editUser`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
    

        setTimeout(() => {
          // Most recent value
          setColor("#064c87");
          setbtnText("SAVE");
        }, 2000);
      })
      .catch((err) => {
        console.log(err.response);
        setSettingAccEmail(err.response.data.message);
        setRestag(true);
      });
  };

  const [restag, setRestag] = useState(false);

  return (
    <div>
      <div className="settingAccountcontainer">
        <div className="settingAccounttitle">
          Need to Update your User Details ?
        </div>

        <hr style={{ margin: "1vw" }} />
        <div className="accountdetailbox">
          <div style={{ width: "15vw" }} className="settingAccounttitle">
            Name
          </div>
          <div style={{ width: "40vw" }} className="settingAccounttitlevalue">
            <div className="jobpostfieldinputbox">
              <input
                style={{ width: "29.2vw" }}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={Name}
              />
            </div>
          </div>
        </div>
        <div className="accountdetailbox">
          <div style={{ width: "15vw" }} className="settingAccounttitle">
            Category
          </div>
          <div style={{ width: "40vw" }} className="settingAccounttitlevalue">
            <div className="jobpostfieldinputbox">
              <div style={{ width: "0.1vw", zIndex: "3" }}>
                <Box
                  sx={{
                    background: "white",
                    border: "1px solid #7070705b",
                    height: "3.0vw",
                    width: "35vw",
                    borderRadius: "5px",
                    margin: "0vw 0vw",
                    position: "relative",
                    bottom: "0.71vw",
                  }}
                  className="setting-toggler"
                >
                  <FormControl variant="standard" fullWidth>
                    <Select
                      className={classes.select2}
                      style={{ float: "left", textAlign: "left" }}
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={Category}
                      disableUnderline
                      inputProps={{
                        classes: {
                          icon: classes.icon,
                        },
                      }}
                      onChange={handleChangeCategory}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            bgcolor: "white",
                            maxHeight: "18vw",
                            "& .MuiMenuItem-root": {
                              padding: "0.1vw 0.1vw",
                              width: "100%",
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
                      <div style={{ width: "100%" }}>
                        <input
                          type="text"
                          style={{ width: "100%" }}
                          onChange={(e) => {
                            setCategory(
                              settingCategory.filter((x) =>
                                x?.categories.includes(e.target.value)
                              )
                            );
                            console.log(
                              settingCategory.filter((x) =>
                                x?.categories.includes(e.target.value)
                              )
                            );
                          }}
                        />
                      </div>
                    

                      {settingCategory &&
                        settingCategory?.map((code, index) => {
                          // console.log("code?.dial_code index ",)
                          return (
                            <MenuItem
                              onClick={() => {
                                setCategory(code?.categories);
                              }}
                              value={code?.categories}
                            >
                              <div
                                style={{
                                  textAlign: "left",
                                  marginTop: "0.5vw",
                                  paddingLeft: "10px",
                                }}
                              >
                                {code?.categories}
                              </div>
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
          </div>
        </div>
        <div className="accountdetailbox">
          <div style={{ width: "15vw" }} className="settingAccounttitle">
            Designation
          </div>
          <div style={{ width: "40vw" }} className="settingAccounttitlevalue">
            <div className="jobpostfieldinputbox">
              <input
                style={{ width: "29.2vw" }}
                onChange={(e) => {
                  setdesignation(e.target.value);
                }}
                value={Designation}
              />
            </div>
          </div>
        </div>
        <div className="accountdetailbox">
          <div style={{ width: "15vw" }} className="settingAccounttitle">
            Email
          </div>
          <div style={{ width: "40vw" }} className="settingAccounttitlevalue">
            <div className="jobpostfieldinputbox">
              <input
                disabled="true"
                type="email"
                style={{ width: "29.2vw" }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>
            {/* <p style={{color: 'red', fontSize:'10px'}}>{SettingAccEmail ? SettingAccEmail : ""}</p> */}
          </div>
        </div>
        <div className="accountdetailbox">
          <div style={{ width: "15vw" }} className="settingAccounttitle">
            Mobile
          </div>
          <div style={{ width: "40vw" }} className="jobpostfieldinputbox">
            <div style={{ width: "0.1vw", zIndex: "3" }}>
              <div className="okmobilejobform" onClick={handleOpenx}>
                {mobilecuntry}
              </div>
              <Box
                sx={{
                  background: "white",
                  border: "1px solid #7070705b",
                  height: "3.0vw",
                  width: "10vw",
                  borderRadius: "5px",
                  margin: "0vw 0vw",
                  position: "relative",
                  bottom: "0.71vw",
                }}
                className="setting-toggler"
              >
                <FormControl variant="standard" fullWidth>
                  <Select
                    className={classes.select3}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={countrycode}
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
                          maxHeight: "18vw",
                          "& .MuiMenuItem-root": {
                            padding: "0.1vw 0.1vw",
                            width: "9vw",
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
                    <div style={{ width: "9vw" }}>
                      <input
                        type="number"
                        style={{ width: "9vw" }}
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
                    {countryside &&
                      countryside?.map((code, index) => {
                        return (
                          <MenuItem
                            onClick={() => {
                              setCountrycode(code?.dial_code);
                            }}
                            value={code?.dial_code}
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
              style={{ paddingLeft: "11vw" }}
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
            <CloseIcon
              style={{
                display: "none",
                position: "relative",
                right: "2vw",
                top: "1.3vw",
                fontSize: "1.3vw",
              }}
            />
          </div>
        </div>
        <div className="accountdetailbox">
          <div style={{ width: "15vw" }} className="settingAccounttitle">
            Address
          </div>
          <div style={{ width: "40vw" }} className="settingAccounttitlevalue">
            <div className="jobpostfieldinputbox">
              <textarea
                type="text"
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{ marginTop: "2vw" }}
          className="accountdetailbox homejobbuttons"
        >
          <button
            style={{ background: "white" }}
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </button>
          <div
            style={{ background: color }}
            className="handlecirclieaboutsaveSetting"
            onClick={() => {
              handlesavededitSetting();
              setColor("green");
              setbtnText("UPDATED");
            }}
          >
            {btnText}
          </div>
        </div>
      </div>
    </div>
  );
}