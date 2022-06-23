import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./appliedjob.css";
import { SearchSharp } from "@mui/icons-material";
import Box from "@mui/material/Box";
import "./skill.css";
import "./blog.css";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import axios from "axios";
import API_HOST from "../../../env";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import imgfilter from "../../../assets/Dashboard/Iconly-Light-Filter 2.png";
import Modal from "@mui/material/Modal";
import Skillpopup from "./Skillpopup";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
};
export default function Users() {
  const [openx, setOpenx] = React.useState(false);
  const [anchorElx, setAnchorElx] = React.useState(null);
  const canBeOpen = openx && Boolean(anchorElx);
  const id = canBeOpen ? "transition-popper" : undefined;
  const [workhistorytoggle, setWorkhistorytoggle] = useState(1);

  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [totalpages, settotalpages] = useState(1);

  const [setSelectedCategory, setSetSelectedCategory] = useState("");
  const [arrayoffilters, setArrayoffilters] = useState([
    {
      filternameName: "Categories",
      filters: [
        "Digital Marketing",
        "Graphic Design",
        "Data Analystics",
        "Communication",
      ],
    },
    {
      filternameName: "Course Length",
      filters: ["Under 2 hours", "2-10 hours", "11-20 hours", "20+ hours"],
    },
    {
      filternameName: "Certification",
      filters: ["Paid Certification", "Free Certification"],
    },
    {
      filternameName: "Course Difficulty",
      filters: ["Begineer", "Intermediate", "Advanced", "Expert"],
    },
    {
      filternameName: "Course Provider",
      filters: ["Google", "Udemy", "Coursera", "Future Learn"],
    },
  ]);

  const [arrayoffilterselected, setarrayoffilterselected] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [previosfilter, setPreviosfilter] = useState([]);
  return (
    <div className="BrowseWorkMain-cntainer">
      <div className="searchboxcontainer">
        <div className="serachjobbox">
          <span>
            <SearchSharp style={{ fontSize: "1.7vw" }} />
          </span>
          <input
            type="text"
            placeholder="search Users"
            value={setSelectedCategory}
            onChange={(e) => {
              setSetSelectedCategory(e.target.value);
            }}
          />
          <button
            style={{ width: "11vw", height: "2.6vw" }}
            className="hb-button"
          >
            Search
          </button>
        </div>

        <div
          onClick={() => {
            navigate("/dashbaord/addUser");
          }}
          className="digitalwallate"
        >
          <span style={{ color: "#064C87" }}>Add New User</span>
        </div>
      </div>

      <div
        style={{ position: "relative", right: "1vw", top: "1vw" }}
        className="profileworkhistruytoggleer"
      >
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "left",
          }}
          onClick={() => {
            setWorkhistorytoggle(1);
          }}
        >
          List of Users
        </div>

        <div
          style={{
            color: "#064C87",
            borderBottom: "0.3vw solid #064C87",
            width: "7vw",
            position: "relative",
            right: "13vw",
            bottom: "0.0vw",
            transitionDuration: "1s",
            borderRadius: "0.2vw",
          }}
        ></div>
      </div>

      <div>
        <div style={{ flexWrap: "wrap" }} className="filterboxflex">
          <div
            onClick={() => {
              handleOpen();
              setPreviosfilter([...arrayoffilterselected]);
            }}
            className="filtericonbox"
          >
            <img src={imgfilter} alt="" />
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="profiletitleandmenunav">
                <div className="profiledetailstitle">Add Filters</div>
                <div className="profiledetailnavmanu">
                  <div>
                    <CloseIcon
                      onClick={handleClose}
                      style={{ fontSize: "1.5vw" }}
                    />
                  </div>
                </div>
              </div>
              <hr style={{ color: "#00000090" }} />

              {arrayoffilters?.map((data, index) => {
                return (
                  <div>
                    <div
                      style={{ fontSize: "1.2vw" }}
                      className="profiledetailstitle"
                    >
                      {data?.filternameName}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      {data?.filters?.map((data1, index) => {
                        return (
                          <div
                            onClick={() => {
                              console.log(arrayoffilterselected.indexOf(data1));
                              if (arrayoffilterselected.indexOf(data1) > -1) {
                                setarrayoffilterselected([
                                  ...arrayoffilterselected.slice(
                                    0,
                                    arrayoffilterselected.indexOf(data1)
                                  ),
                                  ...arrayoffilterselected.slice(
                                    arrayoffilterselected.indexOf(data1) + 1,
                                    arrayoffilterselected.length
                                  ),
                                ]);
                              } else {
                                setarrayoffilterselected([
                                  ...arrayoffilterselected,
                                  data1,
                                ]);
                              }
                            }}
                            style={{
                              background: arrayoffilterselected.includes(data1)
                                ? "#064C8720"
                                : "",
                              cursor: "pointer",
                            }}
                            className="filterboxnameskill"
                          >
                            {data1}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

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
                  onClick={() => {
                    setarrayoffilterselected(previosfilter);
                    handleClose();
                  }}
                >
                  Cancel
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  className="handlecirclieaboutsave"
                  // onClick={handleeducationdelete}
                >
                  Submit
                </div>
              </div>
            </Box>
          </Modal>

          {arrayoffilterselected?.length > 0 &&
            arrayoffilterselected?.map((filtername) => {
              return <div className="filtericonboxname">{filtername}</div>;
            })}

          <div
            onClick={() => setarrayoffilterselected([])}
            style={{ cursor: "pointer" }}
            className="filtericonboxname"
          >
            Clear all
          </div>
        </div>
      </div>

      <div
        style={{ margin: "0vw 0vw", padding: "0", marginBottom: "2vw" }}
        className="navoftableblogs"
      >
        List of Exams
      </div>
      <div>
        <div
          style={{ margin: "0vw 1vw", padding: "0vw 1vw" }}
          className="navoftableblogs"
        >
          <div style={{ width: "10vw" }}>Id</div>
          <div style={{ width: "6vw" }}> </div>
          <div style={{ width: "15vw" }}>Name</div>
          <div style={{ width: "15vw" }}>category</div>
          <div style={{ width: "15vw" }}>Designation</div>
          <div style={{ width: "12vw" }}>Joined on</div>
          <div style={{ width: "6vw" }}></div>
        </div>

        <Skillpopup />
        <Skillpopup />
        <Skillpopup />
        <Skillpopup />
        <Skillpopup />
        <Skillpopup />
        <Skillpopup />
        <Skillpopup />

        {/* <div className="paginationbox">
              <div>
                <ArrowBackIosIcon style={{ fontSize: "1.5vw" }} />
              </div>
              <div style={{ color: page === 1 ? "#2A6599" : "" }}>1</div>
              <div>2</div>
              <div>3</div>
              <div>.</div>
              <div>.</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>
                <ArrowForwardIosIcon style={{ fontSize: "1.5vw" }} />
              </div>
            </div> */}
      </div>
    </div>
  );
}
