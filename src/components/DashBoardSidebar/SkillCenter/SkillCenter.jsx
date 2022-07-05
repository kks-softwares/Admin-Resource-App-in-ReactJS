import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { SearchSharp } from "@mui/icons-material";
import './skill.css'
import './Expert.css'
import axios from "axios";
import API_HOST from "../../../env";
import Allskills from "./Allskills/Allskills";

export default function SkillCenter() {
  const navigate = useNavigate();
  const [workhistorytoggle, setWorkhistorytoggle] = useState(1);
  const [workhistorytoggle1, setWorkhistorytoggle1] = useState(1);
  const { type, userName } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    if (type === "List of Skills") {
      setWorkhistorytoggle(1);
      setWorkhistorytoggle1(1);
    } else if (type === "List of Exams") {
      setWorkhistorytoggle(2);
      setWorkhistorytoggle1(2);
    } else {
      setWorkhistorytoggle(3);
      setWorkhistorytoggle1(3);
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
          <input
            type="text"
            placeholder={
              workhistorytoggle === 1
                ? "search Skills"
                : workhistorytoggle === 2
                ? "search Exams"
                : "search Exams Conducted"
            }
          />
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
        <button className="hb-buttonx">
          {" "}
          {workhistorytoggle === 1
            ? "Add Skills"
            : workhistorytoggle === 2
            ? "Add Exams"
            : "Add Exams"}{" "}
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

            color: "black",
            minWidth: "7vw",
            width: "12vw",
          }}
          onClick={() => {
            navigate(`/dashbaord/skillCenter/List of Skills`);
          }}
        >
          List of Skills
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
            minWidth: "7vw",
            width: "12vw",
          }}
          onClick={() => {
            navigate(`/dashbaord/skillCenter/List of Exams`);
          }}
        >
          List of Exams
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
            minWidth: "25vw",
          }}
          onClick={() => {
            navigate(
              `/dashbaord/skillCenter/Exam Conducts and Certificate issues`
            );
          }}
        >
          Exam Conducts and Certificate issues
        </div>

        <div
          style={{
            color: "#064C87",
            borderBottom: "0.3vw solid #064C87",
            minWidth: "12vw",
            position: "relative",
            right:
              workhistorytoggle === 1
                ? "54vw"
                : workhistorytoggle === 2
                ? "40vw"
                : "19vw",

            bottom: "0.3vw",
            transitionDuration: "1s",
            borderRadius: "0.2vw",
          }}
        ></div>
      </div>
      {workhistorytoggle1 === 1 ? (
        <div>
          <Allskills/>
        </div>
      ) : (
        ""
      )}
      {/* {workhistorytoggle1 === 3 ? (
        <div>
          <CreateJobuserpage user={user} />
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
}
