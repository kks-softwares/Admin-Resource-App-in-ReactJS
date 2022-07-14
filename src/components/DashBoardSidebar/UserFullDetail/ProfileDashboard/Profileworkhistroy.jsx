import React, { useEffect, useState } from "react";

import img1 from "../../../../assets/My profile – 28/Component 70 – 6.svg";
import img2 from "../../../../assets/My profile – 28/Component 71 – 6.svg";
import "./profile.css";
import API_HOST from "../../../../env";
import StarRatings from "react-star-ratings";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router";

export default function Profileworkhistroy() {
  const { userName } = useParams();

  const [workhistorytoggle, setWorkhistorytoggle] = useState(1);

  const [page1, setPage1] = useState(1);
  const [page, setPage] = useState(1);
  const [page1s, setPage1s] = useState(false);
  const [pages, setPages] = useState(false);

  const [setSelectedCategory, setSetSelectedCategory] = useState("");
  const [alljobingoing, setAlljobongoing] = useState([]);
  const [alljobindone, setAlljobondone] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/jobPost/onGoingWork?category=${setSelectedCategory}&pageSize=9&pageNumber=${page}&userName=${userName}`
      )
      .then((res) => {
        setAlljobongoing([...alljobingoing, ...res?.data?.success?.data]);
        if (res?.data?.success?.data < 9) {
          setPages(false);
        } else {
          setPages(true);
        }
      });

    axios
      .get(
        `${API_HOST}/jobPost/completedWork?category=${setSelectedCategory}&pageSize=9&pageNumber=${page1}&userName=${userName}`
      )
      .then((res) => {
        setAlljobondone([...alljobindone, ...res?.data?.success?.data]);
        if (res?.data?.success?.data < 9) {
          setPage1s(false);
        } else {
          setPage1s(true);
        }
      });
  }, [page, page1]);

  // console.log("alljobindone", alljobindone);

  return (
    <div style={{ height: "fit-content" }} className="profilebadgecontainer">
      <div
        style={{ padding: "2vw", margin: "0 0vw" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Work History</div>
        <div hidden className="profiledetailnavmanu">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
        </div>
      </div>

      <div
        style={{ position: "relative", right: "1vw" }}
        className="profileworkhistruytoggleer"
      >
        <div
          className="profileworkhistruytoggleervalue"
          style={{ color: workhistorytoggle ? "#064C87" : "" }}
          onClick={() => {
            setWorkhistorytoggle(1);
          }}
        >
          Completed Jobs
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{ color: !workhistorytoggle ? "#064C87" : "" }}
          onClick={() => {
            setWorkhistorytoggle(2);
          }}
        >
          Inprogress Jobs
        </div>
        <div
          style={{
            color: "#064C87",
            borderBottom: "0.3vw solid #064C87",
            width: "12vw",
            position: "relative",
            right:
              workhistorytoggle === 1
                ? "27.5vw"
                : workhistorytoggle === 2
                ? "14vw"
                : workhistorytoggle === 3
                ? "26.5vw"
                : "13vw",
            bottom: "0.3vw",
            transitionDuration: "1s",
            borderRadius: "0.2vw",
          }}
        ></div>
      </div>
      {workhistorytoggle === 1 ? (
        <>
          <div style={{ margin: "2vw 2vw" }}>
            {alljobindone?.length > 0 &&
              alljobindone?.map((data, index) => {
                return (
                  <div className="workhistrybox">
                    <div className="workhistryboxtitle">Completed Jobs</div>
                    <div className="workhistryboxdate">
                      {" "}
                      <span
                        style={{
                          width: "10vw",
                          position: "relative",
                          bottom: "0.2vw",
                        }}
                      >
                        <StarRatings
                          rating={4.5}
                          starRatedColor="#064C87"
                          starDimension="1.2vw  "
                          starSpacing="0.15vw"
                          numberOfStars={5}
                          name="rating"
                        />
                      </span>{" "}
                      Oct 4, 2020 - Nov 5, 2020
                    </div>
                    <div className="workhistryboxdata">
                      {data?.shortDescription}
                    </div>
                    <div style={{ width: "60%" }}>
                      <div className="profileuserdfirst">
                        <div className="profileuserfirstone">
                          <div
                            style={{ color: "#41404077" }}
                            className="profileuserfirstonetitle"
                          >
                            Earnings
                          </div>
                          <div className="profileuserfirstonedata">$60k+</div>
                        </div>
                        <div className="profileuserfirstone">
                          <div
                            style={{ color: "#41404077" }}
                            className="profileuserfirstonetitle"
                          >
                            Completed
                          </div>
                          <div className="profileuserfirstonedata">30</div>
                        </div>
                        <div className="profileuserfirstone">
                          <div
                            style={{ color: "#41404077" }}
                            className="profileuserfirstonetitle"
                          >
                            Success
                          </div>
                          <div className="profileuserfirstonedata">90%</div>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "right",
                        marginBottom: "0.6vw",
                      }}
                      className="workhistryboxdate"
                    >
                      {data?.jobPostingDate} - {data?.terminationDate}
                    </div>
                  </div>
                );
              })}
          </div>
        { page1s && <div onClick={() => setPage1(page1 + 1)} className="ViewMorebutton">
            View More
          </div>}
        </>
      ) : (
        ""
      )}
      {workhistorytoggle === 2 ? (
        <>
          <div style={{ margin: "2vw 2vw" }}>
            {alljobingoing?.length > 0 &&
              alljobingoing?.map((data, index) => {
                return (
                  <div className="workhistrybox">
                    <div className="workhistryboxtitle">Ongoing Jobs</div>
                    <div className="workhistryboxdate">
                      {" "}
                      <span
                        style={{
                          width: "10vw",
                          position: "relative",
                          bottom: "0.2vw",
                        }}
                      >
                        <StarRatings
                          rating={4.5}
                          starRatedColor="#064C87"
                          starDimension="1.2vw  "
                          starSpacing="0.15vw"
                          numberOfStars={5}
                          name="rating"
                        />
                      </span>{" "}
                      Oct 4, 2020 - Nov 5, 2020
                    </div>
                    <div className="workhistryboxdata">
                      {data?.shortDescription}
                    </div>
                    <div style={{ width: "60%" }}>
                      <div className="profileuserdfirst">
                        <div className="profileuserfirstone">
                          <div
                            style={{ color: "#41404077" }}
                            className="profileuserfirstonetitle"
                          >
                            Earnings
                          </div>
                          <div className="profileuserfirstonedata">$60k+</div>
                        </div>
                        <div className="profileuserfirstone">
                          <div
                            style={{ color: "#41404077" }}
                            className="profileuserfirstonetitle"
                          >
                            Completed
                          </div>
                          <div className="profileuserfirstonedata">30</div>
                        </div>
                        <div className="profileuserfirstone">
                          <div
                            style={{ color: "#41404077" }}
                            className="profileuserfirstonetitle"
                          >
                            Success
                          </div>
                          <div className="profileuserfirstonedata">90%</div>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "right",
                        marginBottom: "0.6vw",
                      }}
                      className="workhistryboxdate"
                    >
                      {data?.jobPostingDate} - {data?.terminationDate}
                    </div>
                  </div>
                );
              })}
          </div>
        { pages &&  <div onClick={() => setPage(page + 1)} className="ViewMorebutton">
            View More
          </div>}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
