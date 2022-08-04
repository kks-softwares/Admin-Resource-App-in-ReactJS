import React, { useState } from "react";

import img from "../../../assets/Landing page/apple (1)@2x.png";
import img2 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Edit.svg";
import { Navigate, useNavigate } from "react-router";

import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import img11 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import img22 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import img111 from "../../../assets/Web 1280 – 14/Icon.svg";
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
export default function Skillpopup({ data, index, page }) {
const navigate = useNavigate()
  const [checkonex, setCheckonex] = useState(false);
  return (
    <div>
      <div style={{ alignItems: "center" }} className="navoftableblogsdata">
        <div style={{ width: "3vw" }}>
          <div className="checkbox" onClick={() => setCheckonex(!checkonex)}>
            {checkonex ? (
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
        </div>
        <div style={{ width: "14vw" }}>21/A 1st floor, 7th street</div>
          <div style={{ width: "11vw" }}>Toll Plaza</div>
          <div style={{ width: "12vw" }}>M.G. Road</div>
          <div style={{ width: "9vw" }}>Banaglore</div>
          <div style={{ width: "9vw" }}>210022</div>
          <div style={{ width: "9vw" }}>Karnataka</div>
          <div style={{ width: "9vw" }}>India</div>
          <div style={{ width: "3vw" }}>
          <img
            onClick={()=>navigate('/dashbaord/editlocation')}
            style={{
              margin: "0.5vw 0.5vw",
              width: "1.4vw ",
              height: "1.4vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={img2}
            alt=""
          />
          </div>
         </div> 
     
    </div>
  );
}
