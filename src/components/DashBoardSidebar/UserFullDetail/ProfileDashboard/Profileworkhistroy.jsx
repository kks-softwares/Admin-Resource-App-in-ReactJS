import React, { useEffect, useState } from "react";
import img1 from "../../../../assets/My profile – 28/Component 70 – 6.svg";
import img2 from "../../../../assets/My profile – 28/Component 71 – 6.svg";

import API_HOST from "../../../../env";
import StarRatings from "react-star-ratings";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Profileworkhistroy({ width,user }) {

  const [workhistorytoggle, setWorkhistorytoggle] = useState(1);
  const [page1, setPage1] = useState(1);

  const [alljobingoing, setAlljobongoing] = useState([]);
  const [alljobindone, setAlljobondone] = useState([]);

  useEffect(() => {
    if (user?.userName) {
      axios
        .get(
          `${API_HOST}/biding/viewBiding?pageSize=10000&pageNumber=${page1}&userName=${user?.userName}`
          // &assignedJobComplition=true
        )
        .then((res) => {
          setAlljobondone(res?.data?.success?.data);
        });

      axios
        .get(
          `${API_HOST}/biding/viewBiding?pageSize=1000&pageNumber=${page1}&userName=${user?.userName}&category=true`
        )
        .then((res) => {
          setAlljobongoing(res?.data?.success?.data);
        })
        .catch((err) => {});
    }
  }, [user, page1]);

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
        <div style={{ margin: "2vw 2vw" }}>
          {alljobindone?.length > 0 ? (
            alljobindone?.map((data, index) => {
              return (
                <div className="workhistrybox">
                  <div className="workhistryboxtitle">
                    {" "}
                    {data?.appliedForJobPost[0]?.jobPostId?.workTitle} (
                    {data?.appliedForJobPost[0]?.jobPostId?.trackingId})
                  </div>
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
                        rating={data?.appliedForJobPost[0]?.jobPostId?.rating}
                        starRatedColor="#064C87"
                        starDimension= "1.2vw"
                        starSpacing= "0.15vw" 
                        numberOfStars={5}
                        name="rating"
                      />
                    </span>{" "}
                    <span style={{ marginLeft: "2vw" }}>
                      {data?.updated_at.slice(0, 10)}
                    </span>
                  </div>
                  <div
                    className="workhistryboxdata"
                    dangerouslySetInnerHTML={{
                      __html:
                        data?.appliedForJobPost[0]?.jobPostId?.shortDescription,
                    }}
                  >
                    {/* {data?.shortDescription} */}
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
                        <div className="profileuserfirstonedata">
                          $ {data?.totalProjectPrice}
                        </div>
                      </div>
                      <div className="profileuserfirstone">
                        <div
                          style={{ color: "#41404077" }}
                          className="profileuserfirstonetitle"
                        >
                          Work Status
                        </div>
                        <div className="profileuserfirstonedata">
                          {data?.workStatus}
                        </div>
                      </div>
                      <div className="profileuserfirstone">
                        <div
                          style={{ color: "#41404077" }}
                          className="profileuserfirstonetitle"
                        >
                          Success
                        </div>
                        <div className="profileuserfirstonedata">100%</div>
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
                    {data?.appliedForJobPost[0]?.jobPostId?.jobPostingDate} /{" "}
                    {data?.appliedForJobPost[0]?.jobPostId?.terminationDate}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="workhistoryemptyhint" style={{ color: "#7a7575" }}>
              You does not have any Completed Jobs
            </div>
          )}
        </div>
      ) : (
        ""
      )}
      {workhistorytoggle === 2 ? (
        <div style={{ margin: "2vw 2vw" }}>
          {alljobingoing?.length > 0 ? (
            alljobingoing?.map((data, index) => {
              return (
                <div className="workhistrybox">
                  <div className="workhistryboxtitle">
                    {data?.appliedForJobPost[0]?.jobPostId?.workTitle} (
                    {data?.appliedForJobPost[0]?.jobPostId?.trackingId})
                  </div>
                  <div
                    className="workhistryboxdata"
                    dangerouslySetInnerHTML={{
                      __html:
                        data?.appliedForJobPost[0]?.jobPostId?.shortDescription,
                    }}
                  >
                    {/* {data?.shortDescription} */}
                  </div>

                  <div style={{ width: "90%" }}>
                    <div className="profileuserdfirst">
                      <div className="profileuserfirstone">
                        <div
                          style={{ color: "#41404077" }}
                          className="profileuserfirstonetitle"
                        >
                          Bid value
                        </div>
                        <div className="profileuserfirstonedata">
                          $ {data?.totalProjectPrice}
                        </div>
                      </div>
                      <div className="profileuserfirstone">
                        <div
                          style={{ color: "#41404077" }}
                          className="profileuserfirstonetitle"
                        >
                          Work Status
                        </div>
                        <div className="profileuserfirstonedata">
                          {data?.workStatus}
                        </div>
                      </div>
                      <div className="profileuserfirstone">
                        <div
                          style={{ color: "#41404077" }}
                          className="profileuserfirstonetitle"
                        >
                          completion Date
                        </div>
                        <div className="profileuserfirstonedata">
                          {data?.milestoneDueDate5
                            ? data?.milestoneDueDate5
                            : data?.milestoneDueDate4
                            ? data?.milestoneDueDate4
                            : data?.milestoneDueDate3
                            ? data?.milestoneDueDate3
                            : data?.milestoneDueDate2
                            ? data?.milestoneDueDate2
                            : data?.milestoneDueDate1}
                        </div>
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
                    {data?.appliedForJobPost[0]?.jobPostId?.jobPostingDate} /{" "}
                    {data?.appliedForJobPost[0]?.jobPostId?.terminationDate}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="workhistoryemptyhint" style={{ color: "#7a7575" }}>
              You does not have any Ongoing Jobs. &nbsp;
     
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
