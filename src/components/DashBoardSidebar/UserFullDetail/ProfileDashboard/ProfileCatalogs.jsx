import React, { useEffect, useState } from "react";
import "./profile.css";
import img1 from "../../assets/My profile – 28/Component 70 – 6.svg";
import ProfileCatelogdetails from "./Profilepopup/ProfileCatelogDetails";
import { Link } from "react-router-dom";
import axios from "axios";
import API_HOST from "../../env";
import { useSelector } from "react-redux";
export default function ProfileCatalogs() {
  const { user, loggedInStatus } = useSelector((state) => state.user);

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
        <div className="profiledetailnavmanu">
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
              <ProfileCatelogdetails
                key={index}
                catalogue={catalogue}
                setAllCatalogs={setAllCatalogs}
              />
            );
          })}
      </div>
    </div>
  );
}
