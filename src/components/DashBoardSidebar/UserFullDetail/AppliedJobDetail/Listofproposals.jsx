import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import img2 from "../../../../assets/Success stories Definition/checkmark (1).svg";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "fit-content",
  overflow: "scroll",
};

export default function Listofproposals({
  data,
  data1,
  setLongofproposallist,
  setdata1,
  jobdetail,
}) {
  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const navigate = useNavigate();
  const handleClosex = () => setOpenx(false);

  const [openx1, setOpenx1] = React.useState(false);
  const handleOpenx1 = () => setOpenx1(true);

  const handleClosex1 = () => setOpenx1(false);

 

  const [imagesave, setImagesave] = useState();

  return (
    <div className="listofproposalname">
      <div
        style={{
          padding: "0",
          margin: "0",
          fontWeight: "400",
          fontSize: "1vw",
        }}
        className="navoftableblogs"
      >
        <div style={{ width: "18vw" }}>{data?.user_id?.fullName}</div>
        <div style={{ width: "13vw" }}>  {data?.bidingId?.milestoneDueDate5
            ? data?.bidingId?.milestoneDueDate5
            : data?.bidingId?.milestoneDueDate4
            ? data?.bidingId?.milestoneDueDate4
            : data?.bidingId?.milestoneDueDate3
            ? data?.bidingId?.milestoneDueDate3
            : data?.bidingId?.milestoneDueDate2
            ? data?.bidingId?.milestoneDueDate2
            : data?.bidingId?.milestoneDueDate1}</div>
        <div style={{ width: "12vw" }}>{data?.timestamps?.slice(0, 10)}</div>
        <div style={{ width: "12vw" }}>
          $ {data?.bidingId?.totalProjectPrice}
        </div>
        <div
          style={{
            width: "12vw",
            color:
            data?.bidingId?.workStatus === "Completed"
            ? "green"
            : data?.bidingId?.workStatus === "pending" ||
              data?.bidingId?.workStatus === "Withdraw" ||
              data?.bidingId?.workStatus === "Reject"
            ? "red"
            : "#E2E228",
          }}
        >
          {data?.bidingId?.workStatus}
        </div>
        <div
          onClick={() => {
            handleOpenx();
          }}
          style={{ width: "7vw", cursor: "pointer", color: "#064C87" }}
        >
          View
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
              <div>Proposal Detail</div>
              <div>
                <CloseIcon
                  onClick={handleClosex}
                  style={{ fontSize: "1.5vw", cursor: "pointer" }}
                />
              </div>
            </div>
            <hr style={{ height: "0.1vw" }} />
            <div style={{ margin: "1vw" }} className="activejobpistbudgetbox">
              <div>
                Bidder Name <br /> <span>{data?.user_id?.fullName}</span>
              </div>
              <div style={{ marginRight: "1vw" }}>
                Bids Applied On <br />{" "}
                <span> {data?.timestamps?.slice(0, 10)}</span>
              </div>
              <div style={{ marginRight: "1vw" }}>
                Estimate Time to Complete <br />  <span>
                {data?.bidingId?.milestoneDueDate5
                    ? data?.bidingId?.milestoneDueDate5
                    : data?.bidingId?.milestoneDueDate4
                    ? data?.bidingId?.milestoneDueDate4
                    : data?.bidingId?.milestoneDueDate3
                    ? data?.bidingId?.milestoneDueDate3
                    : data?.bidingId?.milestoneDueDate2
                    ? data?.bidingId?.milestoneDueDate2
                    : data?.bidingId?.milestoneDueDate1}
                  </span>
              </div>
              <div style={{ marginRight: "1vw" }}>
                {" "}
                Status <br />{" "}
                <span
                  style={{
                    color:
                    data?.bidingId?.workStatus === "Completed"
                    ? "green"
                    : data?.bidingId?.workStatus === "pending" ||
                      data?.bidingId?.workStatus === "Withdraw" ||
                      data?.bidingId?.workStatus === "Reject"
                    ? "red"
                    : "#E2E228",
                  }}
                >
                  {data?.bidingId?.workStatus}
                </span>
              </div>
            </div>

            {data?.bidingId?.files?.length > 0 && (
              <div
                style={{ color: "#064C87", margin: "0.5vw", fontWeight: "500" }}
              >
                Image / Documents
              </div>
            )}
            <div
              style={{
                margin: "1vw",
                flexWrap: "wrap",
                marginTop: "0vw",
                justifyContent: "flex-start",
              }}
              className="activejobpistbudgetbox"
            >
              {data?.bidingId?.files?.slice(0, 3)?.map((data) => {
                return (
                  <div className="boxofimageorpdf">
                    <div
                      onClick={() => {
                        handleOpenx1();
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
              })}
            </div>
            <Modal
              open={openx1}
              onClose={handleClosex1}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style1}>
                {imagesave && (
                  <div className="imgbocofcerti">
                    <img src={imagesave} alt="" />
                  </div>
                )}
              </Box>
            </Modal>
            <div style={{ margin: "0.5vw", fontWeight: "500" }}>
              Total Milestone
            </div>

            {data?.bidingId?.milestoneDescription1 !== null && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className="colpletedmilestonescontacts"
              >
                <div>
                  <div>1. {data?.bidingId?.milestoneDescription1}</div>
                  <div
                    style={{
                      fontSize: "0.95vw",
                      color: "black",
                      fontWeight: "400",
                    }}
                  >
                   $ {data?.bidingId?.milestonePrice1} ,
                    <span> Due Date - {data?.bidingId?.milestoneDueDate1}</span>
                  </div>
                </div>
                <div>
                  <div
                    style={{ color: "#064C87", fontWeight: "400" }}
                    className="profilebannernameandpostemail"
                  >
                    <span>
                      <img src={img2} alt="" />
                    </span>
                    -
                  </div>
                </div>
              </div>
            )}
            {data?.bidingId?.milestoneDescription1 !== null && (
              <hr style={{ width: "100%", margin: "0.3vw" }} />
            )}
            {data?.bidingId?.milestoneDescription2 !== null && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className="colpletedmilestonescontacts"
              >
                <div>
                  <div>2. {data?.bidingId?.milestoneDescription2}</div>
                  <div
                    style={{
                      fontSize: "0.95vw",
                      color: "black",
                      fontWeight: "400",
                    }}
                  >
                   $ {data?.bidingId?.milestonePrice2} ,
                    <span> Due Date - {data?.bidingId?.milestoneDueDate2}</span>
                  </div>
                </div>
                <div>
                  <div
                    style={{ color: "#064C87", fontWeight: "400" }}
                    className="profilebannernameandpostemail"
                  >
                    <span>
                      <img src={img2} alt="" />
                    </span>
                    -
                  </div>
                </div>
              </div>
            )}
            {data?.bidingId?.milestoneDescription2 !== null && (
              <hr style={{ width: "100%", margin: "0.3vw" }} />
            )}
            {data?.bidingId?.milestoneDescription3 !== null && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className="colpletedmilestonescontacts"
              >
                <div>
                  <div>1. {data?.bidingId?.milestoneDescription3}</div>
                  <div
                    style={{
                      fontSize: "0.95vw",
                      color: "black",
                      fontWeight: "400",
                    }}
                  >
                    $ {data?.bidingId?.milestonePrice3} ,
                    <span> Due Date - {data?.bidingId?.milestoneDueDate3}</span>
                  </div>
                </div>
                <div>
                  <div
                    style={{ color: "#064C87", fontWeight: "400" }}
                    className="profilebannernameandpostemail"
                  >
                    <span>
                      <img src={img2} alt="" />
                    </span>
                    -
                  </div>
                </div>
              </div>
            )}
            {data?.bidingId?.milestoneDescription3 !== null && (
              <hr style={{ width: "100%", margin: "0.3vw" }} />
            )}
            {data?.bidingId?.milestoneDescription4 !== null && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className="colpletedmilestonescontacts"
              >
                <div>
                  <div>1. {data?.bidingId?.milestoneDescription4}</div>
                  <div
                    style={{
                      fontSize: "0.95vw",
                      color: "black",
                      fontWeight: "400",
                    }}
                  >
                   $ {data?.bidingId?.milestonePrice4} ,
                    <span> Due Date - {data?.bidingId?.milestoneDueDate4}</span>
                  </div>
                </div>
                <div>
                  <div
                    style={{ color: "#064C87", fontWeight: "400" }}
                    className="profilebannernameandpostemail"
                  >
                    <span>
                      <img src={img2} alt="" />
                    </span>
                    -
                  </div>
                </div>
              </div>
            )}
            {data?.bidingId?.milestoneDescription4 !== null && (
              <hr style={{ width: "100%", margin: "0.3vw" }} />
            )}
            {data?.bidingId?.milestoneDescription5 !== null && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className="colpletedmilestonescontacts"
              >
                <div>
                  <div>1. {data?.bidingId?.milestoneDescription5}</div>
                  <div
                    style={{
                      fontSize: "0.95vw",
                      color: "black",
                      fontWeight: "400",
                    }}
                  >
                  $ {data?.bidingId?.milestonePrice5} ,
                    <span> Due Date - {data?.bidingId?.milestoneDueDate5}</span>
                  </div>
                </div>
                <div>
                  <div
                    style={{ color: "#064C87", fontWeight: "400" }}
                    className="profilebannernameandpostemail"
                  >
                    <span>
                      <img src={img2} alt="" />
                    </span>
                    -
                  </div>
                </div>
              </div>
            )}
            {data?.bidingId?.milestoneDescription5 !== null && (
              <hr style={{ width: "100%", margin: "0.3vw" }} />
            )}
            
          </div>
        </Box>
      </Modal>
    </div>
  );
}
