import React, { useState } from "react";


import img2 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Edit.svg";
import { Navigate, useNavigate } from "react-router";

import DoneIcon from "@mui/icons-material/Done";


export default function Skillpopup({ data, index, page }) {
  const navigate = useNavigate();
  const [checkonex, setCheckonex] = useState(false);
  return (
    <div
      style={{ alignItems: "top", width: "30%", margin: "1vw" }}
      className="navoftableblogsdata"
    >
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
      <div style={{ width: "12vw" }}>
        <div
          style={{
            lineHeight: "1vw",
            marginBottom: "1vw",
          }}
          className="jobpodtedfieldtitile"
        >
          From
        </div>
        <div>$20</div>
      </div>
      <div style={{ width: "12vw" }}>
        <div
          style={{
            lineHeight: "1vw",
            marginBottom: "1vw",
          }}
          className="jobpodtedfieldtitile"
        >
          To
        </div>
        <div>$200</div>
      </div>

      <div style={{ width: "3vw" }}>
        <img
          onClick={() => navigate("/dashbaord/editpricing")}
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
  );
}