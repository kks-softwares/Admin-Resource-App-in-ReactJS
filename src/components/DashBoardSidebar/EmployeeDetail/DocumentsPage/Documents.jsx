import React from "react";
import "./Documents.css";
import img2 from "../../../../assets/Success stories Definition/checkmark (1).svg";
import img1 from "../../../../assets/Web 1280 – 14/Group 9831.svg";
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
export default function Documents() {
  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const handleClosex = () => setOpenx(false);
  return (
    <div>
      <div
        style={{ margin: "1vw 0.5vw", padding: "0" }}
        className="navoftableblogs"
      >
        Document Details
      </div>

      <div className="boxoddocuments">
        <div className="titledocuments">Id Verification</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="Headingdocuments">Driving License</div>
          <div style={{ fontWeight: "400" }} className="Headingdocuments">
            TN58009189102
            <span>
              <img
                style={{
                  width: "1vw",
                  margin: "0.4vw",
                  position: "relative",
                  bottom: "0.2vw",
                }}
                src={img2}
                alt=""
              />
            </span>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <div
            style={{ width: "50%", cursor: "pointer" }}
            onClick={() => handleOpenx()}
            className="inputfilesshowncatboxsingle"
          >
            <div className="inputfilesshowncatboxsingleimg">
              <img src={img1} alt="" />
            </div>
            <div className="fileselctednamecate">Modern submitted.docx</div>
          </div>
          <div style={{ width: "50%" }} className="inputfilesshowncatboxsingle">
            <div className="inputfilesshowncatboxsingleimg">
              <img src={img1} alt="" />
            </div>
            <div className="fileselctednamecate">Modern submitted.docx</div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="Headingdocuments">Driving License</div>
          <div style={{ fontWeight: "400" }} className="Headingdocuments">
            TN58009189102
            <span>
              <img
                style={{
                  width: "1vw",
                  margin: "0.4vw",
                  position: "relative",
                  bottom: "0.2vw",
                }}
                src={img2}
                alt=""
              />
            </span>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <div style={{ width: "50%" }} className="inputfilesshowncatboxsingle">
            <div className="inputfilesshowncatboxsingleimg">
              <img src={img1} alt="" />
            </div>
            <div className="fileselctednamecate">Modern submitted.docx</div>
          </div>
        </div>

        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <div className="Headingdocuments">Driving License</div>
          <div style={{ fontWeight: "400" }} className="Headingdocuments">
            TN58009189102
            <span>
              <img
                style={{
                  width: "1vw",
                  margin: "0.4vw",
                  position: "relative",
                  bottom: "0.2vw",
                }}
                src={img2}
                alt=""
              />
            </span>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <div style={{ width: "50%" }} className="inputfilesshowncatboxsingle">
            <div className="inputfilesshowncatboxsingleimg">
              <img src={img1} alt="" />
            </div>
            <div className="fileselctednamecate">Modern submitted.docx</div>
          </div>
          <div style={{ width: "50%" }} className="inputfilesshowncatboxsingle">
            <div className="inputfilesshowncatboxsingleimg">
              <img src={img1} alt="" />
            </div>
            <div className="fileselctednamecate">Modern submitted.docx</div>
          </div>
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
