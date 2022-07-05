import React from "react";
import img from "../../../../assets/experts/Group 9471.svg";
import img3 from "../../../../assets/experts/Iconly-Light-Bookmark.svg";
import img5 from "../../../../assets/experts/Arrow - Up.svg";
import img4 from "../../../../assets/experts/Iconly-Light-Chart.svg";
import img2 from "../../../../assets/experts/Iconly-Light-Time Circle.svg";
import img1 from "../../../../assets/experts/Mobile Marketing-pana.svg";
import { useNavigate } from "react-router-dom";

export default function SkillCard1({ selectedCard }) {
  const navigate = useNavigate();

  return (
    <div
      style={{ width: "25vw", height: "30vw", margin: "1.1vw" }}
      className="expertcard-container"
    >
      <div style={{ background: "none" }} className="getcertificate">
        <input
          type="checkbox"
          name=""
          id=""
          checked={selectedCard === 1 ? true : false}
          style={{ marginLeft: "1.5vw" }}
        />
      </div>

      <div style={{ height: "15.5vw" }} className="imageofcourseexpert">
        <img
          style={{
            width: "17vw",
            height: "17vw",
            position: "relative",
            bottom: "0.9vw",
          }}
          src={img1}
          alt=""
        />
      </div>

      <hr style={{ height: "0.15vw", color: "gray", margin: "1vw 0" }} />

      <div className="getexpertcoursetitle">Get a Business Online</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="timeaanftagexpertcourse"
      >
        <div>Created By Udemy</div>
        <div>
          <img
            style={{ width: "1vw", objectFit: "contain" }}
            src={img2}
            alt=""
          />
          30 hours
        </div>
      </div>

      <div className="specialtagexpertcouse">
        <img
          style={{ width: "1.1vw", objectFit: "contain", marginRight: "0.3vw" }}
          src={img3}
          alt=""
        />{" "}
        3 Badges
      </div>
      <div className="specialtagexpertcouse">
        <img
          style={{ width: "1.1vw", objectFit: "contain", marginRight: "0.3vw" }}
          src={img4}
          alt=""
        />
        24 Modules
      </div>

      <div
        onClick={() => {
          navigate("/dashbaord/skill/skilldetail");
        }}
        style={{
          marginLeft: "20vw",
          marginTop: "0",
          position: "relative",
          bottom: "3vw",
        }}
      >
        <img
          style={{
            width: "1.5vw",
            objectFit: "contain",
            marginRight: "0.3vw",
            cursor: "pointer",
          }}
          src={img5}
          alt=""
        />
      </div>
    </div>
  );
}
