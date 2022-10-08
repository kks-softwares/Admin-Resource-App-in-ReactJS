import React, { useEffect, useState } from "react";

import "./catalogue.css";

import Cataloguecarosel from "./CatalogCarosel";

import clocktick from "../../assets/Web 1280 – 2/Iconly-Light-outline-Time Circle.svg";

import Cataloguedescription from "./Cataloguedescription";
import CatalogueFaqreview from "./CatalogueFaqreview";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import HomePostjob from "./HomePostjob";
import { useSelector } from "react-redux";
import HomePostjob1 from "./HomePostjob1";
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
  const { user, loggedInStatus } = useSelector((state) => state.user);
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const [checkcataelogform, setCheckcataelogform] = useState(1);

  const [status, setStatus] = useState(1);

  const radioHandler = (status) => {
    setStatus(status);
  };

  //-------- Total Star Rating Functionality-------//
  const [ratingStar1x, setRatingStar1x] = useState(0);
  const [ratingStar2x, setRatingStar2x] = useState(0);
  const [ratingStar3x, setRatingStar3x] = useState(0);
  const [ratingStar4x, setRatingStar4x] = useState(0);
  const [ratingStar5x, setRatingStar5x] = useState(0);
  const [totalStarRatingx, setTotalStarRatingx] = useState(0);

  let ratingStar1 = 0;
  let ratingStar2 = 0;
  let ratingStar3 = 0;
  let ratingStar4 = 0;
  let ratingStar5 = 0;
  let totalStarRating = 0;

  const handleStarOne = () => {
    data?.catalogueBuyer?.map((item, index) => {
      if (item?.buyer_id?.rating === 1) {
        setRatingStar1x(++ratingStar1);
        setTotalStarRatingx(++totalStarRating);
      }
      if (item?.buyer_id?.rating === 2) {
        setRatingStar2x(++ratingStar2);
        setTotalStarRatingx(++totalStarRating);
      }
      if (item?.buyer_id?.rating === 3) {
        setRatingStar3x(++ratingStar3);
        setTotalStarRatingx(++totalStarRating);
      }
      if (item?.buyer_id?.rating === 4) {
        setRatingStar4x(++ratingStar4);
        setTotalStarRatingx(++totalStarRating);
      }
      if (item?.buyer_id?.rating === 5) {
        setRatingStar5x(++ratingStar5);
        setTotalStarRatingx(++totalStarRating);
      }
    });
  };

  useEffect(() => {
    handleStarOne();
  }, [data]);

  const totalStarRatingCview =
    ratingStar1x * 1 +
    ratingStar2x * 2 +
    ratingStar3x * 3 +
    ratingStar4x * 4 +
    (ratingStar5x * 5) / totalStarRatingx;
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
              borderRadius: width > 700 ? "0.3vw" : "1vw",
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
                height: width > 700 ? "2.5vw" : "8vw",
                lineHeight: width > 700 ? "2.5vw" : "8vw",
                marginLeft: "0vw",
              }}
              className={"homeworktop-button"}
            >
              {data?.category?.category}
            </div>
            <div
              style={{
                color: "#064C87",
                height: width > 700 ? "2.5vw" : "8vw",
                width: width > 700 ? "" : "-webkit-fill-available",
              }}
              className={"homeworktop-button2"}
            >
              {data?.subCategory?.subCategory}
            </div>
          </div>

          <div className="catalogue-titile mt-2">{data?.catalougeTitle}</div>
          <div className="catalogue--basics">
            <div>
              <img src={data?.u_id?.media} alt="" />
            </div>
            <div className="catalogue--basics-title">
              {data?.u_id?.fullName}
            </div>
            {/* <div className="catalogueratingb">
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
              {totalStarRatingCview ? totalStarRatingCview : 0}
            </div> */}
          </div>
          <div className="ctatlogcarouseltitle">
            {/* <button
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
              {data?.bannerTitle}
            </button> */}
            <div className="textofcontainercatalgue">
              {/* You will get a professional Facebook cover photo banner design in
              24 hrs */}
              {/* {data?.subCategory?.subCategory} */}
              {data?.bannerTitle}
            </div>
          </div>
          <div style={{ position: "relative", bottom: "2.2vw" }}>
            <Cataloguecarosel
              width={width}
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
        <div  className="catalogdetails-form">
          <div className="catalogdetails-form-box">
            <div className="clfbtitile">Our Services</div>
            <div className="clfbcheckboxes">
              <input
                type="radio"
                name="release"
                checked={status === 1}
                onClick={(e) => radioHandler(1)}
              />
              <input
                type="radio"
                name="release"
                checked={status === 2}
                onClick={(e) => radioHandler(2)}
              />
              <input
                type="radio"
                name="release"
                checked={status === 3}
                onClick={(e) => radioHandler(3)}
              />

              {/* <div
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
                  {data?.servicePrice1 ? data?.servicePrice1 : "Starter"} <br />
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
                  {data?.servicePrice2 ? data?.servicePrice2 : "Standard"} <br />
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
                  {data?.servicePrice3 ? data?.servicePrice3 : "Advanced"} <br />
                </div>
              </div> */}
            </div>
            <hr style={{ color: "#00000050" }} />
            {status === 1 && (
              <>
                <div className="featuresalfbdiv">
                  <div>Plan Name</div>
                  <div>{data?.serviceName1 ? data?.serviceName1 : "---"}</div>
                </div>
                <div className="featuresalfbdiv">
                  <div>Price</div>
                  <div>{data?.servicePrice1 ? data?.servicePrice1 : "---"}</div>
                </div>
                <div className="featuresalfbdiv">
                  <div>Delivery Time</div>
                  <div>{data?.serviceDays1 ? data?.serviceDays1 : "---"}</div>
                </div>
                <div className="featuresalfbdiv">
                  <div>What Include</div>
                  <div style={{ width: "50%", textAlign: "right" }}>
                    {/* ALL Design Page was Changed to SVG and Provide to as per the
                Flow */}
                    {data?.whatInclude1 ? data?.whatInclude1 : "---"}
                  </div>
                </div>
              </>
            )}
            {status === 2 && (
              <>
                <div className="featuresalfbdiv">
                  <div>Plan Name</div>
                  <div>{data?.serviceName2 ? data?.serviceName2 : "---"}</div>
                </div>
                <div className="featuresalfbdiv">
                  <div>Price</div>
                  <div>{data?.servicePrice2 ? data?.servicePrice1 : "---"}</div>
                </div>
                <div className="featuresalfbdiv">
                  <div>Delivery Time</div>
                  <div>{data?.serviceDays2 ? data?.serviceDays2 : "---"}</div>
                </div>
                <div className="featuresalfbdiv">
                  <div>What Include</div>
                  <div style={{ width: "50%", textAlign: "right" }}>
                    {data?.whatInclude2 ? data?.whatInclude2 : "---"}
                  </div>
                </div>
              </>
            )}
            {status === 3 && (
              <>
                <div className="featuresalfbdiv">
                  <div>Plan Name</div>
                  <div>{data?.serviceName3 ? data?.serviceName3 : "---"}</div>
                </div>
                <div className="featuresalfbdiv">
                  <div>Price</div>
                  <div>{data?.servicePrice3 ? data?.servicePrice3 : "---"}</div>
                </div>
                <div className="featuresalfbdiv">
                  <div>Delivery Time</div>
                  <div>{data?.serviceDays3 ? data?.serviceDays3 : "---"}</div>
                </div>
                <div className="featuresalfbdiv">
                  <div>What Include</div>
                  <div style={{ width: "50%", textAlign: "right" }}>
                    {data?.whatInclude3 ? data?.whatInclude3 : "---"}
                  </div>
                </div>
              </>
            )}
            <div className="timeofcatelogclfb">
              <span>
                <img
                  style={{
                    width: width > 700 ? "1.3vw " : "4vw",
                    objectFit: "contain",
                    margin: "0 1vw",
                  }}
                  src={clocktick}
                  alt=""
                />
              </span>{" "}
              {data?.deliveryDate} Delivery
            </div>

            {user?.userId === data?.userId ? (
              ""
            ) : (
              <button hidden className="clfbbutton" onClick={() => handleOpen3()}>
                BookNow
              </button>
            )}
            {user?.userId === data?.userId
              ? ""
              : user?.userName && (
                  <button hidden className="clfbbutton">Chat with Me</button>
                )}
          </div>

          <Modal
            open={open3}
            onClose={handleClose3}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={width > 700 ? style : style1}>
              {!user._id ? (
                <HomePostjob
                  width={width}
                  handleClose={handleClose3}
                  showBudget={data?.budget}
                  showDuration={data?.deliveryDate}
                  catalogueID={data?._id}
                  catalogue={data}
                  SelectedCategory={data?.category?.category}
                  SelectedCategoryId={data?.category?._id}
                  SubSelectedCategory={data?.subCategory?.subCategory}
                  SubSelectedCategoryId={data?.subCategory?._id}
                />
              ) : (
                <HomePostjob1
                  width={width}
                  handleClose={handleClose3}
                  showBudget={data?.budget}
                  showDuration={data?.deliveryDate}
                  catalogueID={data?._id}
                  catalogue={data}
                  SelectedCategory={data?.category?.category}
                  SelectedCategoryId={data?.category?._id}
                  SubSelectedCategory={data?.subCategory?.subCategory}
                  SubSelectedCategoryId={data?.subCategory?._id}
                />
              )}
            </Box>
          </Modal>
        </div>
      </div>
      <div
        style={{ display: "block", paddingTop: "0vw" }}
        className="catalogbanner-container"
      >
        <Cataloguedescription data={data} width={width} />
        <CatalogueFaqreview data={data} width={width} />
      </div>
    </>
  );
}
