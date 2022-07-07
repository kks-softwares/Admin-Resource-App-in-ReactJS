import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Progress from "react-progressbar";
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
export default function SkillPopup2() {
  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const handleClosex = () => setOpenx(false);
  return (
    <div>
      <div className="navoftableblogsdata">
        <div style={{ width: "17vw" }}>UX Research</div>
        <div style={{ width: "13vw" }}>10/12/2022</div>
        <div style={{ width: "13vw" }}>20 hrs</div>

        <div style={{ width: "10vw" }}>
          20/24
        </div>
        <div style={{ width: "15vw" }}>
        <div
          style={{
            position: "relative",
            top:"0.5vw",
            width:"90%",
            border: "1px solid #064C87",
          }}
        >
          <Progress
            completed={20}
            color="#064C87"
            height="0.65vw"
            border="0.35vw"
          />
        </div>
        </div>
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
