import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

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
  const handleClosex = () => setOpenx(false);
  return (
    <div>
      <div className="catalogcontainerdashbaord">
        <div
          style={{ padding: "1.2vw", alignItems: "center" }}
          className="dataapploidjobfle"
        >
          <div style={{ width: "16vw" }}>
            {" "}
            {data?.appliedForJobPost[0]?.jobTitle}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: data?.shortDescription }}
            style={{
              width: "32vw",
              fontSize: "0.8vw",
              paddingRight: "2vw",
            }}
          ></div>
          <div style={{ width: "14vw" }}>${data?.totalProjectPrice}</div>
          <div
            style={{
              width: "11.5vw",
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
          <div
            style={{ width: "5.5vw", cursor: "pointer" }}
            onClick={() => handleOpenx()}
          >
            View
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
      </div>
    </div>
  );
}
