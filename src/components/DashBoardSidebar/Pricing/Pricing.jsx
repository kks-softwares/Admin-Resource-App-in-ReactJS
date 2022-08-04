import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { SearchSharp } from "@mui/icons-material";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import API_HOST from "../../../env";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import imgfilter from "../../../assets/Dashboard/Iconly-Light-Filter 2.png";
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

  const [page, setPage] = useState(1);
  const [totalpages, settotalpages] = useState(1);

  const [setSelectedCategory, setSetSelectedCategory] = useState("");

  const [arrayoffilterselected, setarrayoffilterselected] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [previosfilter, setPreviosfilter] = useState([]);
  const [allusers, setAllusers] = useState(["1", "2", "3", "4", "5", "6", "7"]);

  //   useEffect(() => {
  //     if (!setSelectedCategory) {
  //       axios
  //         .get(
  //           `${API_HOST}/users/viewUser?emailId=${setSelectedCategory}&page=${page}`
  //         )
  //         .then((res) => {
  //           setAllusers(res?.data?.success?.data?.docs);
  //           window.scrollTo(0, 0, { behavior: "smooth" });
  //         });
  //       axios
  //         .get(
  //           `${API_HOST}/users/viewUser?emailId=${setSelectedCategory}&page=${
  //             page + 1
  //           }`
  //         )
  //         .then((res) => {
  //           if (res?.data?.success?.data?.docs?.length > 0) {
  //             settotalpages(page + 1);
  //           }
  //         });
  //     } else {
  //       axios
  //         .get(
  //           `${API_HOST}/users/viewUser?emailId=${setSelectedCategory}&pageNumber=${page}&pageSize=10`
  //         )
  //         .then((res) => {
  //           setAllusers(res?.data?.success?.data);
  //           window.scrollTo(0, 0, { behavior: "smooth" });
  //         });
  //       axios
  //         .get(
  //           `${API_HOST}/users/viewUser?emailId=${setSelectedCategory}&pageNumber=${
  //             page + 1
  //           }&pageSize=10`
  //         )
  //         .then((res) => {
  //           if (res?.data?.success?.data?.length > 0) {
  //             settotalpages(page + 1);
  //           } else {
  //             settotalpages(page);
  //           }
  //         });
  //     }
  //   }, [page, setSelectedCategory]);


  const [datestart1, setDatestart1] = useState();
  
  const [datestart1x, setDatestart1x] = useState();
  
  
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
            placeholder="search Category"
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
              <img src={imgfilter} alt="" />
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
                          style={{ fontSize: "1.5vw",cursor:"pointer" }}
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
      </div>

      <div>
        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          {allusers?.length > 0 &&
            allusers?.map((data, index) => {
              return <Skillpopup data={data} index={index} page={page} />;
            })}
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
    </div>
  );
}
