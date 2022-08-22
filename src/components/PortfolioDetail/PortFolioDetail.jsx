import React, { useEffect, useState } from "react";
import img4 from "../../assets/Web 1280 – 2/Group 10053.png";
import "./Portfoliod.css";
import img46 from "../../assets/My profile – 28/Landing page – 19.png";
import { Link, useParams } from "react-router-dom";
import API_HOST from "../../env";
import axios from "axios";
import { useSelector } from "react-redux";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router";

export default function PortFolioDetail() {
  const navigate = useNavigate();
  
  const { portId } = useParams();
  const [data, setData] = useState();
  const [allprotfolio, setAllprotfoilio] = useState([]);
  const { user, loggedInStatus } = useSelector((state) => state.user);

  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });

    axios
      ?.get(`${API_HOST}/portfolio/viewProjectPortfolio?projectPortfolioId=${portId}`)
      .then((res) => {
        setData(res?.data?.success?.data[0]);
      });
  }, [portId]);


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

  console.log("allprotfolio", allprotfolio);

  return (
    <div className="portfcontainer">
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
              marginBottom:"1vw"
            }}
            onClick={() => navigate(-1)}
          >
            <ArrowBackIosNewIcon />
          </button>
      <div className="bannerportfolio">
        <img src={data?.icon} alt="" />
      </div>

      <div className="titleportfoliod">{data?.caption}</div>
      <div className="paraportfoliod">{data?.projectDescription}</div>

      <div className="titleportfoliod">Skills</div>

      <div className="paraportfoliod1">{data?.skills}</div>
      <div className="titleportfoliod">Project URL</div>

      <div className="paraportfoliod2">{data?.projectUrl}</div>

      <div className="titleportfoliod">Similar Portfolio</div>

      <div className="simlarportfiliodata">
        {allprotfolio.length > 0 &&
          allprotfolio?.map((portfolio, index) => {
            return (
              <div className="pportfoliocard">
                <div
                  style={{
                    background: `url('${portfolio?.icon}') center center / cover no-repeat`,
                  }}
                  className="pportimg"
                ></div>
                <div className="pportfoliotext">{portfolio?.projectTitle}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
