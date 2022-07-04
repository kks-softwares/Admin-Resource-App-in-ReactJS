import React, { useEffect, useState } from "react";
import "./profile.css";
import img1 from "../../../../assets/My profile – 28/Component 70 – 6.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import img5 from "../../../../assets/My profile – 28/local_police_black_24dp.svg";
import img46 from "../../../../assets/My profile – 28/Landing page – 19.png";
import API_HOST from "../../../../env";
import { LockClockOutlined } from "@mui/icons-material";
import StarRatings from "react-star-ratings";
export default function ProfileCatalogs({ user }) {
  const [allCatalogs, setAllCatalogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_HOST}/catalouge/viewCatalouge?userId=${user?.userId}`)
      .then((res) => {
        setAllCatalogs(res.data.success.data);
      });
  }, [user]);

  return (
    <div style={{ height: "fit-content" }} className="profilebadgecontainer">
      <div
        style={{ padding: "2vw", margin: "0 0vw" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Catalogue</div>
        <div hidden className="profiledetailnavmanu">
          <div>
            <Link to="/addcatalogue">
              <img src={img1} alt="" />
            </Link>
          </div>
        </div>
      </div>

      <div className="pcatalofboxes">
        {allCatalogs.length > 0 &&
          allCatalogs?.map((catalogue, index) => {
            return (
              <div
                style={{ margin: "1vw 2vw", width: "32vw" }}
                className="pcatelogbox"
              >
                <div
                  style={{
                    background: `url('${
                      catalogue?.files[0]?.file
                        ? catalogue?.files[0]?.file
                        : img46
                    }') center center / cover no-repeat`,
                  }}
                  className="pcatelogimg"
                ></div>
                <div className="pcatelog-title">{catalogue?.title.slice(0,40)}</div>
                <div className="pcatelogdate">
                  <div>
                    From <span>${parseInt(catalogue?.servicePrice1)}</span>
                  </div>
                  <div>
                    <span>
                      <LockClockOutlined style={{ fontSize: "1vw" }} />
                    </span>
                    {catalogue?.deliveryDate}
                  </div>
                </div>
                <div className="pcatelogperson">
                  <div className="pcatelogpersonimg">
                    <img src={user?.media} alt="" />
                  </div>
                  <div className="pcatelogpersonname">
                    <div className="pcatelogpersonname1">{user?.fullName.slice(0,20)}</div>
                    <div className="pcatelogpersonname2">
            
                      <span>
                        <img src={img5} alt="" />
                      </span>{" "}
                      Top Rated
                    </div>
                  </div>
                  <div className="pcatelogpersonRatings">
                    <span
                      style={{
                        position: "relative",
                        bottom: "0.15vw",
                        right: "0.2vw",
                      }}
                    >
                      <StarRatings
                        rating={1}
                        starDimension="1.3vw"
                        starSpacing="1vw"
                        numberOfStars={1}
                        starRatedColor="#064C87"
                      />
                    </span>
                    4.4 (512)
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
