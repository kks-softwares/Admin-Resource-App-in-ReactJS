import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import API_HOST from "../../../../env";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Skillpopup1 from "./Skillpopup";

export default function ListofExams() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [totalpages, settotalpages] = useState(1);
  const [setSelectedCategory, setSetSelectedCategory] = useState("");

  const [allusers, setAllusers] = useState([1,2,3,4]);

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/contentManagement/forAdminContent?contentName=${setSelectedCategory}&pageNumber=${page}&pageSize=10`
      )
      .then((res) => {
        setAllusers(res?.data?.success?.data);
        window.scrollTo(0, 0, { behavior: "smooth" });
      });
    axios
      .get(
        `${API_HOST}/contentManagement/forAdminContent?contentName=${setSelectedCategory}&pageNumber=${
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
  }, [page, setSelectedCategory]);

  return (
    <div className="BrowseWorkMain-cntainer">
      <div>
        <div
          style={{ margin: "0vw 1vw", padding: "0vw 1vw" }}
          className="navoftableblogs"
        >
          <div style={{ width: "4vw" }}>Id</div>
          <div style={{ width: "20vw" }}>Name</div>
          <div style={{ width: "10vw" }}>Date</div>
          <div style={{ width: "10vw" }}>Duration</div>
          <div style={{ width: "12vw" }}>Status</div>
          <div style={{ width: "8vw" }}>Certificate</div>
          <div style={{ width: "5vw" }}></div>
          <div style={{ width: "5vw" }}></div>
        </div>
        {allusers?.length > 0 &&
          allusers?.map((data, index) => {
            return (
              <Skillpopup1
                data={data}
                index={index}
                page={page}
                setAllusers={setAllusers}
                settotalpages={settotalpages}
                setSelectedCategory={setSelectedCategory}
              />
            );
          })}

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
    </div>
  );
}
