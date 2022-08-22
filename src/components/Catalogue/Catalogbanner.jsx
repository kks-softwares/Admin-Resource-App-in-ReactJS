import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import "./catalogue.css";

import imgx from "../../assets/Web 1280 – 2/pexels-vinicius-wiesehofer-1130626.png";
import Cataloguecarosel from "./CatalogCarosel";

import clocktick from "../../assets/Web 1280 – 2/Iconly-Light-outline-Time Circle.svg";
import uncheckboximg from "../../assets/Web 1280 – 2/radio_button_unchecked_black_24dp.svg";
import checkboximg from "../../assets/Web 1280 – 2/radio_button_checked_black_24dp.svg";
import Cataloguedescription from "./Cataloguedescription";
import CatalogueFaqreview from "./CatalogueFaqreview";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import HomePostjob from "./HomePostjob";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75vw",
  bgcolor: "background.paper",
  boxShadow: 24,
};

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1.5,
  pr: 1,
};
export default function Catalogbanner({ data, width }) {
  const navigate = useNavigate();
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const [checkcataelogform, setCheckcataelogform] = useState(1);
  return (
    <>
      <div className="catalogbanner-container">
        <div
          style={{ height: "fit-content", overflow: "hidden" }}
          className="catalogdetails"
        >
          <button
            style={{
              cursor: "pointer",
              zIndex: "100",
              padding: "0.5vw 0.7vw",
              backgroundColor: "white",
              color: "#000",
              fontSize:"1.2vw",
              borderRadius: "0.3vw",
              border: "1px solid #d7d7d7",
            }}
            onClick={() => navigate(-1)}
          >
            <ArrowBackIosNewIcon />
          </button>

          <div style={{ paddingTop: "2vw", color: "#064C87", display: "flex" }}>
            <div
              style={{
                color: "white",
                background: "#064C87",
                height: "2.5vw",
                padding:"0 1vw",
                marginRight:"1vw",
                lineHeight: "2.5vw",
                marginLeft: "0vw",
                fontSize:"1.2vw",
              }}
              className={"homeworktop-button"}
            >
              Design
            </div>
            <div
              style={{ color: "#064C87", height: "2.5vw", lineHeight: "2.5vw",fontSize:"1.1vw", }}
              className={"homeworktop-button2"}
            >
              Logo Making
            </div>
          </div>

          <div className="catalogue-titile mt-2">{data?.description}</div>
          <div className="catalogue--basics">
            <div>
              <img src={imgx} alt="" />
            </div>
            <div className="catalogue--basics-title">{data?.title}</div>
            <div className="catalogueratingb">
              <span>
                <StarIcon
                  style={{
                    marginRight: "1vw",
                    fontSize: "1.7vw",
                    position: "relative",
                    bottom: "0.2vw",
                  }}
                />
              </span>
              4.4 <span> (7645) </span>
            </div>
          </div>
          <div className="ctatlogcarouseltitle">
            <button
              style={{
                marginLeft: "2vw",
                width: "10vw",
                cursor: "auto",
                position: "relative",
                top: "4vw",
                zIndex: "100",
              }}
              className="hb-button"
            >
              Design
            </button>
            <div className="textofcontainercatalgue">
              You will get a professional Facebook cover photo banner design in
              24 hrs
            </div>
          </div>
          <div style={{ position: "relative", bottom: "2.2vw" }}>
            <Cataloguecarosel
              img1={data?.files[0]}
              img2={data?.files[1] ? data?.files[1] : data?.files[0]}
              img3={
                data?.files[2]
                  ? data?.files[2]
                  : data?.files[0]
                  ? data?.files[0]
                  : data?.files[1]
              }
              img4={
                data?.files[3]?.file
                  ? data?.files[3]
                  : data?.files[1]
                  ? data?.files[1]
                  : data?.files[0]
                  ? data?.files[0]
                  : data?.files[2]
              }
            />
          </div>
        </div>
        <div className="catalogdetails-form">
          <div className="catalogdetails-form-box">
            <div className="clfbtitile">Our Services</div>
            <div className="clfbcheckboxes">
              <div
                onClick={() => {
                  setCheckcataelogform(1);
                }}
                className="clfbcheckboxnamebox"
              >
                <div className="checkboxclbf">
                  {checkcataelogform === 1 ? (
                    <img src={checkboximg} alt="" />
                  ) : (
                    <img src={uncheckboximg} alt="" />
                  )}
                </div>
                <div className="checkboxclbfname">
                  {data?.serviceName1 ? data?.serviceName1 : "Starter"} <br />
                </div>
              </div>
              <div
                onClick={() => {
                  setCheckcataelogform(2);
                }}
                className="clfbcheckboxnamebox"
              >
                <div className="checkboxclbf">
                  {checkcataelogform === 2 ? (
                    <img src={checkboximg} alt="" />
                  ) : (
                    <img src={uncheckboximg} alt="" />
                  )}
                </div>
                <div className="checkboxclbfname">
                  {data?.serviceName2 ? data?.serviceName2 : "Standard"} <br />
                </div>
              </div>
              <div
                onClick={() => {
                  setCheckcataelogform(3);
                }}
                className="clfbcheckboxnamebox"
              >
                <div className="checkboxclbf">
                  {checkcataelogform === 3 ? (
                    <img src={checkboximg} alt="" />
                  ) : (
                    <img src={uncheckboximg} alt="" />
                  )}
                </div>
                <div className="checkboxclbfname">
                  {data?.serviceName3 ? data?.serviceName3 : "Advanced"} <br />
                </div>
              </div>
            </div>
            <hr style={{ color: "#00000050" }} />
            <div className="featuresalfbdiv">
              <div>Price</div>
              <div>$30</div>
            </div>

            <div className="featuresalfbdiv">
              <div>Delivery Time</div>
              <div>{data?.deliveryDate}</div>
            </div>
            <div className="featuresalfbdiv">
              <div>What Include</div>
              <div style={{ width: "50%", textAlign: "right" }}>
                ALL Design Page was Changed to SVG and Provide to as per the
                Flow
              </div>
            </div>

            <div className="timeofcatelogclfb">
              <span>
                <img
                  style={{
                    width: "1.3vw ",
                    objectFit: "contain",
                    margin: "0 1vw",
                  }}
                  src={clocktick}
                  alt=""
                />
              </span>{" "}
              3 days delivery - April 10, 2022
            </div>

            <button className="clfbbutton" onClick={() => handleOpen3()}>
              BookNow
            </button>
            <button className="clfbbutton">Chat with Me</button>
          </div>

            <Modal
              open={open3}
              onClose={handleClose3}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={width > 700 ? style : style1}>
                <HomePostjob
                  width={width}
                  handleClose={handleClose3}
                  setsubSelectedCategory={["hello", "jansjew", "qwdbw"]}
                  setSelectedCategory={"Backend"}
                />
              </Box>
            </Modal>
        </div>
      </div>
      <div
        style={{ display: "block", paddingTop: "0vw" }}
        className="catalogbanner-container"
      >
        <Cataloguedescription data={data} />
        <CatalogueFaqreview />
      </div>
    </>
  );
}
