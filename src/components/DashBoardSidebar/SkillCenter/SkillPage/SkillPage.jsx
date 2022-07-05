import React from "react";
import img5 from "../../../../assets/course/tick.svg";
import img7 from "../../../../assets/course/signal_cellular_alt_black_24dp.svg";
import img17 from "../../../../assets/experts/Iconly-Light-Chart.svg";
import img27 from "../../../../assets/experts/Iconly-Light-Bookmark.svg";
import img37 from "../../../../assets/experts/Iconly-Light-Time Circle.svg";
import Skillcard2 from "./Skillcard2";
import "./Course.css";
export default function SkillPage() {
  return (
    <div>
      <div style={{ padding: "1.5vw" }}>
        <div className="courseaboutdetailtitile">Get a Business Online</div>
        <div style={{ margin: "1vw 0",fontSize:"1.1vw" }} className="subcbtitile">
          Find out how to build a digital presence, sell to customers online,
          and stay safe from hackers.
        </div>
        <div className="courseaboutdetailtitile" style={{fontSize:"1.3vw"}}>About Skill</div>
        <div style={{ margin: "1vw 0" ,fontSize:"1vw"}} className="subcbtitile">
          Start out this free of charge course to discover what it takes to
          start and run a successful business online. You'll also learn how to
          build a digital presence, use e-commerce, keep a business safe from
          hackers, and get noticed locally. Start out this free of charge course
          to discover what it takes to start and run a successful business
          online. You'll also learn how to build a digital presence, use
          e-commerce, keep a business safe from hackers, and get noticed locally
          . Start out this free of charge course to discover what it takes to
          start and run a successful business online. You'll also learn how to
          build a digital presence, use e- commerce, keep a business safe from
          hackers, and get noticed locally.
        </div>

        <div style={{ display: "flex" }} className="flex">
          <div style={{ width: "30vw" }}>
            <div className="courseaboutdetailtitile" style={{fontSize:"1.3vw"}}>Course Detail</div>
            <div className="courseaboutdetailtitilevalue">
              <img src={img37} alt="" /> 30 hours
            </div>
            <div className="courseaboutdetailtitilevalue">
              <img src={img27} alt="" /> 3 Badges
            </div>
            <div className="courseaboutdetailtitilevalue">
              <img src={img17} alt="" /> 24 Modules
            </div>
            <div className="courseaboutdetailtitilevalue">
              <img src={img7} alt="" /> 30 hours
            </div>
          </div>
          <div style={{ width: "30vw" }}>
            <div className="courseaboutdetailtitile" style={{fontSize:"1.3vw"}}>Course Features</div>
            <div className="courseaboutdetailtitilevalue">
              <img src={img5} alt="" /> Video tutorials
            </div>
            <div className="courseaboutdetailtitilevalue">
              <img src={img5} alt="" /> End-of-topic assesments
            </div>
            <div className="courseaboutdetailtitilevalue">
              <img src={img5} alt="" /> Easy-to-implement tips
            </div>
            <div className="courseaboutdetailtitilevalue">
              <img src={img5} alt="" /> Unlimited access
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "2vw" }}>
          <Skillcard2 />
          <Skillcard2 />
          <Skillcard2 />
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <button
            style={{ width: "12vw", marginRight: "2vw", marginTop: "2vw" }}
            className="hb-button"
          >
            Start Free Cource
          </button>
        </div>
      </div>
    </div>
  );
}
