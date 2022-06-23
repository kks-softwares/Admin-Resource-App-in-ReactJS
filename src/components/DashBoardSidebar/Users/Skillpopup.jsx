import React from "react";

import img from "../../../assets/Landing page/apple (1)@2x.png";
import img2 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Edit.svg";
import { Navigate, useNavigate } from "react-router";

export default function Skillpopup() {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ alignItems: "center" }} className="navoftableblogsdata">
        <div
          onClick={() => {
            navigate("/dashbaord/userdetail/My Profile");
          }}
          style={{ width: "10vw", cursor: "pointer" }}
        >
          #5435
        </div>
        <div style={{ width: "6vw" }}>
          <img
            onClick={() => {
              navigate("/dashbaord/userdetail/My Profile");
            }}
            style={{
              margin: "0 0.5vw",
              width: "2.5vw ",
              height: "2.5vw",
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "pointer",
            }}
            src={img}
            alt=""
          />{" "}
        </div>
        <div
          onClick={() => {
            navigate("/dashbaord/userdetail/My Profile");
          }}
          style={{ width: "15vw", cursor: "pointer" }}
        >
          Mahendran H
        </div>

        <div style={{ width: "15vw", color: "#41B541", fontWeight: "500" }}>
          Development
        </div>
        <div style={{ width: "15vw" }}>Front End Developer</div>
        <div style={{ width: "12vw" }}>12 June 2022</div>
        <div style={{ width: "6vw" }}>
          {" "}
          <img
            style={{
              margin: "0 0.5vw",
              width: "2vw ",
              height: "2vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={img2}
            alt=""
          />{" "}
        </div>
      </div>
    </div>
  );
}
