import React, { useEffect, useState } from "react";
import "./jobdetail.css";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Listofproposals from "./Listofproposals";
import StarRatings from "react-star-ratings";
import img1 from "../../../../assets/Web 1280 – 14/Group 9831.svg";
import img from "../../../../assets/Landing page/pexels-christina-morillo-1181467.png";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import API_HOST from "../../../../env";
import axios from "axios";

export default function Jobdetail({ jobdetail }) {
  const [down1, setDown1] = useState(false);
  const [down2, setDown2] = useState(false);
  const [down3, setDown3] = useState(false);
  const [down4, setDown4] = useState(false);
  const [longofproposallist, setLongofproposallist] = useState(["1", "2"]);
  const [data1, setdata1] = useState();

  useEffect(() => {
    axios
      .get(`${API_HOST}/jobPost/viewJobPost?jobPostId=${jobdetail}`)
      .then((res) => {
        console.log(res?.data?.success?.data[0]);
        setdata1(res?.data?.success?.data[0]);
        setLongofproposallist(res?.data?.success?.data[0]?.listOfBider);
      });
  }, [jobdetail]);

  const date = new Date();

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
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="tagblue">{data1?.category?.category}</div>
            <div style={{ marginLeft: "1vw", fontSize: "0.9vw" }}>
              {data1?.subCategory?.subCategory}
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                margin: "0",
                height: "2.4vw",
                background: "#E4E4E4",
                fontSize: "400",
                marginRight: "1vw",
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
          {data1?.workTitle}
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
            {data1?.remote ? "Remote" : data1?.onSite}
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
          {data1?.shortDescription}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: "1.1vw", fontWeight: "500", margin: "1vw" }}>
            {"Skills"}
          </span>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          {data1?.skill1 && <div className="skillmap">{data1?.skill1}</div>}
          {data1?.skill2 && <div className="skillmap">{data1?.skill2}</div>}
          {data1?.skill3 && <div className="skillmap">{data1?.skill3}</div>}
          {data1?.skill4 && <div className="skillmap">{data1?.skill4}</div>}
          {data1?.skill5 && <div className="skillmap">{data1?.skill5}</div>}
          {data1?.skill6 && <div className="skillmap">{data1?.skill6}</div>}
          {data1?.skill7 && <div className="skillmap">{data1?.skill7}</div>}
          {data1?.skill8 && <div className="skillmap">{data1?.skill8}</div>}
          {data1?.skill9 && <div className="skillmap">{data1?.skill9}</div>}
          {data1?.skill10 && <div className="skillmap">{data1?.skill10}</div>}
        </div>
        <div
          style={{
            height: down2
              ? `${parseInt((data1?.icons?.length + 3) / 3) * 10 + 10}vw`
              : "",
          }}
          className="boxofextension"
        >
          <div className="flexofboxextentionnav">
            <div style={{ color: down2 ? "#064C87" : "", marginLeft: "0.5vw" }}>
              View Documents
            </div>
            <div
              onClick={() => {
                setDown2(!down2);
              }}
            >
              {!down2 ? (
                <KeyboardArrowDownIcon
                  style={{ fontSize: "2vw", margin: "1vw", cursor: "pointer" }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  style={{ fontSize: "2vw", margin: "1vw", cursor: "pointer" }}
                />
              )}
            </div>
          </div>
          <div hidden={!down2}>
            <div
              style={{
                margin: "1vw",
                flexWrap: "wrap",
                marginTop: "0vw",
                justifyContent: "flex-start",
              }}
              className="activejobpistbudgetbox"
            >
              {data1?.icons?.map((data) => {
                return (
                  <div className="boxofimageorpdf">
                    <div className="imageshowboxofpdf">
                      <img src={data?.icon} alt="" />
                    </div>
                    <div className="imageshowboxofpdfname">
                      <div>
                        <PictureAsPdfIcon
                          style={{ color: "red", fontSize: "1.7vw" }}
                        />
                      </div>
                      <div className="nameifimagedocuments">
                        {data?.icon?.split("%24")[1]?.slice(0, 22)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          style={{
            height: down1 ? `${longofproposallist?.length * 4 + 7}vw` : "",
          }}
          className="boxofextension"
        >
          <div className="flexofboxextentionnav">
            <div style={{ color: down1 ? "#064C87" : "", marginLeft: "0.5vw" }}>
              List of Proposal
            </div>
            <div
              onClick={() => {
                setDown1(!down1);
              }}
            >
              {!down1 ? (
                <KeyboardArrowDownIcon
                  style={{ fontSize: "2vw", margin: "1vw", cursor: "pointer" }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  style={{ fontSize: "2vw", margin: "1vw", cursor: "pointer" }}
                />
              )}
            </div>
          </div>
          <div hidden={!down1}>
            <div>
              <div
                style={{
                  padding: "0vw 0.51vw",
                  marginBottom: "1vw",
                  marginTop: "0vw",
                }}
                className="navoftableblogs"
              >
                <div style={{ width: "18vw" }}>Name</div>
                <div style={{ width: "13vw" }}>Duration</div>
                <div style={{ width: "12vw" }}>date</div>
                <div style={{ width: "12vw" }}>Bid Value</div>
                <div style={{ width: "12vw" }}>Status</div>
                <div style={{ width: "7vw" }}></div>
              </div>
            </div>
            {longofproposallist?.map((data) => {
              return (
                <Listofproposals
                  data={data}
                  jobdetail={jobdetail}
                  setdata1={setdata1}
                  data1={data1}
                  setLongofproposallist={setLongofproposallist}
                />
              );
            })}
          </div>
        </div>
        <div
          style={{
            height: down3
              ? `${parseInt((data1?.icons?.length + 3) / 3) * 12 + 30}vw`
              : "",
          }}
          className="boxofextension"
        >
          <div className="flexofboxextentionnav">
            <div style={{ color: down3 ? "#064C87" : "", marginLeft: "0.5vw" }}>
              Contract
            </div>
            <div
              onClick={() => {
                setDown3(!down3);
              }}
            >
              {!down3 ? (
                <KeyboardArrowDownIcon
                  style={{ fontSize: "2vw", margin: "1vw", cursor: "pointer" }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  style={{ fontSize: "2vw", margin: "1vw", cursor: "pointer" }}
                />
              )}
            </div>
          </div>
          <div hidden={!down3}>
            <div
              style={{ margin: "1vw", flexWrap: "wrap", marginTop: "0vw" }}
              className="activejobpistbudgetbox"
            >
              <div className="boxblackbackg">
                Service Provider Id <br />
                <div>
                  <span>{data1?.jobDoerId?.userId?data1?.jobDoerId?.userId:"-"}</span>
                </div>
              </div>
              <div className="boxblackbackg">
                Service Provider Name <br />
                <div>
                  <span>{data1?.jobDoerId?.fullName?data1?.jobDoerId?.fullName:"-"}</span>
                </div>
              </div>
              <div className="boxblackbackg">
                Contract Amount <br />
                <div>
                  <span>{data1?.workAssigned ? data1?.workAssignedTo?.totalProjectPrice : "-"} </span>
                </div>
              </div>
              <div className="boxblackbackg">
                duration <br />
                <div>
                  <span>{data1?.workAssigned ? "-" : "-"}</span>
                </div>
              </div>
              <div className="boxblackbackg">
                Contract Starting Date <br />
                <div>
                  <span>{data1?.workAssigned ? data1?.workAssignDate : "-"}</span>
                </div>
              </div>
              <div className="boxblackbackg">
                Contract Ending Date <br />
                <div>
                  <span>{data1?.workAssigned ? "-" : "-"}</span>
                </div>
              </div>
            </div>
            <div
              style={{ marginLeft: "1vw", marginTop: "0vw" }}
              className="flexofdtaes"
            >
              <div className="datesofcontact">Documents</div>
            </div>
            <div
              style={{
                margin: "1vw",
                flexWrap: "wrap",
                marginTop: "0vw",
                justifyContent: "flex-start",
              }}
              className="activejobpistbudgetbox"
            >
              {data1?.workAssignedTo?.files?.map((data) => {
                return (
                  <div className="boxofimageorpdf">
                    <div className="imageshowboxofpdf">
                      <img src={data?.file} alt="" />
                    </div>
                    <div className="imageshowboxofpdfname">
                      <div>
                        <PictureAsPdfIcon
                          style={{ color: "red", fontSize: "1.7vw" }}
                        />
                      </div>
                      <div className="nameifimagedocuments">
                        {data?.file?.split("%24")[1]?.slice(0, 22)}
                      </div>
                    </div>
                  </div>
                );
              })}{" "}
            </div>
          </div>
        </div>
     
          <div
            style={{
              height: down4 ? `${longofproposallist?.length * 4 + 81}vw` : "",
            }}
            className="boxofextension"
          >
            <div className="flexofboxextentionnav">
              <div>Contract Completion</div>
              <div
                onClick={() => {
                  setDown4(!down4);
                }}
              >
                {!down4 ? (
                  <KeyboardArrowDownIcon
                    style={{
                      fontSize: "2vw",
                      margin: "1vw",
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <KeyboardArrowUpIcon
                    style={{
                      fontSize: "2vw",
                      margin: "1vw",
                      cursor: "pointer",
                    }}
                  />
                )}
              </div>
            </div>
       
            <div hidden={!down4}>
            <div
              style={{ margin: "1vw", flexWrap: "wrap", marginTop: "0vw" }}
              className="activejobpistbudgetbox"
            >
              <div className="boxblackbackg">
                Contract Actual End Date <br />
                <div>
                  <span>
                    {data1?.assignWorkComplitionDate
                      ? data1?.assignWorkComplitionDate
                      : "-"}
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{ marginLeft: "1vw", marginTop: "0vw" }}
              className="flexofdtaes"
            >
              <div className="datesofcontact">
                Review And Rating by service Provider
              </div>
            </div>
            <div className="chatcontaract">
              <div
                style={{ width: "80vw", padding: "0vw", height: "fit-content" }}
                className="chatboxescontact"
              >
                <div
                  style={{ marginLeft: "1vw", marginTop: "0vw" }}
                  className="flexofdtaes"
                >
                  <div className="datesofcontact">Ratings</div>
                </div>
                <div className="workhistryboxdate">
                  <span
                    style={{
                      width: "10vw",
                      position: "relative",
                      bottom: "0.5vw",
                      left: "1vw",
                    }}
                  >
                    <StarRatings
                      rating={
                        data1?.workAssignedTo?.ratings
                          ? data1?.workAssignedTo?.ratings
                          : 0
                      }
                      starRatedColor="#064C87"
                      starDimension="1.6vw  "
                      starSpacing="0.3vw"
                      numberOfStars={5}
                      name="rating"
                    />
                  </span>
                </div>

                <hr style={{ width: "90%", marginLeft: "2vw" }} />
                <div
                  style={{
                    left: "0vw",
                    width: "96%",
                    margin: "2vw 1vw 2vw 1vw",
                    display: "block",
                  }}
                  className="loginfield"
                >
                  <div
                    style={{ marginBottom: "0.0vw", marginBottom: "1vw" }}
                    className="jobpodtedfieldtitile"
                  >
                    Review
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="reviewbox"
                      rows="10"
                      disabled
                      value={
                        data1?.workAssignedTo?.reviews
                          ? data1?.workAssignedTo?.reviews
                          : ""
                      }
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginBottom: "2vw",
                marginLeft: "2vw",
              }}
            >
         {data1?.workAssignedTo?.docs?.length > 0 &&
                    data1?.workAssignedTo?.docs?.map((dataqq) => {
                      return (
                        <div
                          style={{
                            width: "fit-content",
                            marginTop: "0vw",
                            marginBottom: "1vw",
                          }}
                          className="inputfilesshowncatboxsingle"
                        >
                          <div className="inputfilesshowncatboxsingleimg">
                            <img src={img1} alt="" />
                          </div>
                          <div className="fileselctednamecate">
                            
                            Modern submitted.docx
                          </div>
                          <div className="inputfilesshowncatboxsingleimg">
                            <a href={`${dataqq?.docx}`} download>
                              {" "}
                              <CloudDownloadOutlinedIcon
                                style={{ fontSize: "1.5vw", margin: "0 1vw" }}
                              />{" "}
                            </a>
                          </div>
                        </div>
                      );
                    })}  </div>
            <div
              style={{ marginLeft: "1vw", marginTop: "0vw" }}
              className="flexofdtaes"
            >
              <div className="datesofcontact">Review And Rating by Client</div>
            </div>
            <div className="chatcontaract">
              <div
                style={{ width: "80vw", padding: "0vw", height: "fit-content" }}
                className="chatboxescontact"
              >
                <div
                  style={{ marginLeft: "1vw", marginTop: "0vw" }}
                  className="flexofdtaes"
                >
                  <div className="datesofcontact">Ratings</div>
                </div>

                <div className="workhistryboxdate">
                  <span
                    style={{
                      width: "10vw",
                      position: "relative",
                      bottom: "0.5vw",
                      left: "1vw",
                    }}
                  >
                    <StarRatings
                      rating={data1?.rating ? data1?.rating : 0}
                      starRatedColor="#064C87"
                      starDimension="1.6vw  "
                      starSpacing="0.3vw"
                      numberOfStars={5}
                      name="rating"
                    />
                  </span>
                </div>

                <hr style={{ width: "90%", marginLeft: "2vw" }} />
                <div
                  style={{
                    left: "0vw",
                    width: "96%",
                    margin: "2vw 1vw 2vw 1vw",
                    display: "block",
                  }}
                  className="loginfield"
                >
                  <div
                    style={{ marginBottom: "0.0vw", marginBottom: "1vw" }}
                    className="jobpodtedfieldtitile"
                  >
                    Review
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="reviewbox"
                      rows="10"
                      value={data1?.review ? data1?.review : ""}
                    ></textarea>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginLeft: "2vw",
                  }}
                >
               {data1?.docs?.length > 0 &&
                    data1?.docs?.map((dataqq) => {
                      return (
                        <div
                          style={{
                            width: "fit-content",
                            marginTop: "0vw",
                            marginBottom: "1vw",
                          }}
                          className="inputfilesshowncatboxsingle"
                        >
                          <div className="inputfilesshowncatboxsingleimg">
                            <img src={img1} alt="" />
                          </div>
                          <div className="fileselctednamecate">
                            
                            Modern submitted.docx
                          </div>
                          <div className="inputfilesshowncatboxsingleimg">
                            <a href={`${dataqq?.docx}`} download>
                              {" "}
                              <CloudDownloadOutlinedIcon
                                style={{ fontSize: "1.5vw", margin: "0 1vw" }}
                              />{" "}
                            </a>
                          </div>
                        </div>
                      );
                    })} </div>
              </div>
            </div>
            {/* <div className="confirmationtext">
              Are you Sure What to Close Contract From <span>44 Resource</span>{" "}
              Representative
            </div> */}
            {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button className="endbuttoncontract">End Contract</button>
            </div> */}
          </div>
     
        </div>
     
      </div>
    </div>
  );
}
