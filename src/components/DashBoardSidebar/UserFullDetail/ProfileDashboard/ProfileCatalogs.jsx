import React, { useEffect, useState } from "react";

import ProfileCatelogdetails from "./Profilepopup/ProfileCatelogDetails";

import axios from "axios";
import API_HOST from "../../../../env";

export default function ProfileCatalogs({ width,user }) {
  

  const [allCatalogs, setAllCatalogs] = useState([]);
  const [totalcount, setTotalcount] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (user?.userId) {
      axios
        .get(
          `${API_HOST}/catalouge/viewCatalouge?pageSize=3&pageNumber=${page}&userId=${user?.userId}`
        )
        .then((res) => {
          setAllCatalogs([ ...res?.data?.success?.data]);
          setTotalcount(res?.data?.success?.data?.length > 2 ? true : false);
        });
    }
  }, [user]);

  useEffect(() => {
    if (user?.userId) {
      axios
        .get(
          `${API_HOST}/catalouge/viewCatalouge?pageSize=3&pageNumber=${page}&userId=${user?.userId}`
        )
        .then((res) => {
          setAllCatalogs([...allCatalogs, ...res?.data?.success?.data]);
          setTotalcount(res?.data?.success?.data?.length > 2 ? true : false);
        });
    }
  }, [ page]);

  return (
    <div style={{ height: "fit-content" }} className="profilebadgecontainer">
      <div
        style={{ padding: "2vw", margin: "0 0vw" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Catalogue</div>
        
      </div>

      <div className="pcatalofboxes">
        {allCatalogs?.length > 0 &&
          allCatalogs?.map((catalogue, index) => {
            return (
              <ProfileCatelogdetails
                width={width}
                key={index}
                catalogue={catalogue}
                setAllCatalogs={setAllCatalogs}
              />
            );
          })}
      </div>
      {totalcount && (
        <div onClick={() => setPage(page + 1)} className="ViewMorebutton">
          View More
        </div>
      )}
    </div>
  );
}
