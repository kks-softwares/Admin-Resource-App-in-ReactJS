import React, { useEffect, useState } from "react";
import "./profile.css";
import img1 from "../../../../assets/My profile – 28/Component 70 – 6.svg";
import img2 from "../../../../assets/My profile – 28/Component 71 – 6.svg";
// New Badges Icons
import New_quickest_releaser from "../../../../assets/Badges/quickest_payout_releaser.png";
import New_quickest_assigner from "../../../../assets/Badges/quickest_work_assigner.png";
import New_quickest_performer from "../../../../assets/Badges/quickest_work_performer.png";
import axios from "axios";
import API_HOST from "../../../../env";

export default function ProfileBadges({ width, user }) {
  const [QWorkAssigner, setQWorkAssigner] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/usertotalDetails/viewDetailedModel?userName=${user?.userName}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then((res) => {
        console.log(res?.data?.success?.data);
        setQWorkAssigner(res?.data?.success?.data[0].quicketsJobAssigner);
      })
      .catch((err) => {});
  }, [user]);

  return (
    <div style={{height:"fit-content"}} className="profilebadgecontainer">
      <div
        style={{ padding: "2vw", margin: "0 1vw" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Badges</div>
        <div hidden className="profiledetailnavmanu">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
      <div className="pbadegesboxprofile">
        <div className="psbadege">
          {QWorkAssigner === true ? (
            <div>
              <img src={New_quickest_assigner} alt="" />
              <div style={{ fontWeight: "500" }}>Quickest Work Assigner</div>
            </div>
          ) : (
            <>
              <img
                src={New_quickest_assigner}
                alt=""
                style={{ filter: "grayscale(1)" }}
              />
              <span
                style={{
                  color: "#064C87",
                  fontWeight: "600",
                  fontSize: "0.9vw",
                }}
              >
             <br />  when  Assigned work in a same day ( from Work Posting )
              </span>
              <div style={{ fontWeight: "500" }}>Quickest Work Assigner</div>
            </>
          )}
        </div>
        {/* Quickest Work Performer */}
        <div className="psbadege">
          <div>
            <img
              src={New_quickest_performer}
              alt=""
              style={{ filter: "grayscale(1)" }}
            />
          </div>
          <span
            style={{ color: "#064C87", fontWeight: "600", fontSize: "0.85vw" }}
          >
            When Performed within or before due date{" "}
            {/*( Mention in Work Bidding Form )*/}
          </span>
          <div style={{ fontWeight: "500" }}>Quickest Work Performer</div>
        </div>
        {/* Quickest Payout Releaser */}
        <div className="psbadege">
          <div>
            <img
              src={New_quickest_releaser}
              alt=""
              style={{ filter: "grayscale(1)" }}
            />
          </div>
          <span
            style={{ color: "#064C87", fontWeight: "600", fontSize: "0.85vw" }}
          >
            When Released payment with in 3 days of work completion
          </span>
          <div style={{ fontWeight: "500" }}>Quickest Payout Releaser</div>
        </div>
      </div>
    </div>
  );
}
