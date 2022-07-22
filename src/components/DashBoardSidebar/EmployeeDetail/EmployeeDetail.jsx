import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import API_HOST from "../../../env";
import FileManager from "./FileManager/FileManager";
import Documents from "./DocumentsPage/Documents";
import BankDetail from "./BankDetails/BankDetail";
import BasicDetail from "./BasicDetail/BasicDetail";
import Assignedwork from "./AssingedWork/Assignedwork";

export default function EmployeeDetail() {
  const navigate = useNavigate();
  const [workhistorytoggle, setWorkhistorytoggle] = useState(1);
  const [workhistorytoggle1, setWorkhistorytoggle1] = useState(1);
  const { type, employeeName } = useParams();
  const [user, setUser] = useState();

  useEffect(() => { 
    if (type === "Basic Details") {
      setWorkhistorytoggle(1);
      setWorkhistorytoggle1(1);
    } else if (type === "Assigned work") {
      setWorkhistorytoggle(2);
      setWorkhistorytoggle1(2);
    } else if (type === "Work status") {
      setWorkhistorytoggle(3);
      setWorkhistorytoggle1(3);
    } else if (type === "File Manager") {
      setWorkhistorytoggle(4);
      setWorkhistorytoggle1(4);
    } else if (type === "Bank Details") {
      setWorkhistorytoggle(5);
      setWorkhistorytoggle1(5);
    } else if (type === "Document") {
      setWorkhistorytoggle(6);
      setWorkhistorytoggle1(6);
    } else {
      setWorkhistorytoggle1(7);
      setWorkhistorytoggle(7);
    }
  }, [type]);

  useEffect(() => {
    axios
      .get(`${API_HOST}/users/viewUser?userName=${employeeName}`)
      .then((res) => {
        setUser(res?.data?.success?.data);
      });
  }, [employeeName]);

  return (
    <div className="BrowseWorkMain-cntainer">
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

            color: "black",
            minWidth: "7vw",
          }}
          onClick={() => {
            navigate(`/dashbaord/employee/${employeeName}/Basic Details`);
          }}
        >
          Basic Details
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",

            color: "black",
            minWidth: "7vw",
          }}
          onClick={() => {
            navigate(`/dashbaord/employee/${employeeName}/Assigned work`);
          }}
        >
          Assigned work
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",

            color: "black",
            minWidth: "7vw",
          }}
          onClick={() => {
            navigate(`/dashbaord/employee/${employeeName}/Work status`);
          }}
        >
          Work status
        </div>

        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            minWidth: "8vw",
            color: "black",
          }}
          onClick={() => {
            navigate(`/dashbaord/employee/${employeeName}/File Manager`);
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
            navigate(`/dashbaord/employee/${employeeName}/Bank Details`);
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
            navigate(`/dashbaord/employee/${employeeName}/Document`);
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
                ? "68vw"
                : workhistorytoggle === 2
                ? "56.5vw"
                : workhistorytoggle === 3
                ? "45vw"
                : workhistorytoggle === 4
                ? "33vw"
                : workhistorytoggle === 5
                ? "21.5vw"
                : workhistorytoggle === 6
                ? "10vw"
                : "10vw",

            bottom: "0.3vw",
            transitionDuration: "1s",
            borderRadius: "0.2vw",
          }}
        ></div>
      </div>

      {workhistorytoggle === 1 ? (
        <>
          <BasicDetail />
        </>
      ) : (
        ""
      )}
      {workhistorytoggle === 2 ? (
        <>
          <Assignedwork />
        </>
      ) : (
        ""
      )}
      {workhistorytoggle === 3 ? (
        <>
          <Documents />
        </>
      ) : (
        ""
      )}
      {workhistorytoggle === 4 ? (
        <>
          <FileManager />
        </>
      ) : (
        ""
      )}
      {workhistorytoggle === 5 ? (
        <>
          <BankDetail />
        </>
      ) : (
        ""
      )}
      {workhistorytoggle === 6 ? (
        <>
          <Documents />
        </>
      ) : (
        ""
      )}
    </div>
  );
}
