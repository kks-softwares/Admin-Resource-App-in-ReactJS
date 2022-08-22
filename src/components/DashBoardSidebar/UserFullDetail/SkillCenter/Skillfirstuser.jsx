import React from "react";
import SkillPopup2 from "./SkillPopup2";
export default function Skillfirstuser() {
  return (
    <div>
      <div
        style={{ margin: "0vw 1vw", padding: "0vw 1vw" }}
        className="navoftableblogs"
      >
        <div style={{ width: "6vw" }}>Id</div>
        <div style={{ width: "17vw" }}>Title</div>
        <div style={{ width: "13vw" }}>Joined Date</div>
        <div style={{ width: "13vw" }}>Hours</div>
        <div style={{ width: "10vw" }}>Modules</div>
        <div style={{ width: "15vw" }}>Status</div>
        <div style={{ width: "6vw" }}></div>
      </div>

      <div>
        <SkillPopup2 />
        <SkillPopup2 />
        <SkillPopup2 />
        <SkillPopup2 />
      </div>
    </div>
  );
}
