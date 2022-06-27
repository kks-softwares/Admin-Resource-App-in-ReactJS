import React from "react";
import img from "../../../assets/Landing page/apple (1)@2x.png";
import img2 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Edit.svg";
import { Navigate, useNavigate } from "react-router";
import { DeleteForeverOutlined } from "@mui/icons-material";

export default function Skillpopup1({ data, index, page }) {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ alignItems: "center" }} className="navoftableblogsdata">
        <div
          onClick={() => {
            navigate(`/dashbaord/blog`);
          }}
          style={{ width: "6vw", cursor: "pointer" }}
        >
          #{(page - 1) * 10 + (index + 1)}
        </div>

        <div
          onClick={() => {
            navigate(`/dashbaord/blog`);
          }}
          style={{ width: "15vw", cursor: "pointer" }}
        >
          Latest Growing Tech
        </div>

        <div style={{ width: "15vw", fontWeight: "400" }}>
          Praveenkumar (#8732)
        </div>
        <div style={{ width: "25vw", fontSize: "0.85vw" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when essentially unchanged.
        </div>
        <div
          style={{
            width: "10vw",
            color:
              data?.workStatus === "pending"
                ? "#F39600"
                : data?.workStatus === "accepted"
                ? "#2AC96A"
                : "red", fontWeight:"500"
          }}
        >
          Un Publish
        </div>
        <div style={{ width: "4vw" }}>
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
        <div style={{ width: "3vw" }}>
          <DeleteForeverOutlined
            style={{
              margin: "0 0.5vw",
              width: "2vw ",
              height: "2vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
          />{" "}
        </div>
      </div>
    </div>
  );
}
