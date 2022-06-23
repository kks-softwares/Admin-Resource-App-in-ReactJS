import React, { useState } from "react";

import img2 from "../../../../assets/My profile – 28/Component 71 – 6.svg";
import "./profile.css";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import CloseIcon from "@mui/icons-material/Close";
import API_HOST from "../../../../env";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userActions } from "../../../../store/userSlice";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "55vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ProfileSkills({ user }) {
  

 

  return (
    <div style={{ height: "fit-content" }} className="profilebadgecontainer">
      <div
        style={{ padding: "2vw", margin: "0 0vw" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Skills</div>
        <div hidden className="profiledetailnavmanu">
          <div>
            <img src={img2} alt="" />
          </div>
        </div>

    </div>

      <div className="pallskillboxes">
        {user?.noOfSkillSet?.map((skill) => {
          return <div className="pskillbox">{skill?.skills}</div>;
        })}
      </div>
    </div>
  );
}
