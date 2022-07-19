import React from "react";

import { useNavigate } from "react-router";
import { DeleteForeverOutlined } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import axios from "axios";
import API_HOST from "../../../env";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
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
const currencies = [
  {
    value: "Trending",
  },
  {
    value: "Recent",
  },
  {
    value: "None",
  },
];

export default function Skillpopup1({
  data,
  index,
  page,
  setAllusers,
  settotalpages,
  setSelectedCategory,
  arrayoffilterselected,
}) {
  const navigate = useNavigate();
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const handledeleteBlog = () => {
    axios
      .post(`${API_HOST}/contentManagement/removecontent`, {
        contentId: data?.contentId,
      })
      .then(() => {
        axios
          .get(
            `${API_HOST}/contentManagement/forAdminContent?contentName=${setSelectedCategory}&pageNumber=${page}&pageSize=10&category=${JSON.stringify(
              arrayoffilterselected
            )}`
          )
          .then((res) => {
            setAllusers(res?.data?.success?.data);
            window.scrollTo(0, 0, { behavior: "smooth" });
            handleClose3()
          });
        axios
          .get(
            `${API_HOST}/contentManagement/forAdminContent?contentName=${setSelectedCategory}&pageNumber=${
              page + 1
            }&pageSize=10&category=${JSON.stringify(arrayoffilterselected)}`
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
  const [currency, setCurrency] = React.useState(
    data?.trendingContent ? "Trending" : data?.recentContent ? "Recent" : "None"
  );
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleUpdateblog = (data1) => {
    if (data1 === "Trending") {
      axios.post(`${API_HOST}/contentManagement/editContent`, {
        contentId: data?.contentId,
        trendingContent: true,
        recentContent: false,
      });
    }
    if (data1 === "Recent") {
        axios.post(`${API_HOST}/contentManagement/editContent`, {
            contentId: data?.contentId,
            trendingContent: false,
            recentContent: true,
          });
    }
    if (data1 === "None") {
        axios.post(`${API_HOST}/contentManagement/editContent`, {
            contentId: data?.contentId,
            trendingContent: false,
            recentContent: false,
          });
    }
  };

  return (
    <div>
      <div style={{ alignItems: "center" }} className="navoftableblogsdata">
        <div
          onClick={() => {
            navigate(`/dashbaord/blog/${data?.contentId}`);
          }}
          style={{ width: "4vw", cursor: "pointer" }}
        >
          #{(page - 1) * 10 + (index + 1)}
        </div>

        <div
          onClick={() => {
            navigate(`/dashbaord/blog/${data?.contentId}`);
          }}
          style={{ width: "13vw", cursor: "pointer" }}
        >
          {data?.contentName?.slice(0, 50)}
        </div>
        <div
          onClick={() => {
            navigate(`/dashbaord/blog/${data?.contentId}`);
          }}
          style={{ width: "11vw", cursor: "pointer" }}
        >
          {data?.category}
        </div>

        <div style={{ width: "10vw", fontWeight: "400" }}>{data?.author}</div>
        <div style={{ width: "18vw", fontSize: "0.85vw" }}>
          {data?.toC[0]?.desc?.slice(0, 200)}
        </div>
        <div
          style={{
            width: "7vw",
            color:
              data?.status === "unpublish"
                ? "#F39600"
                : data?.status === "publish"
                ? "#2AC96A"
                : "red",
            fontWeight: "500",
          }}
        >
          {data?.status}
        </div>
        <div
          style={{ width: "13vw", padding: "0vw 1vw", paddingLeft: "0.5vw" }}
        >
         {data?.status==="publish" && <div style={{ marginBottom: "0.5vw" }} className="inputtypeformfield">
            <TextField
              id="standard-select-currency"
              select
              style={{
                width: "100%",
                textAlign: "left",
                borderBottom: "0.11px solid white",
                color: "black !important",
              }}
              value={currency}
              onChange={handleChange}
              variant="standard"
            >
              {currencies.map((option) => (
                <MenuItem
                  hidden={option.value === "Select Category" ? true : false}
                  key={option.value}
                  value={option.value}
                  onClick={() => handleUpdateblog(option.value)}
                >
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </div>
     }
        </div>
        <div style={{ width: "3vw" }}>
          <RemoveRedEyeIcon
            onClick={() => navigate(`/dashbaord/blog/${data?.contentId}`)}
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
        <div style={{ width: "3vw" }}>
          <DeleteForeverOutlined
            onClick={() => {
              handleOpen3();
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
                Are you really want to delete '{data?.contentName}'
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
                onClick={() => handledeleteBlog()}
                style={{ cursor: "pointer" }}
                className="handlecirclieaboutsave"
              >
                Delete
              </div>
            </div>
          </Box>
        </Modal>
      
      </div>
    </div>
  );
}
