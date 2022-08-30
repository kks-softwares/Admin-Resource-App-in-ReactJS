import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ApiSharp, SearchSharp } from "@mui/icons-material";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import API_HOST from "../../../env";
import imgfilter from "../../../assets/walletimage/Iconly-Light-Color-Filter.svg";
import Modal from "@mui/material/Modal";
import Skillpopup from "./Skillpopup";
import img1 from "../../../assets/Jobs/Iconly-Light-Delete.svg";
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
export default function Pricing() {
  const [openx, setOpenx] = React.useState(false);
  const [anchorElx, setAnchorElx] = React.useState(null);
  const canBeOpen = openx && Boolean(anchorElx);
  const id = canBeOpen ? "transition-popper" : undefined;

  const navigate = useNavigate();

  const [setSelectedCategory, setSetSelectedCategory] = useState("");

  const [arrayoffilterselected, setarrayoffilterselected] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [previosfilter, setPreviosfilter] = useState([]);
  const [allusers, setAllusers] = useState([]);
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const [datestart1, setDatestart1] = useState();

  const [datestart1x, setDatestart1x] = useState();
  useEffect(() => {
    if (datestart1 && !datestart1x) {
      axios
        .get(
          `${API_HOST}/budget/viewBudget?minimumBudget=${datestart1}&maximumBudget=100000000000`
        )
        .then((res) => {
          setAllusers(res?.data?.success?.data);
          window.scrollTo(0, 0, { behavior: "smooth" });
        });
    }
    if (datestart1x && !datestart1) {
      axios
        .get(
          `${API_HOST}/budget/viewBudget?maximumBudget=${datestart1x}&minimumBudget=0`
        )
        .then((res) => {
          setAllusers(res?.data?.success?.data);
          window.scrollTo(0, 0, { behavior: "smooth" });
        });
    }
    if (datestart1 && datestart1x) {
      axios
        .get(
          `${API_HOST}/budget/viewBudget?minimumBudget=${datestart1}&maximumBudget=${datestart1x}`
        )
        .then((res) => {
          setAllusers(res?.data?.success?.data);
          window.scrollTo(0, 0, { behavior: "smooth" });
        });
    }
    if (!datestart1x && !datestart1) {
      axios.get(`${API_HOST}/budget/viewBudget`).then((res) => {
        setAllusers(res?.data?.success?.data);
        window.scrollTo(0, 0, { behavior: "smooth" });
      });
    }
  }, [datestart1, datestart1x]);

  const [selecteddelete, setSelecteddelete] = useState([]);

  const handleDelete = () => {
    const formdata = new FormData();
    formdata.append("removable", JSON.stringify(selecteddelete));
    console.log(JSON.stringify(selecteddelete));
    axios
      .post(`${API_HOST}/budget/removeBudget`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        if (datestart1 && !datestart1x) {
          axios
            .get(`${API_HOST}/budget/viewBudget?minimumBudget=${datestart1}`)
            .then((res) => {
              setAllusers(res?.data?.success?.data);
              window.scrollTo(0, 0, { behavior: "smooth" });
            });
        }
        if (datestart1x && !datestart1) {
          axios
            .get(`${API_HOST}/budget/viewBudget?maximumBudget=${datestart1x}`)
            .then((res) => {
              setAllusers(res?.data?.success?.data);
              window.scrollTo(0, 0, { behavior: "smooth" });
            });
        }
        if (datestart1 && datestart1x) {
          axios
            .get(
              `${API_HOST}/budget/viewBudget?minimumBudget=${datestart1}&maximumBudget=${datestart1x}`
            )
            .then((res) => {
              setAllusers(res?.data?.success?.data);
              window.scrollTo(0, 0, { behavior: "smooth" });
            });
        }
        if (!datestart1x && !datestart1) {
          axios.get(`${API_HOST}/budget/viewBudget`).then((res) => {
            setAllusers(res?.data?.success?.data);
            window.scrollTo(0, 0, { behavior: "smooth" });
          });
        }
        handleClose3();
        setSelecteddelete([]);
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
            placeholder="search Pricing & budget"
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
                          style={{ fontSize: "1.5vw", cursor: "pointer" }}
                        />
                      </div>
                    </div>
                  </div>
                  <hr style={{ color: "#00000090" }} />

                  <div className="jobpodtedfieldtitile"> Price</div>

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
                        From ($)
                      </div>
                      <div className="jobpostfieldinputbox">
                        <input
                          style={{ width: "100%" }}
                          type="number"
                          className="input-homejobformdate"
                          name=""
                          id=""
                          value={datestart1}
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
                        To ($)
                      </div>
                      <div className="jobpostfieldinputbox">
                        <input
                          style={{ width: "100%" }}
                          type="number"
                          className="input-homejobformdate"
                          name=""
                          id=""
                          value={datestart1x}
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
                        setDatestart1();
                        setDatestart1x();
                        handleClose();
                      }}
                    >
                      Cancel
                    </div>
                    <div
                      style={{ cursor: "pointer" }}
                      className="handlecirclieaboutsave"
                      onClick={handleClose}
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
              onClick={() => setarrayoffilterselected([])}
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
                width: "15vw",
              }}
            >
              List of Pricing & Budget
            </div>

            <div
              style={{
                color: "#064C87",
                borderBottom: "0.3vw solid #064C87",
                width: "15vw",
                position: "relative",
                right: "16vw",
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
              if (selecteddelete) {
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
              <div className="profiledetailstitle">Delete Pricing</div>
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
              Are you really want to delete these ' Pricing '
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
        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          {allusers?.length > 0 &&
            allusers?.map((data, index) => {
              return (
                <Skillpopup
                  data={data}
                  index={index}
                  setSelecteddelete={setSelecteddelete}
                  selecteddelete={selecteddelete}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
