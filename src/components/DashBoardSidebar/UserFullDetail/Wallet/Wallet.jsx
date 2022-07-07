import React, { useState } from "react";
import "./Wallet.css";
import axios from "axios";
import API_HOST from "../../../../env";
import Box from "@mui/material/Box";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import { SearchSharp } from "@mui/icons-material";
import { useNavigate } from "react-router";

import img11 from "../../../../assets/walletimage/Amazon_Pay-Logo.wine.svg";
import img12 from "../../../../assets/walletimage/Flipkart-Logo.wine.svg";
import img13 from "../../../../assets/walletimage/Google_Pay-Logo.wine.svg";
import img14 from "../../../../assets/walletimage/PayPal-Logo.wine.svg";
import img15 from "../../../../assets/walletimage/Paytm-Logo.wine.svg";
import imge3 from "../../../../assets/Dashboard/Skill center – 2/trending.svg";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

import imgdot from "../../../../assets/walletimage/Ellipse 1400.svg";
import imgdot1 from "../../../../assets/walletimage/Ellipse 1402.svg";
export default function Wallet() {
  const [openx, setOpenx] = React.useState(false);
  const [anchorElx, setAnchorElx] = React.useState(null);
  const canBeOpen = openx && Boolean(anchorElx);
  const id = canBeOpen ? "transition-popper" : undefined;

  const navigate = useNavigate();

  const [page, setPage] = useState(1);

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
  return (
    <div className="BrowseWorkMain-cntainer">
      <div style={{ marginTop: "1vw" }} className="profiledetailstitle">
        Digital Wallet
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "0 5vw",
        }}
      >
        <div className="cardofexamstype">
          <div className="titileofcardofexamstype">Total Amount</div>
          <div style={{ background: "#FF991F20" }} className="imgsamllexamtype">
            <img src={imge3} alt="" />
          </div>
          <div className="valueofcardofexamstype">$197328</div>
        </div>
        <div className="cardofexamstype">
          <div style={{ display: "flex" }} className="titileofcardofexamstype">
            Hold Amount{" "}
            <span>
              <HelpOutlineOutlinedIcon
                style={{ fontSize: "1.6vw", margin: "0 0.5vw" }}
              />
            </span>{" "}
          </div>
          <div style={{ background: "#FF991F20" }} className="imgsamllexamtype">
            <img src={imge3} alt="" />
          </div>
          <div className="valueofcardofexamstype">$1973</div>
        </div>
        <div className="cardofexamstype">
          <div className="titileofcardofexamstype">Redeem Amount</div>
          <div style={{ background: "#FF991F20" }} className="imgsamllexamtype">
            <img src={imge3} alt="" />
          </div>
          <div className="valueofcardofexamstype">$97328</div>
        </div>
        <div className="cardofexamstype">
          <div className="titileofcardofexamstype">Withdraw Amount</div>
          <div style={{ background: "#FF991F20" }} className="imgsamllexamtype">
            <img src={imge3} alt="" />
          </div>
          <div className="valueofcardofexamstype">$197328</div>
        </div>
      </div>

      <div style={{ marginTop: "1vw" }} className="profiledetailstitle">
        Redeem Cash
      </div>
      <div
        style={{
          display: "flex",

          alignItems: "center",
          padding: "0 1vw",
        }}
      >
        <div className="redeamCardoftranctionwallet">
          <img src={img15} alt="" />
        </div>
        <div className="redeamCardoftranctionwallet">
          <img src={img11} alt="" />
        </div>
        <div className="redeamCardoftranctionwallet">
          <img src={img14} alt="" />
        </div>
        <div className="redeamCardoftranctionwallet">
          <img src={img13} alt="" />
        </div>
      </div>
      <div style={{ marginTop: "1vw" }} className="profiledetailstitle">
        Redeem Through Shopping
      </div>
      <div
        style={{
          display: "flex",

          alignItems: "center",
          padding: "0 1vw",
        }}
      >
        <div className="redeamCardoftranctionwallet">
          <img src={img11} alt="" />
        </div>
        <div className="redeamCardoftranctionwallet">
          <img src={img12} alt="" />
        </div>
        <div className="redeamCardoftranctionwallet">
          <img src={img15} alt="" />
        </div>
        <div className="redeamCardoftranctionwallet">
          <img src={img11} alt="" />
        </div>
      </div>

      <div
        style={{ marginTop: "1vw", display: "flex", alignItems: "center" }}
        className="profiledetailstitle"
      >
        <div style={{ width: "75%" }}>Redeem List</div>
        <div style={{ width: "25%" }}>Redeem</div>
      </div>
      <div style={{ marginTop: "0.51vw", display: "flex" }}>
        <div style={{ width: "75%" }}>
          <div className="Redeamlistboxes">
            <div>
              Login your account and Get your Reward of Rs 500 will Credit your
              Wallet
            </div>
            <div>Claim Now</div>
          </div>
          <div className="Redeamlistboxes">
            <div>
              Login your account and Get your Reward of Rs 500 will Credit your
              Wallet
            </div>
            <div>Claim Now</div>
          </div>
          <div className="Redeamlistboxes">
            <div>
              Login your account and Get your Reward of Rs 500 will Credit your
              Wallet
            </div>
            <div>Claim Now</div>
          </div>
          <div className="Redeamlistboxes">
            <div>
              Login your account and Get your Reward of Rs 500 will Credit your
              Wallet
            </div>
            <div>Claim Now</div>
          </div>
          <div className="Redeamlistboxes">
            <div>
              Login your account and Get your Reward of Rs 500 will Credit your
              Wallet
            </div>
            <div>Claim Now</div>
          </div>
          <div className="Redeamlistboxes">
            <div>
              Login your account and Get your Reward of Rs 500 will Credit your
              Wallet
            </div>
            <div>Claim Now</div>
          </div>
        </div>
        <div style={{ width: "25%" }}>
          <div className="Redeamlistboxes1">
            <div className="flexofredeamname">
              <span>
                <img
                  src={imgdot}
                  style={{
                    width: "0.7vw",
                    objectFit: "contain",
                    margin: "1vw",
                  }}
                  alt=""
                />
              </span>{" "}
              Login Succesfully
            </div>
            <div className="flexofredeamname">
              <span>
                <img
                  src={imgdot}
                  style={{
                    width: "0.7vw",
                    objectFit: "contain",
                    margin: "1vw",
                  }}
                  alt=""
                />
              </span>{" "}
              Create a 1st Post
            </div>
            <div className="flexofredeamname">
              <span>
                <img
                  src={imgdot}
                  style={{
                    width: "0.7vw",
                    objectFit: "contain",
                    margin: "1vw",
                  }}
                  alt=""
                />
              </span>{" "}
              Bid a 1st Job
            </div>
            <div className="flexofredeamname">
              <span>
                <img
                  src={imgdot1}
                  style={{
                    width: "0.7vw",
                    objectFit: "contain",
                    margin: "1vw",
                  }}
                  alt=""
                />
              </span>{" "}
              Create a 25th Job
            </div>
            <div className="flexofredeamname">
              <span>
                <img
                  src={imgdot1}
                  style={{
                    width: "0.7vw",
                    objectFit: "contain",
                    margin: "1vw",
                  }}
                  alt=""
                />
              </span>{" "}
              Bid a 25th Job
            </div>
            <div className="flexofredeamname">
              <span>
                <img
                  src={imgdot1}
                  style={{
                    width: "0.7vw",
                    objectFit: "contain",
                    margin: "1vw",
                  }}
                  alt=""
                />
              </span>{" "}
              Refer your Friend
            </div>
            <div className="flexofredeamtag flexofredeamname">
              <span>
                <img style={{
                    width: "0.7vw",
                    objectFit: "contain",
                    margin: "0.51vw",
                  }} src={imgdot} alt="" />
              </span>{" "}
              complete
            </div>
            <div className="flexofredeamtag flexofredeamname">
              <span>
                <img style={{
                    width: "0.7vw",
                    objectFit: "contain",
                    margin: "0.51vw",
                  }} src={imgdot1} alt="" />
              </span>{" "}
              In complete
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "1vw" }} className="profiledetailstitle">
        Transaction List
      </div>
      <div className="navoftableblogs">
        <div style={{ width: "15vw" }}>Transaction Via</div>
        <div style={{ width: "15vw" }}>Transaction id</div>
        <div style={{ width: "12vw" }}>Type</div>
        <div style={{ width: "12vw" }}>Date </div>
        <div style={{ width: "12vw" }}>Amount</div>
        <div style={{ width: "15vw" }}>Status</div>
      </div>
      <div className="navoftableblogsdata">
        <div style={{ width: "15vw" }}>Paytm</div>
        <div style={{ width: "15vw" }}>#341831</div>
        <div style={{ width: "12vw" }}>Credited</div>

        <div style={{ width: "12vw" }}>10/12/2022</div>
        <div style={{ width: "12vw" }}>$200</div>
        <div style={{ width: "15vw", color: "#41B541", fontWeight: "500" }}>
          Completed
        </div>
      </div>
      <div className="navoftableblogsdata">
        <div style={{ width: "15vw" }}>Paytm</div>
        <div style={{ width: "15vw" }}>#341831</div>
        <div style={{ width: "12vw" }}>Credited</div>

        <div style={{ width: "12vw" }}>10/12/2022</div>
        <div style={{ width: "12vw" }}>$200</div>
        <div style={{ width: "15vw", color: "#41B541", fontWeight: "500" }}>
          Completed
        </div>
      </div>
      <div className="navoftableblogsdata">
        <div style={{ width: "15vw" }}>Paytm</div>
        <div style={{ width: "15vw" }}>#341831</div>
        <div style={{ width: "12vw" }}>Credited</div>

        <div style={{ width: "12vw" }}>10/12/2022</div>
        <div style={{ width: "12vw" }}>$200</div>
        <div style={{ width: "15vw", color: "#41B541", fontWeight: "500" }}>
          Completed
        </div>
      </div>
      <div className="navoftableblogsdata">
        <div style={{ width: "15vw" }}>Paytm</div>
        <div style={{ width: "15vw" }}>#341831</div>
        <div style={{ width: "12vw" }}>Credited</div>

        <div style={{ width: "12vw" }}>10/12/2022</div>
        <div style={{ width: "12vw" }}>$200</div>
        <div style={{ width: "15vw", color: "#41B541", fontWeight: "500" }}>
          Completed
        </div>
      </div>

      <div style={{ marginLeft: "36vw" }} className="loadmorebutton">
        <button>Load More</button>
      </div>

    </div>
  );
}
