import React, { useEffect, useState } from "react";
import img from "../../../assets/Landing page/apple (1)@2x.png";
import img2 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Edit.svg";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DoneIcon from "@mui/icons-material/Done";
import img11 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import img22 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import img111 from "../../../assets/Web 1280 – 14/Icon.svg";
import axios from "axios";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import API_HOST from "../../../env";
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

const currencies = [
  {
    value: "Popular",
  },

  {
    value: "None",
  },
];

export default function Skillpopupcopy({
  data,
  index,
  page,
  selecteddelete,
  setSelecteddelete,
  setRecall,
  recall,
}) {
  const navigate = useNavigate();

  const [currency, setCurrency] = React.useState(
    data?.popularCategory ? "Popular" : "None"
  );
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [checkonex, setCheckonex] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const [categoryerror, setCategoryerror] = useState("");

  const [categoryimage, setCategoryimage] = useState();

  useEffect(() => {
    setCheckonex(false);
    setCategoryName(data?.category);
    setCurrency(data?.popularCategory ? "Popular" : "None");
  }, [data]);

  const editcategory = () => {
    if (!categoryName) {
      setCategoryerror("Category cannot be empty");
    } else if (categoryimage) {
      const formdata = new FormData();
      formdata.append(`category`, categoryName);
      formdata.append(`categoryId`, data?.categoryId);
      formdata.append(`fileName`, categoryimage);
      axios
        .post(`${API_HOST}/theCategory/editCategory`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => {
          handleClose();
          setRecall(!recall);
        })
        .catch((err) => {
          setCategoryerror("Category already exist");
        });
    } else {
      const formdata = new FormData();
      formdata.append(`category`, categoryName);
      formdata.append(`categoryId`, data?.categoryId);

      axios
        .post(`${API_HOST}/theCategory/editCategory`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => {
          handleClose();
          setRecall(!recall);
        })
        .catch((err) => {});
    }
  };

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleUpdateblog = (data1) => {
    if (data1 === "Popular") {
      axios.post(`${API_HOST}/theCategory/editCategory`, {
        categoryId: data?.categoryId,
        popularCategory: true,
      });
    }

    if (data1 === "None") {
      axios.post(`${API_HOST}/theCategory/editCategory`, {
        categoryId: data?.categoryId,
        popularCategory: false,
      });
    }
  };

  return (
    <div>
      <div style={{ alignItems: "center" }} className="navoftableblogsdata">
        <div style={{ width: "3vw" }}>
          <div
            className="checkbox"
            onClick={() => {
              setCheckonex(!checkonex);
              console.log(selecteddelete);
              if (selecteddelete?.indexOf(data?.categoryId) > -1) {
                setSelecteddelete([
                  ...selecteddelete.slice(
                    0,
                    selecteddelete.indexOf(data?.categoryId)
                  ),
                  ...selecteddelete.slice(
                    selecteddelete.indexOf(data?.categoryId) + 1,
                    selecteddelete.length
                  ),
                ]);
              } else {
                setSelecteddelete([...selecteddelete, data?.categoryId]);
              }
            }}
          >
            {checkonex ? (
              <DoneIcon
                style={{
                  fontSize: "0.81vw",
                  color: "blueviolet",
                  fontWeight: "600",
                }}
              />
            ) : (
              ""
            )}{" "}
          </div>
        </div>
        <div style={{ width: "7vw", cursor: "pointer" }}>
          #{(page - 1) * 10 + (index + 1)}
        </div>
        <div style={{ width: "12vw", display: "flex", alignItems: "center" }}>
          <img
            style={{
              margin: "0 0.5vw",
              width: "3vw ",
              height: "2.5vw",
              borderRadius: "10%",
              objectFit: "cover",
              cursor: "pointer",
            }}
            src={!data?.categoryImage ? img : data?.categoryImage}
            alt=""
          />{" "}
        </div>
        <div
          style={{
            width: "28vw",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          {data?.category}
          <img
            onClick={() => handleOpen()}
            style={{
              margin: "0.5vw 0.5vw",
              width: "1.4vw ",
              height: "1.4vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={img2}
            alt=""
          />
        </div>
        <div
          style={{
            width: "25vw",
            display: "flex",
            alignItems: "center",
            padding: "0 3vw",
          }}
        >
          <div style={{ marginBottom: "0.5vw" }} className="inputtypeformfield">
            <TextField
              id="standard-select-currency"
              select
              style={{
                width: "100%",
                textAlign: "left",
                borderBottom: "0.11px solid white",
                color: "black !important",
              }}
              value={currency}
              onChange={handleChange}
              variant="standard"
            >
              {currencies.map((option) => (
                <MenuItem
                  hidden={option.value === "Select Category" ? true : false}
                  key={option.value}
                  value={option.value}
                  onClick={() => handleUpdateblog(option.value)}
                >
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>{" "}
        <div style={{ width: "9vw", display: "flex", alignItems: "center" }}>
          {data?.created_at?.slice(0, 10)}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="profiletitleandmenunav">
            <div className="jobpodtedfieldtitile">Rename the Category </div>
            <div className="profiledetailnavmanu"></div>
          </div>
          <div
            style={{ marginTop: "0.3vw", width: "106%" }}
            className="jobpostfieldinputbox"
          >
            <input
              type="text"
              name="email"
              value={categoryName}
              onChange={(e) => {
                console.log(e.target.value);
                setCategoryName(e.target.value);
              }}
            />
          </div>
          <p style={{ color: "red", fontSize: "0.91vw" }}>{categoryerror}</p>
          <div
            style={{
              marginBottom: "0.0vw",

              marginTop: "1vw",
            }}
            className="jobpodtedfieldtitile"
          >
            Upload image(Optional)
          </div>
          <div
            style={{
              background: "white",
              padding: "1vw",
              marginTop: "0vw",
              paddingRight: "0.5vw",
              paddingLeft: "0vw",
            }}
          >
            <div className="inputfilebox">
              <div>
                <label htmlFor={`inputctaelogfile`}>
                  <div className="inputicon">
                    <img src={img111} alt="" />
                  </div>
                  <div className="inputcateaddformfile">
                    Drag and Drop ,Browse to upload
                  </div>
                  <input
                    type="file"
                    id={`inputctaelogfile`}
                    onChange={(e) => {
                      setCategoryimage(e.target.files[0]);
                    }}
                    hidden
                  />
                </label>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                textAlign: "right",
                fontSize: "0.9vw",
                fontWeight: "400",
              }}
            >
              Image should be less then 200 kb
            </div>
          </div>
          {categoryimage && (
            <div
              style={{ marginTop: "0.3vw" }}
              className="inputfilesshowncatebox"
            >
              <div className="inputfilesshowncatboxsingle">
                <div className="inputfilesshowncatboxsingleimg">
                  <img src={img11} alt="" />
                </div>
                <div className="fileselctednamecate">{categoryimage?.name}</div>
                <div className="inputfilesshowncatboxsingleimg">
                  <img
                    style={{
                      width: "1.5vw",
                      marginLeft: "1vw",
                      cursor: "pointer",
                    }}
                    src={img22}
                    alt=""
                    onClick={() => {
                      setCategoryimage();
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          <div style={{ marginTop: "0.31vw" }} className="handlemoreaboutskill">
            <div
              style={{
                background: "white",
                color: "#064C87",
                cursor: "pointer",
                border: "1px solid #064C87",
                margin: "1vw",
                marginBottom: "0vw",
              }}
              className="handlecirclieaboutsave"
              onClick={handleClose}
            >
              Cancel
            </div>
            <div
              style={{
                background: "white",
                color: "#064C87",
                cursor: "pointer",
                border: "1px solid #064C87",
                margin: "1vw",
                marginBottom: "0vw",
              }}
              className="handlecirclieaboutsave"
            >
              Reset
            </div>
            <div
              onClick={() => editcategory()}
              style={{ cursor: "pointer" }}
              className="handlecirclieaboutsave"
            >
              Update
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
