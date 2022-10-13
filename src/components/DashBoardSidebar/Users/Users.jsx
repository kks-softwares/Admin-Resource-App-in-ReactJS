import React, { useEffect, useState } from "react";

import "./appliedjob.css";
import { SearchSharp } from "@mui/icons-material";
import Box from "@mui/material/Box";
import "./skill.css";
import "./blog.css";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import API_HOST from "../../../env";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import imgfilter from "../../../assets/walletimage/Iconly-Light-Color-Filter.svg";
import Modal from "@mui/material/Modal";
import Skillpopup from "./Skillpopup";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";


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
export default function Users() {
  const [openx, setOpenx] = React.useState(false);
  const [anchorElx, setAnchorElx] = React.useState(null);
  const canBeOpen = openx && Boolean(anchorElx);
  const id = canBeOpen ? "transition-popper" : undefined;

  const [page, setPage] = useState(1);
  const [totalpages, settotalpages] = useState(1);
  const [setSelectedCategory, setSetSelectedCategory] = useState("");

  const [arrayoffilterselected, setarrayoffilterselected] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [previosfilter, setPreviosfilter] = useState([]);
  const [allusers, setAllusers] = useState([]);
  const [searchskill, setSearchskill] = useState("");

  const setdateadd = (datestart3x) => {
    const today = new Date(datestart3x);
    console.log(today);
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const classes = useStyles();
  const [arrayoflongdegreex, setArrayoflongdegreex] = useState();

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/theSkill/viewSkill?pageSize=50&pageNumber=1&skill=${searchskill}`
      )
      .then((res) => {
        setArrayoflongdegreex(res?.data?.success?.data);
      });
  }, [searchskill]);

  const [anchorElx2, setAnchorElx2] = React.useState(null);
  const handleClickx2 = (event) => {
    setAnchorElx2(event.currentTarget);
  };
  const handleClosex2 = () => {
    setAnchorElx2(null);
  };
  const openx2 = Boolean(anchorElx2);
  const idx2 = openx2 ? "simple-popover" : undefined;
  const [anchorElx3, setAnchorElx3] = React.useState(null);
  const handleClickx3 = (event) => {
    setAnchorElx3(event.currentTarget);
  };
  const handleClosex3 = () => {
    setAnchorElx3(null);
  };
  const openx3 = Boolean(anchorElx3);
  const idx3 = openx3 ? "simple-popover" : undefined;
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

  const [prevCateid, setprevCateid] = useState("");
  const [prevskillid, setprevskillid] = useState("");

  const [Cateid, setCateid] = useState("");
  const [skillid, setskillid] = useState("");

  const [degreeset, setDegreeset] = useState("");
  const [studyset, setstudyset] = useState("");
  const [datestart1, setDatestart1] = useState();
  const [datestart1x, setDatestart1x] = useState();

  const [prevdatestart1, setprevDatestart1] = useState();
  const [prevdatestart1x, setprevDatestart1x] = useState();

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  useEffect(() => {
    if (datestart1 && datestart1x) {
      const date = setdateadd(datestart1x);
      axios
        .get(
          `${API_HOST}/users/viewUser?fullName=${setSelectedCategory}&pageNumber=${page}&pageSize=10&category=${Cateid}&skills=${skillid}&from=${datestart1}&to=${date}`
        )
        .then((res) => {
          setAllusers(res?.data?.success?.data);
          window.scrollTo(0, 0, { behavior: "smooth" });
        });
      axios
        .get(
          `${API_HOST}/users/viewUser?fullName=${setSelectedCategory}&pageNumber=${
            page + 1
          }&pageSize=10&category=${Cateid}&skills=${skillid}&from=${datestart1}&to=${date}`
        )
        .then((res) => {
          if (res?.data?.success?.data?.length > 0) {
            settotalpages(page + 1);
          } else {
            settotalpages(page);
          }
        });
    } else {
      axios
        .get(
          `${API_HOST}/users/viewUser?fullName=${setSelectedCategory}&pageNumber=${page}&pageSize=10&category=${Cateid}&skills=${skillid}`
        )
        .then((res) => {
          setAllusers(res?.data?.success?.data);
          window.scrollTo(0, 0, { behavior: "smooth" });
        });
      axios
        .get(
          `${API_HOST}/users/viewUser?fullName=${setSelectedCategory}&pageNumber=${
            page + 1
          }&pageSize=10&category=${Cateid}&skills=${skillid}`
        )
        .then((res) => {
          if (res?.data?.success?.data?.length > 0) {
            settotalpages(page + 1);
          } else {
            settotalpages(page);
          }
        });
    }
  }, [page, setSelectedCategory, Cateid, skillid, datestart1, datestart1x]);

  const [linkusers, setLinkusers] = useState()
  useEffect(() => {
    axios.get(`${API_HOST}/users/exportUser`).then((res) => {
      setLinkusers(res?.data?.success?.data?.Location) 
    });
  }, []);

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
            placeholder="search Users"
            value={setSelectedCategory}
            onChange={(e) => {
              setSetSelectedCategory(e.target.value);
            }}
          />
         
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

                  <div
                    style={{ left: "0vw", width: "98%", marginLeft: "0%" }}
                    className="loginfield"
                    onClick={handleClickx3}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Search Skill Set"
                      variant="outlined"
                      disabled
                      value={studyset}
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
                    id={idx3}
                    open={openx3}
                    anchorEl={anchorElx3}
                    onClose={handleClosex3}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <div
                      style={{
                        maxHeight: "15vw",
                        overflow: "scroll",
                        width: "44vw",
                      }}
                    >
                      <Typography
                        sx={{
                          p: 1,
                          pl: 1,
                          ml: 1,
                          width: "43vw",
                          position: "fixed",
                          background: "white",
                          zIndex: "10",
                        }}
                      >
                        <input
                          onChange={(e) => {}}
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

                      {arrayoflongdegreex?.length > 0 &&
                        arrayoflongdegreex?.map((data, index) => {
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
                                setstudyset(data?.skill);
                                setprevskillid(data?._id);
                                handleClosex3();
                              }}
                            >
                              {data?.skill}
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
                        setskillid(prevskillid);
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

            {arrayoffilterselected?.length > 0 &&
              arrayoffilterselected?.map((filtername) => {
                return <div className="filtericonboxname">{filtername}</div>;
              })}

            <div
              onClick={() => {
                setprevCateid("");
                setprevDatestart1("");
                setprevDatestart1x("");
                setprevskillid("");
                setstudyset("");
                setDegreeset("");
                setCateid("");
                setskillid("");
                setDatestart1("");
                setDatestart1x("");
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
          width: "95%",
        }}
      >
        <div
          style={{ position: "relative", right: "1vw", marginBottom: "1vw" }}
          className="profileworkhistruytoggleer"
        >
          <div
            className="profileworkhistruytoggleervalue"
            style={{
              textAlign: "center",
              width: "8vw",
            }}
          >
            All Users
          </div>

          <div
            style={{
              color: "#064C87",
              borderBottom: "0.3vw solid #064C87",
              width: "9vw",
              position: "relative",
              right: "9.5vw",
              bottom: "0.0vw",
              transitionDuration: "1s",
              borderRadius: "0.2vw",
            }}
          ></div>
        </div>
        <div
          style={{
            width: "8vw",
            height: "3vw",
            padding: "0.51vw",
            fontSize: "1vw",
            background: "#286497",
            color: "white",
            fontWeight: "500",
            borderRadius: "0.3vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <a href={linkusers} download style={{color:"white"}}> <span style={{color:"white"}}> Export
              </span></a> 
        </div>
      </div>
    
      <div>
        <div
          style={{ margin: "0vw 1vw", padding: "0vw 1vw" }}
          className="navoftableblogs"
        >
          <div style={{ width: "6vw" }}>Id</div>
          <div style={{ width: "9vw" }}> </div>
          <div style={{ width: "15vw" }}>Name</div>
          <div style={{ width: "12vw" }}>category</div>
          <div style={{ width: "12vw" }}>Skill Set</div>
          <div style={{ width: "12vw" }}></div>
          <div style={{ width: "10vw" }}>Joined on</div>
          <div style={{ width: "6vw" }}></div>
        </div>
        {allusers?.length > 0 &&
          allusers?.map((data, index) => {
            return <Skillpopup data={data} index={index} page={page} />;
          })}

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
    </div>
  );
}
