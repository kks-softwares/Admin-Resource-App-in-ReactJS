import React, { useEffect, useState } from "react";
import "./profile.css";
import img1 from "../../../../assets/My profile – 28/Component 70 – 6.svg";
import img46 from "../../../../assets/My profile – 28/Landing page – 19.png";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import API_HOST from "../../../../env";
import { useSelector } from "react-redux";

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
export default function Profileportfolio() {
  const classes = useStyles();
  const [allprotfolio, setAllprotfoilio] = useState([]);
  const { user, loggedInStatus } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      axios
        .get(
          `${API_HOST}/portfolio/viewProjectPortfolio?userId=${user?.userId}`
        )
        .then((res) => {
          setAllprotfoilio(res.data.success.data?.docs);
        });
    }
  }, [user]);

  return (
    <div style={{ height: "fit-content" }} className="profilebadgecontainer">
      <div
        style={{ padding: "2vw", margin: "0 0vw" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Portfolio</div>
        <div hidden className="profiledetailnavmanu">
          <div>
            <Link to="/addportfolio">
              <img src={img1} alt="" />
            </Link>
          </div>
        </div>
      </div>

      <div className="pcatalofboxes">
        {allprotfolio.length > 0 &&
          allprotfolio?.map((portfolio, index) => {
            return (
              <div>
                <div style={{width:"32vw"}} className="pportfoliocard">
                  <div
                    style={{
                      background: `url('${
                        portfolio?.icon ? portfolio?.icon : img46
                      }') center center / cover no-repeat`,
                    }}
                    className="pportimg"
                  ></div>
                  <div className="pportfoliotext">
                    {portfolio?.projectTitle}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
