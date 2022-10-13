import React, { useEffect, useState } from "react";

import { SearchSharp } from "@mui/icons-material";
import API_HOST from "../../../env";
import axios from "axios";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ContactBox from "./ContactBox";
export default function ContactUs() {
  const [setSelectedCategory, setSetSelectedCategory] = useState("");
  const [allusers, setAllusers] = useState();
  const [page, setPage] = useState(1);
  const [totalpages, settotalpages] = useState(1);
  const [recall, setRecall] = useState(true)
  useEffect(() => {
    axios
      .get(
        `${API_HOST}/contactUs/viewContact?queries=${setSelectedCategory}&pageNumber=${page}&pageSize=10`
      )
      .then((res) => {
        setAllusers(res?.data?.success?.data);
        window.scrollTo(0, 0, { behavior: "smooth" });
      });
    axios
      .get(
        `${API_HOST}/contactUs/viewContact?fullName=${setSelectedCategory}&pageNumber=${
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
  }, [page, setSelectedCategory ,recall]);
  return (
    <div className="BrowseWorkMain-cntainer">
      <div
        style={{ alignItems: "center", justifyContent: "flex-start" }}
        className="searchboxcontainer"
      >
        <div className="serachjobbox">
          <span>
            <SearchSharp style={{ fontSize: "1.7vw" }} />
          </span>
          <input
            type="text"
            placeholder="search Query or Name"
            value={setSelectedCategory}
            onChange={(e) => {
              setSetSelectedCategory(e.target.value);
            }}
          />
        </div>
      </div>

      <div
        style={{ position: "relative", right: "1vw", marginBottom: "1vw" }}
        className="profileworkhistruytoggleer"
      >
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            width: "12vw",
          }}
        >
          All Contact Us
        </div>

        <div
          style={{
            color: "#064C87",
            borderBottom: "0.3vw solid #064C87",
            width: "9vw",
            position: "relative",
            right: "11.5vw",
            bottom: "0.0vw",
            transitionDuration: "1s",
            borderRadius: "0.2vw",
          }}
        ></div>
      </div>
      {allusers?.length > 0 &&
          allusers?.map((data, index) => {
            return <ContactBox data={data}   setRecall={setRecall} recall={recall}/>;
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
  );
}
