import React from "react";
import { useNavigate } from "react-router";
import { DeleteForeverOutlined } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import axios from "axios";
import API_HOST from "../../../../env";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "45vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "fit-content",
  overflow: "scroll",
};

export default function Skillpopup1({
  data,
  index,
  page,
  setAllusers,
  settotalpages,
  setSelectedCategory,
}) {
  const navigate = useNavigate();
  const handledeleteBlog = () => {
    axios
      .post(`${API_HOST}/contentManagement/removecontent`, {
        contentId: data?.contentId,
      })
      .then(() => {
        axios
          .get(
            `${API_HOST}/contentManagement/forAdminContent?contentName=${setSelectedCategory}&pageNumber=${page}&pageSize=10`
          )
          .then((res) => {
            setAllusers(res?.data?.success?.data);
            window.scrollTo(0, 0, { behavior: "smooth" });
          });
        axios
          .get(
            `${API_HOST}/contentManagement/forAdminContent?contentName=${setSelectedCategory}&pageNumber=${
              page + 1
            }&pageSize=10`
          )
          .then((res) => {
            if (res?.data?.success?.data?.length > 0) {
              settotalpages(page + 1);
            } else {
              settotalpages(page);
            }
          });
      });
  };
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
          style={{ width: "4vw", cursor: "pointer" }}
        >
          #{(page - 1) * 10 + (index + 1)} 
        </div>

        <div
          onClick={() => {
            // navigate(`/dashbaord/blog/${data?.contentId}`);
          }}
          style={{ width: "20vw", cursor: "pointer" }}
        >
          {data?.contentName?.slice(0, 50)} UX/UI Design Wireframe
        </div>
        <div
          onClick={() => {
            // navigate(`/dashbaord/blog/${data?.contentId}`);
          }}
          style={{ width: "10vw", cursor: "pointer" }}
        >
          {data?.category} 10/12/2022
        </div>

        <div style={{ width: "10vw", fontWeight: "400" }}>
          {data?.author} 60 Min
        </div>

        <div
          style={{
            width: "12vw",
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
        <div style={{ width: "10vw", fontSize: "0.85vw" }}>
          {data?.desc?.slice(0, 200)} No
        </div>
        <div style={{ width: "5vw" }}>
          <RemoveRedEyeIcon
            onClick={() => handleOpenx()}
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
        <div style={{ width: "5vw" }}>
          <DeleteForeverOutlined
            onClick={() => {
              handledeleteBlog();
            }}
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
          <div style={{ padding: "2vw", width: "100%", height: "100%" }}>
            <div className="appliedjobformtitleflex">
              <div>Exam Details</div>
              <div>
                <CloseIcon
                  onClick={handleClosex}
                  style={{ fontSize: "1.5vw", cursor: "pointer" }}
                />
              </div>
            </div>
            <hr style={{ height: "0.1vw" }} />
            <div className="titilenameappliedpopup">UX/UI Design Wireframe</div>
            <div className="descriptionappliedpopup">
              <div
                style={{
                  fontSize: "0.9vw",
                  paddingRight: "2vw",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident deleniti natus repellat porro asperiores tempora,
                magni vel at aperiam praesentium.
              </div>
            </div>
            <div className="titilenameappliedpopupmain">Basic Details</div>

            <div className="flexwrapappliedpopup">
              <div style={{ width: "50%", margin: "0.71vw 0vw" }}>
                <div
                  style={{ fontSize: "1.051vw" }}
                  className="titilenameappliedpopup"
                >
                  Duration
                </div>
                <div
                  style={{ margin: "0.2vw" }}
                  className="descriptionappliedpopup"
                >
                  60 min{" "}
                </div>
              </div>
              <div style={{ width: "50%", margin: "0.71vw 0vw" }}>
                <div
                  style={{ fontSize: "1.051vw" }}
                  className="titilenameappliedpopup"
                >
                  Date of Exam
                </div>
                <div
                  style={{ margin: "0.2vw" }}
                  className="descriptionappliedpopup"
                >
                  Nov 12, 2021
                </div>
              </div>
              <div style={{ width: "50%", margin: "0.71vw 0vw" }}>
                <div
                  style={{ fontSize: "1.051vw" }}
                  className="titilenameappliedpopup"
                >
                  Certificate
                </div>
                <div
                  style={{ margin: "0.2vw" }}
                  className="descriptionappliedpopup"
                >
                  Yes
                </div>
              </div>
              <div style={{ width: "50%", margin: "0.71vw 0vw" }}>
                <div
                  style={{ fontSize: "1.051vw" }}
                  className="titilenameappliedpopup"
                >
                  Max_Candidate
                </div>
                <div
                  style={{ margin: "0.2vw" }}
                  className="descriptionappliedpopup"
                >
                  25
                </div>
              </div>
            </div>
            <div style={{ width: "100%", margin: "0.71vw 0vw" }}>
              <div
                style={{ fontSize: "1.051vw" }}
                className="titilenameappliedpopup"
              >
                documents
              </div>
              <div
                style={{ margin: "0.2vw" }}
                className="descriptionappliedpopup"
              >
                <a
                  href="https://selfregistration.cowin.gov.in/"
                  target="https://selfregistration.cowin.gov.in/"
                >
                  https://cowin.gov.in - cowin
                </a>
              </div>
            </div>

            <div className="homejobbuttons">
              <button style={{ background: "white" }} onClick={handleClosex}>
                Cancel
              </button>
              <button style={{ background: "white" }} onClick={handleClosex}>
                Edit
              </button>
              <button
                style={{ color: "white" }}
                //  onClick={handleRejectbid}
              >
                Withdraw
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
