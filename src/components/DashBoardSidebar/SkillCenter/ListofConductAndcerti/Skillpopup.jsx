import React from "react";
import { useNavigate } from "react-router-dom";
export default function Skillpopup1({ data }) {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ alignItems: "center" }} className="navoftableblogsdata">
        <div style={{ width: "20vw", cursor: "pointer" }}>
          {data?.contentName?.slice(0, 50)} UX/UI Design Wireframe
        </div>
        <div style={{ width: "10vw", cursor: "pointer" }}>
          {data?.category} 10/12/2022
        </div>

        <div style={{ width: "9vw", fontWeight: "400" }}>
          {data?.author} 60 Min
        </div>
        <div style={{ width: "9vw", fontWeight: "400" }}>{data?.author} 60</div>

        <div
          style={{
            width: "13vw",
            color:
              data?.status === "unpublish"
                ? "#F39600"
                : data?.status === "publish"
                ? "#2AC96A"
                : "red",
            fontWeight: "500",
          }}
        >
          {data?.status} Completed
        </div>
        <div style={{ width: "9vw", fontSize: "0.85vw" }}>
          {data?.desc?.slice(0, 200)} No
        </div>

        <div
          style={{ width: "8vw" }}
          onClick={() => {
            navigate("/dashbaord/examConduct/1");
          }}
        >
          View More
        </div>
      </div>
    </div>
  );
}
