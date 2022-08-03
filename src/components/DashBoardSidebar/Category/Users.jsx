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
export default function Users() {
  const [openx, setOpenx] = React.useState(false);
  const [anchorElx, setAnchorElx] = React.useState(null);
  const canBeOpen = openx && Boolean(anchorElx);
  const id = canBeOpen ? "transition-popper" : undefined;

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
        "Digital Marketing",
        "Graphic Design",
        "Data Analystics",
        "Communication",
        "Digital Marketing",
        "Graphic Design",
        "Data Analystics",
        "Communication",
      ],
    },
    {
      filternameName: "Sub Categories",
      filters: [
        "Digital Marketing",
        "Graphic Design",
        "Data Analystics",
        "Communication",
        "Digital Marketing",
        "Graphic Design",
        "Data Analystics",
        "Communication",
        "Digital Marketing",
        "Graphic Design",
        "Data Analystics",
        "Communication",
      ],
    },
    {
      filternameName: "Skill Set",
      filters: [
        "Digital Marketing",
        "Graphic Design",
        "Data Analystics",
        "Communication",
        "Digital Marketing",
        "Graphic Design",
        "Data Analystics",
        "Communication",
        "Digital Marketing",
        "Graphic Design",
        "Data Analystics",
        "Communication",
      ],
    },
  ]);

  const [arrayoffilterselected, setarrayoffilterselected] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [previosfilter, setPreviosfilter] = useState([]);
  const [allusers, setAllusers] = useState([]);

  useEffect(() => {
    if (!setSelectedCategory) {
      axios
        .get(
          `${API_HOST}/users/viewUser?emailId=${setSelectedCategory}&page=${page}`
        )
        .then((res) => {
          setAllusers(res?.data?.success?.data?.docs);
          window.scrollTo(0, 0, { behavior: "smooth" });
        });
      axios
        .get(
          `${API_HOST}/users/viewUser?emailId=${setSelectedCategory}&page=${
            page + 1
          }`
        )
        .then((res) => {
          if (res?.data?.success?.data?.docs?.length > 0) {
            settotalpages(page + 1);
          }
        });
    } else {
      axios
        .get(
          `${API_HOST}/users/viewUser?emailId=${setSelectedCategory}&pageNumber=${page}&pageSize=10`
        )
        .then((res) => {
          setAllusers(res?.data?.success?.data);
          window.scrollTo(0, 0, { behavior: "smooth" });
        });
      axios
        .get(
          `${API_HOST}/users/viewUser?emailId=${setSelectedCategory}&pageNumber=${
            page + 1
          }&pageSize=10`
        )
        .then((res) => {
          if (res?.data?.success?.data?.length > 0) {
            settotalpages(page + 1);
          } else {
            settotalpages(page);
          }
        });
    }
  }, [page, setSelectedCategory]);

  const [togglrbar, setTogglrbar] = useState(1);

  return (
    <div className="BrowseWorkMain-cntainer">
      <div style={{alignItems:"center",justifyContent:"flex-start"}} className="searchboxcontainer">
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
            marginTop:"0vw",
            marginBottom: "0vw",
            paddingBottom: "0.5vw",
            paddingTop:"0vw"
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
            <div style={{maxHeight:"80vh",overflow:"scroll"}}>
              <div  className="profiletitleandmenunav">
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
                      style={{ fontSize: "1.2vw",display:"flex",justifyContent:"space-between",alignItems:"center"}}
                      className="profiledetailstitle"
                    >
                      <div>
                      {data?.filternameName}
                      </div>
                      <div style={{fontSize:"1vw",fontWeight:"400",color:"#064C87",cursor:"pointer"}}>
                          View More
                      </div>
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
              onClick={() => {
                setTogglrbar(1);
              }}
              className="profileworkhistruytoggleervalue"
              style={{
                textAlign: "center",
                width: "12vw",
              }}
            >
              List of Category
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

      {togglrbar === 1 && (
        <div>
          <div
            style={{ margin: "0vw 1vw", padding: "0vw 1vw" }}
            className="navoftableblogs"
          >
            <div style={{ width: "3vw" }}></div>
            <div style={{ width: "7vw" }}>Id</div>
            <div style={{ width: "7vw" }}> </div>
            <div style={{ width: "18vw",  }}>
              Category
            </div>
            <div style={{ width: "18vw",  }}>
              Sub category
            </div>
            <div style={{ width: "18vw",  }}>
              Skills
            </div>
            <div style={{ width: "9vw" }}>Created on</div>
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
      )}
    </div>
  );
}
