import React from "react";
import "./Documents.css";
import img2 from "../../../../assets/Success stories Definition/checkmark (1).svg";
import img1 from "../../../../assets/Web 1280 – 14/Group 9831.svg";

export default function Documents() {
  return (
    <div>
      <div
        style={{ margin: "1vw 0.5vw", padding: "0" }}
        className="navoftableblogs"
      >
        Document Details
      </div>

      <div className="boxoddocuments">
        <div className="titledocuments">Id Verification</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="Headingdocuments">Driving License</div>
          <div style={{ fontWeight: "400" }} className="Headingdocuments">
            TN58009189102
            <span>
              <img
                style={{
                  width: "1vw",
                  margin: "0.4vw",
                  position: "relative",
                  bottom: "0.2vw",
                }}
                src={img2}
                alt=""
              />
            </span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" , flexWrap: "wrap" }}>
          <div style={{ width: "50%" }} className="inputfilesshowncatboxsingle">
            <div className="inputfilesshowncatboxsingleimg">
              <img src={img1} alt="" />
            </div>
            <div className="fileselctednamecate">Modern submitted.docx</div>
          </div>
          <div style={{ width: "50%" }} className="inputfilesshowncatboxsingle">
            <div className="inputfilesshowncatboxsingleimg">
              <img src={img1} alt="" />
            </div>
            <div className="fileselctednamecate">Modern submitted.docx</div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="Headingdocuments">Driving License</div>
          <div style={{ fontWeight: "400" }} className="Headingdocuments">
            TN58009189102
            <span>
              <img
                style={{
                  width: "1vw",
                  margin: "0.4vw",
                  position: "relative",
                  bottom: "0.2vw",
                }}
                src={img2}
                alt=""
              />
            </span>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <div style={{ width: "50%" }} className="inputfilesshowncatboxsingle">
            <div className="inputfilesshowncatboxsingleimg">
              <img src={img1} alt="" />
            </div>
            <div className="fileselctednamecate">Modern submitted.docx</div>
          </div>
        </div>

        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <div className="Headingdocuments">Driving License</div>
          <div style={{ fontWeight: "400" }} className="Headingdocuments">
            TN58009189102
            <span>
              <img
                style={{
                  width: "1vw",
                  margin: "0.4vw",
                  position: "relative",
                  bottom: "0.2vw",
                }}
                src={img2}
                alt=""
              />
            </span>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <div style={{ width: "50%" }} className="inputfilesshowncatboxsingle">
            <div className="inputfilesshowncatboxsingleimg">
              <img src={img1} alt="" />
            </div>
            <div className="fileselctednamecate">Modern submitted.docx</div>
          </div>
          <div style={{ width: "50%" }} className="inputfilesshowncatboxsingle">
            <div className="inputfilesshowncatboxsingleimg">
              <img src={img1} alt="" />
            </div>
            <div className="fileselctednamecate">Modern submitted.docx</div>
          </div>
        </div>
      </div>
    </div>
  );
}
