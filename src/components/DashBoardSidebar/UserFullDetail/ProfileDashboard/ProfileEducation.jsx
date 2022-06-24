import React, { useState } from "react";
import img1 from "../../../../assets/My profile – 28/Component 70 – 6.svg";
import "./profile.css";
import img2222 from "../../../../assets/My profile – 28/images.png";


export default function ProfileEducation({ user }) {
 
  return (
    <div style={{ height: "fit-content",width:"78vw" }} className="profilebadgecontainer">
      <div
        style={{ padding: "2vw", margin: "0 0vw" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Education</div>
        <div className="profiledetailnavmanu">
          <div hidden>
            <img src={img1} alt="" />
          </div>
        </div>
     </div>
      {user?.education?.map((education) => {
              return  <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "95%",
                }}
              >
                <div className="pworkexperinxecontainer">
                  <div className="pworkexperincebox">
                    <div className="pworkexperinceboximg">
                      <img src={img2222} alt="" />
                    </div>
                    <div className="pworkexperinceboxtext">
                      <div className="pworkexperincebox-name">
                        {education?.college}{" "}
                      </div>
                      <div
                        style={{ margin: "0.1vw" }}
                        className="pworkexperincebox-name1"
                      >
                        {education?.startYear}-{education?.endYear}
                      </div>
                      <div
                        style={{ fontSize: "0.851vw", color: "black", opacity: "0.7" }}
                        className="profileuserfirstonedata"
                      >
                        {education?.description}
                      </div>
                    </div>
                  </div>
                </div>
               
        
             </div>
              <hr
                style={{
                  width: "71vw",
                  margin: "0 4vw",
                  marginBottom: "1vw",
                  color: "#00000090",
                }}
              />
            </>;
            })}
     
    </div>
  );
}
