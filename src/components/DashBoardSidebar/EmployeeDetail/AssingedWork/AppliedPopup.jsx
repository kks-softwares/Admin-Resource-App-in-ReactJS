import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import img1 from "../../../../assets/Jobs/Iconly-Light-Delete.svg";
import img2 from "../../../../assets/Jobs/Iconly-Light-Edit.svg";
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

export default function AppliedPopup({ data, index }) {
  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const handleClosex = () => setOpenx(false);
  return (
    <div>
      <div className="catalogcontainerdashbaord">
        <div
          style={{ padding: "1.2vw", alignItems: "center", textAlign: "left" }}
          className="dataapploidjobfle"
        >
          <div style={{ width: "7vw" }}>{index + 1}</div>
          <div style={{ width: "25vw" }}>Landing page (Home)</div>
          <div
            style={{width: "14vw", }}
          >
            12/12/21
          </div>
          <div style={{ width: "14vw" }}>12/12/21</div>
          <div
            style={{
              width: "14vw",
              color:
                data?.workStatus === "pending"
                  ? "#F39600"
                  : data?.workStatus === "accepted"
                  ? "#2AC96A"
                  : "red",
            }}
          >
            Pending
          </div>
          <div style={{ display: "flex", width: "8vw" }}>
            <div>
              <img
                src={img2}
                alt=""
                style={{ fontSize: "2vw", marginRight: "2vw" }}
              />{" "}
            </div>
            <div>
              <img
                src={img1}
                alt=""
                style={{ fontSize: "2vw", marginRight: "2vw" }}
              />{" "}
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
                <div className="titilenameappliedpopup"></div>
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
                      {/* {data?.appliedForJobPost[0]?.name} {""} */}
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
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}
