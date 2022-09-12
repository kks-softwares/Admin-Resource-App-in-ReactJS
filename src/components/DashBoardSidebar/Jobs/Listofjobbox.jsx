import React, { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import img2 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Edit.svg";
import { useNavigate } from "react-router";
export default function Listofjobbox({ data }) {
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
                // if (selecteddelete?.indexOf(data?.budgetId) > -1) {
                //   setSelecteddelete([
                //     ...selecteddelete.slice(
                //       0,
                //       selecteddelete.indexOf(data?.budgetId)
                //     ),
                //     ...selecteddelete.slice(
                //       selecteddelete.indexOf(data?.budgetId) + 1,
                //       selecteddelete.length
                //     ),
                //   ]);
                // } else {
                //   setSelecteddelete([...selecteddelete, data?.budgetId]);
                // }
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5vw",
          }}
        >
          <div style={{ marginLeft: "0vw" }} className="tagblue">
            Mobile Application
          </div>
          <div style={{ marginLeft: "1vw", fontSize: "0.8vw" }}>
            UX/UI Design
          </div>
        </div>
        <div style={{ height: "1.1vw" }} className="activejobpostname">
          Senior Product Designer (#23613)
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
              $8-$16
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
              Bangalore
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
              07 Days
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer more
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
          <div>No of Proposoals - {"4"}</div>

          <div
            onClick={() => {
                navigate(`/dashbaord/jobdetail/${data?.postId?data?.postId:2}`)
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
