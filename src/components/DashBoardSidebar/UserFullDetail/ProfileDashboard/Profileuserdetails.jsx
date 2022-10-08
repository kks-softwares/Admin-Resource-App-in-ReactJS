import React, { useEffect, useState } from "react";

import imgxx from "../../../../assets/Success stories Definition/checkmark (1).svg";

import Profileuserdetaillanguage from "./Profilepopup/Profileuserdetaillanguage";

import API_HOST from "../../../../env";
import axios from "axios";

export default function Profileuserdetails({  user }) {
  const [studyset, setstudyset] = useState("");
  
  const [verifyTitle, setverifyTitle] = useState(false);
  const [setSelectedCategory, setSetSelectedCategory] = useState("");
  const [UserCompletedJobs, setUserCompletedJobs] = useState([]);
  const [page1, setPage1] = useState(1);
  const [totalSum, setTotalSum] = useState(0);

  // Total Earnings dashboard
  useEffect(() => {
    let sum = 0;

    // UserCompletedJobs?.length > 0 ? (
    UserCompletedJobs?.map((data, index) => {
      sum = sum + parseInt(data?.totalProjectPrice);

      if (index + 1 === UserCompletedJobs?.length) {
        setTotalSum(sum);
      }
    });
    // ) : ""
  }, [UserCompletedJobs]);

  useEffect(() => {
    if (user?.verifiedByAdmin === true) {
      setverifyTitle("Profile is Verified");
    } else {
      setverifyTitle("Profile is Un-Verified");
    }
   

    if (user?.userName) {
      axios
        .get(
          `${API_HOST}/biding/viewBiding?pageSize=10000&pageNumber=${page1}&userName=${user?.userName}`
          // &assignedJobComplition=true
        )
        .then((res) => {
          setUserCompletedJobs(res?.data?.success?.data);
        });
    }
  }, [user, page1]);

  const [allusers, setAllusers] = useState([]);
  const [subcategogryid, setsubCategogryid] = useState();
  const [recall, setRecall] = useState(false);
  const [Cateid, setCateid] = useState("");
  const [selectedbiddingvalue, setSelectedbiddingvalue] = useState("");
  const [datestart1, setDatestart1] = useState();
  const [datestart1x, setDatestart1x] = useState();
  const [totalpages, settotalpages] = useState(1);

  useEffect(() => {
    if (user?.userName) {
      axios
        .get(
          `${API_HOST}/biding/bidsByUser?userName=${
            user?.userName
          }&pageSize=9&pageNumber=${page1}&search=${setSelectedCategory}&${
            subcategogryid ? "subCategory=" : ""
          }${subcategogryid}&${
            selectedbiddingvalue ? "bidingValue=" : ""
          }${selectedbiddingvalue}&${studyset ? "location=" : ""}${studyset}&${
            Cateid ? "category=" : ""
          }${Cateid}&${datestart1 ? "from=" : ""}${datestart1}&${
            datestart1x ? "to=" : ""
          }${datestart1x}
        `
        )
        .then((res) => {
          setAllusers(res.data?.success?.data);
          if (res.data?.success?.data?.length === 9) {
            settotalpages(page1 + 1);
          } else {
            settotalpages(page1);
          }
        });
    }
  }, [page1, setSelectedCategory, recall, user]);

  return (
    <div className="Profileuserdetails-container">
      <div style={{ marginTop: "1vw" }} className="profileuserdetailsone">
        <div className="profiletitleandmenunav">
          <div className="profiledetailstitle">User profile</div>
          <div className="profiledetailnavmanu"></div>
        </div>
        <div className="profileuserdfirst">
          <div className="profileuserfirstone">
            <div className="profileuserfirstonetitle">Earnings</div>
            <div className="profileuserfirstonedata">
              {totalSum ? totalSum : "0"}
            </div>
          </div>
          <div className="profileuserfirstone">
            <div className="profileuserfirstonetitle">Completed</div>
            <div className="profileuserfirstonedata">
              {UserCompletedJobs ? UserCompletedJobs.length : "No Work"}
            </div>
          </div>
          <div className="profileuserfirstone">
            <div className="profileuserfirstonetitle">Success</div>
            <div className="profileuserfirstonedata">
              {(UserCompletedJobs.length / allusers.length) * 100
                ? ((UserCompletedJobs.length / allusers.length) * 100).toFixed(
                    2
                  )
                : "0"}{" "}
              %
            </div>
          </div>
        </div>
        <div className="profileuserdfirst">
          <div className="profileuserfirstone">
            <div
              style={{
                display: "flex",

                alignItems: "center",
              }}
              className="profileuserfirstonetitle"
            >
              <div>Language</div>
            </div>

            {user?.languages?.map((language) => {
              return (
                <Profileuserdetaillanguage language={language}  />
              );
            })}
          </div>
        </div>
        <div className="profileuserdfirst">
          <div className="profileuserfirstone">
            <div className="profileuserfirstonetitle">Verification</div>
            <div className="profileuserfirstonedata">
              {verifyTitle}{" "}
              {user?.verifiedByAdmin === true ? (
                <span>
                  <img
                    style={{
                      width: "1.1vw" ,
                      margin: "0.3vw",
                    }}
                    src={imgxx}
                    alt=""
                  />
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="profileuserfirstonetitle">Email - {user?.emailId}</div>
        <div style={{lineHeight: "4vw"}} className="profileuserfirstonetitle">Mobile - +{user?.contactNo}</div>
        <div className="profileuserfirstonetitle">Address - {user?.address}</div>
      </div>
      
      <div
        style={{ marginTop: "1vw", marginBottom: "3vw",width:"45vw" }}
        className="profileuserdetailsthree"
      >
        <div style={{}} className="profiletitleandmenunav">
          <div className="profiledetailstitle">About Me</div>
          <div className="profiledetailnavmanu"></div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            marginTop: "1vw",
          }}
        >
          <div
            style={{
              fontSize: "1.1vw",
              margin: "0.91vw 1vw",
            }}
            className="profiledetailstitle"
          >
            {user?.title ? user?.title : " user does not have Title "}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              fontSize:  "1.1vw",
              margin: "0.91vw 1vw",
              width:"45vw"
            }}
            className="profiledetailstitle"
          >
            <div  style={{
              fontSize:  "1.1vw",
              margin: "0.91vw 1vw",
              width:"45vw"
            }} className="aboutprofileuser">
              {user?.fullDescription
                ? user?.fullDescription
                : "user does not have  description"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
