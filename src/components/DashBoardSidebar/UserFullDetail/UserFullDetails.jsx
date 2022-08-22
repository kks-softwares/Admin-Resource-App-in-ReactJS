import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

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
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import axios from "axios";
import API_HOST from "../../../env";
import CreateJobuserpage from "./CreatedJob/CreateJobuserpage";
import AppliedJobpage from "./AppliedJiob/AppliedJobpage";
import Skillcenteruser from "./SkillCenter/Skillcenteruser";
import Skillfirstuser from "./SkillCenter/Skillfirstuser";
import Refrences from "./Refrences/Refrences";
import Wallet from "./Wallet/Wallet";
import FileManager from "./FileManager/FileManager";
import Documents from "./DocumentsPage/Documents";
import BankDetail from "./BankDetails/BankDetail";

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
       <button
            style={{
              cursor: "pointer",
              zIndex: "100",
              padding: "0.5vw 0.7vw",
              backgroundColor: "white",
              color: "#000",
              fontSize:"1.2vw",
              borderRadius: "0.3vw",
              border: "1px solid #d7d7d7",
            }}
            onClick={() => navigate(-1)}
          >
            <ArrowBackIosNewIcon />
          </button>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "78vw",
          margin: "1vw 1vw",
          alignItems: "center",
          height: "3vw",
        }}
      >
        <div
          style={{
            color: "#064C87",
            fontSize: "2.1vw",
            textTransform: "capitalize",
          }}
        >
          {user?.fullName}
        </div>
        <button
          className="hb-buttonx"
          onClick={() => navigate("/dashbaord/chat")}
        >
          Chat us
        </button>
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
            color: workhistorytoggle === 1 ? "#064C87" : "black",
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
            color: workhistorytoggle === 2 ? "#064C87" : "black",
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
            color: workhistorytoggle === 3 ? "#064C87" : "black",
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
            color: workhistorytoggle === 4 ? "#064C87" : "black",
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
            color: workhistorytoggle === 5 ? "#064C87" : "black",
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
            color: workhistorytoggle === 6 ? "#064C87" : "black",
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
            color: workhistorytoggle === 7 ? "#064C87" : "black",
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
            color: workhistorytoggle === 8 ? "#064C87" : "black",
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
            color: workhistorytoggle === 9 ? "#064C87" : "black",
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
      {workhistorytoggle1 === 2 ? (
        <div>
          <Wallet />
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
        </>
      ) : (
        ""
      )}

      {workhistorytoggle === 5 ? (
        <>
          <Skillfirstuser />

          <Skillcenteruser />
        </>
      ) : (
        ""
      )}
      {workhistorytoggle === 6 ? (
        <>
          <Refrences />
        </>
      ) : (
        ""
      )}
      {workhistorytoggle === 7 ? (
        <>
          <FileManager />
        </>
      ) : (
        ""
      )}
      {workhistorytoggle === 8 ? (
        <>
          <BankDetail />
        </>
      ) : (
        ""
      )}
      {workhistorytoggle === 9 ? (
        <>
          <Documents user={user} />
        </>
      ) : (
        ""
      )}
    </div>
  );
}
