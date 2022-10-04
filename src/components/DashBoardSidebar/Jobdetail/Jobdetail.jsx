import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Listofproposals from "./Listofproposals";
import StarRatings from "react-star-ratings";
import img1 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import API_HOST from "../../../env";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
};
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "fit-content",
  overflow: "scroll",
  padding: "1vw",
};
export default function Jobdetail() {
  const { id } = useParams();

  const navigate = useNavigate();
  const [down1, setDown1] = useState(false);
  const [down2, setDown2] = useState(false);
  const [down3, setDown3] = useState(false);
  const [down4, setDown4] = useState(false);
  const [down5, setDown5] = useState(false);
  const [longofproposallist, setLongofproposallist] = useState(["1", "2"]);
  const [data1, setdata1] = useState();
  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const handleClosex = () => setOpenx(false);

  useEffect(() => {
    axios.get(`${API_HOST}/jobPost/viewJobPost?jobPostId=${id}`).then((res) => {
      console.log(res?.data?.success?.data[0]);
      setdata1(res?.data?.success?.data[0]);
      setLongofproposallist(res?.data?.success?.data[0]?.listOfBider);
    });
  }, [id]);

  const [imagesave, setImagesave] = useState();

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const handleendContarct = () => {
    const formdata = new FormData();

    formdata.append("closeBy44", true);
    formdata.append("jobPostId", data1?.jobPostId);

    axios.post(`${API_HOST}/jobPost/submitReview`, formdata, {}).then((res) => {
      axios
        .get(`${API_HOST}/jobPost/viewJobPost?jobPostId=${id}`)
        .then((res) => {
          console.log(res?.data?.success?.data[0]);
          setdata1(res?.data?.success?.data[0]);
          setLongofproposallist(res?.data?.success?.data[0]?.listOfBider);
          handleClose3();
        });
    });
  };

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
              justifyContent: "space-between",
            }}
          >
            <div>{data1?.workTitle}</div>
            {data1?.closeBy44 ? (
              <div>
                Status :{" "}
                <span style={{ color: "green", marginRight: "1vw" }}>
                  Completed
                </span>
              </div>
            ) : (
              <div>
                {" "}
                {data1?.workAssignedTo?.assignedJobComplition &&
                  !data1?.assignWorkComplition && (
                    <div>
                      Status :{" "}
                      <span style={{ color: "green", marginRight: "1vw" }}>
                        Contract Ended by service Provider
                      </span>
                    </div>
                  )}
                {data1?.workAssignedTo?.assignedJobComplition &&
                  data1?.assignWorkComplition && (
                    <div>
                      Status :{" "}
                      <span style={{ color: "green", marginRight: "1vw" }}>
                        Contract Ended by Client and Service Provider
                      </span>
                    </div>
                  )}
                {!data1?.workAssignedTo?.assignedJobComplition &&
                  data1?.assignWorkComplition && (
                    <div>
                      Status :
                      <span style={{ color: "green", marginRight: "1vw" }}>
                        Contract Ended by Client
                      </span>
                    </div>
                  )}
              </div>
            )}
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
            <span
              style={{ fontSize: "1.1vw", fontWeight: "500", margin: "1vw" }}
            >
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
                ? `${parseInt((data1?.icons?.length + 2) / 3) * 13.5 + 5}vw`
                : "",
            }}
            className="boxofextension"
          >
            <div className="flexofboxextentionnav">
              <div
                style={{ color: down2 ? "#064C87" : "", marginLeft: "0.5vw" }}
              >
                View Documents
              </div>
              <div
                onClick={() => {
                  setDown2(!down2);
                }}
              >
                {!down2 ? (
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
                      <div
                        onClick={() => {
                          handleOpenx();
                          setImagesave(data?.icon);
                        }}
                        style={{ cursor: "pointer" }}
                        className="imageshowboxofpdf"
                      >
                        <img
                          style={{ cursor: "pointer" }}
                          src={data?.icon}
                          alt=""
                        />
                      </div>
                      <div className="imageshowboxofpdfname">
                        <div>
                          <PictureAsPdfIcon
                            style={{ color: "red", fontSize: "1.7vw" }}
                          />
                        </div>
                        <div className="nameifimagedocuments">
                          {data?.icon?.split("%24")[1]?.slice(0, 17)}
                        </div>
                        <div className="inputfilesshowncatboxsingleimg">
                          <a href={`${data?.icon}`} download>
                            {" "}
                            <CloudDownloadOutlinedIcon
                              style={{ fontSize: "1.5vw", margin: "0 1vw" }}
                            />{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <Modal
              open={openx}
              onClose={handleClosex}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                {imagesave && (
                  <div className="imgbocofcerti">
                    <img src={imagesave} alt="" />
                  </div>
                )}
              </Box>
            </Modal>
          </div>
          <div
            style={{
              height: down1 ? `${longofproposallist?.length * 4 + 7}vw` : "",
            }}
            className="boxofextension"
          >
            <div className="flexofboxextentionnav">
              <div
                style={{ color: down1 ? "#064C87" : "", marginLeft: "0.5vw" }}
              >
                List of Proposal
              </div>
              <div
                onClick={() => {
                  setDown1(!down1);
                }}
              >
                {!down1 ? (
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
                  <div style={{ width: "13vw" }}>Completion Date</div>
                  <div style={{ width: "12vw" }}>Bidding date</div>
                  <div style={{ width: "12vw" }}>Bid Value</div>
                  <div style={{ width: "12vw" }}>Status</div>
                  <div style={{ width: "7vw" }}></div>
                </div>
              </div>
              {longofproposallist?.map((data) => {
                return (
                  <Listofproposals
                    data={data}
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
                ? `${
                    parseInt(
                      (data1?.workAssignedTo?.files
                        ? data1?.workAssignedTo?.files?.length + 2
                        : 1) / 3
                    ) *
                      14 +
                    35
                  }vw`
                : "",
            }}
            className="boxofextension"
          >
            <div className="flexofboxextentionnav">
              <div
                style={{ color: down3 ? "#064C87" : "", marginLeft: "0.5vw" }}
              >
                Contract
              </div>
              <div
                onClick={() => {
                  setDown3(!down3);
                }}
              >
                {!down3 ? (
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
            <div hidden={!down3}>
              <div
                style={{ margin: "1vw", flexWrap: "wrap", marginTop: "0vw" }}
                className="activejobpistbudgetbox"
              >
                <div className="boxblackbackg">
                  Client ID <br />
                  <div>
                    <span>
                      {data1?.user_id?.userId ? data1?.user_id?.userId : "-"}
                    </span>
                  </div>
                </div>
                <div className="boxblackbackg">
                  Client Name <br />
                  <div>
                    <span>
                      {data1?.user_id?.fullName
                        ? data1?.user_id?.fullName
                        : "-"}
                    </span>
                  </div>
                </div>
                <div className="boxblackbackg">
                  Job Starting Date <br />
                  <div>
                    <span>
                      {data1?.jobPostingDate ? data1?.jobPostingDate : "-"}
                    </span>
                  </div>
                </div>

                <div className="boxblackbackg">
                  Service Provider Id <br />
                  <div>
                    <span>
                      {data1?.jobDoerId?.userId
                        ? data1?.jobDoerId?.userId
                        : "-"}
                    </span>
                  </div>
                </div>
                <div className="boxblackbackg">
                  Service Provider Name <br />
                  <div>
                    <span>
                      {data1?.jobDoerId?.fullName
                        ? data1?.jobDoerId?.fullName
                        : "-"}
                    </span>
                  </div>
                </div>

                <div className="boxblackbackg">
                  Contract Amount <br />
                  <div>
                    <span>
                      {data1?.workAssigned
                        ? data1?.workAssignedTo?.totalProjectPrice
                        : "-"}{" "}
                    </span>
                  </div>
                </div>
                <div className="boxblackbackg">
                  duration <br />
                  <div>
                    <span>
                      {data1?.deliveryDate
                        ? data1?.deliveryDate + " days"
                        : "-"}
                    </span>
                  </div>
                </div>

                <div className="boxblackbackg">
                  Contract Starting Date <br />
                  <div>
                    <span>
                      {data1?.workAssigned ? data1?.workAssignDate : "-"}
                    </span>
                  </div>
                </div>

                <div className="boxblackbackg">
                  Contract Ending Date <br />
                  <div>
                    <span>
                      {data1?.workAssigned
                        ? data1?.workAssignedTo?.milestoneDueDate5
                          ? data1?.workAssignedTo?.milestoneDueDate5
                          : data1?.workAssignedTo?.milestoneDueDate4
                          ? data1?.workAssignedTo?.milestoneDueDate4
                          : data1?.workAssignedTo?.milestoneDueDate3
                          ? data1?.workAssignedTo?.milestoneDueDate3
                          : data1?.workAssignedTo?.milestoneDueDate2
                          ? data1?.workAssignedTo?.milestoneDueDate2
                          : data1?.workAssignedTo?.milestoneDueDate1
                        : "-"}
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginLeft: "1vw",
                  marginTop: "0vw",
                  marginBottom: "1.2vw",
                }}
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
                      <div
                        onClick={() => {
                          handleOpenx();
                          setImagesave(data?.file);
                        }}
                        style={{ cursor: "pointer" }}
                        className="imageshowboxofpdf"
                      >
                        <img src={data?.file} alt="" />
                      </div>
                      <div className="imageshowboxofpdfname">
                        <div>
                          <PictureAsPdfIcon
                            style={{ color: "red", fontSize: "1.7vw" }}
                          />
                        </div>
                        <div className="nameifimagedocuments">
                          {data?.file?.split("%24")[1]?.slice(0, 16)}
                        </div>
                        <div className="inputfilesshowncatboxsingleimg">
                          <a href={`${data?.file}`} download>
                            {" "}
                            <CloudDownloadOutlinedIcon
                              style={{ fontSize: "1.5vw", margin: "0 1vw" }}
                            />{" "}
                          </a>
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
              height: down4
                ? `${
                    parseInt(
                      (data1?.workAssignedTo?.docs
                        ? data1?.workAssignedTo?.docs?.length + 2
                        : 1) / 3
                    ) *
                      4 +
                    parseInt((data1?.docs ? data1?.docs?.length + 2 : 1) / 3) *
                      4 +
                    83
                  }vw`
                : "",
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
                  style={{
                    width: "80vw",
                    padding: "0vw",
                    height: "fit-content",
                  }}
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
                      style={{ marginBottom: "0.0vw" }}
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
                          {dataqq?.docx?.split("%24")[1]?.slice(0, 22)}
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
                  })}{" "}
              </div>
              <div
                style={{ marginLeft: "1vw", marginTop: "0vw" }}
                className="flexofdtaes"
              >
                <div className="datesofcontact">
                  Review And Rating by Client
                </div>
              </div>
              <div className="chatcontaract">
                <div
                  style={{
                    width: "80vw",
                    padding: "0vw",
                    height: "fit-content",
                  }}
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
                              {dataqq?.docx?.split("%24")[1]?.slice(0, 22)}
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
                      })}{" "}
                  </div>
                </div>
              </div>

              {!data1?.closeBy44 && (
                <div>
                  <div className="confirmationtext">
                    Are you Sure What to Close Contract From{" "}
                    <span>44 Resource</span> Representative
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button
                      onClick={() => {
                        handleOpen3();
                      }}
                      className="endbuttoncontract"
                    >
                      End Contract
                    </button>
                  </div>
                </div>
              )}
              <Modal
                open={open3}
                onClose={handleClose3}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style1}>
                  <div className="profiletitleandmenunav">
                    <div className="profiledetailstitle">End Contract </div>
                    <div className="profiledetailnavmanu">
                      <div>
                        <CloseIcon
                          onClick={handleClose3}
                          style={{ fontSize: "1.5vw", cursor: "pointer" }}
                        />
                      </div>
                    </div>
                  </div>
                  <hr style={{ color: "#00000090" }} />

                  <div
                    style={{ left: "0vw", width: "100%" }}
                    className="loginfield"
                  >
                    The Action Will End Contract " {data1?.workTitle}" .
                  </div>

                  <hr style={{ color: "#00000090" }} />
                  <div
                    style={{ marginTop: "0.31vw" }}
                    className="handlemoreaboutskill"
                  >
                    <div
                      style={{
                        background: "white",
                        color: "black",
                        cursor: "pointer",
                      }}
                      className="handlecirclieaboutsave"
                      onClick={handleClose3}
                    >
                      Cancel
                    </div>
                    <div
                      onClick={() => {
                        handleendContarct();
                      }}
                      style={{
                        cursor: "pointer",
                        background: "#FF0000",
                        padding: "0.71vw",
                        width: "fit-content",
                      }}
                      className="handlecirclieaboutsave"
                    >
                      End Contract
                    </div>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
          <div
            style={{
              height: down5
                ? `${parseInt(data1?.issues?.length) * 27.5 + 5}vw`
                : "",
            }}
            className="boxofextension"
          >
            <div className="flexofboxextentionnav">
              <div
                style={{ color: down5 ? "#064C87" : "", marginLeft: "0.5vw" }}
              >
                View Issue
              </div>
              <div
                onClick={() => {
                  setDown5(!down5);
                }}
              >
                {!down5 ? (
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
            <div hidden={!down5}>
              <div
                style={{
                  margin: "1vw",
                  flexWrap: "wrap",
                  marginTop: "0vw",
                  justifyContent: "flex-start",
                }}
                className="activejobpistbudgetbox"
              >
                {data1?.issues?.map((data) => {
                  return (
                    <div className="boxofViewissue">
                      <div
                        style={{ fontSize: "1vw" }}
                        className="datesofcontact"
                      >
                        {" "}
                        Issue Type - {data?.issueType}
                      </div>
                      <div
                        style={{
                          left: "0vw",
                          width: "96%",
                          margin: "0.5vw",
                          display: "block",
                        }}
                        className="loginfield"
                      >
                        <div
                          style={{ marginBottom: "0.0vw" }}
                          className="jobpodtedfieldtitile"
                        >
                          Issue description
                        </div>
                        <div>
                          <textarea
                            name=""
                            id=""
                            className="reviewbox"
                            rows="10"
                            disabled
                            value={
                              data.issueDescription ? data.issueDescription : ""
                            }
                          ></textarea>
                        </div>
                      </div>
                      <div
                        style={{ fontSize: "1vw" }}
                        className="datesofcontact"
                      >
                        User Detail -
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          margin: "0vw 1vw",
                          flexWrap: "wrap",
                        }}
                      >
                        <div
                          style={{ width: "25%" }}
                          className="detailjobposttags"
                        >
                          <div
                            style={{
                              margin: "0.5vw",
                              color: "#064C87",
                              marginBottom: "0.40vw",
                              fontSize: "1vw",
                              fontWeight: "500",
                            }}
                          >
                            Issue by
                          </div>
                          <div
                            style={{
                              display: "block",
                              height: "fit-content",
                              padding: "0.5vw",
                              paddingBottom: "0.3vw",
                              paddingLeft: "0.61vw",
                              lineHeight: "2.7vw",
                            }}
                            className="tagvaluejobpostbox"
                          >
                            {data?.user_id?.fullName?.slice(0, 18)}
                          </div>
                        </div>

                        <div
                          style={{ width: "25%" }}
                          className="detailjobposttags"
                        >
                          <div
                            style={{
                              margin: "0.5vw",
                              color: "#064C87",
                              marginBottom: "0.40vw",
                              fontSize: "1vw",

                              fontWeight: "500",
                            }}
                          >
                            Email
                          </div>
                          <div
                            className="tagvaluejobpostbox"
                            style={{
                              paddingLeft: "1vw",
                            }}
                          >
                            {data?.user_id?.emailId}
                          </div>
                        </div>

                        <div className="detailjobposttags">
                          <div
                            style={{
                              margin: "0.5vw",
                              color: "#064C87",
                              marginBottom: "0.40vw",
                              fontSize: "1vw",
                              fontWeight: "500",
                            }}
                          >
                            contact no
                          </div>
                          <div
                            style={{
                              paddingLeft: "1vw",
                            }}
                            className="tagvaluejobpostbox"
                          >
                            {data?.user_id?.contactNo}
                          </div>
                        </div>

                        <div className="detailjobposttags">
                          <div
                            style={{
                              margin: "0.5vw",
                              color: "#064C87",
                              marginBottom: "0.40vw",
                              fontSize: "1vw",
                              fontWeight: "500",
                            }}
                          >
                          userName
                          </div>
                          <div
                            style={{
                              paddingLeft: "1vw",
                            }}
                            className="tagvaluejobpostbox"
                          >
                            {data?.user_id?.userName}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}
