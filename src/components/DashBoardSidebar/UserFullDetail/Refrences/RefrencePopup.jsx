import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "40vw",
};
export default function RefrencePopup() {
  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const handleClosex = () => setOpenx(false);
  return (
    <div>
      <div className="navoftableblogsdata">
        <div style={{ width: "6vw" }}>#1214</div>
        <div style={{ width: "15vw" }}>Mahendran H</div>
        <div style={{ width: "15vw" }}>Development</div>

        <div style={{ width: "20vw" }}>Front End Developer</div>
        <div style={{ width: "15vw", color: "#41B541", fontWeight: "500" }}>
          Account Created
        </div>
        <div
          onClick={handleOpenx}
          style={{
            width: "8vw",
            fontWeight: "500",
            fontFamily: "Poppins",
            cursor: "pointer",
          }}
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
              <div>Reference Details</div>
              <div>
                <CloseIcon style={{ fontSize: "1.5vw" }} />
              </div>
            </div>
            <hr style={{ height: "0.1vw" }} />

            <div className="titilenameappliedpopupmain">Basic Details</div>

            <div className="flexwrapappliedpopup">
              <div style={{ width: "50%", margin: "0.71vw 0vw" }}>
                <div
                  style={{ fontSize: "1.051vw" }}
                  className="titilenameappliedpopup"
                >
                  First Name
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
                  Last Name
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
                  Category
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
                  Sub Category
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
                  Skill Set
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
                  Mobile
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
                  Email
                </div>
                <div
                  style={{ margin: "0.2vw" }}
                  className="descriptionappliedpopup"
                >
                  Job Posted by
                </div>
              </div>
            </div>
            <div className="descriptionappliedpopup">
              Are you ready to Reject Reference before Get Accepted?
            </div>
            <div className="homejobbuttons">
              <button style={{ background: "white" }} onClick={handleClosex}>
                Cancel
              </button>
              <button style={{ color: "white" }}>Rejected</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
