import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { SearchSharp } from "@mui/icons-material";
import Box from "@mui/material/Box";
import StarRatings from "react-star-ratings";

import axios from "axios";
import API_HOST from "../../../env";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import img1 from "../../../assets/Jobs/Iconly-Light-Delete.svg";
import img2 from "../../../assets/Jobs/Iconly-Light-Edit.svg";
import img3 from "../../../assets/Jobs/Iconly-Light-Paper Upload.svg";
import CloseIcon from "@mui/icons-material/Close";
import imgfilter from "../../../assets/Dashboard/Iconly-Light-Filter 2.png";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@material-ui/core";
import { TextField } from "@mui/material";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

const style2 = {
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

const style1 = {
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
export default function Jobs() {
  const [workhistorytoggle, setWorkhistorytoggle] = useState(1);
  const [togglrbar1, setTogglrbar1] = useState();
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [totalpages, settotalpages] = useState(1);

  const [page1, setPage1] = useState(1);
  const [totalpages1, settotalpages1] = useState(1);

  const [page3, setPage3] = useState(1);
  const [totalpages3, settotalpages3] = useState(1);

  const [setSelectedCategory, setSetSelectedCategory] = useState("");

  const searchnewworkcreated = (setSelectedCategory) => {
    axios
      .get(
        `${API_HOST}/jobPost/newlyWorkPosted?category=${setSelectedCategory}&pageSize=3&pageNumber=${page}`
      )
      .then((res) => {
        setAlljobposted(res?.data?.success?.data);
      });

    axios
      .get(
        `${API_HOST}/jobPost/newlyWorkPosted?category=${setSelectedCategory}&pageSize=3&pageNumber=${
          page + 1
        }`
      )
      .then((res) => {
        if (res?.data?.success?.data?.length !== 0) {
          settotalpages(page + 1);
        } else {
          settotalpages(page);
        }
      });
  };
  const searchnewworkongoing = (setSelectedCategory) => {
    axios
      .get(
        `${API_HOST}/jobPost/onGoingWork?category=${setSelectedCategory}&pageSize=9&pageNumber=${page1}`
      )
      .then((res) => {
        setAlljobongoing(res?.data?.success?.data);
      });

    axios
      .get(
        `${API_HOST}/jobPost/onGoingWork?category=${setSelectedCategory}&pageSize=9&pageNumber=${
          page1 + 1
        }`
      )
      .then((res) => {
        if (res?.data?.success?.data?.length !== 0) {
          settotalpages1(page1 + 1);
        } else {
          settotalpages1(page1);
        }
      });
  };
  const searchnewworkdone = (setSelectedCategory) => {
    axios
      .get(
        `${API_HOST}/jobPost/completedWork?category=${setSelectedCategory}&pageSize=9&pageNumber=${page3}`
      )
      .then((res) => {
        setAlljobondone(res?.data?.success?.data);
      });

    axios
      .get(
        `${API_HOST}/jobPost/completedWork?category=${setSelectedCategory}&pageSize=9&pageNumber=${
          page3 + 1
        }`
      )
      .then((res) => {
        if (res?.data?.success?.data?.length !== 0) {
          settotalpages3(page3 + 1);
        } else {
          settotalpages3(page3);
        }
      });
  };

  const [alljobposted, setAlljobposted] = useState([]);
  const [alljobingoing, setAlljobongoing] = useState([]);
  const [alljobindone, setAlljobondone] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/jobPost/newlyWorkPosted?category=${setSelectedCategory}&pageSize=9&pageNumber=${page}`
      )
      .then((res) => {
        setAlljobposted(res?.data?.success?.data);
      });
    axios
      .get(
        `${API_HOST}/jobPost/newlyWorkPosted?category=${setSelectedCategory}&pageSize=9&pageNumber=${
          page + 1
        }`
      )
      .then((res) => {
        if (res?.data?.success?.data?.length !== 0) {
          settotalpages(page + 1);
        }
      });
  }, [page]);

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/jobPost/onGoingWork?category=${setSelectedCategory}&pageSize=9&pageNumber=${page1}`
      )
      .then((res) => {
        setAlljobongoing(res?.data?.success?.data);
      });
    axios
      .get(
        `${API_HOST}/jobPost/onGoingWork?category=${setSelectedCategory}&pageSize=9&pageNumber=${
          page1 + 1
        }`
      )
      .then((res) => {
        if (res?.data?.success?.data?.length !== 0) {
          settotalpages1(page1 + 1);
        }
      });
  }, [page1]);

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/jobPost/completedWork?category=${setSelectedCategory}&pageSize=9&pageNumber=${page3}`
      )
      .then((res) => {
        setAlljobondone(res?.data?.success?.data);
      });
    axios
      .get(
        `${API_HOST}/jobPost/completedWork?category=${setSelectedCategory}&pageSize=9&pageNumber=${
          page3 + 1
        }`
      )
      .then((res) => {
        if (res?.data?.success?.data?.length !== 0) {
          settotalpages3(page3 + 1);
        }
      });
  }, [page3]);

  console.log("alljobingoing", alljobingoing);

  const [arrayoffilters, setArrayoffilters] = useState([
    {
      filternameName: "Categories",
      filters: [
        "Digital Marketing",
        "Data Analystics",
        "Graphic Design",
        "Communication",
      ],
    },
    {
      filternameName: "Posted on",
      filters: ["7 days ago", "15 days ago", "30 days ago", "45 + Days ago"],
    },
    {
      filternameName: "Bidding Amount",
      filters: ["$10-$100", "$100-$500", "$500-$1000", "$1000+"],
    },
    {
      filternameName: "Duration",
      filters: ["1 Month", "2 Month", "3 Month", "4 Month"],
    },
  ]);

  const [arrayoffilterselected, setarrayoffilterselected] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [previosfilter, setPreviosfilter] = useState([]);
  const [previosfilter1, setPreviosfilter1] = useState([]);

  const [arrayoffiltersxx, setArrayoffiltersxx] = useState([
    {
      filternameName: "Categories",
      filters: [
        "Digital Marketing",
        "Data Analystics",
        "Graphic Design",
        "Communication",
      ],
    },
    {
      filternameName: "Location",
      filters: ["Onsite", "Remote"],
    },
    {
      filternameName: "Bidding Amount",
      filters: ["$10-$100", "$100-$500", "$500-$1000", "$1000+"],
    },
    {
      filternameName: "Duration",
      filters: ["1 Month", "2 Month", "3 Month", "4 Month"],
    },
  ]);

  const [arrayoffilterselectedxx, setarrayoffilterselectedxx] = useState([]);
  const [openxx, setOpenxx] = React.useState(false);
  const handleOpenxx = () => setOpenxx(true);
  const handleClosexx = () => setOpenxx(false);
  const [previosfilterxx, setPreviosfilterxx] = useState([]);
  const [previosfilter1xx, setPreviosfilter1xx] = useState([]);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const handledeleteBlog = () => {
    // axios
    //   .post(`${API_HOST}/callToActionTitle/removeTitle`, {
    //     titleId: data?.titleId,
    //   })
    //   .then(() => {
    //     axios.get(`${API_HOST}/callToActionTitle/viewTitle`).then((res) => {
    //       setAllCtitle(res?.data?.success?.data);
    //       handleClose3()
    //     });
    //   });
  };

  return (
    <div className="BrowseWorkMain-cntainer">
      <div className="searchboxcontainer">
        <div
          style={{ alignItems: "center", justifyContent: "flex-start" }}
          className="searchboxcontainer"
        >
          <div className="serachjobbox">
            <span>
              <SearchSharp style={{ fontSize: "1.7vw" }} />
            </span>
            <input
              type="text"
              placeholder="search Job"
              value={setSelectedCategory}
              onChange={(e) => {
                setSetSelectedCategory(e.target.value);
              }}
            />
            <button
              style={{ width: "11vw", height: "100%" }}
              className="hb-button"
            >
              Search
            </button>
          </div>
          <div>
            <div
              style={{
                flexWrap: "wrap",
                marginTop: "0vw",
                marginBottom: "0vw",
                paddingBottom: "0vw",
                paddingTop: "0vw",
              }}
              className="filterboxflex"
            >
              <div
                onClick={() => {
                  handleOpen();
                  setPreviosfilter([...arrayoffilterselected]);
                }}
                className="filtericonbox"
              >
                <img src={imgfilter} alt="" />
              </div>

              {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div style={{ maxHeight: "80vh", overflow: "scroll" }}>
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
                    <div
                      style={{ left: "0vw", width: "98%", marginLeft: "0%" }}
                      className="loginfield"
                      onClick={handleClickx2}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Search Category "
                        variant="outlined"
                        disabled
                        value={degreeset}
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
                          console.log(e.target.value);
                        }}
                      />
                      <span style={{ width: "0.1vw" }}>
                        <KeyboardArrowDownOutlined
                          style={{
                            fontSize: "1.5vw",
                            position: "relative",
                            right: "2vw",
                            top: "1vw",
                          }}
                        />
                      </span>
                    </div>

                    <Popover
                      id={idx2}
                      open={openx2}
                      anchorEl={anchorElx2}
                      onClose={handleClosex2}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <div
                        style={{
                          maxHeight: "18vw",
                          overflow: "scroll",
                          width: "44vw",
                        }}
                      >
                        <Typography
                          sx={{
                            p: 1,
                            pl: 1,
                            ml: 1,
                            pr: 0,
                            width: "43vw",
                            position: "fixed",
                            background: "white",
                            zIndex: "10",
                          }}
                        >
                          <input
                            placeholder="search here .."
                            onChange={(e) => {
                              setSearchCategorysearch(e.target.value);
                            }}
                            style={{
                              width: "97%",
                              border: "1.5px solid #00000050",
                              outline: "none",
                              height: "2.5",
                              borderRadius: "0.21vw",
                            }}
                          />
                        </Typography>
                        <Typography
                          sx={{
                            p: 2.5,
                            pl: 1,
                            ml: 1,
                            width: "100%",
                            cursor: "pointer",
                          }}
                        ></Typography>

                        {arrayoflongdegree?.length > 0 &&
                          arrayoflongdegree.map((data, index) => {
                            return (
                              <Typography
                                sx={{
                                  p: 0.51,
                                  pl: 1,
                                  ml: 1,
                                  width: "100%",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  setDegreeset(data?.category);
                                  handleClosex2();
                                }}
                              >
                                {data?.category}
                              </Typography>
                            );
                          })}
                      </div>
                    </Popover>

                  <div className="jobpodtedfieldtitile">Joined on</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "98%",
                      }}
                    >
                      <div style={{ width: "50%" }}>
                        <div
                          style={{ fontWeight: "400" }}
                          className="jobpodtedfieldtitile"
                        >
                          From{" "}
                        </div>
                        <div className="jobpostfieldinputbox">
                          <input
                            style={{ width: "100%" }}
                            type="date"
                            className="input-homejobformdate"
                            name=""
                            id=""
                            value={datestart1}
                            max={disablePastDate()}
                            min={"2020-01-01"}
                            maxlength="4"
                            onChange={(e) => {
                              setDatestart1(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div style={{ width: "50%" }}>
                        <div
                          style={{ fontWeight: "400" }}
                          className="jobpodtedfieldtitile"
                        >
                          To
                        </div>
                        <div className="jobpostfieldinputbox">
                          <input
                            style={{ width: "100%" }}
                            type="date"
                            className="input-homejobformdate"
                            name=""
                            id=""
                            value={datestart1x}
                            max={disablePastDate()}
                            min={"2020-01-01"}
                            maxlength="4"
                            onChange={(e) => {
                              setDatestart1x(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>

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
                          setTogglrbar1(togglrbar);
                          handleClose();
                        }}
                      >
                        Submit
                      </div>
                    </div>
                  </div>
                </Box>
              </Modal>
  */}
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
        </div>{" "}
      </div>

      <div
        style={{ position: "relative", right: "1vw", top: "1vw" }}
        className="profileworkhistruytoggleer"
      >
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
          }}
          onClick={() => {
            setWorkhistorytoggle(1);
          }}
        >
          New Work Created
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
          }}
          onClick={() => {
            setWorkhistorytoggle(2);
          }}
        >
          Ongoing Work
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
          }}
          onClick={() => {
            setWorkhistorytoggle(3);
          }}
        >
          Completed work
        </div>

        <div
          style={{
            color: "#064C87",
            borderBottom: "0.3vw solid #064C87",
            width: "12vw",
            position: "relative",
            right:
              workhistorytoggle === 1
                ? "41vw"
                : workhistorytoggle === 2
                ? "26.5vw"
                : "13vw",
            bottom: "0.3vw",
            transitionDuration: "1s",
            borderRadius: "0.2vw",
          }}
        ></div>
      </div>

      {workhistorytoggle === 1 ? (
        <>
          <div className="catalogcontainerdashbaord">
            <div
              style={{
                width: "100%",
                background: "white",
                padding: "2vw 1vw",
                margin: "1vw 0vw",
              }}
            >
              {" "}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div className="taggreen">Mobile Application</div>
                  <div style={{ marginLeft: "1vw" }} className="taggreen1">
                    Mobile Application
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <img
                      src={img2}
                      alt=""
                      style={{ fontSize: "2vw", marginRight: "2vw" }}
                    />{" "}
                  </div>
                  <div>
                    <img
                      src={img1}
                      alt=""
                      style={{ fontSize: "2vw", marginRight: "2vw" }}
                    />{" "}
                  </div>
                  <div>
                    <img
                      src={img3}
                      alt=""
                      style={{ fontSize: "2vw", marginRight: "2vw" }}
                    />{" "}
                  </div>
                </div>
              </div>{" "}
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "1.3vw",
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop: "1vw",
                  marginLeft: "1vw",
                }}
              >
                Senior Product Designer (#34793)
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>
                  <LocationOnOutlinedIcon
                    style={{
                      fontSize: "1.5vw",
                      fontWeight: "400",
                      margin: "0.5vw 1vw",
                    }}
                  />
                </span>
                <span style={{ fontSize: "1.1vw", fontWeight: "500" }}>
                  {"Remote Kanpur"}
                </span>
                <span
                  style={{
                    fontSize: "0.8vw",
                    fontWeight: "400",
                    margin: "0 1vw",
                  }}
                >
                  Posted on Sep 12 2022
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  margin: "0.8vw 1vw",
                  fontSize: "0.85vw",
                  marginBottom: "0.0vw",
                  marginRight: "2vw",
                }}
                className="dashboardtitilemainparabid"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <div style={{ margin: "1vw" }} className="activejobpistbudgetbox">
                <div>
                  Budget <br /> $100 - $ 200
                </div>
                <div style={{ marginRight: "1vw" }}>
                  Duration <br /> 3 month
                </div>
                <div style={{ marginRight: "1vw" }}>
                  Status <br /> Upcoming
                </div>
                <div style={{ marginRight: "1vw" }}>
                  {" "}
                  Expired on <br /> 02 days
                </div>
                <div style={{ marginRight: "1vw" }}></div>
                <div style={{ marginRight: "1vw" }}></div>
              </div>
              <div className="flexlastactiveb">
                <div style={{ color: "#00000090" }}>posted By 44 Resources</div>
                <div
                  style={{ color: "#00000090", cursor: "pointer" }}
                  onClick={() =>
                    navigate(
                      `/dashbaord/jobdetail/eb2d6c1b-3a38-4018-99c2-169668fca15e`
                    )
                  }
                >
                  View More
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                background: "white",
                padding: "2vw 1vw",
                margin: "1vw 0vw",
              }}
            >
              {" "}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div className="taggreen">Mobile Application</div>
                  <div style={{ marginLeft: "1vw" }} className="taggreen1">
                    Mobile Application
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <img
                      src={img2}
                      alt=""
                      style={{ fontSize: "2vw", marginRight: "2vw" }}
                    />{" "}
                  </div>
                  <div>
                    <img
                      onClick={() => {
                        handleOpen3();
                      }}
                      src={img1}
                      alt=""
                      style={{ fontSize: "2vw", marginRight: "2vw" }}
                    />{" "}
                  </div>
                  <div>
                    <img
                      src={img3}
                      onClick={() => {
                        handleOpen2();
                      }}
                      alt=""
                      style={{ fontSize: "2vw", marginRight: "2vw" }}
                    />{" "}
                  </div>
                </div>
              </div>{" "}
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "1.3vw",
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop: "1vw",
                  marginLeft: "1vw",
                }}
              >
                Senior Product Designer (#34793)
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>
                  <LocationOnOutlinedIcon
                    style={{
                      fontSize: "1.5vw",
                      fontWeight: "400",
                      margin: "0.5vw 1vw",
                    }}
                  />
                </span>
                <span style={{ fontSize: "1.1vw", fontWeight: "500" }}>
                  {"Remote Kanpur"}
                </span>
                <span
                  style={{
                    fontSize: "0.8vw",
                    fontWeight: "400",
                    margin: "0 1vw",
                  }}
                >
                  Posted on Sep 12 2022
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  margin: "0.8vw 1vw",
                  fontSize: "0.85vw",
                  marginBottom: "0.0vw",
                  marginRight: "2vw",
                }}
                className="dashboardtitilemainparabid"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <div style={{ margin: "1vw" }} className="activejobpistbudgetbox">
                <div>
                  Budget <br /> $100 - $ 200
                </div>
                <div style={{ marginRight: "1vw" }}>
                  Duration <br /> 3 month
                </div>
                <div style={{ marginRight: "1vw" }}>
                  Status <br /> Upcoming
                </div>
                <div style={{ marginRight: "1vw" }}>
                  {" "}
                  Expired on <br /> 02 days
                </div>
                <div style={{ marginRight: "1vw" }}></div>
                <div style={{ marginRight: "1vw" }}></div>
              </div>
              <div className="flexlastactiveb">
                <div style={{ color: "#00000090" }}>posted By 44 Resources</div>
                <div style={{ color: "#00000090" }}>View More</div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                background: "white",
                padding: "2vw 1vw",
                margin: "1vw 0vw",
              }}
            >
              {" "}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div className="taggreen">Mobile Application</div>
                  <div style={{ marginLeft: "1vw" }} className="taggreen1">
                    Mobile Application
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <img
                      src={img2}
                      alt=""
                      style={{ fontSize: "2vw", marginRight: "2vw" }}
                    />{" "}
                  </div>
                  <div>
                    <img
                      src={img1}
                      alt=""
                      style={{ fontSize: "2vw", marginRight: "2vw" }}
                    />{" "}
                  </div>
                  <div>
                    <img
                      src={img3}
                      alt=""
                      style={{ fontSize: "2vw", marginRight: "2vw" }}
                    />{" "}
                  </div>
                </div>
              </div>{" "}
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "1.3vw",
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop: "1vw",
                  marginLeft: "1vw",
                }}
              >
                Senior Product Designer (#34793)
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>
                  <LocationOnOutlinedIcon
                    style={{
                      fontSize: "1.5vw",
                      fontWeight: "400",
                      margin: "0.5vw 1vw",
                    }}
                  />
                </span>
                <span style={{ fontSize: "1.1vw", fontWeight: "500" }}>
                  {"Remote Kanpur"}
                </span>
                <span
                  style={{
                    fontSize: "0.8vw",
                    fontWeight: "400",
                    margin: "0 1vw",
                  }}
                >
                  Posted on Sep 12 2022
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  margin: "0.8vw 1vw",
                  fontSize: "0.85vw",
                  marginBottom: "0.0vw",
                  marginRight: "2vw",
                }}
                className="dashboardtitilemainparabid"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <div style={{ margin: "1vw" }} className="activejobpistbudgetbox">
                <div>
                  Budget <br /> $100 - $ 200
                </div>
                <div style={{ marginRight: "1vw" }}>
                  Duration <br /> 3 month
                </div>
                <div style={{ marginRight: "1vw" }}>
                  Status <br /> Upcoming
                </div>
                <div style={{ marginRight: "1vw" }}>
                  {" "}
                  Expired on <br /> 02 days
                </div>
                <div style={{ marginRight: "1vw" }}></div>
                <div style={{ marginRight: "1vw" }}></div>
              </div>
              <div className="flexlastactiveb">
                <div style={{ color: "#00000090" }}>posted By 44 Resources</div>
                <div style={{ color: "#00000090" }}>View More</div>
              </div>
            </div>
          </div>
          {totalpages !== 1 ? (
            <div style={{ width: "25vw" }} className="paginationbox">
              <div>
                <ArrowBackIosIcon style={{ fontSize: "1.5vw" }} />
              </div>

              <div
                hidden={page - 4 > 0 ? false : true}
                onClick={() => setPage(page - 4)}
              >
                {page - 4}
              </div>
              <div
                hidden={page - 3 > 0 ? false : true}
                onClick={() => setPage(page - 3)}
              >
                {page - 3}
              </div>
              <div
                hidden={page - 2 > 0 ? false : true}
                onClick={() => setPage(page - 2)}
              >
                {page - 2}
              </div>
              <div
                hidden={page - 1 > 0 ? false : true}
                onClick={() => setPage(page - 1)}
              >
                {page - 1}
              </div>
              <div style={{ color: "#2A6599" }}>{page}</div>
              <div
                hidden={page + 1 > totalpages ? true : false}
                onClick={() => setPage(page + 1)}
              >
                {page + 1}
              </div>

              <div>
                <ArrowForwardIosIcon style={{ fontSize: "1.5vw" }} />
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
      {workhistorytoggle === 2 ? (
        <>
          <div className="catalogcontainerdashbaord">
            <div
              style={{
                width: "100%",
                background: "white",
                padding: "2vw 1vw",
                margin: "1vw 0vw",
              }}
            >
              {" "}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div className="taggreen">Mobile Application</div>
                  <div style={{ marginLeft: "1vw" }} className="taggreen1">
                    Mobile Application
                  </div>
                </div>
                <div
                  style={{ margin: "0", height: "2.2vw" }}
                  className="digitalwallate"
                >
                  <span style={{ padding: "0.6vw 1vw" }}>Chat Us</span>
                </div>
              </div>{" "}
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "1.3vw",
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop: "1vw",
                  marginLeft: "1vw",
                }}
              >
                Senior Product Designer (#34793)
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>
                  <LocationOnOutlinedIcon
                    style={{
                      fontSize: "1.5vw",
                      fontWeight: "400",
                      margin: "0vw 1vw",
                    }}
                  />
                </span>
                <span style={{ fontSize: "1.1vw", fontWeight: "500" }}>
                  {"Remote Kanpur"}
                </span>
              </div>
              <div style={{ margin: "1vw" }} className="activejobpistbudgetbox">
                <div style={{ marginRight: "1vw" }}>
                  Free launcher <br /> Vasaanth David.H
                </div>
                <div>
                  Contract Value <br /> $1200
                </div>
                <div style={{ marginRight: "1vw" }}>
                  Duration <br /> 3 months
                </div>
                <div style={{ marginRight: "1vw" }}></div>
                <div style={{ marginRight: "1vw" }}></div>
                <div style={{ marginRight: "1vw" }}>Feb 12-Onwards</div>
              </div>
              <div
                style={{
                  width: "100%",
                  margin: "0.8vw 1vw",
                  fontSize: "0.85vw",
                  marginBottom: "0.0vw",
                  marginRight: "2vw",
                }}
                className="dashboardtitilemainparabid"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
            <div
              style={{
                width: "100%",
                background: "white",
                padding: "2vw 1vw",
                margin: "1vw 0vw",
              }}
            >
              {" "}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div className="taggreen">Mobile Application</div>
                  <div style={{ marginLeft: "1vw" }} className="taggreen1">
                    Mobile Application
                  </div>
                </div>
                <div
                  style={{ margin: "0", height: "2.2vw" }}
                  className="digitalwallate"
                >
                  <span style={{ padding: "0.6vw 1vw" }}>Chat Us</span>
                </div>
              </div>{" "}
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "1.3vw",
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop: "1vw",
                  marginLeft: "1vw",
                }}
                onClick={() =>
                  navigate(
                    `/dashbaord/contractJob/29835f5f-ce82-4026-9886-23501654078e`
                  )
                }
              >
                Senior Product Designer (#34793)
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>
                  <LocationOnOutlinedIcon
                    style={{
                      fontSize: "1.5vw",
                      fontWeight: "400",
                      margin: "0vw 1vw",
                    }}
                  />
                </span>
                <span style={{ fontSize: "1.1vw", fontWeight: "500" }}>
                  {"Remote Kanpur"}
                </span>
              </div>
              <div style={{ margin: "1vw" }} className="activejobpistbudgetbox">
                <div style={{ marginRight: "1vw" }}>
                  Free launcher <br /> Vasaanth David.H
                </div>
                <div>
                  Contract Value <br /> $1200
                </div>
                <div style={{ marginRight: "1vw" }}>
                  Duration <br /> 3 months
                </div>
                <div style={{ marginRight: "1vw" }}></div>
                <div style={{ marginRight: "1vw" }}></div>
                <div style={{ marginRight: "1vw" }}>Feb 12-Onwards</div>
              </div>
              <div
                style={{
                  width: "100%",
                  margin: "0.8vw 1vw",
                  fontSize: "0.85vw",
                  marginBottom: "0.0vw",
                  marginRight: "2vw",
                }}
                className="dashboardtitilemainparabid"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
            <div
              style={{
                width: "100%",
                background: "white",
                padding: "2vw 1vw",
                margin: "1vw 0vw",
              }}
            >
              {" "}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div className="taggreen">Mobile Application</div>
                  <div style={{ marginLeft: "1vw" }} className="taggreen1">
                    Mobile Application
                  </div>
                </div>
                <div
                  style={{ margin: "0", height: "2.2vw" }}
                  className="digitalwallate"
                >
                  <span style={{ padding: "0.6vw 1vw" }}>Chat Us</span>
                </div>
              </div>{" "}
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "1.3vw",
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop: "1vw",
                  marginLeft: "1vw",
                }}
              >
                Senior Product Designer (#34793)
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>
                  <LocationOnOutlinedIcon
                    style={{
                      fontSize: "1.5vw",
                      fontWeight: "400",
                      margin: "0vw 1vw",
                    }}
                  />
                </span>
                <span style={{ fontSize: "1.1vw", fontWeight: "500" }}>
                  {"Remote Kanpur"}
                </span>
              </div>
              <div style={{ margin: "1vw" }} className="activejobpistbudgetbox">
                <div style={{ marginRight: "1vw" }}>
                  Free launcher <br /> Vasaanth David.H
                </div>
                <div>
                  Contract Value <br /> $1200
                </div>
                <div style={{ marginRight: "1vw" }}>
                  Duration <br /> 3 months
                </div>
                <div style={{ marginRight: "1vw" }}></div>
                <div style={{ marginRight: "1vw" }}></div>
                <div style={{ marginRight: "1vw" }}>Feb 12-Onwards</div>
              </div>
              <div
                style={{
                  width: "100%",
                  margin: "0.8vw 1vw",
                  fontSize: "0.85vw",
                  marginBottom: "0.0vw",
                  marginRight: "2vw",
                }}
                className="dashboardtitilemainparabid"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </div>
          {totalpages !== 1 ? (
            <div style={{ width: "25vw" }} className="paginationbox">
              <div>
                <ArrowBackIosIcon style={{ fontSize: "1.5vw" }} />
              </div>

              <div
                hidden={page - 4 > 0 ? false : true}
                onClick={() => setPage(page - 4)}
              >
                {page - 4}
              </div>
              <div
                hidden={page - 3 > 0 ? false : true}
                onClick={() => setPage(page - 3)}
              >
                {page - 3}
              </div>
              <div
                hidden={page - 2 > 0 ? false : true}
                onClick={() => setPage(page - 2)}
              >
                {page - 2}
              </div>
              <div
                hidden={page - 1 > 0 ? false : true}
                onClick={() => setPage(page - 1)}
              >
                {page - 1}
              </div>
              <div style={{ color: "#2A6599" }}>{page}</div>
              <div
                hidden={page + 1 > totalpages ? true : false}
                onClick={() => setPage(page + 1)}
              >
                {page + 1}
              </div>

              <div>
                <ArrowForwardIosIcon style={{ fontSize: "1.5vw" }} />
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
      {workhistorytoggle === 3 ? (
        <>
          <div className="catalogcontainerdashbaord">
            <div
              style={{
                width: "100%",
                background: "white",
                padding: "2vw 1vw",
                margin: "1vw 0vw",
              }}
            >
              {" "}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div className="taggreen">Mobile Application</div>
                  <div style={{ marginLeft: "1vw" }} className="taggreen1">
                    Mobile Application
                  </div>
                </div>
                <div
                  style={{ margin: "0", height: "2.2vw" }}
                  className="digitalwallate"
                ></div>
              </div>{" "}
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "1.3vw",
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop: "1vw",
                  marginLeft: "1vw",
                }}
                onClick={() =>
                  navigate(
                    `/dashbaord/completedJob/eb2d6c1b-3a38-4018-99c2-169668fca15e`
                  )
                }
              >
                Senior Product Designer (#34793)
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "0.51vw 0",
                }}
              >
                <span>
                  <LocationOnOutlinedIcon
                    style={{
                      fontSize: "1.5vw",
                      fontWeight: "400",
                      margin: "0vw 1vw",
                    }}
                  />
                </span>
                <span style={{ fontSize: "1.1vw", fontWeight: "500" }}>
                  {"Remote Kanpur"}
                </span>
              </div>
              <div className="workhistryboxdate">
                {" "}
                <span
                  style={{
                    width: "10vw",
                    position: "relative",
                    bottom: "0.2vw",
                    marginLeft: "1vw",
                  }}
                >
                  <StarRatings
                    rating={4.5}
                    starRatedColor="#064C87"
                    starDimension="1.2vw  "
                    starSpacing="0.15vw"
                    numberOfStars={5}
                    name="rating"
                  />
                </span>{" "}
                Oct 4, 2020 - Nov 5, 2020
              </div>
              <div style={{ margin: "1vw" }} className="activejobpistbudgetbox">
                <div style={{ marginRight: "1vw" }}>
                  Free launcher <br /> Vasaanth David.H
                </div>
                <div>
                  Contract Value <br /> $1200
                </div>
                <div style={{ marginRight: "1vw" }}>
                  Duration <br /> 3 months
                </div>
                <div style={{ marginRight: "1vw" }}></div>
                <div style={{ marginRight: "1vw" }}></div>
                <div style={{ marginRight: "1vw" }}>Feb 12-Onwards</div>
              </div>
              <div
                style={{
                  width: "100%",
                  margin: "0.8vw 1vw",
                  fontSize: "0.85vw",
                  marginBottom: "0.0vw",
                  marginRight: "2vw",
                }}
                className="dashboardtitilemainparabid"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
            <div
              style={{
                width: "100%",
                background: "white",
                padding: "2vw 1vw",
                margin: "1vw 0vw",
              }}
            >
              {" "}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div className="taggreen">Mobile Application</div>
                  <div style={{ marginLeft: "1vw" }} className="taggreen1">
                    Mobile Application
                  </div>
                </div>
                <div
                  style={{ margin: "0", height: "2.2vw" }}
                  className="digitalwallate"
                ></div>
              </div>{" "}
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "1.3vw",
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop: "1vw",
                  marginLeft: "1vw",
                }}
              >
                Senior Product Designer (#34793)
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "0.51vw 0",
                }}
              >
                <span>
                  <LocationOnOutlinedIcon
                    style={{
                      fontSize: "1.5vw",
                      fontWeight: "400",
                      margin: "0vw 1vw",
                    }}
                  />
                </span>
                <span style={{ fontSize: "1.1vw", fontWeight: "500" }}>
                  {"Remote Kanpur"}
                </span>
              </div>
              <div className="workhistryboxdate">
                {" "}
                <span
                  style={{
                    width: "10vw",
                    position: "relative",
                    bottom: "0.2vw",
                    marginLeft: "1vw",
                  }}
                >
                  <StarRatings
                    rating={4.5}
                    starRatedColor="#064C87"
                    starDimension="1.2vw  "
                    starSpacing="0.15vw"
                    numberOfStars={5}
                    name="rating"
                  />
                </span>{" "}
                Oct 4, 2020 - Nov 5, 2020
              </div>
              <div style={{ margin: "1vw" }} className="activejobpistbudgetbox">
                <div style={{ marginRight: "1vw" }}>
                  Free launcher <br /> Vasaanth David.H
                </div>
                <div>
                  Contract Value <br /> $1200
                </div>
                <div style={{ marginRight: "1vw" }}>
                  Duration <br /> 3 months
                </div>
                <div style={{ marginRight: "1vw" }}></div>
                <div style={{ marginRight: "1vw" }}></div>
                <div style={{ marginRight: "1vw" }}>Feb 12-Onwards</div>
              </div>
              <div
                style={{
                  width: "100%",
                  margin: "0.8vw 1vw",
                  fontSize: "0.85vw",
                  marginBottom: "0.0vw",
                  marginRight: "2vw",
                }}
                className="dashboardtitilemainparabid"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
            <div
              style={{
                width: "100%",
                background: "white",
                padding: "2vw 1vw",
                margin: "1vw 0vw",
              }}
            >
              {" "}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div className="taggreen">Mobile Application</div>
                  <div style={{ marginLeft: "1vw" }} className="taggreen1">
                    Mobile Application
                  </div>
                </div>
                <div
                  style={{ margin: "0", height: "2.2vw" }}
                  className="digitalwallate"
                ></div>
              </div>{" "}
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "1.3vw",
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop: "1vw",
                  marginLeft: "1vw",
                }}
              >
                Senior Product Designer (#34793)
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "0.51vw 0",
                }}
              >
                <span>
                  <LocationOnOutlinedIcon
                    style={{
                      fontSize: "1.5vw",
                      fontWeight: "400",
                      margin: "0vw 1vw",
                    }}
                  />
                </span>
                <span style={{ fontSize: "1.1vw", fontWeight: "500" }}>
                  {"Remote Kanpur"}
                </span>
              </div>
              <div className="workhistryboxdate">
                {" "}
                <span
                  style={{
                    width: "10vw",
                    position: "relative",
                    bottom: "0.2vw",
                    marginLeft: "1vw",
                  }}
                >
                  <StarRatings
                    rating={4.5}
                    starRatedColor="#064C87"
                    starDimension="1.2vw  "
                    starSpacing="0.15vw"
                    numberOfStars={5}
                    name="rating"
                  />
                </span>{" "}
                Oct 4, 2020 - Nov 5, 2020
              </div>
              <div style={{ margin: "1vw" }} className="activejobpistbudgetbox">
                <div style={{ marginRight: "1vw" }}>
                  Free launcher <br /> Vasaanth David.H
                </div>
                <div>
                  Contract Value <br /> $1200
                </div>
                <div style={{ marginRight: "1vw" }}>
                  Duration <br /> 3 months
                </div>
                <div style={{ marginRight: "1vw" }}></div>
                <div style={{ marginRight: "1vw" }}></div>
                <div style={{ marginRight: "1vw" }}>Feb 12-Onwards</div>
              </div>
              <div
                style={{
                  width: "100%",
                  margin: "0.8vw 1vw",
                  fontSize: "0.85vw",
                  marginBottom: "0.0vw",
                  marginRight: "2vw",
                }}
                className="dashboardtitilemainparabid"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </div>

          {totalpages3 !== 1 ? (
            <div style={{ width: "25vw" }} className="paginationbox">
              <div>
                <ArrowBackIosIcon style={{ fontSize: "1.5vw" }} />
              </div>

              <div
                hidden={page3 - 4 > 0 ? false : true}
                onClick={() => setPage3(page3 - 4)}
              >
                {page3 - 4}
              </div>
              <div
                hidden={page3 - 3 > 0 ? false : true}
                onClick={() => setPage3(page3 - 3)}
              >
                {page3 - 3}
              </div>
              <div
                hidden={page3 - 2 > 0 ? false : true}
                onClick={() => setPage3(page3 - 2)}
              >
                {page3 - 2}
              </div>
              <div
                hidden={page3 - 1 > 0 ? false : true}
                onClick={() => setPage3(page3 - 1)}
              >
                {page3 - 1}
              </div>
              <div style={{ color: "#2A6599" }}>{page3}</div>
              <div
                hidden={page3 + 1 > totalpages3 ? true : false}
                onClick={() => setPage3(page3 + 1)}
              >
                {page3 + 1}
              </div>

              <div>
                <ArrowForwardIosIcon style={{ fontSize: "1.5vw" }} />
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
