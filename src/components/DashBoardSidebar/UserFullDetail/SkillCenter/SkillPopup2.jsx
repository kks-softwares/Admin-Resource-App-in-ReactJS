import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Progress from "react-progressbar";
import { Navigate, useNavigate } from "react-router";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "40vw",
};
export default function SkillPopup2() {
  const navigate= useNavigate()
  return (
    <div>
      <div className="navoftableblogsdata">
        <div style={{ width: "6vw" }}># 24</div>
        <div style={{ width: "17vw" }}>UX Research</div>
        <div style={{ width: "13vw" }}>10/12/2022</div>
        <div style={{ width: "13vw" }}>20 hrs</div>

        <div style={{ width: "10vw" }}>
          20/24
        </div>
        <div style={{ width: "15vw" }}>
        <div
          style={{
            position: "relative",
            top:"0.5vw",
            width:"90%",
            border: "1px solid #064C87",
          }}
        >
          <Progress
            completed={20}
            color="#064C87"
            height="0.65vw"
            border="0.35vw"
          />
        </div>
        </div>
        <div
          onClick={()=>navigate('/dashbaord/skillPreview/1')}
          style={{
            width: "8vw",
            fontWeight: "500",
            fontFamily: "Poppins",
            cursor: "pointer",
          }}
        >
         View
        </div>
      </div>
   </div>
  );
}
