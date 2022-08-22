import React, { useEffect, useState } from "react";
import "./profile.css";
import img1 from "../../../../assets/My profile – 28/Component 70 – 6.svg";
import img46 from "../../../../assets/My profile – 28/Landing page – 19.png";
import { makeStyles } from "@material-ui/core";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import API_HOST from "../../../../env";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
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
export default function Profileportfolio({user}) {
  const classes = useStyles();
  const [allprotfolio, setAllprotfoilio] = useState([]);
  const navigate = useNavigate();

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
                <div style={{width:"32vw",cursor:"pointer"}} className="pportfoliocard">
                  <div
                    style={{
                      background: `url('${
                        portfolio?.icon ? portfolio?.icon : img46
                      }') center center / cover no-repeat`,
                    }}
                    className="pportimg"
                  >
                           <div className="pportimg2">
          <div className="porfolioprofilemenu">
              <RemoveRedEyeIcon
                // onClick={() => navigate(`/dashbaord/blog/${data?.contentId}`)}
                onClick={() => navigate(`/portfolio/${portfolio?.projectPortfolioId}`)}
                style={{
                  margin: "0 0.5vw",
                  width: "2.6vw ",
                  height: "2.6vw",
                  borderRadius: "50%",
                  cursor: "pointer",
                  objectFit: "cover",
                  backgroundColor:'white',
                  padding:'4px'
                }}
              />
            </div>
           
          </div>
       
                  </div>
                  <div className="pportfoliotext">
                    {portfolio?.projectTitle.slice(0,50)}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
