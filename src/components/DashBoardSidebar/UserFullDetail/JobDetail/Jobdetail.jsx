import React, { useState } from "react";
import "./jobdetail.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
export default function Jobdetail() {
  const [down1, setDown1] = useState(false);
  const [down2, setDown2] = useState(false);
  const [down3, setDown3] = useState(false);
  const [down4, setDown4] = useState(false);
  const [longofproposallist, setLongofproposallist] = useState(["1","2"])
  return (
    <div>
      <div
        style={{
          width: "100%",
          background: "white",
          padding: "2vw 1vw",
          margin: "1vw 0vw",
        }}
      >
        {" "}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="tagblue">Mobile Application</div>
            <div style={{ marginLeft: "1vw", fontSize: "0.9vw" }}>
              Mobile Application
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                margin: "0",
                height: "2.4vw",
                background: "#E4E4E4",
                fontSize: "400",
                marginRight:"1vw"
              }}
              className="digitalwallate"
            >
              <span
                style={{
                  padding: "0.6vw 0.5vw",
                  fontSize: "400",
                  background: "none",
                }}
              >
                view issue
              </span>
            </div>
            <div
              style={{
                margin: "0",
                height: "2.4vw",
                background: "#E4E4E4",
                fontSize: "400",
              }}
              className="digitalwallate"
            >
              <span
                style={{
                  padding: "0.6vw 0.5vw",
                  fontSize: "400",
                  background: "none",
                }}
              >
                Chat to Client
              </span>
            </div>
          </div>
        </div>{" "}
        <div
          style={{
            fontWeight: "600",
            fontSize: "1.3vw",
            display: "flex",
            flexWrap: "wrap",
            marginTop: "1vw",
            marginLeft: "1vw",
            color: "#064C87",
          }}
        >
          Senior Product Designer (#34793)
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>
            <LocationOnOutlinedIcon
              style={{
                fontSize: "1.5vw",
                fontWeight: "400",
                margin: "0.5vw 1vw",
              }}
            />
          </span>
          <span style={{ fontSize: "1.1vw", fontWeight: "500" }}>
            {"Remote Kanpur"}
          </span>
        </div>
        <div
          style={{
            width: "100%",
            margin: "0.8vw 1vw",
            fontSize: "0.85vw",
            marginBottom: "0.0vw",
            marginRight: "2vw",
          }}
          className="dashboardtitilemainparabid"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: "1.1vw", fontWeight: "500", margin: "1vw" }}>
            {"Skills"}
          </span>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <div className="skillmap">Usability Testing</div>
          <div className="skillmap">Prototyping</div>
          <div className="skillmap">Prototyping</div>
          <div className="skillmap">User interface</div>
          <div className="skillmap">Prototyping</div>
        </div>
        <div style={{height:down1? `${(longofproposallist?.length*4)+6}vw`:""}} className="boxofextension">
          <div className="flexofboxextentionnav">
            <div>List of Proposal</div>
            <div
              onClick={() => {
                setDown1(!down1);
              }}
            >
              {!down1 ? (
                <KeyboardArrowDownIcon
                  style={{ fontSize: "2vw", margin: "1vw",cursor:"pointer" }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  style={{ fontSize: "2vw", margin: "1vw",cursor:"pointer" }}
                />
              )}
            </div>
          </div>
            <div hidden={!down1} >
              {longofproposallist?.map((data)=>{
                  return <div  className="listofproposalname" >data</div>
              })}
            </div>
        </div>
     
        <div style={{height:down2? `${(longofproposallist?.length*4)+6}vw`:""}} className="boxofextension">
          <div className="flexofboxextentionnav">
            <div>View of Proposal</div>
            <div
              onClick={() => {
                setDown2(!down2);
              }}
            >
              {!down2 ? (
                <KeyboardArrowDownIcon
                  style={{ fontSize: "2vw", margin: "1vw",cursor:"pointer" }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  style={{ fontSize: "2vw", margin: "1vw",cursor:"pointer" }}
                />
              )}
            </div>
          </div>
            <div hidden={!down2} >
              {longofproposallist?.map((data)=>{
                  return <div  className="listofproposalname" >data</div>
              })}
            </div>
        </div>
     
        <div style={{height:down3? `${(longofproposallist?.length*4)+6}vw`:""}} className="boxofextension">
          <div className="flexofboxextentionnav">
            <div>Contrac5</div>
            <div
              onClick={() => {
                setDown3(!down3);
              }}
            >
              {!down3 ? (
                <KeyboardArrowDownIcon
                  style={{ fontSize: "2vw", margin: "1vw",cursor:"pointer" }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  style={{ fontSize: "2vw", margin: "1vw",cursor:"pointer" }}
                />
              )}
            </div>
          </div>
            <div hidden={!down3} >
              {longofproposallist?.map((data)=>{
                  return <div  className="listofproposalname" >data</div>
              })}
            </div>
        </div>
     
        <div style={{height:down4? `${(longofproposallist?.length*4)+6}vw`:""}} className="boxofextension">
          <div className="flexofboxextentionnav">
            <div>Contract Completion</div>
            <div
              onClick={() => {
                setDown4(!down4);
              }}
            >
              {!down4 ? (
                <KeyboardArrowDownIcon
                  style={{ fontSize: "2vw", margin: "1vw",cursor:"pointer" }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  style={{ fontSize: "2vw", margin: "1vw",cursor:"pointer" }}
                />
              )}
            </div>
          </div>
            <div hidden={!down4} >
              {longofproposallist?.map((data)=>{
                  return <div  className="listofproposalname" >data</div>
              })}
            </div>
        </div>
     
      </div>
    </div>
  );
}
