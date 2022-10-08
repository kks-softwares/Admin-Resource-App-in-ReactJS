import React from "react";
import { LockClockOutlined } from "@mui/icons-material";
import StarRatings from "react-star-ratings";
import { useNavigate } from "react-router";
import img46 from "../../../../../assets/My profile – 28/Landing page – 19.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";



export default function ProfileCatelogdetails({

  catalogue,
  setAllCatalogs,
}) {
  const navigate = useNavigate();

 

  return (
    <div>
      <div className="pcatelogbox">
        <div
          style={{
            background: `url('${
              catalogue?.files[0]?.file ? catalogue?.files[0]?.file : img46
            }') center center / cover no-repeat`,
          }}
          className="pcatelogimg"
        >
          <div className="pcatelogimg2">
            <div className="porfolioprofilemenu">
              <RemoveRedEyeIcon
                // onClick={() => navigate(`/dashbaord/blog/${data?.contentId}`)}
                onClick={() => navigate(`/catalogue/${catalogue?.catalogueId}`)}
                style={{
                  margin: "0 0.5vw",
                  width:  "3vw " ,
                  height:  "3vw " ,
                  borderRadius: "50%",
                  cursor: "pointer",
                  objectFit: "cover",
                  backgroundColor: "white",
                  padding: "3px",
                }}
              />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "1vw" }} className="pcatelogperson">
          <div className="pcatelogpersonimg">
            <img src={catalogue?.u_id?.media} alt="" />
          </div>
          <div className="pcatelogpersonname">
            <div className="pcatelogpersonname1">{catalogue?.u_id?.fullName}</div>
          </div>
        </div>
        <div className="pcatelog-title">
          {catalogue?.catalougeTitle.slice(0, 35)}
        </div>
        <hr style={{ padding: "0vw", margin: "0.3vw" }} />
        <div className="pcatelogdate">
          <div>
            <span>
              <LockClockOutlined style={{ fontSize: "1vw" }} />
            </span>
            {catalogue?.deliveryDate} Days Delivery
          </div>
          <div>
            Starting At{" "}
            <span>
              {catalogue?.servicePrice1 ? catalogue?.servicePrice1 : "---"}
            </span>
          </div>
        </div>
        <div className="pcatelogperson">
          <div className="pcatelogpersonRatings">
            <span
              hidden
              style={{
                position: "relative",
                bottom: "0.15vw",
                right: "0.2vw",
              }}
            >
              <StarRatings
                rating={1}
                starDimension={ "1.2vw" }
                starSpacing={ "0.15vw" }
                numberOfStars={1}
                starRatedColor="#064C87"
              />
            </span>
            {/* 4.4 (512) */}
          </div>
        </div>
      </div>
    </div>
  );
}
