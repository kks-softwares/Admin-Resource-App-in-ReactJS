import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { SearchSharp } from "@mui/icons-material";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import API_HOST from "../../../env";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import imgfilter from "../../../assets/walletimage/Iconly-Light-Color-Filter.svg";
import Modal from "@mui/material/Modal";
import Skillpopup from "./Skillpopup";
import img1 from "../../../assets/Jobs/Iconly-Light-Delete.svg";
import Skillpopupcopy from "./Skillpopupcopy";
import Skillpopupcopy2 from "./Skillpopupcopy2";
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
  const [toggler, setToggler] = useState(1);
  const [openx, setOpenx] = React.useState(false);
  const [anchorElx, setAnchorElx] = React.useState(null);
  const canBeOpen = openx && Boolean(anchorElx);
  const id = canBeOpen ? "transition-popper" : undefined;
  const [togglrbar, setTogglrbar] = useState(0);
  const [datestart1, setDatestart1] = useState();
  const [datestart2, setDatestart2] = useState();
  const [datestart3, setDatestart3] = useState();
  const [datestart1x, setDatestart1x] = useState();
  const [datestart2x, setDatestart2x] = useState();
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

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const [page, setPage] = useState(1);
  const [totalpages, settotalpages] = useState(1);
  const [page1, setPage1] = useState(1);
  const [totalpages1, settotalpages1] = useState(1);
  const [page2, setPage2] = useState(1);
  const [totalpages2, settotalpages2] = useState(1);

  const [setSelectedCategory, setSetSelectedCategory] = useState("");
  const [setSelectedCategory1, setSetSelectedCategory1] = useState("");
  const [setSelectedCategory2, setSetSelectedCategory2] = useState("");

  const [arrayoffilterselected, setarrayoffilterselected] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [previosfilter, setPreviosfilter] = useState([]);
  const [allusers, setAllusers] = useState([]);

  const [recall, setRecall] = useState(false);
  const [selecteddelete, setSelecteddelete] = useState([]);

  useEffect(() => {
    if (togglrbar === 3) {
      const date = setdateadd(datestart3x);
      console.log(date);
      axios
        .get(
          `${API_HOST}/theSkill/viewSkill?pageSize=10&pageNumber=${page}&skill=${setSelectedCategory}&from=${datestart3}&to=${date}`
        )
        .then((res) => {
          setAllusers(res?.data?.success?.data);
          window.scrollTo(0, 0, { behavior: "smooth" });
        });
      axios
        .get(
          `${API_HOST}/theSkill/viewSkill?pageSize=10&pageNumber=${
            page + 1
          }&skill=${setSelectedCategory}&from=${datestart3}&to=${datestart3x}`
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
          `${API_HOST}/theSkill/viewSkill?pageSize=10&pageNumber=${page}&skill=${setSelectedCategory}`
        )
        .then((res) => {
          setAllusers(res?.data?.success?.data);
          window.scrollTo(0, 0, { behavior: "smooth" });
        });
      axios
        .get(
          `${API_HOST}/theSkill/viewSkill?pageSize=10&pageNumber=${
            page + 1
          }&skill=${setSelectedCategory}`
        )
        .then((res) => {
          if (res?.data?.success?.data?.length > 0) {
            settotalpages(page + 1);
          } else {
            settotalpages(page);
          }
        });
    }
  }, [page, setSelectedCategory, recall]);

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
  const [allusers1, setAllusers1] = useState([]);

  const [recall1, setRecall1] = useState(false);
  const [selecteddelete1, setSelecteddelete1] = useState([]);

  useEffect(() => {
    if (togglrbar === 1) {
      const date = setdateadd(datestart1x);
      console.log(date);
      axios
        .get(
          `${API_HOST}/theCategory/viewCategory?pageSize=10&pageNumber=${page1}&category=${setSelectedCategory1}&from=${datestart1}&to=${date}`
        )
        .then((res) => {
          setAllusers1(res?.data?.success?.data);
          window.scrollTo(0, 0, { behavior: "smooth" });
        });
      axios
        .get(
          `${API_HOST}/theCategory/viewCategory?pageSize=10&pageNumber=${
            page1 + 1
          }&category=${setSelectedCategory1}&from=${datestart1}&to=${date}`
        )
        .then((res) => {
          if (res?.data?.success?.data?.length > 0) {
            settotalpages1(page1 + 1);
          } else {
            settotalpages1(page1);
          }
        });
    } else {
      axios
        .get(
          `${API_HOST}/theCategory/viewCategory?pageSize=10&pageNumber=${page1}&category=${setSelectedCategory1}`
        )
        .then((res) => {
          setAllusers1(res?.data?.success?.data);
          window.scrollTo(0, 0, { behavior: "smooth" });
        });
      axios
        .get(
          `${API_HOST}/theCategory/viewCategory?pageSize=10&pageNumber=${
            page1 + 1
          }&category=${setSelectedCategory1}`
        )
        .then((res) => {
          if (res?.data?.success?.data?.length > 0) {
            settotalpages1(page1 + 1);
          } else {
            settotalpages1(page1);
          }
        });
    }
  }, [page1, setSelectedCategory1, recall1]);

  const handleDelete1 = () => {
    const formdata = new FormData();
    formdata.append("removable", JSON.stringify(selecteddelete1));
    console.log(JSON.stringify(selecteddelete1));
    axios
      .post(`${API_HOST}/theCategory/removeCategory`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        setSelecteddelete1([]);
        handleClose3();
        setRecall1(!recall1);
      });
  };
  const [allusers2, setAllusers2] = useState([]);

  const [recall2, setRecall2] = useState(false);
  const [selecteddelete2, setSelecteddelete2] = useState([]);

  useEffect(() => {
    if (togglrbar === 2) {
      const date = setdateadd(datestart2x);
      console.log(date);
      axios
        .get(
          `${API_HOST}/subCategory/viewSubCategory?pageSize=10&pageNumber=${page2}&subCategory=${setSelectedCategory2}&from=${datestart2}&to=${date}`
        )
        .then((res) => {
          setAllusers2(res?.data?.success?.data);
          window.scrollTo(0, 0, { behavior: "smooth" });
        });
      axios
        .get(
          `${API_HOST}/subCategory/viewSubCategory?pageSize=10&pageNumber=${
            page2 + 1
          }&subCategory=${setSelectedCategory2}&from=${datestart2}&to=${date}`
        )
        .then((res) => {
          if (res?.data?.success?.data?.length > 0) {
            settotalpages2(page2 + 1);
          } else {
            settotalpages2(page2);
          }
        });
    } else {
      axios
        .get(
          `${API_HOST}/subCategory/viewSubCategory?pageSize=10&pageNumber=${page2}&subCategory=${setSelectedCategory2}`
        )
        .then((res) => {
          setAllusers2(res?.data?.success?.data);
          window.scrollTo(0, 0, { behavior: "smooth" });
        });
      axios
        .get(
          `${API_HOST}/subCategory/viewSubCategory?pageSize=10&pageNumber=${
            page2 + 1
          }&subCategory=${setSelectedCategory2}`
        )
        .then((res) => {
          if (res?.data?.success?.data?.length > 0) {
            settotalpages2(page2 + 1);
          } else {
            settotalpages2(page2);
          }
        });
    }
  }, [page2, setSelectedCategory2, recall2]);

  const handleDelete2 = () => {
    const formdata = new FormData();
    formdata.append("removable", JSON.stringify(selecteddelete2));
    console.log(JSON.stringify(selecteddelete2));
    axios
      .post(`${API_HOST}/subCategory/removeSubcategory`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        setSelecteddelete2([]);
        handleClose3();
        setRecall2(!recall2);
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
            placeholder={
              toggler === 1
                ? "search Category"
                : toggler === 2
                ? "search Subcategory"
                : "search Skill"
            }
            value={
              toggler === 1
                ? setSelectedCategory1
                : toggler === 2
                ? setSelectedCategory2
                : setSelectedCategory
            }
            onChange={(e) => {
              toggler === 1
                ? setSetSelectedCategory1(e.target.value)
                : toggler === 2
                ? setSetSelectedCategory2(e.target.value)
                : setSetSelectedCategory(e.target.value);
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

                  <div className="jobpodtedfieldtitile">Please Select</div>

                  <div style={{ display: "flex" }}>
                    <div
                      onClick={() => setTogglrbar(1)}
                      className={
                        togglrbar === 1
                          ? "selectbuttonfilter1"
                          : "selectbuttonfilter"
                      }
                    >
                      Category
                    </div>
                    <div
                      onClick={() => setTogglrbar(2)}
                      className={
                        togglrbar === 2
                          ? "selectbuttonfilter1"
                          : "selectbuttonfilter"
                      }
                    >
                      Sub Category
                    </div>
                    <div
                      onClick={() => setTogglrbar(3)}
                      className={
                        togglrbar === 3
                          ? "selectbuttonfilter1"
                          : "selectbuttonfilter"
                      }
                    >
                      Skills
                    </div>
                  </div>

                  {togglrbar !== 0 && (
                    <div className="jobpodtedfieldtitile">Created on</div>
                  )}
                  {togglrbar === 1 && (
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
                  )}
                  {togglrbar === 2 && (
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
                            value={datestart2}
                            max={disablePastDate()}
                            min={"2020-01-01"}
                            maxlength="4"
                            onChange={(e) => {
                              setDatestart2(e.target.value);
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
                            value={datestart2x}
                            max={disablePastDate()}
                            min={"2020-01-01"}
                            maxlength="4"
                            onChange={(e) => {
                              setDatestart2x(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {togglrbar === 3 && (
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
                            value={datestart3}
                            className="input-homejobformdate"
                            name=""
                            id=""
                            max={disablePastDate()}
                            min={"2020-01-01"}
                            maxlength="4"
                            onChange={(e) => {
                              setDatestart3(e.target.value);
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
                            value={datestart3x}
                            max={disablePastDate()}
                            min={"2020-01-01"}
                            maxlength="4"
                            onChange={(e) => {
                              setDatestart3x(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

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
                        handleClose();
                        togglrbar === 1
                          ? setRecall1(!recall1)
                          : togglrbar === 2
                          ? setRecall2(!recall2)
                          : setRecall(!recall);
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
                setTogglrbar(0);
                setRecall(!recall);
                setRecall2(!recall2);
                setRecall1(!recall1);
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
              onClick={() => {
                setToggler(1);
              }}
              className="profileworkhistruytoggleervalue"
              style={{
                textAlign: "center",
                width: "12vw",
                color: toggler === 1 ? "#064C87" : "",
              }}
            >
              List of Category
            </div>
            <div
              onClick={() => {
                setToggler(2);
              }}
              className="profileworkhistruytoggleervalue"
              style={{
                textAlign: "center",
                width: "12vw",
                color: toggler === 2 ? "#064C87" : "",
              }}
            >
              List of Subcategory
            </div>
            <div
              onClick={() => {
                setToggler(3);
              }}
              className="profileworkhistruytoggleervalue"
              style={{
                textAlign: "center",
                width: "12vw",
                color: toggler === 3 ? "#064C87" : "",
              }}
            >
              List of skills
            </div>

            <div
              style={{
                color: "#064C87",
                borderBottom: "0.3vw solid #064C87",
                width: "12vw",
                position: "relative",
                right: toggler === 1 ? "41vw" : toggler === 2 ? "27vw" : "13vw",
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
              if (toggler === 1 && selecteddelete1.length > 0) {
                handleOpen3();
              }
              if (toggler === 2 && selecteddelete2?.length > 0) {
                handleOpen3();
              }
              if (toggler === 3 && selecteddelete.length > 0) {
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
              <div className="profiledetailstitle">
                Delete{" "}
                {toggler === 1
                  ? "Category"
                  : toggler === 2
                  ? "Sub-Category"
                  : "Skills"}
              </div>
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
              Are you really want to delete these '
              {toggler === 1
                ? "Category"
                : toggler === 2
                ? "Sub-Category"
                : "Skills"}
              '
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
                  toggler === 1
                    ? handleDelete1()
                    : toggler === 2
                    ? handleDelete2()
                    : handleDelete();
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
      {toggler === 1 && (
        <div>
          <div
            style={{ margin: "0vw 1vw", padding: "0vw 1vw" }}
            className="navoftableblogs"
          >
            <div style={{ width: "3vw" }}></div>
            <div style={{ width: "7vw" }}>Id</div>
            <div style={{ width: "12vw" }}> </div>
            <div style={{ width: "28vw" }}>Category</div>
            <div style={{ width: "25vw" }}></div>

            <div style={{ width: "9vw" }}>Created on</div>
          </div>
          {allusers1?.length > 0 &&
            allusers1?.map((data, index) => {
              return (
                <Skillpopupcopy
                  data={data}
                  index={index}
                  page={page1}
                  setSelecteddelete={setSelecteddelete1}
                  selecteddelete={selecteddelete1}
                  setRecall={setRecall1}
                  recall={recall1}
                />
              );
            })}

          {totalpages1 !== 1 ? (
            <div style={{ width: "25vw" }} className="paginationbox">
              <div>
                <ArrowBackIosIcon style={{ fontSize: "1.5vw" }} />
              </div>

              <div
                hidden={page1 - 4 > 0 ? false : true}
                onClick={() => setPage1(page1 - 4)}
              >
                {page1 - 4}
              </div>
              <div
                hidden={page1 - 3 > 0 ? false : true}
                onClick={() => setPage1(page1 - 3)}
              >
                {page1 - 3}
              </div>
              <div
                hidden={page1 - 2 > 0 ? false : true}
                onClick={() => setPage1(page1 - 2)}
              >
                {page1 - 2}
              </div>
              <div
                hidden={page1 - 1 > 0 ? false : true}
                onClick={() => setPage1(page1 - 1)}
              >
                {page1 - 1}
              </div>
              <div style={{ color: "#2A6599" }}>{page1}</div>
              <div
                hidden={page1 + 1 > totalpages1 ? true : false}
                onClick={() => setPage1(page1 + 1)}
              >
                {page1 + 1}
              </div>

              <div>
                <ArrowForwardIosIcon style={{ fontSize: "1.5vw" }} />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
      {toggler === 2 && (
        <div>
          <div
            style={{ margin: "0vw 1vw", padding: "0vw 1vw" }}
            className="navoftableblogs"
          >
            <div style={{ width: "3vw" }}></div>
            <div style={{ width: "7vw" }}>Id</div>
            <div style={{ width: "7vw" }}> </div>
            <div style={{ width: "18vw" }}>Category</div>
            <div style={{ width: "18vw" }}>Sub category</div>
            <div style={{ width: "18vw" }}></div>
            <div style={{ width: "9vw" }}>Created on</div>
          </div>
          {allusers2?.length > 0 &&
            allusers2?.map((data, index) => {
              return (
                <Skillpopupcopy2
                  data={data}
                  index={index}
                  page={page2}
                  setSelecteddelete={setSelecteddelete2}
                  selecteddelete={selecteddelete2}
                  setRecall={setRecall2}
                  recall={recall2}
                />
              );
            })}

          {totalpages2 !== 1 ? (
            <div style={{ width: "25vw" }} className="paginationbox">
              <div>
                <ArrowBackIosIcon style={{ fontSize: "1.5vw" }} />
              </div>

              <div
                hidden={page2 - 4 > 0 ? false : true}
                onClick={() => setPage2(page2 - 4)}
              >
                {page2 - 4}
              </div>
              <div
                hidden={page2 - 3 > 0 ? false : true}
                onClick={() => setPage2(page2 - 3)}
              >
                {page2 - 3}
              </div>
              <div
                hidden={page2 - 2 > 0 ? false : true}
                onClick={() => setPage2(page2 - 2)}
              >
                {page2 - 2}
              </div>
              <div
                hidden={page2 - 1 > 0 ? false : true}
                onClick={() => setPage2(page2 - 1)}
              >
                {page2 - 1}
              </div>
              <div style={{ color: "#2A6599" }}>{page2}</div>
              <div
                hidden={page2 + 1 > totalpages2 ? true : false}
                onClick={() => setPage2(page2 + 1)}
              >
                {page2 + 1}
              </div>

              <div>
                <ArrowForwardIosIcon style={{ fontSize: "1.5vw" }} />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
      {toggler === 3 && (
        <div>
          <div
            style={{ margin: "0vw 1vw", padding: "0vw 1vw" }}
            className="navoftableblogs"
          >
            <div style={{ width: "3vw" }}></div>
            <div style={{ width: "7vw" }}>Id</div>
            <div style={{ width: "7vw" }}> </div>
            <div style={{ width: "18vw" }}>Category</div>
            <div style={{ width: "18vw" }}>Sub category</div>
            <div style={{ width: "18vw" }}>Skills</div>
            <div style={{ width: "9vw" }}>Created on</div>
          </div>
          {allusers?.length > 0 &&
            allusers?.map((data, index) => {
              return (
                <Skillpopup
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
      )}
    </div>
  );
}
