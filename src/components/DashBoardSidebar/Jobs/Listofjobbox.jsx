import React, { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import img2 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Edit.svg";
import { useNavigate } from "react-router";
export default function Listofjobbox({ data,selecteddelete,setSelecteddelete }) {
  const [checkonex, setCheckonex] = useState(false);
  useEffect(() => {
    setCheckonex(false);
  }, [data]);
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{ overflow: "hidden", display: "block" }}
        className="activejobpostbox"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "1vw",
            marginBottom: "0.751vw",
            justifyContent: "space-between",
          }}
        >
          <div
            className="checkbox"
            onClick={() => {
              setCheckonex(!checkonex);
              if (selecteddelete?.indexOf(data?.jobPostId) > -1) {
                setSelecteddelete([
                  ...selecteddelete.slice(
                    0,
                    selecteddelete.indexOf(data?.jobPostId)
                  ),
                  ...selecteddelete.slice(
                    selecteddelete.indexOf(data?.jobPostId) + 1,
                    selecteddelete.length
                  ),
                ]);
              } else {
                setSelecteddelete([...selecteddelete, data?.jobPostId]);
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
          <div style={{ width: "2vw" }}>
            <img
              onClick={() => navigate(`/dashbaord/editJob/${data?.jobPostId}`)}
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5vw",
          }}
        >
          <div style={{ marginLeft: "0vw" }} className="tagblue">
            {data?.category?.category}
          </div>
          <div style={{ marginLeft: "1vw", fontSize: "0.8vw" }}>
            {data?.subCategory?.subCategory}
          </div>
        </div>
        <div style={{ height: "1.1vw" }} className="activejobpostname">
          {data?.workTitle?.length > 40
            ? data?.workTitle?.slice(0, 40) + ".."
            : data?.workTitle}   ({data?.trackingId})
        </div>
        <div
          style={{ lineHeight: "1.2vw !important", color: "#064C8790" }}
          className="activejobpistbudgetbox"
        >
          <div>
            Budget <br />{" "}
            <span
              style={{
                fontSize: "0.9vw",
                position: "relative",
                bottom: "0.3vw",
                color: "#00000090",
              }}
            >
              ${data?.minimumBudget}- ${data?.maximuBudget}
            </span>
          </div>
          <div style={{ marginRight: "1vw" }}>
            Location <br />{" "}
            <span
              style={{
                fontSize: "0.9vw",
                position: "relative",
                bottom: "0.3vw",
                color: "#00000090",
              }}
            >
              {data?.remote
                ? "remote"
                : data?.onSite?.length > 20
                ? data?.onSite?.slice(0, 18) + ".."
                : data?.onSite}
            </span>
          </div>
          <div style={{ marginRight: "1vw" }}>
            Expired on <br />{" "}
            <span
              style={{
                fontSize: "0.9vw",
                position: "relative",
                bottom: "0.3vw",
                color: "#00000090",
              }}
            >
              {data?.expiry} Days
            </span>
          </div>
        </div>
        <div
          style={{ height: "4.5vw", margin: "0vw" }}
          className="descriptionactibeobbox"
        >
          <div
            style={{
              height: "3.5vw",
              color: "#707070100",
              fontWeight: "400",
            }}
          >
            {data?.shortDescription?.slice(0, 160)}
          </div>

          <br />
          <span
          // onClick={() => {
          //   navigate(
          //     `/dashbaord/jobdetailforbid/${data?.jobPostId}`
          //   );
          // }}
          >
            more
          </span>
        </div>

        <hr />
        <div style={{ paddingLeft: "0vw" }} className="flexlastactiveb">
          <div>No of Proposoals - {data?.listOfBider?.length}</div>

          <div
            onClick={() => {
              navigate(
                `/dashbaord/jobdetail/${data?.jobPostId ? data?.jobPostId : 2}`
              );
            }}
            style={{ color: "#00000090", cursor: "pointer" }}
          >
            {" "}
            See More
          </div>
        </div>
      </div>
    </div>
  );
}
