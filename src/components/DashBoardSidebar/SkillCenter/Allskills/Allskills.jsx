import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Edit } from "@mui/icons-material";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import API_HOST from "../../../../env";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import imgfilter from "../../../../assets/walletimage/Iconly-Light-Color-Filter.svg";
import Modal from "@mui/material/Modal";
import { DeleteForeverOutlined } from "@mui/icons-material";

import SkillCard1 from "./Skillsearchcard1";

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
export default function Allskills() {
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

  const [arrayoffilterselected, setarrayoffilterselected] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [previosfilter, setPreviosfilter] = useState([]);
  const [previosfilter1, setPreviosfilter1] = useState([]);
  const [allusers, setAllusers] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ flexWrap: "wrap" }} className="filterboxflex">
            <div
              onClick={() => {
                handleOpen();
                setPreviosfilter([...arrayoffilterselected]);
                setPreviosfilter1([...arrayoffilterselected]);
              }}
              className="filtericonbox"
            >
              <img src={imgfilter} alt="" /> Filter
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
                                if (previosfilter1.indexOf(data1) > -1) {
                                  setPreviosfilter1([
                                    ...previosfilter1.slice(
                                      0,
                                      previosfilter1.indexOf(data1)
                                    ),
                                    ...previosfilter1.slice(
                                      previosfilter1.indexOf(data1) + 1,
                                      previosfilter1.length
                                    ),
                                  ]);
                                } else {
                                  setPreviosfilter1([...previosfilter1, data1]);
                                }
                              }}
                              style={{
                                background: previosfilter1.includes(data1)
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
                    onClick={() => {
                      setarrayoffilterselected(previosfilter1);
                      handleClose();
                    }}
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

        <div style={{ width: "10vw" }} className="digitalwallate">
          <div style={{ width: "4vw" }}>
            <DeleteForeverOutlined
              onClick={() => {
                //   handledeleteBlog();
              }}
              style={{
                margin: "0 0.5vw",
                width: "1.8vw ",
                height: "1.8vw",
                borderRadius: "50%",
                cursor: "pointer",
                objectFit: "cover",
              }}
            />
          </div>
          <div style={{ width: "4vw" }}>
            <Edit
              // onClick={() => navigate(`/dashbaord/blog/${data?.contentId}`)}
              style={{
                margin: "0 0.5vw",
                width: "1.8vw ",
                height: "1.8vw",
                borderRadius: "50%",
                cursor: "pointer",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <SkillCard1
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
        <SkillCard1
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
        <SkillCard1
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
        <SkillCard1
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
        <SkillCard1
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
        <SkillCard1
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      </div>
      <div className="paginationbox">
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
      </div>
    </div>
  );
}
