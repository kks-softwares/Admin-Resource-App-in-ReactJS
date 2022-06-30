import React from "react";

import { useNavigate } from "react-router";
import { DeleteForeverOutlined } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import axios from "axios";
import API_HOST from "../../../env";
export default function Skillpopup1({
  data,
  index,
  page,
  setAllusers,
  settotalpages,
  setSelectedCategory,
}) {
  const navigate = useNavigate();
  const handledeleteBlog = () => {
    axios
      .post(`${API_HOST}/contentManagement/removecontent`, {
        contentId: data?.contentId,
      })
      .then(() => {
        if (!setSelectedCategory) {
          axios
            .get(
              `${API_HOST}/contentManagement/viewcontent?contentName=${setSelectedCategory}&page=${page}`
            )
            .then((res) => {
              setAllusers(res?.data?.success?.data?.docs);
              window.scrollTo(0, 0, { behavior: "smooth" });
            });
          axios
            .get(
              `${API_HOST}/contentManagement/viewcontent?contentName=${setSelectedCategory}&page=${
                page + 1
              }`
            )
            .then((res) => {
              if (res?.data?.success?.data?.docs?.length > 0) {
                settotalpages(page + 1);
              }
            });
        } else {
          axios
            .get(
              `${API_HOST}/contentManagement/viewcontent?contentName=${setSelectedCategory}&pageNumber=${page}&pageSize=10`
            )
            .then((res) => {
              setAllusers(res?.data?.success?.data);
              window.scrollTo(0, 0, { behavior: "smooth" });
            });
          axios
            .get(
              `${API_HOST}/contentManagement/viewcontent?contentName=${setSelectedCategory}&pageNumber=${
                page + 1
              }&pageSize=10`
            )
            .then((res) => {
              if (res?.data?.success?.data?.length > 0) {
                settotalpages(page + 1);
              } else {
                settotalpages(page);
              }
            });
        }
      });
  };
  return (
    <div>
      <div style={{ alignItems: "center" }} className="navoftableblogsdata">
        <div
          onClick={() => {
            navigate(`/dashbaord/blog/${data?.contentId}`);
          }}
          style={{ width: "5vw", cursor: "pointer" }}
        >
          #{(page - 1) * 10 + (index + 1)}
        </div>

        <div
          onClick={() => {
            navigate(`/dashbaord/blog/${data?.contentId}`);
          }}
          style={{ width: "14vw", cursor: "pointer" }}
        >
          {data?.contentName}
        </div>
        <div
          onClick={() => {
            navigate(`/dashbaord/blog/${data?.contentId}`);
          }}
          style={{ width: "10vw", cursor: "pointer" }}
        >
          {data?.category}
        </div>

        <div style={{ width: "14vw", fontWeight: "400" }}>{data?.author}</div>
        <div style={{ width: "22vw", fontSize: "0.85vw" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when essentially unchanged.
        </div>
        <div
          style={{
            width: "10vw",
            color:
              data?.status === "unpulblis"
                ? "#F39600"
                : data?.status === "publish"
                ? "#2AC96A"
                : "red",
            fontWeight: "500",
          }}
        >
          {data?.status}
        </div>
        <div style={{ width: "4vw" }}>
          <RemoveRedEyeIcon
            onClick={() => navigate(`/dashbaord/blog/${data?.contentId}`)}
            style={{
              margin: "0 0.5vw",
              width: "2vw ",
              height: "2vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
          />
        </div>
        <div style={{ width: "3vw" }}>
          <DeleteForeverOutlined
            onClick={() => {
              handledeleteBlog();
            }}
            style={{
              margin: "0 0.5vw",
              width: "2vw ",
              height: "2vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}
