import React, { useState } from "react";

import img2 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Edit.svg";
import { Navigate, useNavigate } from "react-router";

import DoneIcon from "@mui/icons-material/Done";

export default function Skillpopup({
  data,
  index,
  setSelecteddelete,
  selecteddelete,
}) {
  const navigate = useNavigate();
  const [checkonex, setCheckonex] = useState(false);
  return (
    <div
      style={{ alignItems: "top", width: "30%", margin: "1vw" }}
      className="navoftableblogsdata"
    >
      <div style={{ width: "3vw" }}>
        <div
          className="checkbox"
          onClick={() => {
            setCheckonex(!checkonex);
            if (selecteddelete?.indexOf(data?.budgetId) > -1) {
              setSelecteddelete([
                ...selecteddelete.slice(
                  0,
                  selecteddelete.indexOf(data?.budgetId)
                ),
                ...selecteddelete.slice(
                  selecteddelete.indexOf(data?.budgetId) + 1,
                  selecteddelete.length
                ),
              ]);
            } else {
              setSelecteddelete([...selecteddelete, data?.budgetId]);
            }
          }}
        >
          {checkonex ? (
            <DoneIcon
              style={{
                fontSize: "0.81vw",
                color: "blueviolet",
                fontWeight: "600",
              }}
            />
          ) : (
            ""
          )}{" "}
        </div>
      </div>
      <div style={{ width: "12vw" }}>
        <div
          style={{
            lineHeight: "1vw",
            marginBottom: "1vw",
          }}
          className="jobpodtedfieldtitile"
        >
          From
        </div>
        <div>${data?.minimumBudget}</div>
      </div>
      <div style={{ width: "12vw" }}>
        <div
          style={{
            lineHeight: "1vw",
            marginBottom: "1vw",
          }}
          className="jobpodtedfieldtitile"
        >
          To
        </div>
        <div>${data?.maximumBudget}</div>
      </div>

      <div style={{ width: "3vw" }}>
        <img
          onClick={() =>
            navigate(
              `/dashbaord/editpricing/${data?.budgetId}/${data?.minimumBudget}/${data?.maximumBudget}`
            )
          }
          style={{
            margin: "0.5vw 0.5vw",
            width: "1.4vw ",
            height: "1.4vw",
            borderRadius: "50%",
            cursor: "pointer",
            objectFit: "cover",
          }}
          src={img2}
          alt=""
        />
      </div>
    </div>
  );
}
