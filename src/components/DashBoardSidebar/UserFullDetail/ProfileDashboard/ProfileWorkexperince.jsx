import React, { useState } from "react";
import img1 from "../../../../assets/My profile – 28/Component 70 – 6.svg";
import "./profile.css";
import img22 from "../../../../assets/My profile – 28/NoPath - Copy.png";

export default function ProfileWorkexperince({ user }) {
  return (
    <div
      style={{ height: "fit-content", width: "100%" }}
      className="profilebadgecontainer"
    >
      <div
        style={{ padding: "2vw", margin: "0 0vw" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Work Experience</div>
        <div className="profiledetailnavmanu">
          <div hidden>
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
      {user?.company?.map((company) => {
        return (
          <>
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
                    <div className="pworkexperincebox-name">
                      {company?.jobTitle} | {company?.companyName}
                    </div>
                    <div
                      style={{
                        color: "black",
                        opacity: "0.7",
                        margin: "0",
                        padding: "0",
                      }}
                      className="pworkexperincebox-name1"
                    >
                      {company?.fromMonth} {company?.fromYear} -{" "}
                      {company?.workingCurrently
                        ? "present"
                        : company?.toMonth + " " + company?.toYear}
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
                      {company?.description}
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
          </>
        );
      })}
    </div>
  );
}
