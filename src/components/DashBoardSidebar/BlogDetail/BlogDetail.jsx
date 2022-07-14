import React, { useEffect, useState } from "react";
import Cataloguecarosel from "./CatalogCarosel";
import "./BlogDetail.css";
import { useNavigate, useParams } from "react-router";
import { ArrowBackIosNewOutlined } from "@mui/icons-material";
import axios from "axios";
import API_HOST from "../../../env";
export default function BlogDetail() {
  
  const navigate = useNavigate();
  const { Id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      ?.get(`${API_HOST}/contentManagement/viewcontent?contentId=${Id}`)
      .then((res) => {
        setData(res?.data?.success?.data[0]);
      });
  }, [Id]);

  const handlePublishBlog = () => {
    axios
      .post(`${API_HOST}/contentManagement/approveBlog`, {
        aproved: true,
        contentId: Id,
        status: "publish",
      })
      .then((res) => {
        navigate(-1);
      });
  };

  const handleRejectBlog = () => {
    axios
      .post(`${API_HOST}/contentManagement/editcontent`, {
        status: "Reject",
        contentId: Id,
      })
      .then((res) => {
        navigate(-1);
      });
  };

  return (
    <div>
      <div
        onClick={() => navigate(-1)}
        style={{
          cursor: "pointer",
          marginBottom: "0vw",
          position: "relative",
          left: "1vw",
          top: "1vw",
        }}
        className="filtericonboxname"
      >
        <ArrowBackIosNewOutlined />
      </div>
      <div style={{ margin: "2vw" }}>
        {data?.icon && (
          <div style={{ padding: "0vw" }} className="Blogdbannercontainer">
            <div className="ctatlogcarouseltitle">
              <button
                style={{
                  marginLeft: "1vw",
                  width: "10vw",
                  cursor: "auto",
                  position: "relative",
                  top: "4vw",
                  zIndex: "100",
                }}
                className="hb-button"
              >
                {data?.category}
              </button>
              <div className="textofcontainercatalgue">{data?.iconTitle}</div>
            </div>
            <div style={{ position: "relative", bottom: "2.2vw" }}>
              <Cataloguecarosel
                img1={data?.icon[0]}
                img2={data?.icon[1] ? data?.icon[1] : data?.icon[0]}
                img3={
                  data?.icon[2]
                    ? data?.icon[2]
                    : data?.icon[0]
                    ? data?.icon[0]
                    : data?.icon[1]
                }
                img4={
                  data?.icon[3]?.file
                    ? data?.icon[3]
                    : data?.icon[1]
                    ? data?.icon[1]
                    : data?.icon[0]
                    ? data?.icon[0]
                    : data?.icon[2]
                }
              />
            </div>
          </div>
        )}
        <div
          style={{ position: "relative", bottom: data?.icon ? "3vw" : "0vw" }}
        >
          <div className="jobpodtedfieldtitile"> Title</div>
          <div className="jobpostfieldinputbox">
            <input type="text" value={data?.contentName} disabled />
          </div>
          <div className="jobpodtedfieldtitile"> Category</div>
          <div className="jobpostfieldinputbox">
            <input type="text" value={data?.category} disabled />
          </div>
          <div className="jobpodtedfieldtitile"> Table of Content</div>
          <div className="widthfullblofpreview">
            {data?.toC?.length > 0 &&
              data?.toC?.map((data, index) => {
                return (
                  <div>
                    <div
                      className=""
                      style={{ color: "black", fontWeight: "500" }}
                    >
                      {data?.heading}
                    </div>
                    <div
                      className="dataeofblogcontnet1"
                      style={{ color: "black", fontSize: "0.9vw" }}
                      dangerouslySetInnerHTML={{ __html: data?.toc }}
                    ></div>

                    {data?.file && (
                      <div className="blogcontentimagebanner">
                        <img
                          style={{ width: "63vw", objectFit: "contain" }}
                          src={data?.file}
                          alt=""
                        />
                      </div>
                    )}
                    <div
                      style={{ width: "63vw" }}
                      className="Joinwithusblogbox"
                    >
                      <div style={{ width: "60%", textAlign: "center" }}>
                        <div className="Joinwithusblogboxtitle">
                          {data?.title}
                        </div>
                        <div className="Joinwithusblogboxdetail">
                          {data?.desc?.slice(0, 200)}
                        </div>
                      </div>
                      <div style={{ width: "40%", textAlign: "center" }}>
                        <button> {data?.button}</button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {data?.status === "unpublish" ? (
            <div
              style={{ marginTop: "0.31vw" }}
              className="handlemoreaboutskill"
            >
              <div
                onClick={() => navigate(`/dashbaord/editBlog/${Id}`)}
                style={{
                  background: "white",
                  color: "black",
                  cursor: "pointer",
                  border: "1px solid #064C87",
                  marginRight: "1vw",
                }}
                className="handlecirclieaboutsave"
              >
                Edit
              </div>
              <div
                onClick={() => {
                  handleRejectBlog();
                }}
                style={{
                  background: "white",
                  color: "black",
                  cursor: "pointer",
                  border: "1px solid #064C87",
                  marginRight: "1vw",
                }}
                className="handlecirclieaboutsave"
              >
                Reject
              </div>
              <div
                onClick={() => {
                  handlePublishBlog();
                }}
                style={{ cursor: "pointer" }}
                className="handlecirclieaboutsave"
              >
                Publish
              </div>
            </div>
          ) : data?.status === "publish" ? (
            <div
              style={{ marginTop: "0.31vw" }}
              className="handlemoreaboutskill"
            >
              <div
                onClick={() => navigate(`/dashbaord/editBlog/${Id}`)}
                style={{
                  background: "white",
                  color: "black",
                  cursor: "pointer",
                  border: "1px solid #064C87",
                  marginRight: "1vw",
                }}
                className="handlecirclieaboutsave"
              >
                Edit
              </div>
            </div>
          ) : (
            <div
              style={{ marginTop: "0.31vw" }}
              className="handlemoreaboutskill"
            ></div>
          )}
        </div>
      </div>
    </div>
  );
}
