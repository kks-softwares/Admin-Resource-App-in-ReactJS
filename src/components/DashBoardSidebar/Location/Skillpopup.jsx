import React, { useEffect, useState } from "react";

import img2 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Edit.svg";
import { useNavigate } from "react-router";

import DoneIcon from "@mui/icons-material/Done";

export default function Skillpopup({
  data,
  index,
  page,
  setSelecteddelete,
  selecteddelete,
}) {
  const navigate = useNavigate();
  const [checkonex, setCheckonex] = useState(false);

  useEffect(() => {
    setCheckonex(false);
  }, [data]);
  return (
    <div>
      <div style={{ alignItems: "center" }} className="navoftableblogsdata">
        <div style={{ width: "3vw" }}>
          <div
            className="checkbox"
            onClick={() => {
              setCheckonex(!checkonex);
              if (selecteddelete?.indexOf(data?.locationId) > -1) {
                setSelecteddelete([
                  ...selecteddelete.slice(
                    0,
                    selecteddelete.indexOf(data?.locationId)
                  ),
                  ...selecteddelete.slice(
                    selecteddelete.indexOf(data?.locationId) + 1,
                    selecteddelete.length
                  ),
                ]);
              } else {
                setSelecteddelete([...selecteddelete, data?.locationId]);
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
        <div style={{ width: "14vw" }}>{data?.address}</div>
        <div style={{ width: "11vw" }}>{data?.landMark}</div>
        <div style={{ width: "12vw" }}>{data?.area}</div>
        <div style={{ width: "9vw" }}>{data?.city}</div>
        <div style={{ width: "9vw" }}>{data?.pinCode}</div>
        <div style={{ width: "9vw" }}>{data?.state}</div>
        <div style={{ width: "9vw" }}>{data?.country}</div>
        <div style={{ width: "3vw" }}>
          <img
            onClick={() =>
              navigate(
                `/dashbaord/editlocation/${data?.locationId}/${data?.address}/${data?.landMark}/${data?.area}/${data?.city}/${data?.pinCode}/${data?.state}/${data?.country}`
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
    </div>
  );
}
