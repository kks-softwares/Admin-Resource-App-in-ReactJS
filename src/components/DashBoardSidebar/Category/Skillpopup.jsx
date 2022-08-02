import React, { useState } from "react";

import img from "../../../assets/Landing page/apple (1)@2x.png";
import img2 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Edit.svg";
import { Navigate, useNavigate } from "react-router";
import img51 from "../../../assets/Web 1280 – 14/Group 10219.svg";
import ToggleButton from "react-toggle-button";
import img4 from "../../../assets/Web 1280 – 14/Ellipse 1375.svg";
import axios from "axios";
import Box from "@mui/material/Box";
import img1 from "../../../assets/Admin Panel List of Categories/change_circle_black_24dp.svg";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  maxHeight: "95vh",
  overflow: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Skillpopup({ data, index, page }) {
  const navigate = useNavigate();
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
 

  const [checkonex, setCheckonex] = useState(false);
  return (
    <div>
      <div style={{ alignItems: "center" }} className="navoftableblogsdata">
        <div style={{ width: "3vw" }}>
        <div className="checkbox" onClick={() => setCheckonex(!checkonex)}>
              {checkonex ? (
                <DoneIcon
                  style={{
                    fontSize: "0.81vw",
                    color: "blueviolet",
                    fontWeight: "600",
                  }}
                />
              ) : (
                ""
              )}{" "}
            </div>
        </div>
        <div
          onClick={() => {
            navigate(`/dashbaord/employee/${data?.userName}/Basic Details`);
          }}
          style={{ width: "7vw", cursor: "pointer" }}
        >
          #{(page - 1) * 10 + (index + 1)}
        </div>
        <div style={{ width: "7vw", display: "flex", alignItems: "center" }}>
          <img
            style={{
              margin: "0 0.5vw",
              width: "2.5vw ",
              height: "2.5vw",
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "pointer",
            }}
            src={!data?.media ? img : data?.media}
            alt=""
          />{" "}
          <img
            style={{
              margin: "0.5vw 0.5vw",
              width: "1.4vw ",
              height: "1.4vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={img2}
            alt=""
          />
        </div>
        <div
          onClick={() => {
            navigate(`/dashbaord/employee/${data?.userName}/Basic Details`);
          }}
          style={{
            width: "18vw",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          <img
            style={{
              margin: "0.5vw 0.5vw",
              width: "1.4vw ",
              height: "1.4vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={img1}
            alt=""
          />
          Development
          <img
            style={{
              margin: "0.5vw 0.5vw",
              width: "1.4vw ",
              height: "1.4vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={img2}
            alt=""
          />
        </div>

        <div
          style={{
            width: "18vw",
            fontWeight: "400",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            style={{
              margin: "0.5vw 0.5vw",
              width: "1.4vw ",
              height: "1.4vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={img1}
            alt=""
          />
          Development
          <img
            style={{
              margin: "0 0.5vw",
              width: "2.5vw ",
              height: "2.5vw",
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "pointer",
            }}
            src={!data?.media ? img : data?.media}
            alt=""
          />{" "}
          <img
            style={{
              margin: "0.5vw 0.5vw",
              width: "1.4vw ",
              height: "1.4vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={img2}
            alt=""
          />
        </div>
        <div style={{ width: "18vw", display: "flex", alignItems: "center" }}>
          <img
            style={{
              margin: "0.5vw 0.5vw",
              width: "1.4vw ",
              height: "1.4vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={img1}
            alt=""
          />{" "}
          Development
          <img
            style={{
              margin: "0 0.5vw",
              width: "2.5vw ",
              height: "2.5vw",
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "pointer",
            }}
            src={!data?.media ? img : data?.media}
            alt=""
          />{" "}
          <img
            style={{
              margin: "0.5vw 0.5vw",
              width: "1.4vw ",
              height: "1.4vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={img2}
            alt=""
          />
        </div>
        <div style={{ width: "9vw", display: "flex", alignItems: "center" }}>
          {data?.userCreateTime?.slice(0, 10)}
        </div>
      </div>
      <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="profiletitleandmenunav">
            <div className="profiledetailstitle">Delete Title Name</div>
            <div className="profiledetailnavmanu">
              <div>
                <CloseIcon
                  onClick={handleClose3}
                  style={{ fontSize: "1.5vw", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
          <hr style={{ color: "#00000090" }} />

          <div style={{ left: "0vw", width: "100%" }} className="loginfield">
            Are you really want to delete '{data?.callToActionTitle}'
          </div>

          <hr style={{ color: "#00000090" }} />
          <div style={{ marginTop: "0.31vw" }} className="handlemoreaboutskill">
            <div
              style={{
                background: "white",
                color: "black",
                cursor: "pointer",
              }}
              className="handlecirclieaboutsave"
              onClick={handleClose3}
            >
              Cancel
            </div>
            <div
              // onClick={() => handledeleteBlog()}
              style={{ cursor: "pointer" }}
              className="handlecirclieaboutsave"
            >
              Delete
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
