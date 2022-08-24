import React, { useEffect, useState } from "react";

import img from "../../../assets/Landing page/apple (1)@2x.png";
import img2 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Edit.svg";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DoneIcon from "@mui/icons-material/Done";
import img11 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import img22 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import img111 from "../../../assets/Web 1280 – 14/Icon.svg";
import axios from "axios";
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
export default function Skillpopupcopy2({
  data,
  index,
  page,
  selecteddelete,
  setSelecteddelete,
  setRecall,
  recall,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [checkonex, setCheckonex] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [subcategoryName, setsubCategoryName] = useState("");

  const [categoryerror, setCategoryerror] = useState("");
  const [subcategoryerror, setsubCategoryerror] = useState("");

  const [categoryimage, setCategoryimage] = useState();
  const [subcategoryimage, setsubCategoryimage] = useState();

  useEffect(() => {
    setCheckonex(false);
    setCategoryName(data?.categoryId?.category);
    setsubCategoryName(data?.subCategory);
  }, [data]);

  const editcategory = () => {
    if (!categoryName) {
      setCategoryerror("Category cannot be empty");
    } else if (categoryimage) {
      const formdata = new FormData();
      formdata.append(`category`, categoryName);
      formdata.append(`categoryId`, data?.categoryId?.categoryId);
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
      formdata.append(`categoryId`, data?.categoryId?.categoryId);

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
  const editsubcategory = () => {
    if (!subcategoryName) {
      setsubCategoryerror("Category cannot be empty");
    } else if (subcategoryimage) {
      const formdata = new FormData();
      formdata.append(`subCategory`, subcategoryName);
      formdata.append(`subCategoryId`, data?.subCategoryId);
      formdata.append(`fileName`, subcategoryimage);
      axios
        .post(`${API_HOST}/subCategory/editSubCategory`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => {
          handleClose2();
          setRecall(!recall);
        })
        .catch((err) => {
          setsubCategoryerror("Category already exist");
        });
    } else {
      const formdata = new FormData();
      formdata.append(`subCategory`, subcategoryName);
      formdata.append(`subCategoryId`, data?.subCategoryId);

      axios
        .post(`${API_HOST}/subCategory/editSubCategory`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => {
          handleClose2();
          setRecall(!recall);
        })
        .catch((err) => {});
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
              if (selecteddelete?.indexOf(data?.subCategoryId) > -1) {
                setSelecteddelete([
                  ...selecteddelete.slice(
                    0,
                    selecteddelete.indexOf(data?.subCategoryId)
                  ),
                  ...selecteddelete.slice(
                    selecteddelete.indexOf(data?.subCategoryId) + 1,
                    selecteddelete.length
                  ),
                ]);
              } else {
                setSelecteddelete([...selecteddelete, data?.subCategoryId]);
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
        <div style={{ width: "7vw", display: "flex", alignItems: "center" }}>
          <img
            style={{
              margin: "0 0.5vw",
              width: "3vw ",
              height: "2.5vw",
              borderRadius: "10%",
              objectFit: "cover",
              cursor: "pointer",
            }}
            src={
              !data?.categoryId?.categoryImage
                ? img
                : data?.categoryId?.categoryImage
            }
            alt=""
          />{" "}
        </div>
        <div
          style={{
            width: "18vw",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          {data?.categoryId?.category}
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
            width: "18vw",
            fontWeight: "400",
            display: "flex",
            alignItems: "center",
          }}
        >
          {data?.subCategory}
          <img
            style={{
              margin: "0 0.5vw",
              width: "2.5vw ",
              height: "2.5vw",
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "pointer",
            }}
            src={!data?.subCategoryMedia ? img : data?.subCategoryMedia}
            alt=""
          />{" "}
          <img
            onClick={() => handleOpen2()}
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
          style={{ width: "18vw", display: "flex", alignItems: "center" }}
        ></div>
        <div style={{ width: "9vw", display: "flex", alignItems: "center" }}>
          {data?.created_at?.slice(0, 10)}
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
            <div className="jobpodtedfieldtitile">Rename the Sub-Category </div>
            <div className="profiledetailnavmanu">
              <div></div>
            </div>
          </div>
          <div
            style={{ marginTop: "0.31vw", width: "106%" }}
            className="jobpostfieldinputbox"
          >
            <input
              type="text"
              name="email"
              value={subcategoryName}
              onChange={(e) => {
                setsubCategoryName(e.target.value);
              }}
            />
          </div>
          <p style={{ color: "red", fontSize: "0.91vw" }}>{subcategoryerror}</p>
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
                      setsubCategoryimage(e.target.files[0]);
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
          {subcategoryimage && (
            <div
              style={{ marginTop: "0.3vw" }}
              className="inputfilesshowncatebox"
            >
              <div className="inputfilesshowncatboxsingle">
                <div className="inputfilesshowncatboxsingleimg">
                  <img src={img11} alt="" />
                </div>
                <div className="fileselctednamecate">
                  {subcategoryimage?.name}
                </div>
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
                      setsubCategoryimage();
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
              onClick={handleClose2}
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
              onClick={() => editsubcategory()}
              style={{ cursor: "pointer" }}
              className="handlecirclieaboutsave"
            >
              Update
            </div>
          </div>
        </Box>
      </Modal>
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
