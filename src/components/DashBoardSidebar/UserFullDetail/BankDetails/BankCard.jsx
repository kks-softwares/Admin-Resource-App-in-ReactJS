import React from "react";
import img from "../../../../assets/Dashboard/Skill center – 2/indian-bank-logo-B89BF08C2C-seeklogo.com.png";
import img1 from "../../../../assets/Dashboard/Skill center – 2/Mask Group 9.png";
import img2 from "../../../../assets/Success stories Definition/checkmark (1).svg";

export default function BankCard() {
  return (
    <div className="bankcard-conatainer">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "70%" }}>
          <div className="titledocuments">Primary Account</div>
        </div>
        <div style={{ width: "30%" }}>
          <div>
            <img
              style={{
                width: "8vw",
                objectFit: "contain",
                textAlign: "center",
              }}
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "70%" }}>
          <div className="Headingdocuments">Indian Bank</div>
        </div>
        <div style={{ width: "30%" }}>
          <div
            className="Headingdocuments"
            style={{
              fontSize: "0.91vw",
              margin: "0vw",
              width: "100%",
              textAlign: "center",
            }}
          >
            Account Details
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "70%" }}>
          <div
            style={{ fontSize: "400" , width:"100%" }}
            className="Headingdocuments"
          >
            SB *********8473
          </div>
          <div style={{ fontSize: "400" , width:"100%" }} className="Headingdocuments">
            IFSC code - IDIB000667
          </div>
          <div style={{ fontSize: "400", width:"100%" }} className="Headingdocuments">
            Status - 
            <span>
              <img
                style={{
                  width: "1vw",
                  margin: "0.4vw",
                  position: "relative",
               
                }}
                src={img2}
                alt=""
              />
            </span>
           <span style={{fontSize:"0.8vw"}}>
           Verified by 44 resources.
           </span>
          </div>
        </div>
        <div style={{ width: "30%" }}>
          <img
            src={img1}
            style={{ width: "9vw", objectFit: "contain" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
