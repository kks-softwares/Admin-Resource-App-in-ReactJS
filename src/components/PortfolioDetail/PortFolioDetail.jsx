import React, { useEffect, useState } from "react";

import "./Portfoliod.css";

import { useParams } from "react-router-dom";
import API_HOST from "../../env";
import axios from "axios";
import { useSelector } from "react-redux";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router";

export default function PortFolioDetail({ width }) {
  const navigate = useNavigate();

  const { portId } = useParams();
  const [data, setData] = useState();
  const [allprotfolio, setAllprotfoilio] = useState([]);
  

  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });

    axios
      ?.get(
        `${API_HOST}/portfolio/viewProjectPortfolio?pageSize=8&pageNumber=1&projectPortfolioId=${portId}`
      )
      .then((res) => {
        setData(res?.data?.success?.data[0]);
      });
  }, [portId]);

  useEffect(() => {
    if (data) {
      axios
        .get(
          `${API_HOST}/portfolio/viewProjectPortfolio?pageSize=8&pageNumber=1&userId=${data?.u_id.userName}`
        )
        .then((res) => {
          setAllprotfoilio(res?.data?.success?.data);
        });
    }
  }, [data]);

  return (
    <div className="portfcontainer">
      <button
        style={{
          cursor: "pointer",
          zIndex: "100",
          padding: "0.5vw 0.7vw",
          backgroundColor: "white",
          color: "#000",
          borderRadius: "0.3vw",
          border: "1px solid #d7d7d7",
          marginBottom: "2vw",
        }}
        onClick={() => navigate(-1)}
      >
        <ArrowBackIosNewIcon />
      </button>
      <div className="bannerportfolio">
        <img src={data?.icon} alt="" />
      </div>

      <div className="titleportfoliod">Title </div>
      <div className="paraportfoliod1">{data?.projectTitle}</div>
      <div className="titleportfoliod">Caption -</div>
      <div className="paraportfoliod1">{data?.caption}</div>
      <div className="titleportfoliod">Description -</div>
      <div className="paraportfoliod">{data?.projectDescription}</div>
      <div className="titleportfoliod">Period of Completion -</div>
      <div className="paraportfoliod">
        {" "}
        Starting Date {data?.startingDate}{" "}
        <span style={{ marginLeft: "2vw" }}></span> Completion Date{" "}
        {data?.completionDate}{" "}
      </div>

      <div className="titleportfoliod">Skills -</div>

      <div className="paraportfoliod1">
        {data?.skills.map((item) => {
          return <>{item?.skills + ", "}</>;
        })}
      </div>
      <div className="titleportfoliod">Project URL-</div>

      <div className="paraportfoliod2">
        <a href={data?.projectUrl} target="_blank">
          {data?.projectUrl}
        </a>
      </div>

      {allprotfolio?.length > 1 && (
        <div className="titleportfoliod">Similar Portfolio</div>
      )}

      <div className="simlarportfiliodata">
        {allprotfolio.length > 0 &&
          allprotfolio?.map((portfolio, index) => {
            return (
              portfolio?.projectPortfolioId !== portId && (
                <div
                  onClick={() =>
                    navigate(`/portfolio/${portfolio?.projectPortfolioId}`)
                  }
                  className="pportfoliocard"
                >
                  <div
                    style={{
                      background: `url('${portfolio?.icon}') center center / cover no-repeat`,
                    }}
                    className="pportimg"
                  ></div>
                  <div className="pportfoliotext">
                    {portfolio?.projectTitle}
                  </div>
                </div>
              )
            );
          })}
      </div>
    </div>
  );
}
