import React from "react";
import { useNavigate } from "react-router";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import img23 from "../../../../assets/Dashboard/Skill center – 2/wepik--2022426-10102.png";
import img2 from "../../../../assets/dashbaordskill/Iconly-Light-outline-Edit.svg";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60vw",
    bgcolor: 'background.paper',
    border: '2px solid white',
    boxShadow: 24,
 
  };
  

export default function Examstudentdata({ data, index, page }) {
  const navigate = useNavigate();

  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const handleClosex = () => setOpenx(false);
  return (
    <div>
      <div style={{ alignItems: "center" }} className="navoftableblogsdata">
        <div
          onClick={() => {
            // navigate(`/dashbaord/blog/${data?.contentId}`);
          }}
          style={{ width: "5vw", cursor: "pointer" }}
        >
          # 1
        </div>

        <div style={{ width: "25vw", cursor: "pointer" }}>
          {data?.contentName?.slice(0, 50)} UX/UI Design Wireframe
        </div>
        <div style={{ width: "12vw", cursor: "pointer" }}>80</div>

        <div
          style={{
            width: "15vw",
            color:
              data?.status === "unpublish"
                ? "#F39600"
                : data?.status === "publish"
                ? "#2AC96A"
                : "red",
            fontWeight: "500",
          }}
        >
          {data?.status} Completed
        </div>
        <div style={{ width: "10vw", fontSize: "0.85vw" }} onClick={()=>handleOpenx()}>View More</div>
        <div style={{ width: "5vw" }}>
          <img
            src={img2}
            alt=""
            onClick={() => navigate('/dashbaord/examCondidates/:id')}
            style={{
              margin: "0 0.5vw",
              width: "2vw ",
              height: "2vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
          />
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
