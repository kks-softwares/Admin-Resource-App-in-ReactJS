import React from "react";

import ProfileCerticateDetails from "./Profilepopup/ProfileCerticateDetails";

export default function ProfileCertificate({ user, width }) {


 

  return (
    <div style={{ height: "fit-content" }} className="profilebadgecontainer">
      <div
        style={{ padding: "2vw", margin: "0 0vw" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Certifications</div>
       
       
      </div>
      <div className="pcertificate-container">
        {user?.certificates?.map((cerificate) => {
          return (
            <ProfileCerticateDetails certificate={cerificate} width={width} />
          );
        })}
      </div>
    </div>
  );
}
