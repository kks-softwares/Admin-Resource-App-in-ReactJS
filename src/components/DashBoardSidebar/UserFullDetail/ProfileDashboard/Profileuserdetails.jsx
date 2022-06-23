import React, { useState } from "react";
import "./profile.css";
import img2 from "../../../../assets/My profile – 28/Component 71 – 6.svg";
import img1 from "../../../../assets/My profile – 28/Component 70 – 6.svg";
import Box from "@mui/material/Box";
import imgxx from "../../../../assets/Success stories Definition/checkmark (1).svg";
import Modal from "@mui/material/Modal";
import { Popover, TextField, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import API_HOST from "../../../../env";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../../store/userSlice";
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
 



  const [desc, setDesc] = useState("");
  const [desclength, setDesclength] = useState(desc.length);




  
 
  const [titleuser, setTitleuser] = useState("");
  return (
    <div style={{width:"78vw"}} className="Profileuserdetails-container">
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

              <div hidden>
                <img
                  style={{ width: "2.4vw", cursor: "pointer" }}
                  src={img1}
                  alt=""
                />
              </div>
           </div>

            {user?.languages?.map((language) => {
              return (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "21vw",
                    }}
                  >
                    <div className="profileuserfirstonedata">
                      {language?.language} , {language?.proficiencyLevel}
                    </div>
                  </div>
                </>
              );
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

              <div hidden >
                <img
                  style={{ width: "2.4vw", cursor: "pointer" }}
                  src={img1}
                  alt=""
                />
              </div>

          </div>
            {user?.education?.map((education) => {
              return (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "21vw",
                    }}
                  >
                    <div className="profileuserfirstonesubtitle">
                      {education?.college}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "0.851vw",
                      color: "black",
                      opacity: "0.7",
                    }}
                    className="profileuserfirstonedata"
                  >
                    {education?.degree}
                  </div>
                  <div className="profileuserfirstonedata">
                    {education?.startYear}-{education?.endYear}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="profileuserdetailstwo"></div>
      <div style={{ marginTop: "1vw" }} className="profileuserdetailsthree">
        <div style={{ margin: "0 1vw" }} className="profiletitleandmenunav">
          <div className="profiledetailstitle">About Me</div>
          <div className="profiledetailnavmanu"></div>
      </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{ fontSize: "1.15vw", margin: "0.91vw 2vw" }}
            className="profiledetailstitle"
          >
            {user?.title ? user?.title : "Update Your Title"}
          </div>
          <div style={{ width: "3vw" }}>
            <img hidden src={img2} alt="" />
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
          <div hidden style={{ width: "3vw" }}>
            <img  src={img2} alt="" />
          </div>
        </div>
     </div>
    </div>
  );
}
