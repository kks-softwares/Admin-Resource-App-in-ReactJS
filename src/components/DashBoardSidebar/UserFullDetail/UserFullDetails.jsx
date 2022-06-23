import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { SearchSharp } from "@mui/icons-material";
import { useSelector } from "react-redux";

import ProfileBanner from "./ProfileDashboard/ProfileBanner";

export default function SkillCenter() {
  const navigate = useNavigate();

  const { user, loggedInStatus } = useSelector((state) => state.user);
  const [workhistorytoggle, setWorkhistorytoggle] = useState(1);
  const [workhistorytoggle1, setWorkhistorytoggle1] = useState(1);
  const { type } = useParams();

  useEffect(() => {
    if (type === "Profile") {
      setWorkhistorytoggle(1);
      setWorkhistorytoggle1(1);
    } else if (type === "Ongoing skill and learn") {
      setWorkhistorytoggle(2);
      setWorkhistorytoggle1(2);
    } else if (type === "Examination") {
      setWorkhistorytoggle(3);
      setWorkhistorytoggle1(3);
    } else if (type === "Certifications") {
      setWorkhistorytoggle(4);
      setWorkhistorytoggle1(4);
    } else {
      setWorkhistorytoggle1(5);
    }
  }, [type]);

  return (
    <div className="BrowseWorkMain-cntainer">
      <div className="searchboxcontainer">
        <div className="serachjobbox">
          <span>
            <SearchSharp style={{ fontSize: "1.7vw" }} />
          </span>
          <input type="text" placeholder="search Users" />
          <button
            style={{ width: "11vw", height: "2.6vw" }}
            className="hb-button"
          >
            Search
          </button>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          right: "1vw",
          maxWidth: "80vw",
          overflow: "scroll",
          width: "100vw",
          display: "flex",
          flexWrap: "none",
          justifyContent: "left",
        }}
        className="profileworkhistruytoggleer"
      >
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
           
            color: "black",
            minWidth:"7vw"
          }}
          onClick={() => {
            navigate("/dashbaord/userdetail/Profile");
          }}
        >
          My Profile
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
            minWidth:"7vw"
          }}
          onClick={() => {
            navigate("/dashbaord/userdetail/Ongoing skill and learn");
          }}
        >
          Wallet
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
            minWidth:"8vw"
          }}
          onClick={() => {
            navigate("/dashbaord/userdetail/Examination");
          }}
        >
          Created Job
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
            minWidth:"8vw"
          }}
          onClick={() => {
            navigate("/dashbaord/userdetail/Certifications");
          }}
        >
          Job Applied
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
            minWidth:"12vw"
          }}
          onClick={() => {
            navigate("/dashbaord/userdetail/Profile");
          }}
        >
          Skill Center&Exams
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
            minWidth:"9vw"
          }}
          onClick={() => {
            navigate("/dashbaord/userdetail/Ongoing skill and learn");
          }}
        >
          Reference List
        </div>

        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            minWidth:"8vw",
            color: "black",
          }}
          onClick={() => {
            navigate("/dashbaord/userdetail/Examination");
          }}
        >
          File Manager
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
            minWidth:"8vw"
          }}
          onClick={() => {
            navigate("/dashbaord/userdetail/Certifications");
          }}
        >
          Bank Details
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
            minWidth:"8vw"
          }}
          onClick={() => {
            navigate("/dashbaord/userdetail/Examination");
          }}
        >
          Document
        </div>

        <div
          style={{
            color: "#064C87",
            borderBottom: "0.3vw solid #064C87",
            width: "12vw",
            position: "relative",
            right:
              workhistorytoggle === 1
                ? "58vw"
                : workhistorytoggle === 2
                ? "42vw"
                : workhistorytoggle === 3
                ? "27vw"
                : "13vw",
            bottom: "0.3vw",
            transitionDuration: "1s",
            borderRadius: "0.2vw",
          }}
        ></div>
      </div>
      {workhistorytoggle1 === 1 ? (
        <div>
          <div style={{ flexWrap: "wrap" }} className="filterboxflex">
            <ProfileBanner user={user} />
            {/* <ProfileBadges user={user} />
            <Profileuserdetails user={user} />
            <Profileworkhistroy user={user} />
            <ProfileCatalogs user={user} />
            <Profileportfolio user={user} />
            <ProfileSkills user={user} />
            <ProfileCertificate user={user} />
            <ProfileWorkexperince user={user} />
            <ProfileEducation user={user} />
            <ProfileOther user={user} /> */}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
