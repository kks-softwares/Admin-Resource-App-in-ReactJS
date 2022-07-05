import React from "react";
import img2 from "../../../../assets/course/Group 9492.svg";

export default function Skillcard2() {
  return (
    <div>
      <div>
        <div
          style={{ left: "0", marginLeft: "0", margin: "2vw 3vw" }}
          className="boxofcoursemodel"
        >
          <div className="boxofcourseimage">
            <img src={img2} alt="" />
          </div>
          <div className="coursemodulegetstartetitle" >
            Get Started with search
          </div>
          <div className="coursemodulegetstartetitle2">6 Lessons/45 min</div>

          <hr
            style={{
              height: "0.15vw",
              color: "gray",
              marginBlock: "1vw",
            }}
          />

          <div className="searchedelementcoursebox">search engine basics</div>
          <div className="searchedelementcoursebox">
            How search engines work
          </div>
          <div className="searchedelementcoursebox">
            Organic search explained
          </div>
          <div className="searchedelementcoursebox">Paid search explained</div>
          <div className="searchedelementcoursebox">
            Google search explained
          </div>
          <div className="searchedelementcoursebox">Paid search explained</div>
        </div>
      </div>
    </div>
  );
}
