import React from "react";

import img from "../../../assets/Landing page/apple (1)@2x.png";
import img2 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Edit.svg";
import { Navigate, useNavigate } from "react-router";

export default function Skillpopup1({ data, index, page }) {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ alignItems: "center" }} className="navoftableblogsdata">
        <div
          onClick={() => {
            navigate(`/dashbaord/${data?.userName}/My Profile`);
          }}
          style={{ width: "5vw", cursor: "pointer" }}
        >
          #{(page - 1) * 10 + (index + 1)}
        </div>
        <div style={{ width: "7vw" }}>
          <img
            onClick={() => {
              navigate(`/dashbaord/${data?.userName}/My Profile`);
            }}
            style={{
              margin: "0 0.5vw",
              width: "2.5vw ",
              height: "2.5vw",
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "pointer",
            }}
            src={!data?.media ? img : data?.media}
            alt=""
          />{" "}
        </div>
        <div
          onClick={() => {
            navigate(`/dashbaord/${data?.userName}/My Profile`);
          }}
          style={{ width: "12vw", cursor: "pointer" }}
        >
          {data?.fullName}
        </div>

        {/* <div style={{ width: "12vw", fontWeight: "400" }}>{data?.category?.category}</div> */}
        {/* <div style={{ width: "14vw" }}>{data?.designation?.slice(0.30)}</div> */}
        <div style={{ width: "19vw" }}>{data?.hasedPW}</div>
        <div style={{ width: "8vw" }}>
          {data?.userCreateTime?.slice(0, 10)}
        </div>
        <div style={{ width: "3vw" }}>
          {" "}
          <img
            onClick={() => {
              navigate(`/dashbaord/edituser/${data?.userName}`);
            }}
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
