import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import img23 from "../../../../assets/Dashboard/Skill center – 2/wepik--2022426-10102.png";

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
          onClick={handleOpenx}
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
          <div className="imgbocofcerti">
            <img src={img23} alt="" />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
