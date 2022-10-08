import React from "react";

import Profileeducationdetails from "./Profilepopup/ProfileEductiondetailas";

export default function ProfileEducation({ user, width }) {
  return (
    <div style={{ height: "fit-content" }} className="profilebadgecontainer">
      <div
        style={{ padding: "2vw", margin: "0 0vw" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Education</div>
      </div>
      {user?.education?.map((education) => {
        return <Profileeducationdetails education={education} width={width} />;
      })}
    </div>
  );
}
