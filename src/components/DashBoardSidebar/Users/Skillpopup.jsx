import React, { useEffect, useState } from "react";

import img from "../../../assets/Landing page/apple (1)@2x.png";
import img2 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Edit.svg";
import { useNavigate } from "react-router";
import axios from "axios";
import API_HOST from "../../../env";

export default function Skillpopup({ data, index, page }) {
  const navigate = useNavigate();
  const [verify, setVerify] = useState(false);
  useEffect(() => {
    setVerify(data?.verifiedByAdmin);
  }, [data]);

  const verifyuser = () => {
    axios.post(
      `${API_HOST}/users/editUser`,
      {
        verifiedByAdmin: true,
        userId: data?.userId,
      },
      {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      }
    ).then((res)=>{
setVerify(true)
    });
  };

  return (
    <div>
      <div style={{ alignItems: "center" }} className="navoftableblogsdata">
        <div
          onClick={() => {
            navigate(`/dashbaord/${data?.userName}/My Profile`);
          }}
          style={{ width: "6vw", cursor: "pointer" }}
        >
          #{(page - 1) * 10 + (index + 1)}
        </div>
        <div style={{ width: "9vw" }}>
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
          style={{ width: "15vw", cursor: "pointer" }}
        >
          {data?.fullName}
        </div>

        <div style={{ width: "12vw", fontWeight: "400" }}>
          {data?.category?.category}
        </div>
        <div style={{ width: "12vw" }}>{data?.skillSet?.skill}</div>
        <div style={{ width: "12vw" }}>
          {!verify ? (
            <button
              onClick={() => verifyuser()}
              style={{
                fontSize: "1vw",
                height: "2.5vw",
                border: "1px solid gray",
                background: "none",
                borderRadius: "3px",
              }}
            >
              click to verify
            </button>
          ) : (
            <div
              style={{
                fontSize: "0.9vw",
                color: "#168B12",
              }}
            >
              verify by 44resources
            </div>
          )}
        </div>
        <div style={{ width: "10vw" }}>
          {data?.userCreateTime?.slice(0, 10)}
        </div>
        <div style={{ width: "6vw" }}>
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
