import React, { useState } from "react";
import { useNavigate } from "react-router";
import { DeleteForeverOutlined, EditRounded } from "@mui/icons-material";
import axios from "axios";
import API_HOST from "../../../env";
import Box from "@mui/material/Box";
import {  TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
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
  const useStyles = makeStyles((theme) => ({
    input: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "0.91vw",
      color: "#263238",
      border: "yellow !important",
    },
  }));
export default function BlogButtonName() {
    const classes = useStyles();
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
  const navigate = useNavigate();
  const [titleuser, setTitleuser] = useState("");
  //   const handledeleteBlog = () => {
  //     axios
  //       .post(`${API_HOST}/contentManagement/removecontent`, {
  //         contentId: data?.contentId,
  //       })
  //       .then(() => {
  //         axios
  //           .get(
  //             `${API_HOST}/contentManagement/forAdminContent?contentName=${setSelectedCategory}&pageNumber=${page}&pageSize=10&category=${JSON.stringify(
  //               arrayoffilterselected
  //             )}`
  //           )
  //           .then((res) => {
  //             setAllusers(res?.data?.success?.data);
  //             window.scrollTo(0, 0, { behavior: "smooth" });
  //           });
  //         axios
  //           .get(
  //             `${API_HOST}/contentManagement/forAdminContent?contentName=${setSelectedCategory}&pageNumber=${
  //               page + 1
  //             }&pageSize=10&category=${JSON.stringify(arrayoffilterselected)}`
  //           )
  //           .then((res) => {
  //             if (res?.data?.success?.data?.length > 0) {
  //               settotalpages(page + 1);
  //             } else {
  //               settotalpages(page);
  //             }
  //           });
  //       });
  //   };
  return (
    <div>
      <div style={{ alignItems: "center" }} className="navoftableblogsdata">
        <div style={{ width: "5vw", cursor: "pointer" }}># 20</div>

        <div
         
          style={{ width: "70vw"}}
        >
          {/* {data?.contentName?.slice(0, 50)} */}
          navoftableblogsdata navoftableblogsdata navoftableblogsdata navoftableblogsdata navoftableblogsdata 
        </div>

        <div style={{ width: "4vw" }}>
          <EditRounded
            onClick={() => {
              handleOpen2();
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

        <div style={{ width: "4vw" }}>
          <DeleteForeverOutlined
            // onClick={() => {
            //   handledeleteBlog();
            // }}
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
        <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="profiletitleandmenunav">
                <div className="profiledetailstitle">Edit Button Name</div>
                <div className="profiledetailnavmanu">
                  <div>
                    <CloseIcon
                      onClick={handleClose2}
                      style={{ fontSize: "1.5vw", cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
              <hr style={{ color: "#00000090" }} />
             

              <div
                style={{ left: "0vw", width: "100%" }}
                className="loginfield"
              >
                <TextField
                  id="outlined-basic"
                  label="Button Name"
                  value={titleuser}
                  variant="outlined"
                  style={{ width: "100%" }}
                  InputLabelProps={{
                    style: {
                      fontSize: "1vw",
                      fontFamily: "Poppins",
                      fontStyle: "500",
                      fontWeight: "500",
                      color: "black",
                    },
                  }}
                  inputProps={{ className: classes.input }}
                  onChange={(e) => {
                    setTitleuser(e.target.value);
                  }}
                />
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
                  onClick={handleClose2}
                >
                  Cancel
                </div>
                <div
                  style={{ cursor: "pointer" }}
                 
                  className="handlecirclieaboutsave"
                >
                  Update
                </div>
              </div>
            </Box>
          </Modal>
       
      </div>
    </div>
  );
}
