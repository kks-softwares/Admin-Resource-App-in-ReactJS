import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import imgfilter from "../../../../assets/walletimage/Iconly-Light-Color-Filter.svg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AssingedStatusCurrent from "./AssingedStatusCurrent";
import CardsWrokstatus from "./CardsWrokstatus";
import { useNavigate } from "react-router";
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

export default function Assignedwork() {
  const navigate = useNavigate();
  const [arrayoffilters, setArrayoffilters] = useState([
    {
      filternameName: "Work Status",
      filters: ["Completed", "Pending"],
    },
    {
      filternameName: "Start Date",
      filters: ["This Week", "Last 15 Days", "Last 20 Days", "Last Month"],
    },
    {
      filternameName: "Due Date",
      filters: ["This Week", "Last 15 Days", "Last 20 Days", "Last Month"],
    },
  ]);

  const [arrayoffilterselected, setarrayoffilterselected] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [previosfilter, setPreviosfilter] = useState([]);
  const [previosfilter1, setPreviosfilter1] = useState([]);

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
          <div
            style={{ flexWrap: "wrap", margin: "0" }}
            className="filterboxflex"
          >
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
              <Box sx={style1}>
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
      </div>
      <div
        style={{
          width: "100%",
          margin: "0 1vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ width: "fit-contnet", fontSize: "1.3vw", fontWeight: "600" }}
        >
          Current Work
        </div>
        <div
          onClick={() => {
            navigate("/dashbaord/addwork");
          }}
          style={{
            width: "10vw",
            background: "white",
            padding: "1vw",
            textAlign: "center",
            color: "#064C87",
            height: "2vw",
          }}
          className="digitalwallate"
        >
          Add a Work
        </div>
      </div>
      <div style={{ marginTop: "0.1vw" }} className="catalogcontainerdashbaord">
        <div
          style={{ fontSize: "1.1vw", textAlign: "left" }}
          className="tableapplidjobflex"
        >
          <div style={{ width: "7vw" }}>Index</div>
          <div style={{ width: "26vw" }}>Job Title</div>
          <div style={{ width: "14vw" }}>Start Date</div>
          <div style={{ width: "15vw" }}>Completion Date</div>
          <div style={{ width: "13vw" }}>Status</div>
          <div style={{ width: "8vw" }}></div>
        </div>
        <AssingedStatusCurrent />
      </div>
      <div
        style={{
          width: "100%",
          margin: "1vw",
          marginTop: "2vw",
        }}
      >
        <div
          style={{ width: "fit-contnet", fontSize: "1.3vw", fontWeight: "600" }}
        >
          Work Status
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <CardsWrokstatus />
        <CardsWrokstatus />
        <CardsWrokstatus />
        <CardsWrokstatus />
      </div>
    </div>
  );
}
