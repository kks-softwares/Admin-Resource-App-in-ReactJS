import React from "react";

export default function ProfileCerticateDetails({ certificate, width }) {
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
          <a href={certificate?.verifiedUrl} target="_blank">
            <div className="pusercertificatebox">
              <div className="pusercertificateboximg">
                <img src={certificate?.images} alt="" />
              </div>
              <div className="pusercertificateboxtext">
                <div className="pusercertificateboxtexthead">
                  {certificate?.certificateName}
                </div>

                <div className="pusercertificateboxtexthead1">
                  Provider: {certificate?.organization}
                </div>
                <div className="pusercertificateboxtexthead3">
                  Issued on {certificate?.issueMonth} {certificate?.issueYear} -{" "}
                  {certificate?.doesNotExpire
                    ? "present"
                    : certificate?.expiredMonth +
                      " " +
                      certificate?.expiredYear}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <hr
        style={{
          width: "70vw",
          margin: "1vw 0vw",
          marginBottom: "1vw",
          color: "#00000090",
        }}
      />
    </>
  );
}
