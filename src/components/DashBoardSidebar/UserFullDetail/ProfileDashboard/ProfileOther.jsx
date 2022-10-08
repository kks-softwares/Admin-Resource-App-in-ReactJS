import React, { useState } from "react";

import ProfileotherDetails from "./Profilepopup/ProfileOtherdetails";

export default function ProfileWorkexperince({ user, width }) {
 



  return (
 
      <div style={{ height: "fit-content" }} className="profilebadgecontainer">
        <div
          style={{ padding: "2vw", margin: "0 0vw" }}
          className="profiletitleandmenunav"
        >
          <div className="profiledetailstitle">Others</div>
        
       
        </div>
        {user?.otherExperience?.map((other) => {
          return <ProfileotherDetails other={other}  width={width}/>;
        })}
      </div>
 
  );
}
