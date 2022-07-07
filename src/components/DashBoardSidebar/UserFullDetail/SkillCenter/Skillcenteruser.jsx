import React, { useState } from "react";
import imge1 from "../../../../assets/Dashboard/Skill center – 2/clipboard.svg";
import imge2 from "../../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Document.svg";
import imge3 from "../../../../assets/Dashboard/Skill center – 2/trending.svg";
import Skillpopup from "./Skillpopup";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function Skillcenteruser() {
  const [page, setPage] = useState(1);
  return (
    <>
      <div
        style={{ margin: "0vw 0vw", padding: "0", marginBottom: "0vw" }}
        className="navoftableblogs"
      >
        Exam Overview
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "0 5vw",
        }}
      >
        <div className="cardofexamstype">
          <div className="titileofcardofexamstype">Total Exams</div>
          <div className="imgsamllexamtype">
            <img src={imge1} alt="" />
          </div>
          <div className="valueofcardofexamstype">56</div>
        </div>
        <div className="cardofexamstype">
          <div className="titileofcardofexamstype">Exams Completed</div>
          <div style={{ background: "#00875A20" }} className="imgsamllexamtype">
            <img src={imge2} alt="" />
          </div>
          <div className="valueofcardofexamstype">30</div>
        </div>
        <div className="cardofexamstype">
          <div className="titileofcardofexamstype">Upcoming Exams</div>
          <div style={{ background: "#FF991F20" }} className="imgsamllexamtype">
            <img src={imge3} alt="" />
          </div>
          <div className="valueofcardofexamstype">26</div>
        </div>
        <div className="cardofexamstype">
          <div className="titileofcardofexamstype">Percentage</div>
          <div className="imgsamllexamtype">
            <img src={imge1} alt="" />
          </div>
          <div className="valueofcardofexamstype">90%</div>
        </div>
      </div>

      <div
        style={{ margin: "0vw 0vw", padding: "0", marginBottom: "2vw" }}
        className="navoftableblogs"
      >
        List of Exams
      </div>
      <div>
        <div
          style={{ margin: "0vw 1vw", padding: "0vw 1vw" }}
          className="navoftableblogs"
        >
          <div style={{ width: "20vw" }}>Name</div>
          <div style={{ width: "12vw" }}>Date</div>
          <div style={{ width: "12vw" }}>Percentage</div>
          <div style={{ width: "15vw" }}>Status</div>
          <div style={{ width: "10vw" }}>Certificate</div>
          <div style={{ width: "8vw" }}></div>
        </div>

        <Skillpopup />
        <Skillpopup />
        <Skillpopup />
        <Skillpopup />
        <Skillpopup />
        <Skillpopup />
        <Skillpopup />
        <Skillpopup />

        <div className="paginationbox">
          <div>
            <ArrowBackIosIcon style={{ fontSize: "1.5vw" }} />
          </div>
          <div style={{ color: page === 1 ? "#2A6599" : "" }}>1</div>
          <div>2</div>
          <div>3</div>
          <div>.</div>
          <div>.</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>
            <ArrowForwardIosIcon style={{ fontSize: "1.5vw" }} />
          </div>
        </div>
      </div>
    </>
  );
}
