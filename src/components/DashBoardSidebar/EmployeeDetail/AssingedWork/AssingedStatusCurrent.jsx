import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {  useParams } from "react-router";

import axios from "axios";
import API_HOST from "../../../../env";
import AppliedPopup from "./AppliedPopup";
export default function AssingedStatusCurrent() {
    const [page, setPage] = useState(1);
    const [totalpages, settotalpages] = useState(1);
    const { type, userName } = useParams();
    const [alluserjob, setAlluserjob] = useState(["1","2"]);
  
    // useEffect(() => {
    //   axios
    //     .get(
    //       `${API_HOST}/biding/viewBiding?userName=${userName}&pageSize=${9}&pageNumber=${page}&category=`
    //     )
    //     .then((res) => {
    //       setAlluserjob(res?.data?.success?.data);
    //       window.scrollTo(0, 0, { behavior: "smooth" });
    //     });
    //   axios
    //     .get(
    //       `${API_HOST}/biding/viewBiding?userName=${userName}&pageSize=${9}&pageNumber=${
    //         page + 1
    //       }&category=`
    //     )
    //     .then((res) => {
    //       if (res?.data?.success?.data?.length > 0) {
    //         settotalpages(page + 1);
    //       }
    //     });
    // }, [page]);
  return (
    <div> 
    <div className="catalogcontainerdashbaord">
      {alluserjob?.length > 0 &&
        alluserjob?.map((data,index) => {
          return <AppliedPopup  data={data} index={index}/>;
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
  )
}
