import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import img12 from "../../../../assets/Landing page/Group 787.svg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function WorkDetail() {
  const { postid } = useParams();
  const [poststatus, setpoststatus] = useState(1);
  //   useEffect(() => {
  //     axios
  //       .get(`${API_HOST}/jobPost/viewJobPost?jobPostId=${postid}`)
  //       .then((res) => {
  //         setpostjobdetailforbid(res.data?.success?.data[0]);
  //         console.log(res.data?.success?.data[0]);
  //       });
  //   }, [postid, poststatus]);

  const [postjobdetailforbid, setpostjobdetailforbid] = useState();
  const [data, setData] = useState("red")
  return (
    <div className="BrowseWorkMain-cntainer">
      <div
        style={{ fontSize: "1.4vw", margin: "0.7vw 1vw" }}
        className="dashboardtitilemain"
      >
        Work Details
      </div>
      <div style={{ background: "white", padding: "1vw" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="taggreen">Mobile Application </div>
          <div
            style={{ fontSize: "0.9vw", marginLeft: "1vw" }}
            className="taggreen1"
          >
            UX/UI Design
          </div>
        </div>

        <div
          style={{
            margin: "0.8vw 1vw",
            color: "#064C87",
            marginBottom: "0.30vw",
          }}
          className="dashboardtitilemain"
        >
          Landing Page (Home)
        </div>

        <div
          style={{
            width: "100%",
            margin: "0.5vw 1vw",
            fontSize: "0.85vw",
            marginBottom: "0.0vw",
          }}
          className="dashboardtitilemainparabid"
        >
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "1vw",
          }}
        >
          <div className="detailjobposttags">
            <div
              style={{
                margin: "0.5vw 0vw",
                color: "#064C87",
                marginBottom: "0.40vw",
                fontSize: "1vw",
              }}
            >
             Priority
            </div>
            <div className="tagvaluejobpostbox">
              <span>
                <img
                  style={{
                    margin: "0.6vw",
                    width: "2vw",
                    objectFit: "contain",
                  }}
                  src={img12}
                  alt=""
                />
              </span>

              Lowest
            </div>
          </div>

          <div className="detailjobposttags">
            <div
              style={{
                margin: "0.5vw 0vw",
                color: "#064C87",
                marginBottom: "0.40vw",
                fontSize: "1vw",
              }}
            >
            Starting Date
            </div>
            <div className="tagvaluejobpostbox">
              <span>
                <img
                  style={{
                    margin: "0.6vw",
                    width: "2vw",
                    objectFit: "contain",
                  }}
                  src={img12}
                  alt=""
                />
              </span>

              12/12/21
            </div>
          </div>

          <div className="detailjobposttags">
            <div
              style={{
                margin: "0.5vw 0vw",
                color: "#064C87",
                marginBottom: "0.40vw",
                fontSize: "1vw",
              }}
            >
             Due Date
            </div>
            <div className="tagvaluejobpostbox">
              <span>
                <img
                  style={{
                    margin: "0.6vw",
                    width: "2vw",
                    objectFit: "contain",
                  }}
                  src={img12}
                  alt=""
                />
              </span>
              12/01/22
            </div>
          </div>

          <div className="detailjobposttags">
            <div
              style={{
                margin: "0.5vw 0vw",
                color: "#064C87",
                marginBottom: "0.40vw",
                fontSize: "1vw",
              }}
            >
              
            </div>
         </div>

          <div className="detailjobposttags">
            <div
              style={{
                margin: "0.5vw 0vw",
                color: "#064C87",
                marginBottom: "0.40vw",
                fontSize: "1vw",
              }}
            >
             Status
            </div>
            <div
            style={{
              width: "14vw",
              color:
                data?.workStatus === "pending"
                  ? "#F39600"
                  : data?.workStatus === "accepted"
                  ? "#2AC96A"
                  : "red",
            }}
          >
            Pending
          </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
