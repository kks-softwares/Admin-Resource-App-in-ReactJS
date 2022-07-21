import React, { useState } from "react";

import img from "../../../assets/Landing page/apple (1)@2x.png";
import img2 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Edit.svg";
import { Navigate, useNavigate } from "react-router";
import img1 from "../../../assets/Jobs/Iconly-Light-Delete.svg";
import axios from "axios";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
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


  const [titleuser, setTitleuser] = useState(data?.callToActionTitle);

//   const handledeleteBlog = () => {
//     axios
//       .post(`${API_HOST}/callToActionTitle/removeTitle`, {
//         titleId: data?.titleId,
//       })
//       .then(() => {
//         axios.get(`${API_HOST}/callToActionTitle/viewTitle`).then((res) => {
//           setAllCtitle(res?.data?.success?.data);
//           handleClose3()
//         });
//       });
//   };

  return (
    <div>
      <div style={{ alignItems: "center" }} className="navoftableblogsdata">
        <div
          onClick={() => {
            navigate(`/dashbaord/employee/${data?.userName}/My Profile`);
          }}
          style={{ width: "6vw", cursor: "pointer" }}
        >
          #{(page - 1) * 10 + (index + 1)}
        </div>
        <div style={{ width: "9vw" }}>
          <img
            onClick={() => {
              navigate(`/dashbaord/employee/${data?.userName}/My Profile`);
            }}
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
        </div>
        <div
          onClick={() => {
            navigate(`/dashbaord/employee/${data?.userName}/My Profile`);
          }}
          style={{ width: "14vw", cursor: "pointer" }}
        >
          {data?.fullName}
        </div>

        <div style={{ width: "14vw", fontWeight: "400" }}>{data?.category}</div>
        <div style={{ width: "14vw" }}>{data?.designation}</div>
        <div style={{ width: "12vw" }}>
          {data?.userCreateTime?.slice(0, 10)}
        </div>
        <div style={{ width: "4vw" }}>
          <img
            onClick={() => {
              navigate(`/dashbaord/editEmployee/${data?.userName}`);
            }}
            style={{
              margin: "0 0.5vw",
              width: "2vw ",
              height: "2vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={img2}
            alt=""
          />
        </div>
        <div style={{ width: "4vw" }}>
          <img
            onClick={() => {
              navigate(`/dashbaord/Delete/${data?.userName}`);
            }}
            style={{
              margin: "0 0.5vw",
              width: "2vw ",
              height: "2vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={img1}
            alt=""
          />
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
            <div
              style={{ marginTop: "0.31vw" }}
              className="handlemoreaboutskill"
            >
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
