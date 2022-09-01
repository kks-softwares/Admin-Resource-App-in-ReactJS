import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import img2 from "../../../../assets/Success stories Definition/checkmark (1).svg";
import img from "../../../../assets/Landing page/pexels-christina-morillo-1181467.png";
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
  setjobdetail,
  setWorkhistorytoggle,
}) {
  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const navigate = useNavigate();
  const handleClosex = () => setOpenx(false);
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
        <div style={{ width: "18vw" }}>Rahul Rajput</div>
        <div style={{ width: "13vw" }}>4 months</div>
        <div style={{ width: "12vw" }}>27/02/2022</div>
        <div style={{ width: "12vw" }}>$ 500</div>
        <div style={{ width: "12vw", color: "red" }}>Rejected</div>
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
                Bidder Name <br /> <span>Vasaanth David.H</span>
              </div>
              <div style={{ marginRight: "1vw" }}>
                Bids Applied On <br /> <span> $8 - $16</span>
              </div>
              <div style={{ marginRight: "1vw" }}>
                Estimate Time to Complete <br /> <span>3 Months </span>
              </div>
              <div style={{ marginRight: "1vw" }}>
                {" "}
                Status <br /> <span style={{ color: "red" }}>Rejected</span>
              </div>
            </div>
            <div
              style={{ color: "#064C87", margin: "0.5vw", fontWeight: "500" }}
            >
              Image / Documents
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
              <div className="boxofimageorpdf">
                <div className="imageshowboxofpdf">
                  <img src={img} alt="" />
                </div>
                <div className="imageshowboxofpdfname">
                  <div>
                    <PictureAsPdfIcon
                      style={{ color: "red", fontSize: "1.7vw" }}
                    />
                  </div>
                  <div className="nameifimagedocuments">Front Side.pdf</div>
                </div>
              </div>
              <div className="boxofimageorpdf">
                <div className="imageshowboxofpdf">
                  <img src={img} alt="" />
                </div>
                <div className="imageshowboxofpdfname">
                  <div>
                    <PictureAsPdfIcon
                      style={{ color: "red", fontSize: "1.7vw" }}
                    />
                  </div>
                  <div className="nameifimagedocuments">Front Side.pdf</div>
                </div>
              </div>
              <div className="boxofimageorpdf">
                <div className="imageshowboxofpdf">
                  <img src={img} alt="" />
                </div>
                <div className="imageshowboxofpdfname">
                  <div>
                    <PictureAsPdfIcon
                      style={{ color: "red", fontSize: "1.7vw" }}
                    />
                  </div>
                  <div className="nameifimagedocuments">Front Side.pdf</div>
                </div>
              </div>
            </div>
            <div style={{ margin: "0.5vw", fontWeight: "500" }}>
              Total Milestone
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              className="colpletedmilestonescontacts"
            >
              <div>
                <div>1. Website Wireframe Approval with Prototype</div>
                <div
                  style={{
                    fontSize: "0.95vw",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  $300
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
                  Paid Milestone
                </div>
              </div>
            </div>
            <hr style={{ width: "100%", margin: "0.3vw" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              className="colpletedmilestonescontacts"
            >
              <div>
                <div>1. Website Wireframe Approval with Prototype</div>
                <div
                  style={{
                    fontSize: "0.95vw",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  $300
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
                  Paid Milestone
                </div>
              </div>
            </div>
            <hr style={{ width: "100%", margin: "0.3vw" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              className="colpletedmilestonescontacts"
            >
              <div>
                <div>1. Website Wireframe Approval with Prototype</div>
                <div
                  style={{
                    fontSize: "0.95vw",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  $300
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
                  Paid Milestone
                </div>
              </div>
            </div>
          
          </div>
        </Box>
      </Modal>
    </div>
  );
}
