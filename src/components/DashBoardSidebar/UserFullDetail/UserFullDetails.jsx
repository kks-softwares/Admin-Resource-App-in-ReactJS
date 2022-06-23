import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { SearchSharp } from "@mui/icons-material";
import { useSelector } from "react-redux";
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
export default function SkillCenter() {
  const navigate = useNavigate();
  const { user, loggedInStatus } = useSelector((state) => state.user);
  const [workhistorytoggle, setWorkhistorytoggle] = useState(1);
  const [workhistorytoggle1, setWorkhistorytoggle1] = useState(1);
  const { type } = useParams();

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
    } else if (type === "JBank Details") {
      setWorkhistorytoggle(8);
      setWorkhistorytoggle1(8);
    } else if (type === "Documents") {
      setWorkhistorytoggle(9);
      setWorkhistorytoggle1(9);
    } else {
      setWorkhistorytoggle1(9);
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
            minWidth: "7vw",
          }}
          onClick={() => {
            navigate("/dashbaord/userdetail/My Profile");
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
            navigate("/dashbaord/userdetail/Wallet");
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
            navigate("/dashbaord/userdetail/Created Job");
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
            navigate("/dashbaord/userdetail/Job Applied");
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
            navigate("/dashbaord/userdetail/Skill Center&Exams");
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
            navigate("/dashbaord/userdetail/Reference List");
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
            navigate("/dashbaord/userdetail/File Manager");
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
            navigate("/dashbaord/userdetail/Bank Details");
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
            navigate("/dashbaord/userdetail/Document");
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
          <div className="catalogcontainerdashbaord">
            <div style={{ overflow: "hidden" }} className="activejobpostbox">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.5vw",
                }}
              >
                <div style={{ marginLeft: "0vw" }} className="taggreen">
                  SDE
                </div>
                <div style={{ marginLeft: "1vw" }} className="taggreen1">
                  database
                </div>
              </div>
              <div style={{ height: "1.1vw" }} className="activejobpostname">
                sde-2
              </div>
              <div
                style={{ lineHeight: "1.2vw !important" }}
                className="activejobpistbudgetbox"
              >
                <div>
                  Budget <br />{" "}
                  <span
                    style={{
                      fontSize: "0.9vw",
                      position: "relative",
                      bottom: "0.3vw",
                    }}
                  >
                    $10- $50
                  </span>
                </div>
                <div style={{ marginRight: "1vw" }}>
                  Location <br />{" "}
                  <span
                    style={{
                      fontSize: "0.9vw",
                      position: "relative",
                      bottom: "0.3vw",
                    }}
                  >
                    Remote
                  </span>
                </div>
                <div style={{ marginRight: "1vw" }}>
                  Expired on <br />{" "}
                  <span
                    style={{
                      fontSize: "0.9vw",
                      position: "relative",
                      bottom: "0.3vw",
                    }}
                  >
                    07 Days
                  </span>
                </div>
              </div>
              <div
                style={{ height: "4.2vw", margin: "0vw" }}
                className="descriptionactibeobbox"
              >
                <div style={{ height: "2.8vw" }}>
                  there https://xd.adobe.co m/view/a0b2e6f4-d68 6-48d5-8ac
                  7-390d38af4f74 -f5e1/screen/7b684228 -76c1-4c54
                  -9362-ca7aaef4d872/specs/
                </div>

                <br />
                <span
                // onClick={() => {
                //   navigate(
                //     `/dashbaord/jobdetailforbid/${data?.jobPostId}`
                //   );
                // }}
                >
                  more
                </span>
              </div>

              <hr />
              <div style={{ paddingLeft: "0vw" }} className="flexlastactiveb">
                <div>Posted on - 10/10/2020</div>

                <div style={{ color: "#00000090" }}> See More</div>
              </div>
            </div>

            <div style={{ overflow: "hidden" }} className="activejobpostbox">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.5vw",
                }}
              >
                <div style={{ marginLeft: "0vw" }} className="taggreen">
                  SDE
                </div>
                <div style={{ marginLeft: "1vw" }} className="taggreen1">
                  database
                </div>
              </div>
              <div style={{ height: "1.1vw" }} className="activejobpostname">
                sde-2
              </div>
              <div
                style={{ lineHeight: "1.2vw !important" }}
                className="activejobpistbudgetbox"
              >
                <div>
                  Budget <br />{" "}
                  <span
                    style={{
                      fontSize: "0.9vw",
                      position: "relative",
                      bottom: "0.3vw",
                    }}
                  >
                    $10- $50
                  </span>
                </div>
                <div style={{ marginRight: "1vw" }}>
                  Location <br />{" "}
                  <span
                    style={{
                      fontSize: "0.9vw",
                      position: "relative",
                      bottom: "0.3vw",
                    }}
                  >
                    Remote
                  </span>
                </div>
                <div style={{ marginRight: "1vw" }}>
                  Expired on <br />{" "}
                  <span
                    style={{
                      fontSize: "0.9vw",
                      position: "relative",
                      bottom: "0.3vw",
                    }}
                  >
                    07 Days
                  </span>
                </div>
              </div>
              <div
                style={{ height: "4.2vw", margin: "0vw" }}
                className="descriptionactibeobbox"
              >
                <div style={{ height: "2.8vw" }}>
                  there https://xd.adobe.co m/view/a0b2e6f4-d68 6-48d5-8ac
                  7-390d38af4f74 -f5e1/screen/7b684228 -76c1-4c54
                  -9362-ca7aaef4d872/specs/
                </div>

                <br />
                <span
                // onClick={() => {
                //   navigate(
                //     `/dashbaord/jobdetailforbid/${data?.jobPostId}`
                //   );
                // }}
                >
                  more
                </span>
              </div>

              <hr />
              <div style={{ paddingLeft: "0vw" }} className="flexlastactiveb">
                <div>Posted on - 10/10/2020</div>

                <div style={{ color: "#00000090" }}> See More</div>
              </div>
            </div>

            <div style={{ overflow: "hidden" }} className="activejobpostbox">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.5vw",
                }}
              >
                <div style={{ marginLeft: "0vw" }} className="taggreen">
                  SDE
                </div>
                <div style={{ marginLeft: "1vw" }} className="taggreen1">
                  database
                </div>
              </div>
              <div style={{ height: "1.1vw" }} className="activejobpostname">
                sde-2
              </div>
              <div
                style={{ lineHeight: "1.2vw !important" }}
                className="activejobpistbudgetbox"
              >
                <div>
                  Budget <br />{" "}
                  <span
                    style={{
                      fontSize: "0.9vw",
                      position: "relative",
                      bottom: "0.3vw",
                    }}
                  >
                    $10- $50
                  </span>
                </div>
                <div style={{ marginRight: "1vw" }}>
                  Location <br />{" "}
                  <span
                    style={{
                      fontSize: "0.9vw",
                      position: "relative",
                      bottom: "0.3vw",
                    }}
                  >
                    Remote
                  </span>
                </div>
                <div style={{ marginRight: "1vw" }}>
                  Expired on <br />{" "}
                  <span
                    style={{
                      fontSize: "0.9vw",
                      position: "relative",
                      bottom: "0.3vw",
                    }}
                  >
                    07 Days
                  </span>
                </div>
              </div>
              <div
                style={{ height: "4.2vw", margin: "0vw" }}
                className="descriptionactibeobbox"
              >
                <div style={{ height: "2.8vw" }}>
                  there https://xd.adobe.co m/view/a0b2e6f4-d68 6-48d5-8ac
                  7-390d38af4f74 -f5e1/screen/7b684228 -76c1-4c54
                  -9362-ca7aaef4d872/specs/
                </div>

                <br />
                <span
                // onClick={() => {
                //   navigate(
                //     `/dashbaord/jobdetailforbid/${data?.jobPostId}`
                //   );
                // }}
                >
                  more
                </span>
              </div>

              <hr />
              <div style={{ paddingLeft: "0vw" }} className="flexlastactiveb">
                <div>Posted on - 10/10/2020</div>
                <div style={{ color: "#00000090" }}> See More</div>
              </div>
            </div>
          </div>
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

            <div
              style={{ padding: "1vw", alignItems: "center" }}
              className="dataapploidjobfle"
            >
              <div style={{ width: "15.5vw" }}>dataapploidjobfle</div>
              <div
                dangerouslySetInnerHTML={{ __html: "dataapploidjobfle" }}
                style={{
                  width: "30.5vw",
                  fontSize: "0.8vw",
                  paddingRight: "2vw",
                }}
              ></div>
              <div style={{ width: "13.5vw" }}>${10}</div>
              <div
                style={{
                  width: "11.5vw",
                  color: "#F39600",
                }}
              >
                Pending
              </div>
              <div style={{ width: "5.5vw", cursor: "pointer" }}>View</div>

              {/* <Modal
        open={openx}
        onClose={handleClosex}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ padding: "2vw", width: "100%", height: "100%" }}>
            <div className="appliedjobformtitleflex">
              <div>Job Details</div>
              <div>
                <CloseIcon
                  onClick={handleClosex}
                  style={{ fontSize: "1.5vw", cursor: "pointer" }}
                />
              </div>
            </div>
            <hr style={{ height: "0.1vw" }} />
            <div className="titilenameappliedpopup">
              {data?.appliedForJobPost[0]?.jobTitle}
            </div>
            <div className="descriptionappliedpopup">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div className="titilenameappliedpopupmain">Basic Details</div>

            <div className="flexwrapappliedpopup">
              <div style={{ width: "50%", margin: "0.71vw 0vw" }}>
                <div
                  style={{ fontSize: "1.051vw" }}
                  className="titilenameappliedpopup"
                >
                  Job Posted by
                </div>
                <div
                  style={{ margin: "0.2vw" }}
                  className="descriptionappliedpopup"
                >
                  {data?.appliedForJobPost[0]?.name} {""}
                </div>
              </div>
              <div style={{ width: "50%", margin: "0.71vw 0vw" }}>
                <div
                  style={{ fontSize: "1.051vw" }}
                  className="titilenameappliedpopup"
                >
                  Job Posted on
                </div>
                <div
                  style={{ margin: "0.2vw" }}
                  className="descriptionappliedpopup"
                >
                  Nov 12, 2021
                </div>
              </div>
              <div style={{ width: "50%", margin: "0.71vw 0vw" }}>
                <div
                  style={{ fontSize: "1.051vw" }}
                  className="titilenameappliedpopup"
                >
                  Duration
                </div>
                <div
                  style={{ margin: "0.2vw" }}
                  className="descriptionappliedpopup"
                >
                  1 month
                </div>
              </div>
              <div style={{ width: "50%", margin: "0.71vw 0vw" }}>
                <div
                  style={{ fontSize: "1.051vw" }}
                  className="titilenameappliedpopup"
                >
                  Date
                </div>
                <div
                  style={{ margin: "0.2vw" }}
                  className="descriptionappliedpopup"
                >
                  Job Posted by
                </div>
              </div>
              <div style={{ width: "50%", margin: "0.71vw 0vw" }}>
                <div
                  style={{ fontSize: "1.051vw" }}
                  className="titilenameappliedpopup"
                >
                  Bid value
                </div>
                <div
                  style={{ margin: "0.2vw" }}
                  className="descriptionappliedpopup"
                >
                  {data?.totalProjectPrice}
                </div>
              </div>
              <div style={{ width: "50%", margin: "0.71vw 0vw" }}>
                <div
                  style={{ fontSize: "1.051vw" }}
                  className="titilenameappliedpopup"
                >
                  Status
                </div>
                <div
                  style={{ margin: "0.2vw" }}
                  className="descriptionappliedpopup"
                >
                  Job Posted by
                </div>
              </div>
            </div>
            {data?.workStatus === null || data?.workStatus === "pending" ? (
              <div className="descriptionappliedpopup">
                Are you ready to Reject Proposal before Get Accepted?
              </div>
            ) : (
              ""
            )}

            {data?.workStatus === null || data?.workStatus === "pending" ? (
              <div className="homejobbuttons">
                <button style={{ background: "white" }} onClick={handleClosex}>
                  Cancel
                </button>
                <button style={{ color: "white" }} onClick={handleRejectbid}>
                  Withdraw
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </Box>
      </Modal>
  */}
            </div>
          </div>

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
