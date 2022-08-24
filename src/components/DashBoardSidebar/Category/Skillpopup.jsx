import React, { useEffect, useState } from "react";
import img from "../../../assets/Landing page/apple (1)@2x.png";
import img2 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Edit.svg";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import img11 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import img22 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import img111 from "../../../assets/Web 1280 – 14/Icon.svg";
import axios from "axios";
import API_HOST from "../../../env";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@material-ui/core";
import Popover from "@mui/material/Popover";
import { TextField, Typography } from "@mui/material";
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
  width: 700,
  maxHeight: "95vh",
  overflow: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Skillpopup({
  data,
  index,
  page,
  selecteddelete,
  setSelecteddelete,
  setRecall,
  recall,
}) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [subcateerror, setsubcateError] = useState("");
  const [checkonex, setCheckonex] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [subcategoryName, setsubCategoryName] = useState("");
  const [skillName, setskillName] = useState("");
  const [categoryerror, setCategoryerror] = useState("");
  const [subcategoryerror, setsubCategoryerror] = useState("");
  const [skillerror, setskillerror] = useState("");
  const [categoryimage, setCategoryimage] = useState();
  const [subcategoryimage, setsubCategoryimage] = useState();
  const [skillimage, setskillimage] = useState();
  const [subcategogryid,  setsubCategogryid] = useState();
  useEffect(() => {
    setCheckonex(false);
    setCategoryName(data?.categoryId?.category);
    setsubCategoryName(data?.subCategoryId?.subCategory);
    setskillName(data?.skill);
    if (data?.categoryId?.category) {
        setCategogryid(data?.categoryId?._id)
        setDegreeset(data?.categoryId?.category)
    }
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
      formdata.append(`subCategoryId`, data?.subCategoryId?.subCategoryId);
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
      formdata.append(`subCategoryId`, data?.subCategoryId?.subCategoryId);

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
  const editskill = () => {
    if (!skillName) {
      setskillerror("Category cannot be empty");
    } else if (skillimage) {
      const formdata = new FormData();
      formdata.append(`skill`, skillName);
      formdata.append(`skillSetId`, data?.skillSetId);
      formdata.append(`fileName`, skillimage);
      axios
        .post(`${API_HOST}/theSkill/editSkill`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => {
          handleClose3();
          setRecall(!recall);
        })
        .catch((err) => {
          setCategoryerror("Category already exist");
        });
    } else {
      const formdata = new FormData();
      formdata.append(`skill`, skillName);
      formdata.append(`skillSetId`, data?.skillSetId);

      axios
        .post(`${API_HOST}/theSkill/editSkill`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => {
          handleClose3();
          setRecall(!recall);
        })
        .catch((err) => {});
    }
  };

  const [open4, setOpen4] = React.useState(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);

  const [open5, setOpen5] = React.useState(false);
  const handleOpen5 = () => setOpen5(true);
  const handleClose5 = () => setOpen5(false);

  const [arrayoflongdegree, setArrayoflongdegree] = useState();

  const [cateerror, setcateError] = useState("");
  const [searchsubCategorysearch, setSearchsubCategorysearch] = useState("");
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

  const [anchorElx2, setAnchorElx2] = React.useState(null);
  const handleClickx2 = (event) => {
    setAnchorElx2(event.currentTarget);
  };

  const handleClosex2 = () => {
    setAnchorElx2(null);
  };

  const openx2 = Boolean(anchorElx2);
  const idx2 = openx2 ? "simple-popover" : undefined;

  const [degreeset, setDegreeset] = useState("");
  const [categogryid, setCategogryid] = useState();
  const handleAddCategory = () => {
    if (!categogryid) {
      setcateError("select Category");
    } else {
      axios
        .post(`${API_HOST}/theSkill/editIds`, {
          categoryId: categogryid,
          skillSetId: data?.skillSetId,
        })
        .then(() => {
          handleClose4();
          setRecall(!recall);
        });
    }
  }; 
  const handleAddSubCategory = () => {
    if (!subcategogryid) {
      setsubcateError("select sub-category");
    } else {
      axios
        .post(`${API_HOST}/theSkill/editIds`, {
          categoryId: categogryid,
          subCategoryId: subcategogryid,
          skillSetId: data?.skillSetId,
        
        })
        .then(() => {
          handleClose5();
          setRecall(!recall);
        });
    }
  };

  useEffect(() => {
    if (categogryid) {
      axios
        .get(
          `${API_HOST}/subCategory/viewSubCategory?pageSize=50&pageNumber=1&subCategory=${searchsubCategorysearch}&categoryId=${categogryid}`
        )
        .then((res) => {
          console.log(res?.data?.success?.data);
          setArrayoflongstudy(res?.data?.success?.data);
        });
    }
  }, [searchsubCategorysearch, categogryid]);

  const [arrayoflongstudy, setArrayoflongstudy] = useState();

  const [anchorElx3, setAnchorElx3] = React.useState(null);

  const handleClickx3 = (event) => {
    setAnchorElx3(event.currentTarget);
  };

  const handleClosex3 = () => {
    setAnchorElx3(null);
  };

  const openx3 = Boolean(anchorElx3);
  const idx3 = openx3 ? "simple-popover" : undefined;
  const [studyset, setstudyset] = useState("");

  return (
    <div>
      <div style={{ alignItems: "center" }} className="navoftableblogsdata">
        <div style={{ width: "3vw" }}>
          <div
            className="checkbox"
            onClick={() => {
              setCheckonex(!checkonex);
              console.log(selecteddelete);
              if (selecteddelete?.indexOf(data?.skillSetId) > -1) {
                setSelecteddelete([
                  ...selecteddelete.slice(
                    0,
                    selecteddelete.indexOf(data?.skillSetId)
                  ),
                  ...selecteddelete.slice(
                    selecteddelete.indexOf(data?.skillSetId) + 1,
                    selecteddelete.length
                  ),
                ]);
              } else {
                setSelecteddelete([...selecteddelete, data?.skillSetId]);
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
        {data?.categoryId?.category ? (
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
        ) : (
          <div
            style={{
              width: "18vw",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AddIcon
              onClick={() => handleOpen5()}
              style={{
                margin: "0.5vw 0.5vw",
                width: "1.4vw ",
                height: "1.4vw",
                borderRadius: "50%",
                cursor: "pointer",
                objectFit: "cover",
                fontSize: "1.4vw",
              }}
            />
          </div>
        )}
        {data?.subCategoryId?.subCategory ? (
          <div
            style={{
              width: "18vw",
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
            }}
          >
            {data?.subCategoryId?.subCategory}
            <img
              style={{
                margin: "0 0.5vw",
                width: "2.5vw ",
                height: "2.5vw",
                borderRadius: "50%",
                objectFit: "cover",
                cursor: "pointer",
              }}
              src={
                !data?.subCategoryId?.subCategoryMedia
                  ? img
                  : data?.subCategoryId?.subCategoryMedia
              }
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
        ) : (
          <div
            style={{
              width: "18vw",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AddIcon
              onClick={() => handleOpen5()}
              style={{
                margin: "0.5vw 0.5vw",
                width: "1.4vw ",
                height: "1.4vw",
                borderRadius: "50%",
                cursor: "pointer",
                objectFit: "cover",
                fontSize: "1.4vw",
              }}
            />
          </div>
        )}
        <div style={{ width: "18vw", display: "flex", alignItems: "center" }}>
          {data?.skill}
          <img
            style={{
              margin: "0 0.5vw",
              width: "2.5vw ",
              height: "2.5vw",
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "pointer",
            }}
            src={!data?.skillMedia ? img : data?.skillMedia}
            alt=""
          />{" "}
          <img
            onClick={() => handleOpen3()}
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
        <div style={{ width: "9vw", display: "flex", alignItems: "center" }}>
          {data?.created_at?.slice(0, 10)}
        </div>
      </div>
      <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="profiletitleandmenunav">
            <div className="jobpodtedfieldtitile"> Rename Skill Name </div>
            <div className="profiledetailnavmanu">
              <div>
                <CloseIcon
                  onClick={handleClose3}
                  style={{ fontSize: "1.5vw", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
          <div
            style={{ marginTop: "1vw", width: "106%" }}
            className="jobpostfieldinputbox"
          >
            <input
              type="text"
              name="email"
              value={skillName}
              onChange={(e) => {
                setskillName(e.target.value);
              }}
            />
          </div>
          <p style={{ color: "red", fontSize: "0.91vw" }}>{skillerror}</p>
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
                      setskillimage(e.target.files[0]);
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
          {skillimage && (
            <div
              style={{ marginTop: "0.3vw" }}
              className="inputfilesshowncatebox"
            >
              <div className="inputfilesshowncatboxsingle">
                <div className="inputfilesshowncatboxsingleimg">
                  <img src={img11} alt="" />
                </div>
                <div className="fileselctednamecate">{skillimage?.name}</div>
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
                      setskillimage();
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
              onClick={handleClose3}
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
              onClick={handleClose3}
            >
              Reset
            </div>
            <div
              onClick={() => editskill()}
              style={{ cursor: "pointer" }}
              className="handlecirclieaboutsave"
            >
              Update
            </div>
          </div>
        </Box>
      </Modal>
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

      <Modal
        open={open4}
        onClose={handleClose4}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="profiletitleandmenunav">
            <div className="profiledetailstitle">Add Category</div>
            <div className="profiledetailnavmanu">
              <div>
                <CloseIcon
                  onClick={handleClose4}
                  style={{ fontSize: "1.5vw", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
          <hr style={{ color: "#00000090" }} />
          <div
            style={{ left: "0vw", width: "94%", marginLeft: "0%" }}
            className="loginfield"
            onClick={handleClickx2}
          >
            <TextField
              id="outlined-basic"
              label="Category *"
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
              style={{ maxHeight: "18vw", overflow: "scroll", width: "36vw" }}
            >
              <Typography
                sx={{
                  p: 1,
                  pl: 1,
                  ml: 1,
                  pr: 0,
                  width: "35vw",
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
                        setCategogryid(data?._id);
                        setDegreeset(data?.category);
                        handleClosex2();
                        setcateError();
                      }}
                    >
                      {data?.category}
                    </Typography>
                  );
                })}
            </div>
          </Popover>
          <p style={{ color: "red", fontSize: "0.9vw" }}>{cateerror}</p>
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
              onClick={handleClose4}
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
              onClick={() => handleAddCategory()}
              style={{ cursor: "pointer" }}
              className="handlecirclieaboutsave"
            >
              Update
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={open5}
        onClose={handleClose5}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="profiletitleandmenunav">
            <div className="profiledetailstitle">Add Category and Subcategory</div>
            <div className="profiledetailnavmanu">
              <div>
                <CloseIcon
                  onClick={handleClose5}
                  style={{ fontSize: "1.5vw", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
          <hr style={{ color: "#00000090" }} />
          

          <div
            style={{ left: "0vw", width: "94%", marginLeft: "0%" }}
            className="loginfield"
            onClick={handleClickx2}
          >
            <TextField
              id="outlined-basic"
              label="Category *"
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
              style={{ maxHeight: "18vw", overflow: "scroll", width: "36vw" }}
            >
              <Typography
                sx={{
                  p: 1,
                  pl: 1,
                  ml: 1,
                  pr: 0,
                  width: "35vw",
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
                        setCategogryid(data?._id);
                        setDegreeset(data?.category);
                        handleClosex2();
                        setcateError();
                      }}
                    >
                      {data?.category}
                    </Typography>
                  );
                })}
            </div>
          </Popover>
          <p style={{ color: "red", fontSize: "0.9vw" }}>{cateerror}</p>
          {categogryid && (
            <div>
              <div
                style={{ left: "0vw", width: "94%", marginLeft: "0%" }}
                className="loginfield"
                onClick={handleClickx3}
              >
                <TextField
                  id="outlined-basic"
                  label="Sub Category *"
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
                    maxHeight: "18vw",
                    overflow: "scroll",
                    width: "36vw",
                  }}
                >
                  <Typography
                    sx={{
                      p: 1,
                      pl: 1,
                      ml: 1,
                      width: "35vw",
                      position: "fixed",
                      background: "white",
                      zIndex: "10",
                    }}
                  >
                    <input
                      onChange={(e) => {
                        setSearchsubCategorysearch(e.target.value);
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

                  {arrayoflongstudy?.length > 0 &&
                    arrayoflongstudy?.map((data, index) => {
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
                            setstudyset(data?.subCategory);
                            setsubCategogryid(data?._id);
                            setsubcateError("");
                            handleClosex3();
                          }}
                        >
                          {data?.subCategory}
                        </Typography>
                      );
                    })}
                </div>
              </Popover>
              <p style={{ color: "red", fontSize: "0.9vw" }}>{subcateerror}</p>
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
              onClick={handleClose4}
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
              onClick={() => handleAddSubCategory()}
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
