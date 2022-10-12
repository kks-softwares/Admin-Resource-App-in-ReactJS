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
import Skillcenteruser from "./SkillCenter/Skillcenteruser";
import Skillfirstuser from "./SkillCenter/Skillfirstuser";
import Refrences from "./Refrences/Refrences";
import Wallet from "./Wallet/Wallet";
import FileManager from "./FileManager/FileManager";
import Documents from "./DocumentsPage/Documents";
import BankDetail from "./BankDetails/BankDetail";
import Jobdetail from './JobDetail/Jobdetail'
import Jobdetail1 from "./AppliedJobDetail/Jobdetail1";
import AppliedJob from "./AppliedJobDetail/AppliedJob";
export default function SkillCenter() {
  const navigate = useNavigate();
  const [workhistorytoggle, setWorkhistorytoggle] = useState(1);

  const { type, userName } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    if (type === "My Profile") {
      setWorkhistorytoggle(1);
    } else if (type === "Wallet") {
      setWorkhistorytoggle(8);
    } else if (type === "Created Job") {
      setWorkhistorytoggle(2);
    } else if (type === "Job Applied") {
      setWorkhistorytoggle(3);
    } else if (type === "Skill Center&Exams") {
      setWorkhistorytoggle(4);
    } else if (type === "Exams & Certificate") {
      setWorkhistorytoggle(5);
    } else if (type === "Reference List") {
      setWorkhistorytoggle(6);
    } else if (type === "File Manager") {
      setWorkhistorytoggle(7);
    } else if (type === "Bank Details") {
      setWorkhistorytoggle(9);
    } else if (type === "Documents") {
      setWorkhistorytoggle(10);
    } 
    else {
      setWorkhistorytoggle(9);
    }
  }, [type]);

  useEffect(() => {
    axios.get(`${API_HOST}/users/viewUser?userName=${userName}`).then((res) => {
      setUser(res?.data?.success?.data);
    });
  }, [userName]);

  const [jobdetail, setjobdetail] = useState("");



  return (
    <div className="BrowseWorkMain-cntainer">
      <button
        style={{
          cursor: "pointer",
          zIndex: "100",
          padding: "0.5vw 0.7vw",
          backgroundColor: "white",
          color: "#000",
          fontSize: "1.2vw",
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
            color: (workhistorytoggle === 2 ||workhistorytoggle===11) ? "#064C87" : "black",
            minWidth: "9vw",
          }}
          onClick={() => {
            navigate(`/dashbaord/${userName}/Created Job`);
          }}
        >
          Created Work
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: workhistorytoggle === 3 ? "#064C87" : "black",
            minWidth: "8vw",
          }}
          onClick={() => {
            navigate(`/dashbaord/${userName}/Job Applied`);
          }}
        >
          Applied Work
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: workhistorytoggle === 4 ? "#064C87" : "black",
            minWidth: "8vw",
          }}
          onClick={() => {
            navigate(`/dashbaord/${userName}/Skill Center&Exams`);
          }}
        >
          Skill Center
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: workhistorytoggle === 5 ? "#064C87" : "black",
            minWidth: "12vw",
          }}
          onClick={() => {
            navigate(`/dashbaord/${userName}/Exams & Certificate`);
          }}
        >
          Exams & Certificate
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
            color: workhistorytoggle === 9 ? "#064C87" : "black",
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
            color: workhistorytoggle === 10 ? "#064C87" : "black",
            minWidth: "8vw",
          }}
          onClick={() => {
            navigate(`/dashbaord/${userName}/Documents`);
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
                ? "104vw"
                : (workhistorytoggle === 2 ||workhistorytoggle===11)
                ? "94vw"
                : (workhistorytoggle === 3||workhistorytoggle===12)
                ? "83.5vw"
                : workhistorytoggle === 4
                ? "73.5vw"
                : workhistorytoggle === 5
                ? "61.5vw"
                : workhistorytoggle === 6
                ? "49vw"
                : workhistorytoggle === 7
                ? "38.5vw"
                : workhistorytoggle === 8
                ? "29vw"
                : workhistorytoggle === 9
                ? "19vw"
                : workhistorytoggle === 10
                ? "9vw"
                : "",

            bottom: "0.3vw",
            transitionDuration: "1s",
            borderRadius: "0.2vw",
          }}
        ></div>
      </div>
      {workhistorytoggle === 1 ? (
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

      {workhistorytoggle === 2 ? (
        <div>
          {
            <CreateJobuserpage
              user={user}
              setjobdetail={setjobdetail}
              setWorkhistorytoggle={setWorkhistorytoggle}
            />
          }
        </div>
      ) : (
        ""
      )}
      {workhistorytoggle === 3 ? (
        <>
          <AppliedJob
            setjobdetail={setjobdetail}
            setWorkhistorytoggle={setWorkhistorytoggle}
          />
        </>
      ) : (
        ""
      )}

      {workhistorytoggle === 4 ? (
        <>
          <Skillfirstuser />

          {/* <Skillcenteruser /> */}
        </>
      ) : (
        ""
      )}
      {workhistorytoggle === 5 ? (
        <>
          {/* <Skillfirstuser /> */}

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
      {workhistorytoggle === 9 ? (
        <>
          <BankDetail  user={user}/>
        </>
      ) : (
        ""
      )}
      {workhistorytoggle === 8 ? (
        <div>
          <Wallet />
        </div>
      ) : (
        ""
      )}
      {workhistorytoggle === 10 ? (
        <>
          <Documents user={user} />
        </>
      ) : (
        ""
      )}
      {workhistorytoggle === 11 ? (
        <>
        {jobdetail? <Jobdetail user={user} jobdetail={jobdetail} />:""}
        </>
      ) : (
        ""
      )}
      {workhistorytoggle === 12 ? (
        <>
         {jobdetail? <Jobdetail1 user={user} jobdetail={jobdetail}  />:""}
        </>
      ) : (
        ""
      )}

     
    </div>
  );
}
