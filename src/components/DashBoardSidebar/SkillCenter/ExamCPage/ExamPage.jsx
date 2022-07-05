import React from "react";
import "./ExamPage.css";
import img from "../../../../assets/dashbaordskill/Iconly-Light-3 User.svg";
import img1 from "../../../../assets/dashbaordskill/Iconly-Light-Calendar.svg";
import img2 from "../../../../assets/dashbaordskill/Iconly-Light-outline-Edit.svg";
import img3 from "../../../../assets/dashbaordskill/Iconly-Light-Work.svg";
import img4 from "../../../../assets/dashbaordskill/Wallet.svg";
import Examstudentdata from "./Examstudentdata";
export default function ExamPage() {
  return (
    <div style={{ padding: "1vw" }}>
      <div className="whiteboxofskillexamc">
        <div
          className="courseaboutdetailtitile"
          style={{ color: "#064C87", fontSize: "1.3vw" }}
        >
          User Wireframe
        </div>
        <div
          style={{ margin: "1vw 0", fontSize: "1vw", width: "100%" }}
          className="subcbtitile"
        >
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

        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="cardofexamcunductpage">
            <div
              className="courseaboutdetailtitile"
              style={{ color: "#064C87", fontSize: "1.1vw", fontWeight: "400" }}
            >
              Conducted On
            </div>
            <div className="valueofcardsexams">
              <img
                src={img3}
                style={{ width: "1.82vw", objectFit: "contain" ,margin:"0 0.5vw"}}
                alt=""
              />
              <span
                style={{ margin: "1vw 0.5vw", fontSize: "1vw", width: "100%" }}
                className="subcbtitile"
              >
                {" "}
                Sep 20 ,2021
              </span>
            </div>
          </div>
          <div className="cardofexamcunductpage">
            <div
              className="courseaboutdetailtitile"
              style={{ color: "#064C87", fontSize: "1.1vw", fontWeight: "400" }}
            >
              Conducted by
            </div>
            <div className="valueofcardsexams">
              <img
                src={img}
                style={{ width: "1.82vw", objectFit: "contain" ,margin:"0 0.5vw" }}
                alt=""
              />
              <span
                style={{ margin: "1vw 0.5vw", fontSize: "1vw", width: "100%" }}
                className="subcbtitile"
              >
                {" "}
                Rohith Kumar
              </span>
            </div>
          </div>
          <div className="cardofexamcunductpage">
            <div
              className="courseaboutdetailtitile"
              style={{ color: "#064C87", fontSize: "1.1vw", fontWeight: "400" }}
            >
              Total Candidates
            </div>
            <div className="valueofcardsexams">
              <img
                src={img4}
                style={{ width: "1.82vw", objectFit: "contain" ,margin:"0 0.5vw" }}
                alt=""
              />
              <span
                style={{ margin: "1vw 0.5vw", fontSize: "1vw", width: "100%" }}
                className="subcbtitile"
              >
                25
              </span>
            </div>
          </div>
          <div className="cardofexamcunductpage">
            <div
              className="courseaboutdetailtitile"
              style={{ color: "#064C87", fontSize: "1.1vw", fontWeight: "400" }}
            >
              Duration
            </div>
            <div className="valueofcardsexams">
              <img
                src={img1}
                style={{ width: "1.82vw", objectFit: "contain" ,margin:"0 0.5vw" }}
                alt=""
              />
              <span
                style={{ margin: "1vw 0.5vw", fontSize: "1vw", width: "100%" }}
                className="subcbtitile"
              >
                3 Months
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="whiteboxofskillexamc">
        <div
          style={{ position: "relative", right: "1vw", top: "1vw" }}
          className="profileworkhistruytoggleer"
        >
          <div
            className="profileworkhistruytoggleervalue"
            style={{
              textAlign: "left",
            }}
          >
            All Candidates
          </div>

          <div
            style={{
              color: "#064C87",
              borderBottom: "0.3vw solid #064C87",
              width: "7vw",
              position: "relative",
              right: "13vw",
              bottom: "0.3vw",
              transitionDuration: "1s",
              borderRadius: "0.2vw",
            }}
          ></div>
        </div>

        <div
          style={{ margin: "2vw 1vw", padding: "0vw 1vw",cursor:"pointer" }}
          className="navoftableblogs"
        >
          <div style={{ width: "5vw" }}>Id</div>
          <div style={{ width: "25vw" }}>Name</div>

          <div style={{ width: "12vw" }}>Percentage</div>

          <div style={{ width: "15vw" }}>Status</div>
          <div style={{ width: "10vw" }}></div>
          <div style={{ width: "5vw" }}></div>
        </div>

        <Examstudentdata />
        <Examstudentdata />
      </div>
    </div>
  );
}
