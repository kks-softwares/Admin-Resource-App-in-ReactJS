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
export default function Skillpopup() {
  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const handleClosex = () => setOpenx(false);
  return (
    <div>
      <div className="navoftableblogsdata">
        <div style={{ width: "20vw" }}>UX/UI Design Wireframe</div>
        <div style={{ width: "12vw" }}>10/12/2022</div>
        <div style={{ width: "12vw" }}>79%</div>

        <div style={{ width: "15vw", color: "#41B541", fontWeight: "500" }}>
          Completed
        </div>
        <div style={{ width: "10vw" }}>No</div>
        <div
        //   onClick={handleOpenx}
          style={{
            width: "8vw",
            fontWeight: "500",
            fontFamily: "Poppins",
            cursor: "pointer",
          }}
        >
          Click here
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
