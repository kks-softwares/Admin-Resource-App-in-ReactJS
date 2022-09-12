import React, { useEffect, useState } from "react";
import { SearchSharp } from "@mui/icons-material";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import API_HOST from "../../../env";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import imgfilter from "../../../assets/walletimage/Iconly-Light-Color-Filter.svg";
import Modal from "@mui/material/Modal";
import img1 from "../../../assets/Jobs/Iconly-Light-Delete.svg";
import Listofjobbox from "./Listofjobbox";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
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
export default function Jobs() {
  const classes = useStyles();
  const [degreeset, setDegreeset] = useState("");
  const [arrayoflongdegree, setArrayoflongdegree] = useState();
  const [searchCategorysearch, setSearchCategorysearch] = useState("");
  useEffect(() => {
    axios
      .get(
        `${API_HOST}/theCategory/viewCategory?pageSize=50&pageNumber=1&category=${searchCategorysearch}`
      )
      .then((res) => {
        setArrayoflongdegree(res?.data?.success?.data);
      });
  }, [searchCategorysearch]);
  const [Cateid, setCateid] = useState("");
  const [prevCateid, setprevCateid] = useState("");

  const [selectedbiddingvalue, setSelectedbiddingvalue] = useState(0);
  const [prevselectedbiddingvalue, setprevSelectedbiddingvalue] = useState(0);

  const [locationname, setLocationname] = useState([]);

  const [morelocation, setMorelocation] = useState(false);

  const [pageoflocation, setPageoflocation] = useState(1);

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/location/viewLocation?pageSize=8&pageNumber=${pageoflocation}`
      )
      .then((res) => {
        setLocationname([...locationname,...res?.data?.success?.data]);
      });
  }, [pageoflocation]);

  const [openx, setOpenx] = React.useState(false);
  const [anchorElx, setAnchorElx] = React.useState(null);
  const canBeOpen = openx && Boolean(anchorElx);
  const id = canBeOpen ? "transition-popper" : undefined;

  const [prevdatestart1, setprevDatestart1] = useState();
  const [prevdatestart1x, setprevDatestart1x] = useState();

  const [datestart1, setDatestart1] = useState();

  const [datestart3, setDatestart3] = useState();
  const [datestart1x, setDatestart1x] = useState();

  const [datestart3x, setDatestart3x] = useState();
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const setdateadd = (datestart3x) => {
    const today = new Date(datestart3x);
    console.log(today);
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const [anchorElx2, setAnchorElx2] = React.useState(null);
  const handleClickx2 = (event) => {
    setAnchorElx2(event.currentTarget);
  };
  const handleClosex2 = () => {
    setAnchorElx2(null);
  };
  const openx2 = Boolean(anchorElx2);
  const idx2 = openx2 ? "simple-popover" : undefined;

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const [page, setPage] = useState(1);
  const [totalpages, settotalpages] = useState(1);

  const [setSelectedCategory, setSetSelectedCategory] = useState("");

  const [arrayoffilterselected, setarrayoffilterselected] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [previosfilter, setPreviosfilter] = useState([]);
  const [allusers, setAllusers] = useState(["1", "2", "3", "4"]);

  const [recall, setRecall] = useState(false);
  const [selecteddelete, setSelecteddelete] = useState([]);

  useEffect(() => {}, [page, setSelectedCategory, recall]);

  const handleDelete = () => {
    const formdata = new FormData();
    formdata.append("removable", JSON.stringify(selecteddelete));
    console.log(JSON.stringify(selecteddelete));
    axios
      .post(`${API_HOST}/theSkill/removeSkill`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        setSelecteddelete([]);
        handleClose3();
        setRecall(!recall);
      });
  };

  return (
    <div className="BrowseWorkMain-cntainer">
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
            placeholder={"search Your Job "}
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
        <div>
          <div
            style={{
              flexWrap: "wrap",
              marginTop: "0vw",
              marginBottom: "0vw",
              paddingBottom: "0.5vw",
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
              <img src={imgfilter} alt="" /> Filter
            </div>

            <Modal
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
                      label="Select Category "
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
                                setprevCateid(data?._id);
                                handleClosex2();
                              }}
                            >
                              {data?.category}
                            </Typography>
                          );
                        })}
                    </div>
                  </Popover>
                  <div className="jobpodtedfieldtitile">
                    {" "}
                    Select Bidding Value{" "}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="filterslectboxofprice"
                      onClick={() => {
                        setprevSelectedbiddingvalue(10);
                      }}
                    >
                      $ 10+
                    </div>
                    <div
                      className="filterslectboxofprice"
                      onClick={() => {
                        setprevSelectedbiddingvalue(20);
                      }}
                    >
                      $ 20+
                    </div>
                    <div
                      className="filterslectboxofprice"
                      onClick={() => {
                        setprevSelectedbiddingvalue(30);
                      }}
                    >
                      $ 30+
                    </div>
                    <div
                      className="filterslectboxofprice"
                      onClick={() => {
                        setprevSelectedbiddingvalue(40);
                      }}
                    >
                      $ 40+
                    </div>
                    <div
                      className="filterslectboxofprice"
                      onClick={() => {
                        setprevSelectedbiddingvalue(50);
                      }}
                    >
                      $ 50+
                    </div>
                    <div
                      className="filterslectboxofprice"
                      onClick={() => {
                        setprevSelectedbiddingvalue(100);
                      }}
                    >
                      $ 100+
                    </div>
                    <div
                      className="filterslectboxofprice"
                      onClick={() => {
                        setprevSelectedbiddingvalue(100);
                      }}
                    >
                      $ 500+
                    </div>
                  </div>

                  <div className="jobpodtedfieldtitile"> Select Location </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    {locationname?.length > 0 &&
                      locationname?.map((data) => {
                        return (
                          <div
                            className="filterslectboxofprice"
                            onClick={() => {
                            //   setprevSelectedbiddingvalue(10);
                            }}
                          >
                            {data?.city}
                          </div>
                        );
                      })}
                    <div
                      style={{ background: "#064C87", color: "white" }}
                      className="filterslectboxofprice"
                      onClick={() => {
                        
                        setPageoflocation(pageoflocation+1)
                      }}
                    >
                      View More
                    </div>
                  </div>




                  <div className="jobpodtedfieldtitile">Created on</div>
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
                          value={prevdatestart1}
                          max={disablePastDate()}
                          min={"2020-01-01"}
                          maxlength="4"
                          onChange={(e) => {
                            setprevDatestart1(e.target.value);
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
                          value={prevdatestart1x}
                          max={disablePastDate()}
                          min={"2020-01-01"}
                          maxlength="4"
                          onChange={(e) => {
                            setprevDatestart1x(e.target.value);
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
                        setCateid(prevCateid);
                       
                        setDatestart1(prevdatestart1);
                        setDatestart1x(prevdatestart1x);
                        handleClose();
                      }}
                    >
                      Submit
                    </div>
                  </div>
                

                </div>
              </Box>
            </Modal>

            <div
              onClick={() => {
                setRecall(!recall);
              }}
              style={{ cursor: "pointer" }}
              className="filtericonboxname"
            >
              Clear all
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2vw",
        }}
      >
        <div style={{ width: "100%" }}>
          <div
            style={{ position: "relative", right: "1vw", top: "1vw" }}
            className="profileworkhistruytoggleer"
          >
            <div
              className="profileworkhistruytoggleervalue"
              style={{
                textAlign: "center",
                width: "12vw",
                color: "#064C87",
              }}
            >
              List of Created Work
            </div>

            <div
              style={{
                color: "#064C87",
                borderBottom: "0.3vw solid #064C87",
                width: "12vw",
                position: "relative",
                right: "13vw",
                bottom: "0.0vw",
                transitionDuration: "1s",
                borderRadius: "0.2vw",
              }}
            ></div>
          </div>
        </div>
        <div style={{ width: "5vw", height: "1vw" }}>
          <img
            onClick={() => {
              if (selecteddelete.length > 0) {
                handleOpen3();
              }
            }}
            style={{
              margin: "0vw 0.5vw",
              marginRight: "3vw",
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

        <Modal
          open={open3}
          onClose={handleClose3}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="profiletitleandmenunav">
              <div className="profiledetailstitle">Delete Jobs</div>
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
              Are you really want to delete these ' Job '
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
                onClick={() => {
                  handleDelete();
                }}
                style={{ cursor: "pointer" }}
                className="handlecirclieaboutsave"
              >
                Delete
              </div>
            </div>
          </Box>
        </Modal>
      </div>

      <div>
        <div className="catalogcontainerdashbaord">
          {allusers?.length > 0 &&
            allusers?.map((data, index) => {
              return (
                <Listofjobbox
                  data={data}
                  index={index}
                  page={page}
                  setSelecteddelete={setSelecteddelete}
                  selecteddelete={selecteddelete}
                  setRecall={setRecall}
                  recall={recall}
                />
              );
            })}
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
    </div>
  );
}
