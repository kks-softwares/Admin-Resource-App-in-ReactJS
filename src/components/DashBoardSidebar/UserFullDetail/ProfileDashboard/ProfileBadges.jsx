import React from "react";
import "./profile.css";
import bageds from "../../assets/My profile – 28/Group 9726.svg";
import img1 from "../../assets/My profile – 28/Component 70 – 6.svg";
import img2 from "../../assets/My profile – 28/Component 71 – 6.svg";
export default function ProfileBadges() {
  return (
    <div className="profilebadgecontainer">
      <div style={{padding:"2vw", margin:"0 1vw" }} className="profiletitleandmenunav">
        <div className="profiledetailstitle">Badges</div>
        <div hidden className="profiledetailnavmanu">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
      <div className="pbadegesbox">
        <div className="psbadege">
          <div>
            <img src={bageds} alt="" />
          </div>
          <div>UX Researcher</div>
        </div>
        <div className="psbadege">
          <div>
            <img src={bageds} alt="" />
          </div>
          <div>Wireframing</div>
        </div>
        <div className="psbadege">
          <div>
            <img src={bageds} alt="" />
          </div>
          <div>Prototyping</div>
        </div>
        <div className="psbadege">
          <div>
            <img src={bageds} alt="" />
          </div>
          <div>Usability Testing</div>
        </div>
        <div className="psbadege">
          <div>
            <img src={bageds} alt="" />
          </div>
          <div>UX Researcher</div>
        </div>
      </div>
    </div>
  );
}
