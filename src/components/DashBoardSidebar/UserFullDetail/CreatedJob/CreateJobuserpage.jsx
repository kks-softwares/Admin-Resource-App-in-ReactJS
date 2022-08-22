import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate, useParams } from "react-router";


import axios from "axios";
import API_HOST from "../../../../env";

export default function CreateJobuserpage({user}) {
  const [page, setPage] = useState(1);
  const [totalpages, settotalpages] = useState(1);
  const { type, userName } = useParams();
  const [alluserjob, setAlluserjob] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/jobPost/viewJobPost?userName=${
          userName
        }&pageSize=${9}&pageNumber=${page}&category=`
      )
      .then((res) => {
        setAlluserjob(res?.data?.success?.data);
        window.scrollTo(0, 0, { behavior: "smooth" });
      });
    axios
      .get(
        `${API_HOST}/jobPost/viewJobPost?userName=${
       userName
        }&pageSize=${9}&pageNumber=${page + 1}&category=`
      )
      .then((res) => {
        if (res?.data?.success?.data?.length > 0) {
          settotalpages(page + 1);
        }
      });
  }, [page]);
  return (
    <div>
      <div className="catalogcontainerdashbaord">
        {alluserjob?.length > 0 &&
          alluserjob?.map((data) => {
            return (
              <div style={{ overflow: "hidden",display:"block" }} className="activejobpostbox">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.5vw",
                  }}
                >
                  <div style={{ marginLeft: "0vw" }} className="tagblue">
                    {data?.category}
                  </div>
                  <div style={{ marginLeft: "1vw",fontSize:"0.8vw" }} >
                    {data?.subCategory}
                  </div>
                </div>
                <div style={{ height: "1.1vw" }} className="activejobpostname">
                  {data?.workTitle}
                </div>
                <div
                  style={{ lineHeight: "1.2vw !important",color:"#064C8790" }}
                  className="activejobpistbudgetbox"
                >
                  <div>
                    Budget <br />{" "}
                    <span
                      style={{
                        fontSize: "0.9vw",
                        position: "relative",
                        bottom: "0.3vw",
                        color:"#00000040"
                      }}
                    >
                      ${data?.minimumBudget}- ${data?.maximuBudget}
                    </span>
                  </div>
                  <div style={{ marginRight: "1vw" }}>
                    Location <br />{" "}
                    <span
                      style={{
                        fontSize: "0.9vw",
                        position: "relative",
                        bottom: "0.3vw",
                        color:"#00000040"
                      }}
                    >
                      {data?.remote?"remote":data?.onSite}
                    </span>
                  </div>
                  <div style={{ marginRight: "1vw" }}>
                    Expired on <br />{" "}
                    <span
                      style={{
                        fontSize: "0.9vw",
                        position: "relative",
                        bottom: "0.3vw",
                        color:"#00000040"
                      }}
                    >
                      {data?.expiry} Days
                    </span>
                  </div>
                </div>
                <div
                  style={{ height: "4.2vw", margin: "0vw" }}
                  className="descriptionactibeobbox"
                >
                  <div style={{ height: "2.8vw" }}>
                   {data?.shortDescription?.slice(0,150)}
                  </div>

                  <br />
                  <span
                  // onClick={() => {
                  //   navigate(
                  //     `/dashbaord/jobdetailforbid/${data?.jobPostId}`
                  //   );
                  // }}
                  >
                    more
                  </span>
                </div>

                <hr />
                <div style={{ paddingLeft: "0vw" }} className="flexlastactiveb">
                  <div>No of Proposoals - {data?.listOfBider?.length}</div>

                  <div style={{ color: "#00000090" }}> See More</div>
                </div>
              </div>
            );
          })}
      </div>

      {totalpages !== 1 ? (
        <div style={{ width: "25vw" }} className="paginationbox">
          <div>
            <ArrowBackIosIcon style={{ fontSize: "1.5vw" }} />
          </div>

          <div
            hidden={page - 4 > 0 ? false : true}
            onClick={() => setPage(page - 4)}
          >
            {page - 4}
          </div>
          <div
            hidden={page - 3 > 0 ? false : true}
            onClick={() => setPage(page - 3)}
          >
            {page - 3}
          </div>
          <div
            hidden={page - 2 > 0 ? false : true}
            onClick={() => setPage(page - 2)}
          >
            {page - 2}
          </div>
          <div
            hidden={page - 1 > 0 ? false : true}
            onClick={() => setPage(page - 1)}
          >
            {page - 1}
          </div>
          <div style={{ color: "#2A6599" }}>{page}</div>
          <div
            hidden={page + 1 > totalpages ? true : false}
            onClick={() => setPage(page + 1)}
          >
            {page + 1}
          </div>

          <div>
            <ArrowForwardIosIcon style={{ fontSize: "1.5vw" }} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
