import React, { useState } from "react";
import img1 from "../../../../assets/My profile – 28/Component 70 – 6.svg";
import "./profile.css";
import img22 from "../../../../assets/My profile – 28/NoPath - Copy.png";



export default function ProfileWorkexperince({ user }) {


  return (

      <div style={{ height: "fit-content" ,width:"78vw"}} className="profilebadgecontainer">
        <div
          style={{ padding: "2vw", margin: "0 0vw" }}
          className="profiletitleandmenunav"
        >
          <div className="profiledetailstitle">Others</div>
          <div className="profiledetailnavmanu">
            <div>
              <img hidden src={img1} alt="" />
            </div>
          </div>
       </div>
        {user?.otherExperience?.map((other) => {
          return   <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "1vw 5vw",
            }}
          >
            <div>
              <div className="pworkexperincebox">
                <div className="pworkexperinceboximg">
                  <img src={img22} alt="" />
                </div>
                <div className="pworkexperinceboxtext">
                  <div className="pworkexperincebox-name">{other?.title}</div>
                  <div
                    style={{ margin: "0.1vw" }}
                    className="pworkexperincebox-name1"
                  >
                    {other?.fromMonth} {other?.fromYear} -{" "}
                    {other?.workingCurrently
                      ? "present"
                      : other?.toMonth + " " + other?.toYear}
                  </div>
                  <div
                    style={{
                      fontSize: "0.851vw",
                      color: "black",
                      opacity: "0.7",
                      margin: "0",
                      padding: "0",
                    }}
                    className="profileuserfirstonedata"
                  >
                    {other?.description}
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
