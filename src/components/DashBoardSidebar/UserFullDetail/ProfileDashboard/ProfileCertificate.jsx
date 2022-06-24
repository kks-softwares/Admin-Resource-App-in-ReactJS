import React from "react";
import img1 from "../../../../assets/My profile – 28/Component 70 – 6.svg";
import "./profile.css";
import img from "../../../../assets/My profile – 28/awards-and-certifications.svg";

export default function ProfileCertificate({ user }) {
  return (
    <div style={{ height: "fit-content",width:"78vw" }} className="profilebadgecontainer">
      <div
        style={{ padding: "2vw", margin: "0 0vw" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Certifications</div>
        <div hidden className="profiledetailnavmanu">
          <div>
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
      <div className="pcertificate-container">
        {user?.certificates?.map((certificate) => {
          return (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div>
                  <div className="pusercertificatebox">
                    <div className="pusercertificateboximg">
                      <img src={img} alt="" />
                    </div>
                    <div className="pusercertificateboxtext">
                      <div className="pusercertificateboxtexthead">
                        {certificate?.certificateName}
                      </div>
                      <div
                        style={{
                          fontSize: "0.7vw",
                          position: "relative",
                          right: "0.4vw",
                          top: "0.2vw",
                        }}
                        className="profilebannernameandpostemail"
                      >
                        <span>{/* <img src={img21} alt="" /> */}</span>
                        Verified by 44resources
                      </div>
                      <div className="pusercertificateboxtexthead1">
                        Provider: {certificate?.organization}
                      </div>
                      <div className="pusercertificateboxtexthead3">
                        Issued on {certificate?.issueMonth}{" "}
                        {certificate?.issueYear} -{" "}
                        {certificate?.doesNotExpire
                          ? "present"
                          : certificate?.expiredMonth +
                            " " +
                            certificate?.expiredYear}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  width: "71vw",
                  margin: "1vw 0vw",
                  marginBottom: "1vw",
                  color: "#00000090",
                }}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
