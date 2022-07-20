import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AttachFileRounded, EmojiEmotionsRounded } from "@mui/icons-material";
import { SearchSharp } from "@mui/icons-material";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import Box from "@mui/material/Box";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import img12 from "../../../assets/Landing page/Group 787.svg";
import img3x from "../../../assets/Dashboard/send_black_24dp.svg";
import img2x from "../../../assets/About/damir-kopezhanov-nC6CyrVBtkU-unsplash.png";
import { useSelector } from "react-redux";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import StarRatings from "react-star-ratings";

import axios from "axios";
import API_HOST from "../../../env";
import imgfile from "../../../assets/Dashboard/documents.svg";
import { TextEditor } from "../BiddingForm/Texteditor";
export default function EndContactdetailjob() {
  const [openx, setOpenx] = React.useState(false);
  const [anchorElx, setAnchorElx] = React.useState(null);
  const { bidingId } = useParams();

  const { user, loggedInStatus } = useSelector((state) => state.user);
  const [workhistorytoggle, setWorkhistorytoggle] = useState(1);
  const canBeOpen = openx && Boolean(anchorElx);
  const id = canBeOpen ? "transition-popper" : undefined;
  const navigate = useNavigate();

  useEffect(() => {
    var chatHistory = document.querySelector(".chat-withchat-box");
    if (chatHistory) {
      chatHistory.scrollTop = chatHistory.scrollHeight;
    }
  });

  const inputRef = useRef();
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState();

  const { messangers } = useSelector((state) => state.filters);

  const [datadetailsjobbidding, setDatadetailsjobbidding] = useState();

  useEffect(() => {
    axios
      .get(`${API_HOST}/biding/viewBiding?bidingId=${bidingId}`)
      .then((res) => {
        setDatadetailsjobbidding(res?.data?.success?.data[0]);
        axios
          .get(
            `${API_HOST}/jobPost/viewJobPost?jobPostId=${res?.data?.success?.data[0]?.appliedForJobPost[0]?.jobPostId}`
          )
          .then((res) => {
            setDatadetailsjobpost(res?.data?.success?.data[0]);
          });
      });
  }, []);

  const [datadetailsjobpost, setDatadetailsjobpost] = useState();

  useEffect(() => {
    const el = document.querySelector(".chat-withchat-box");
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messangers]);

  useEffect(() => {
    const el = document.querySelector(".chat-withchat-box");
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, []);

  const [newchat, setnewchat] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject.emoji);
    setchatMessage(chatMessage + emojiObject.emoji);
    setMessage(chatMessage + emojiObject.emoji);
  };

  function changeRating(newRating, name) {
    setrating(newRating);
  }
  const [rating, setrating] = useState(0);
  const [chatMessage, setchatMessage] = useState("");
  const [setemojiview, setSetemojiview] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const handleSearchCategory = (e) => {
    axios
      .get(`${API_HOST}/category/viewCategory?categories=${e.target.value}`)
      .then((res) => {
        setAllcategory(res?.data?.success?.data?.docs);

        setOpenx(true);
      });
  };

  const [setSelectedCategory, setSetSelectedCategory] = useState("");
  const [setsubSelectedCategory, setsubSetSelectedCategory] = useState([]);
  const [allcategory, setAllcategory] = useState([0]);

  const [description, setDescription] = useState("");

  return (
    <div className="BrowseWorkMain-cntainer">
      <div className="searchboxcontainer">
        <div className="serachjobbox">
          <span>
            <SearchSharp style={{ fontSize: "1.7vw" }} />
          </span>
          <input
            type="text"
            onChange={(e) => {
              handleSearchCategory(e);
              setAnchorElx(e.currentTarget);
            }}
          />
          <Popper id={id} open={openx} anchorEl={anchorElx} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Box
                  sx={{
                    width: "35vw",
                    border: 1,
                    p: 1,
                    bgcolor: "background.paper",
                    position: "relative",
                    top: "0.81vw",
                    left: "3.4vw",
                    borderRadius: "0.3vw",
                    maxHeight: "16vw",
                    overflow: "scroll",
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <div
                      onClick={() => {
                        setOpenx(false);
                        setAnchorElx(null);
                      }}
                      className="recentsearch"
                    >
                      Recent search
                    </div>

                    {allcategory.length > 0 &&
                      allcategory?.map((cate) => {
                        return (
                          <div
                            className="recentnamesearc"
                            onClick={() => {
                              setSetSelectedCategory(cate?.categories);
                              setsubSetSelectedCategory(cate?.subCategories);
                            }}
                          >
                            {cate?.categories}
                            <span>
                              <ArrowUpwardIcon
                                style={{
                                  fontSize: "1.7vw",
                                  transform: "rotate(-45deg)",
                                }}
                              />
                            </span>
                          </div>
                        );
                      })}
                  </div>
                </Box>
              </Fade>
            )}
          </Popper>
          <button
            style={{ width: "11vw", height: "2.6vw" }}
            className="hb-button"
          >
            Search
          </button>
        </div>

        <div
          onClick={() => {
            navigate("/dashbaord/wallet");
          }}
          className="digitalwallate"
        >
          Digital Wallet
          <span>$1200</span>
        </div>
      </div>

      <div className="titleofcontarct">
        {datadetailsjobbidding?.appliedForJobPost[0]?.jobTitle}
      </div>
      <div
        style={{ position: "relative", right: "1vw", width: "80vw" }}
        className="profileworkhistruytoggleer"
      >
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
            width: "14vw",
          }}
          onClick={() => {
            setWorkhistorytoggle(1);
          }}
        >
          Milestone & Earnings
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
          }}
          onClick={() => {
            setWorkhistorytoggle(2);
          }}
        >
          Messages & Files
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
          }}
          onClick={() => {
            setWorkhistorytoggle(3);
          }}
        >
          Contract Info
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
          }}
          onClick={() => {
            setWorkhistorytoggle(4);
          }}
        >
          Review & End
        </div>
        <div
          style={{
            color: "#064C87",
            borderBottom: "0.3vw solid #064C87",
            width: "12vw",
            position: "relative",
            right:
              workhistorytoggle === 1
                ? "56vw"
                : workhistorytoggle === 2
                ? "41vw"
                : workhistorytoggle === 3
                ? "27vw"
                : "13vw",
            bottom: "0.3vw",
            transitionDuration: "1s",
            borderRadius: "0.2vw",
          }}
        ></div>
      </div>
      {workhistorytoggle === 1 ? (
        <div>
          <div className="contractMileStonesmoney">
            <div className="dontractaboutmonet">
              <div className="dontractaboutmonet1">Budget</div>
              <div className="dontractaboutmonet2">
                ${datadetailsjobbidding?.appliedForJobPost[0]?.budget}
              </div>
            </div>
            <div className="dontractaboutmonet">
              <div className="dontractaboutmonet1">In Escow</div>
              <div className="dontractaboutmonet2">$1000</div>
            </div>
            <div className="dontractaboutmonet">
              <div className="dontractaboutmonet1">Milestone Paid</div>
              <div className="dontractaboutmonet2">$900</div>
            </div>
            <div className="dontractaboutmonet">
              <div className="dontractaboutmonet1">Remaining</div>
              <div className="dontractaboutmonet2">$400</div>
            </div>
            <div className="dontractaboutmonet">
              <div className="dontractaboutmonet1">Total Earnings</div>
              <div className="dontractaboutmonet2">$1100</div>
            </div>
            <div className="dontractaboutmonet">
              {/* <div className="dontractaboutmonet1" >Budget</div>
                <div className="dontractaboutmonet2">$1500</div> */}
            </div>
          </div>
          <div className="What-nextcontarct">
            What's Next to be you and{" "}
            {datadetailsjobbidding?.appliedForJobPost[0]?.name} ?
          </div>
          <div className="whatnextboxes">
            <div className="whatboxconatct">
              <div style={{ width: "80%" }}>
                <div className="whatboxcontarctadata">Propose Milestone</div>
                <div
                  style={{ fontSize: "0.9vw", color: "black" }}
                  className="whatboxcontarctadata"
                >
                  Best if there is more work is need to be done in this projects
                </div>
              </div>
              <div style={{ width: "20%" }}>
                <img
                  src={imgfile}
                  style={{ width: "4vw", objectFit: "contain" }}
                  alt=""
                />
              </div>
            </div>
            <div className="whatboxconatct">
              <div style={{ width: "80%" }}>
                <div className="whatboxcontarctadata">
                  Propose a new Contract
                </div>
                <div
                  style={{ fontSize: "0.9vw", color: "black" }}
                  className="whatboxcontarctadata"
                >
                  Best if there a New Project you are ready to get started{" "}
                </div>
              </div>
              <div style={{ width: "20%" }}>
                <img
                  src={imgfile}
                  style={{ width: "4vw", objectFit: "contain" }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="What-nextcontarct">
            Completed Milestone (
            {datadetailsjobbidding?.milestoneDescription5
              ? "5"
              : datadetailsjobbidding?.milestoneDescription4
              ? "4"
              : datadetailsjobbidding?.milestoneDescription3
              ? "3"
              : datadetailsjobbidding?.milestoneDescription2
              ? "2"
              : "1"}
            )
          </div>

          {datadetailsjobbidding?.milestoneDescription1 ? (
            <>
              <div className="colpletedmilestonescontacts">
                <div>1. {datadetailsjobbidding?.milestoneDescription1}</div>
                <div
                  style={{
                    fontSize: "0.95vw",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  ${datadetailsjobbidding?.milestonePrice1} Paid
                </div>
                <hr style={{ width: "90%" }} />
              </div>
            </>
          ) : (
            ""
          )}
          {datadetailsjobbidding?.milestoneDescription2 ? (
            <>
              <div className="colpletedmilestonescontacts">
                <div>2. {datadetailsjobbidding?.milestoneDescription2}</div>
                <div
                  style={{
                    fontSize: "0.95vw",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  ${datadetailsjobbidding?.milestonePrice2} Paid
                </div>
                <hr style={{ width: "90%" }} />
              </div>
            </>
          ) : (
            ""
          )}
          {datadetailsjobbidding?.milestoneDescription3 ? (
            <>
              <div className="colpletedmilestonescontacts">
                <div>3. {datadetailsjobbidding?.milestoneDescription3}</div>
                <div
                  style={{
                    fontSize: "0.95vw",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  ${datadetailsjobbidding?.milestonePrice3} Paid
                </div>
                <hr style={{ width: "90%" }} />
              </div>
            </>
          ) : (
            ""
          )}
          {datadetailsjobbidding?.milestoneDescription4 ? (
            <>
              <div className="colpletedmilestonescontacts">
                <div>4. {datadetailsjobbidding?.milestoneDescription4}</div>
                <div
                  style={{
                    fontSize: "0.95vw",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  ${datadetailsjobbidding?.milestonePrice4} Paid
                </div>
                <hr style={{ width: "90%" }} />
              </div>
            </>
          ) : (
            ""
          )}
          {datadetailsjobbidding?.milestoneDescription5 ? (
            <>
              <div className="colpletedmilestonescontacts">
                <div>5. {datadetailsjobbidding?.milestoneDescription5}</div>
                <div
                  style={{
                    fontSize: "0.95vw",
                    color: "black",
                    fontWeight: "400",
                  }}
                >
                  ${datadetailsjobbidding?.milestonePrice5} Paid
                </div>
                <hr style={{ width: "90%" }} />
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      {workhistorytoggle === 2 ? (
        <div className="chatcontaract">
          <div
            style={{ width: "51vw", padding: "0vw" }}
            className="chatboxescontact"
          >
            <div id="messageBodyx" className="chatfielsarea chat-withchat-box">
              <div className="leftdata2c">
                <div className="leftdatac">Hi Revanth</div>
              </div>
              <div className="rightdata2c">
                <div className="rightdatac">Hi Revanth</div>
              </div>
              <div className="leftdata2c">
                <div className="leftdatac">
                  <img src={user?.media} alt="" />
                </div>
              </div>
              <div className="rightdata2c">
                <div className="rightdatac">
                  <img src={user?.media} alt="" />
                </div>
              </div>
            </div>
            <div className="chatsendfielsarea">
              <div className="fileandemojiandsendbox">
                <div style={{ display: "flex" }}>
                  <span>
                    <label style={{ cursor: "pointer" }}>
                      <AttachFileRounded />
                      <input
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) => {
                          setFile(e.target.files[0]);
                        }}
                        hidden
                      />
                    </label>
                  </span>
                  <span>
                    <EmojiEmotionsRounded onClick={() => setToggle(!toggle)} />
                  </span>
                </div>
                {toggle ? (
                  <div style={{ hieght: "1vw" }}>
                    <div
                      style={{
                        position: "relative",
                        right: "5vw",
                        bottom: "22rem",
                        width: "0.001vw",
                        height: "0.001vw",
                      }}
                    >
                      <Picker
                        onEmojiClick={onEmojiClick}
                        skinTone={SKIN_TONE_MEDIUM_DARK}
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="text-input" style={{ display: "flex" }}>
                <input
                  type="text"
                  value={file ? file.name : message}
                  placeholder={"Type message .."}
                  ref={inputRef}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                {file ? (
                  <span>
                    <CancelTwoToneIcon
                      onClick={() => {
                        setFile(null);
                      }}
                      style={{ fontSize: "1.5vw", cursor: "pointer" }}
                    />
                  </span>
                ) : (
                  ""
                )}
              </div>

              <div className="fileandemojiandsendbox">
                <div>
                  <img
                    src={img3x}
                    variant="contained"
                    style={{
                      maxHieght: "2vw !important",
                      width: "2.53vw",
                      objectFit: "contain",
                    }}
                    className="sendbuttonx"
                    alt=""
                    //   onClick={handlesendMessage}
                  />
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div style={{ width: "26vw" }} className="chatboxescontact">
            <div
              style={{
                background: "white",
                display: "block",
                height: "2.5rem",
              }}
              className="chatsendfielsarea"
            >
              <div className="filesandlink">Files & Links</div>
              {/* <hr style={{ color: "black" }} /> */}
            </div>
            <div className="chatfielsarea chat-withchat-box">
              <div className="flexofimageanflink">
                <img
                  src={img2x}
                  style={{
                    width: "8vw",
                    height: "4.5vw",
                    objectFit: "cover",
                    marginRight: "1vw",
                  }}
                  alt=""
                />
                <div className="nameofimageandfile">
                  <div>Image For Banner</div>
                  <div
                    style={{
                      textAlign: "right",
                      fontSize: "0.8vw",
                      fontWeight: "400",
                    }}
                  >
                    12:00 PM
                  </div>
                </div>
              </div>
              <div className="flexofimageanflink">
                <img
                  src={img2x}
                  style={{
                    width: "8vw",
                    height: "4.5vw",
                    objectFit: "cover",
                    marginRight: "1vw",
                  }}
                  alt=""
                />
                <div className="nameofimageandfile">
                  <div>Image For Banner</div>
                  <div
                    style={{
                      textAlign: "right",
                      fontSize: "0.8vw",
                      fontWeight: "400",
                    }}
                  >
                    12:00 PM
                  </div>
                </div>
              </div>
              <div className="flexofimageanflink">
                <img
                  src={img2x}
                  style={{
                    width: "8vw",
                    height: "4.5vw",
                    objectFit: "cover",
                    marginRight: "1vw",
                  }}
                  alt=""
                />
                <div className="nameofimageandfile">
                  <div>Image For Banner</div>
                  <div
                    style={{
                      textAlign: "right",
                      fontSize: "0.8vw",
                      fontWeight: "400",
                    }}
                  >
                    12:00 PM
                  </div>
                </div>
              </div>
              <div className="flexofimageanflink">
                <img
                  src={img2x}
                  style={{
                    width: "8vw",
                    height: "4.5vw",
                    objectFit: "cover",
                    marginRight: "1vw",
                  }}
                  alt=""
                />
                <div className="nameofimageandfile">
                  <div>Image For Banner</div>
                  <div
                    style={{
                      textAlign: "right",
                      fontSize: "0.8vw",
                      fontWeight: "400",
                    }}
                  >
                    12:00 PM
                  </div>
                </div>
              </div>
              <div className="flexofimageanflink">
                <img
                  src={img2x}
                  style={{
                    width: "8vw",
                    height: "4.5vw",
                    objectFit: "cover",
                    marginRight: "1vw",
                  }}
                  alt=""
                />
                <div className="nameofimageandfile">
                  <div>Image For Banner</div>
                  <div
                    style={{
                      textAlign: "right",
                      fontSize: "0.8vw",
                      fontWeight: "400",
                    }}
                  >
                    12:00 PM
                  </div>
                </div>
              </div>
              <div className="flexofimageanflink">
                <img
                  src={img2x}
                  style={{
                    width: "8vw",
                    height: "4.5vw",
                    objectFit: "cover",
                    marginRight: "1vw",
                  }}
                  alt=""
                />
                <div className="nameofimageandfile">
                  <div>Image For Banner</div>
                  <div
                    style={{
                      textAlign: "right",
                      fontSize: "0.8vw",
                      fontWeight: "400",
                    }}
                  >
                    12:00 PM
                  </div>
                </div>
              </div>
              <div className="flexofimageanflink">
                <img
                  src={img2x}
                  style={{
                    width: "8vw",
                    height: "4.5vw",
                    objectFit: "cover",
                    marginRight: "1vw",
                  }}
                  alt=""
                />
                <div className="nameofimageandfile">
                  <div>Image For Banner</div>
                  <div
                    style={{
                      textAlign: "right",
                      fontSize: "0.8vw",
                      fontWeight: "400",
                    }}
                  >
                    12:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {workhistorytoggle === 3 ? (
        <div className="chatcontaract">
          <div
            style={{ width: "51vw", padding: "0vw", height: "37rem" }}
            className="chatboxescontact"
          >
            <div className="flexofdtaes">
              <div className="datesofcontact">Start Date</div>
              <div className="datesofcontact2">
                {datadetailsjobbidding?.assignedJobDate}
              </div>
            </div>
            <div className="flexofdtaes">
              <div className="datesofcontact">End Date</div>
              <div className="datesofcontact2">
                {datadetailsjobbidding?.assignedJobComplitionDate}(Expected)
              </div>
            </div>
            <hr style={{ width: "90%", marginLeft: "2vw" }} />
            <div className="flexofdtaes">
              <div className="datesofcontact">Verified Name</div>
              <div className="datesofcontact2">
                {datadetailsjobbidding?.appliedForJobPost[0]?.name}
              </div>
            </div>
            <div className="flexofdtaes">
              <div className="datesofcontact">Id</div>
              <div className="datesofcontact2">24235523</div>
            </div>
            <div className="flexofdtaes">
              <div className="datesofcontact">Original Proposal</div>
              <div className="datesofcontact2">View</div>
            </div>
          </div>
          <div
            style={{ width: "26vw", height: "37rem" }}
            className="chatboxescontact"
          >
            <div className="jobdescriptioncontact">Job Description </div>
            <div className="jobdecriptioncontact2">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage.
            </div>

            <div
              style={{
                width: "17vw",

                height: "fit-content",
                display: "block",
                top: "2vw",
                flexDirection: "column",
                padding: "0.5vw 0vw",
              }}
              className="hb-5boxesresult"
            >
              <div style={{ margin: "1vw" }} className="hb-trustbox">
                <div className="hbimgminibox">
                  <div className="hbimgmini">
                    <img src={img12} alt="" />
                  </div>
                </div>
                <div className="hbimgminibox-dtata">
                  <div className="hbtrusttext"> Posted On</div>
                  <div className="hbtrusttext-exactvalue">Sep 20 ,2021</div>
                </div>
              </div>
              <div style={{ margin: "1vw" }} className="hb-trustbox">
                <div className="hbimgminibox">
                  <div className="hbimgmini">
                    <img src={img12} alt="" />
                  </div>
                </div>
                <div className="hbimgminibox-dtata">
                  <div className="hbtrusttext"> Posted by</div>
                  <div className="hbtrusttext-exactvalue">Akilesh Kumar R</div>
                </div>
              </div>
              <div style={{ margin: "1vw" }} className="hb-trustbox">
                <div className="hbimgminibox">
                  <div className="hbimgmini">
                    <img src={img12} alt="" />
                  </div>
                </div>
                <div className="hbimgminibox-dtata">
                  <div className="hbtrusttext">Duration</div>
                  <div className="hbtrusttext-exactvalue">3 Months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {workhistorytoggle === 4 ? (
        <div className="chatcontaract">
          <div
            style={{ width: "80vw", padding: "0vw", height: "32rem" }}
            className="chatboxescontact"
          >
            <div className="flexofdtaes">
              <div className="datesofcontact">Ratings</div>
            </div>
            <div className="workhistryboxdate">
              <span
                style={{
                  width: "10vw",
                  position: "relative",
                  bottom: "0.5vw",
                  left: "2vw",
                }}
              >
                <StarRatings
                  rating={datadetailsjobbidding?.ratings}
                  starRatedColor="#064C87"
                  starDimension="1.6vw  "
                  starSpacing="0.3vw"
                  numberOfStars={5}
                  name="rating"
                />
              </span>
            </div>

            <hr style={{ width: "90%", marginLeft: "2vw" }} />
            <div
              style={{
                left: "0vw",
                width: "96%",
                margin: "2vw 1vw 2vw 1vw",
                display: "block",
              }}
              className="loginfield"
            >
              <div
                style={{ marginBottom: "0.0vw", marginBottom: "1vw" }}
                className="jobpodtedfieldtitile"
              >
                Review
              </div>
              <div>
              <div
                style={{ width: "76vw" }}
                dangerouslySetInnerHTML={{
                  __html: datadetailsjobbidding?.reviews,
                }}
              ></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
