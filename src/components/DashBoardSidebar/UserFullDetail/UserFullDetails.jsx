import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { SearchSharp } from "@mui/icons-material";
import ProfileBanner from "./ProfileDashboard/ProfileBanner";
import ProfileBadges from "./ProfileDashboard/ProfileBadges";
import Profileuserdetails from "./ProfileDashboard/Profileuserdetails";
import Profileworkhistroy from "./ProfileDashboard/Profileworkhistroy";
import ProfileCatalogs from "./ProfileDashboard/ProfileCatalogs";
import Profileportfolio from "./ProfileDashboard/Profileportfolio";
import ProfileSkills from "./ProfileDashboard/ProfileSkills";
import ProfileCertificate from "./ProfileDashboard/ProfileCertificate";
import ProfileWorkexperince from "./ProfileDashboard/ProfileWorkexperince";
import ProfileEducation from "./ProfileDashboard/ProfileEducation";
import ProfileOther from "./ProfileDashboard/ProfileOther";
import "./CreatedJob/BiddingFormDashboard.css";
import axios from "axios";
import API_HOST from "../../../env";
import CreateJobuserpage from "./CreatedJob/CreateJobuserpage";
import AppliedJobpage from "./AppliedJiob/AppliedJobpage";

export default function SkillCenter() {
  const navigate = useNavigate();
  const [workhistorytoggle, setWorkhistorytoggle] = useState(1);
  const [workhistorytoggle1, setWorkhistorytoggle1] = useState(1);
  const { type, userName } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    if (type === "My Profile") {
      setWorkhistorytoggle(1);
      setWorkhistorytoggle1(1);
    } else if (type === "Wallet") {
      setWorkhistorytoggle(2);
      setWorkhistorytoggle1(2);
    } else if (type === "Created Job") {
      setWorkhistorytoggle(3);
      setWorkhistorytoggle1(3);
    } else if (type === "Job Applied") {
      setWorkhistorytoggle(4);
      setWorkhistorytoggle1(4);
    } else if (type === "Skill Center&Exams") {
      setWorkhistorytoggle(5);
      setWorkhistorytoggle1(5);
    } else if (type === "Reference List") {
      setWorkhistorytoggle(6);
      setWorkhistorytoggle1(6);
    } else if (type === "File Manager") {
      setWorkhistorytoggle(7);
      setWorkhistorytoggle1(7);
    } else if (type === "Bank Details") {
      setWorkhistorytoggle(8);
      setWorkhistorytoggle1(8);
    } else if (type === "Documents") {
      setWorkhistorytoggle(9);
      setWorkhistorytoggle1(9);
    } else {
      setWorkhistorytoggle1(9);
      setWorkhistorytoggle(9);
    }
  }, [type]);

  useEffect(() => {
    axios.get(`${API_HOST}/users/viewUser?userName=${userName}`).then((res) => {
      setUser(res?.data?.success?.data);
    });
  }, [userName]);

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
            minWidth: "7vw",
          }}
          onClick={() => {
            navigate(`/dashbaord/${userName}/My Profile`);
          }}
        >
          My Profile
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
            minWidth: "7vw",
          }}
          onClick={() => {
            navigate(`/dashbaord/${userName}/Wallet`);
          }}
        >
          Wallet
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
            minWidth: "8vw",
          }}
          onClick={() => {
            navigate(`/dashbaord/${userName}/Created Job`);
          }}
        >
          Created Job
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
            minWidth: "8vw",
          }}
          onClick={() => {
            navigate(`/dashbaord/${userName}/Job Applied`);
          }}
        >
          Job Applied
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
            minWidth: "12vw",
          }}
          onClick={() => {
            navigate(`/dashbaord/${userName}/Skill Center&Exams`);
          }}
        >
          Skill Center&Exams
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
            minWidth: "9vw",
          }}
          onClick={() => {
            navigate(`/dashbaord/${userName}/Reference List`);
          }}
        >
          Reference List
        </div>

        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            minWidth: "8vw",
            color: "black",
          }}
          onClick={() => {
            navigate(`/dashbaord/${userName}/File Manager`);
          }}
        >
          File Manager
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
            minWidth: "8vw",
          }}
          onClick={() => {
            navigate(`/dashbaord/${userName}/Bank Details`);
          }}
        >
          Bank Details
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
            minWidth: "8vw",
          }}
          onClick={() => {
            navigate(`/dashbaord/${userName}/Document`);
          }}
        >
          Document
        </div>

        <div
          style={{
            color: "#064C87",
            borderBottom: "0.3vw solid #064C87",
            minWidth: "9vw",
            position: "relative",
            right:
              workhistorytoggle === 1
                ? "93vw"
                : workhistorytoggle === 2
                ? "83vw"
                : workhistorytoggle === 3
                ? "74.5vw"
                : workhistorytoggle === 4
                ? "64.5vw"
                : workhistorytoggle === 5
                ? "52.5vw"
                : workhistorytoggle === 6
                ? "40vw"
                : workhistorytoggle === 7
                ? "29.5vw"
                : workhistorytoggle === 8
                ? "19.2vw"
                : workhistorytoggle === 9
                ? "9vw"
                : "9vw",

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
            <ProfileBadges user={user} />
            <Profileuserdetails user={user} />
            <Profileworkhistroy user={user} />
            <ProfileCatalogs user={user} />
            <Profileportfolio user={user} />
            <ProfileSkills user={user} />
            <ProfileCertificate user={user} />
            <ProfileWorkexperince user={user} />
            <ProfileEducation user={user} />
            <ProfileOther user={user} />
          </div>
        </div>
      ) : (
        ""
      )}
      {workhistorytoggle1 === 3 ? (
        <div>
          <CreateJobuserpage user={user} />
        </div>
      ) : (
        ""
      )}
      {workhistorytoggle === 4 ? (
        <>
          <div className="catalogcontainerdashbaord">
            <div className="tableapplidjobflex">
              <div style={{ width: "16vw" }}>Job Title</div>
              <div style={{ width: "35vw", paddingLeft: "1vw" }}>
                Job Details
              </div>
              <div style={{ width: "15vw" }}>Contract Value</div>
              <div style={{ width: "11vw" }}>Status</div>
              <div style={{ width: "8vw" }}></div>
            </div>
          </div>
          <AppliedJobpage />
          {/* {totalpages !== 1 ? (
            <div style={{ width: "25vw" }} className="paginationbox">
              <div>
                <ArrowBackIosIcon style={{ fontSize: "1.5vw" }} />
              </div>

              <div
                hidden={page - 4 > 0 ? false : true}
                onClick={() => setPage(page - 4)}
              >
                {page - 4}
              </div>
              <div
                hidden={page - 3 > 0 ? false : true}
                onClick={() => setPage(page - 3)}
              >
                {page - 3}
              </div>
              <div
                hidden={page - 2 > 0 ? false : true}
                onClick={() => setPage(page - 2)}
              >
                {page - 2}
              </div>
              <div
                hidden={page - 1 > 0 ? false : true}
                onClick={() => setPage(page - 1)}
              >
                {page - 1}
              </div>
              <div style={{ color: "#2A6599" }}>{page}</div>
              <div
                hidden={page + 1 > totalpages ? true : false}
                onClick={() => setPage(page + 1)}
              >
                {page + 1}
              </div>

              <div>
                <ArrowForwardIosIcon style={{ fontSize: "1.5vw" }} />
              </div>
            </div>
          ) : (
            ""
          )} */}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
