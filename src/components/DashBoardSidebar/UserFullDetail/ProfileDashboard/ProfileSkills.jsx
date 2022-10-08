import React from "react";

export default function ProfileSkills({ user, width }) {
  return (
    <div style={{ height: "fit-content" }} className="profilebadgecontainer">
      <div
        style={{ padding: "2vw", margin: "0" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Skills</div>
      </div>

      <div className="pallskillboxes">
        {user?.noOfSkillSet?.map((skill) => {
          return <div className="pskillbox">{skill?.skills}</div>;
        })}
      </div>
    </div>
  );
}
