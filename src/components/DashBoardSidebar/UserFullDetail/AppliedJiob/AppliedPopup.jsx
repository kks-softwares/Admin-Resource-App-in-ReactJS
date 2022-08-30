import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "45vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "fit-content",
  overflow: "scroll",
};

export default function AppliedPopup({ data }) {
  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const navigate = useNavigate();
  const handleClosex = () => setOpenx(false);
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
                  style={{ margin: "0", height: "2.4vw",background:"#E4E4E4",fontSize:"400" }}
                  className="digitalwallate"
                >
                  <span style={{ padding: "0.6vw 0.5vw",fontSize:"400",background:"none" }}>Chat to Client</span>
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
            color:"#064C87"
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
          including versions of Lorem Ipsum.
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div style={{ margin: "1vw" }} className="activejobpistbudgetbox">
          <div>
          Hired by <br /> <span>Vasaanth David.H</span>
          </div>
          <div style={{ marginRight: "1vw" }}>
          Bid Value <br /> <span> $8 - $16</span>
          </div>
          <div style={{ marginRight: "1vw" }}>
          Duration <br />  <span>3 Months </span>
          </div>
          <div style={{ marginRight: "1vw" }}>
            {" "}
            Status <br /> <span style={{color:"#E2E228"}}> Work Applied</span>
          </div>
          <div style={{ marginRight: "1vw" ,color:"#064C87"}}>View</div>
         
        </div>
      </div>
      <Modal
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
              <div
                dangerouslySetInnerHTML={{ __html: data?.shortDescription }}
                style={{
                  fontSize: "0.9vw",
                  paddingRight: "2vw",
                }}
              ></div>
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
                  $ {data?.totalProjectPrice}
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
                  className="descriptionappliedpopup"
                  style={{
                    margin: "0.2vw",
                    color:
                      data?.workStatus === "pending"
                        ? "#F39600"
                        : data?.workStatus === "accepted"
                        ? "#2AC96A"
                        : "red",
                  }}
                >
                  {data?.workStatus}
                </div>
              </div>
            </div>
            {/* {data?.workStatus === null || data?.workStatus === "pending" ? (
                  <div className="descriptionappliedpopup">
                    Are you ready to Reject Proposal before Get Accepted?
                  </div>
                ) : (
                  ""
                )} */}

            {/* {data?.workStatus === null || data?.workStatus === "pending" ? (
                  <div className="homejobbuttons">
                    <button
                      style={{ background: "white" }}
                      onClick={handleClosex}
                    >
                      Cancel
                    </button>
                    <button
                      style={{ color: "white" }}
                      //  onClick={handleRejectbid}
                    >
                      Withdraw
                    </button>
                  </div>
                ) : (
                  ""
                )} */}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
