import React, { useState } from "react";

import img2 from "../../assets/My profile – 28/Component 71 – 6.svg";
import "./profile.css";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import API_HOST from "../../env";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "55vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ProfileSkills({ user }) {
  const dispatch = useDispatch();
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [arrayof, setarrayof] = useState(user?.noOfSkillSet);
  const [skilltext, setskilltext] = useState("");
  const handletitleaddskills = () => {
    if (skilltext.length > 0) {
      axios
        .post(`${API_HOST}/users/updateSkills`, {
          skills: skilltext,
          userId: user?.userId,
        })
        .then((res) => {
          window.localStorage.setItem(
            "user",
            JSON.stringify({ ...res.data.success.data })
          );

          dispatch(
            userActions.setUser({
              user: { ...res.data.success.data },
            })
          );
        });
      setskilltext("");
    }
  };
  const handletitleremoveskills = (id) => {
    axios
      .post(`${API_HOST}/users/removeNoOfSkills`, {
        _id: id,
        userId: user?.userId,
      })
      .then((res) => {
        axios
          .get(`${API_HOST}/users/viewUser?userId=${user?.userId}`)
          .then((res) => {
            window.localStorage.setItem(
              "user",
              JSON.stringify({ ...res.data.success.data })
            );

            dispatch(
              userActions.setUser({
                user: { ...res.data.success.data },
              })
            );
          });
      });
  };

  return (
    <div style={{ height: "fit-content" }} className="profilebadgecontainer">
      <div
        style={{ padding: "2vw", margin: "0 0vw" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Skills</div>
        <div className="profiledetailnavmanu">
          <div>
            <img onClick={handleOpen2} src={img2} alt="" />
          </div>
        </div>

        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="profiletitleandmenunav">
              <div className="profiledetailstitle">Edit Skills</div>
              <div className="profiledetailnavmanu">
                <div>
                  <CloseIcon
                    onClick={handleClose2}
                    style={{ fontSize: "1.5vw", cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
            <hr style={{ color: "#00000090" }} />

            <div className="editsillpopupskilltext">
              Keeping your skills up to date helps you get the jobs you want
            </div>

            <div className="boxofskillsp">
              <div className="savedskillpopupcardp">
                {user?.noOfSkillSet?.map((skill) => {
                  return (
                    <div
                      style={{ borderRadius: "2vw" }}
                      className="savedskillwrapsinglep"
                    >
                      {skill?.skills}
                      <div
                        onClick={() => {
                          handletitleremoveskills(skill?._id);
                        }}
                      >
                        <CloseIcon
                          style={{
                            fontSize: "1.5vw",
                            marginLeft: "0.61vw",
                            cursor: "pointer",
                          }}
                        />
                      </div>{" "}
                    </div>
                  );
                })}
              </div>
              <div style={{ display: "flex" }}>
                <input
                  className="inputforskillp"
                  value={skilltext}
                  onChange={(e) => {
                    setskilltext(e.target.value);
                  }}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handletitleaddskills();
                    }
                  }}
                />
              </div>
            </div>
            <div className="editsillpopupskilltext">Maximum 15 skills </div>

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
                onClick={handleClose2}
              >
                Cancel
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={handleClose2}
                className="handlecirclieaboutsave"
              >
                SAVE
              </div>
            </div>
          </Box>
        </Modal>
      </div>

      <div className="pallskillboxes">
        {user?.noOfSkillSet?.map((skill) => {
          return <div className="pskillbox">{skill?.skills}</div>;
        })}
      </div>
    </div>
  );
}
