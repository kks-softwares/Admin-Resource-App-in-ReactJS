import React, { useState } from "react";
import Profileexperincedetail from "./Profilepopup/Profileexperincedetail";

export default function ProfileWorkexperince({ user, width }) {
  return (
  
      <div style={{ height: "fit-content" }} className="profilebadgecontainer">
        <div
          style={{ padding: "2vw", margin: "0 0vw" }}
          className="profiletitleandmenunav"
        >
          <div className="profiledetailstitle">Work Experience</div>
        </div>
        {user?.company?.map((company) => {
          return <Profileexperincedetail company={company} width={width} />;
        })}
      </div>

  );
}
