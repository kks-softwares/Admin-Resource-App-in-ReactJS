import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useParams } from "react-router";
import axios from "axios";
import API_HOST from "../../../../env";

export default function AppliedJob({ setjobdetail, setWorkhistorytoggle }) {
  const [page, setPage] = useState(1);
  const [totalpages, settotalpages] = useState(1);
  const { userName } = useParams();
  const [alluserjob, setAlluserjob] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/jobPost/viewJobPost?userName=${userName}&pageSize=${9}&pageNumber=${page}&category=`
      )
      .then((res) => {
        setAlluserjob(res?.data?.success?.data);
        window.scrollTo(0, 0, { behavior: "smooth" });
      })
      .catch(() => {
        setAlluserjob(["1", "2", "3", "4", "5"]);
      });
    axios
      .get(
        `${API_HOST}/jobPost/viewJobPost?userName=${userName}&pageSize=${9}&pageNumber=${
          page + 1
        }&category=`
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
              <div
                style={{ overflow: "hidden", display: "block" }}
                className="activejobpostbox"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.5vw",
                  }}
                >
                  <div style={{ marginLeft: "0vw" }} className="tagblue">
                    UI UX design
                  </div>
                  <div style={{ marginLeft: "1vw", fontSize: "0.8vw" }}>
                    UI UX design
                  </div>
                </div>
                <div style={{ height: "1.1vw" }} className="activejobpostname">
                  {/* {data?.workTitle?.length > 40
                    ? data?.workTitle?.slice(0, 40) + ".."
                    : data?.workTitle} */}
                  Senior Product Designer (#23613)
                </div>
                <div
                  style={{ lineHeight: "1.2vw !important", color: "#064C8790" }}
                  className="activejobpistbudgetbox"
                >
                  <div>
                    Budget <br />{" "}
                    <span
                      style={{
                        fontSize: "0.9vw",
                        position: "relative",
                        bottom: "0.3vw",
                        color: "#00000090",
                      }}
                    >
                      $8-$16
                    </span>
                  </div>
                  <div style={{ marginRight: "1vw" }}>
                    Location <br />{" "}
                    <span
                      style={{
                        fontSize: "0.9vw",
                        position: "relative",
                        bottom: "0.3vw",
                        color: "#00000090",
                      }}
                    >
                      {/* {data?.remote
                        ? "remote"
                        : data?.onSite?.length > 25
                        ? data?.onSite?.slice(0, 23) + ".."
                        : data?.onSite} */}
                      Bangalore
                    </span>
                  </div>
                  <div style={{ marginRight: "1vw" }}>
                    Expired on <br />{" "}
                    <span
                      style={{
                        fontSize: "0.9vw",
                        position: "relative",
                        bottom: "0.3vw",
                        color: "#00000090",
                      }}
                    >
                      07 Days
                    </span>
                  </div>
                </div>
                <div
                  style={{ height: "4.5vw", margin: "0vw" }}
                  className="descriptionactibeobbox"
                >
                  <div
                    style={{
                      height: "3.5vw",
                      color: "#707070100",
                      fontWeight: "400",
                    }}
                  >
                    {/* {data?.shortDescription?.slice(0, 160)} */}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer more
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
                  <div>
                    Status -
                    <span style={{ color: "#E2E228" }}>Work Applied</span>
                  </div>

                  <div
                    onClick={() => {
                      setjobdetail(1);
                      setWorkhistorytoggle(12);
                    }}
                    style={{ color: "#00000090", cursor: "pointer" }}
                  >
                    {" "}
                    See More
                  </div>
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
