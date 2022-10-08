import React from "react";

import img from "../../assets/jobhome/Completed-pana (1).svg";
import img1 from "../../assets/jobhome/checkmark (1) (1).svg";
import { userActions } from "../../store/userSlice";
import {  useDispatch } from "react-redux";
export default function Homejobconfirm({
  width,
  handleClose,
  handleClosex,
  workTitle,
  trackingId,
  password,
  username,
  email,
}) {
  const dispatch = useDispatch();
  const handleStart = () => {
    dispatch(userActions.openloginForm());
  };
  return (
    <div className="homejobpostcinfirm-container">
      <div className="homejobpostconfirmthankuhead">Confirmation</div>
      <div className="homejobpostconfirmthankuheadrequire">
        Your Booking order has been placed Successfully
      </div>
      <div className="homejobpostconfirmheadrequire">
        We sent an Confirmation mail to your given mail
      </div>

      <div className="homejobconfirmcontainer">
        <div className="homejobconfirmleft">
          <img
            src={img}
            style={{ width: width > 700 ? "29vw" : "80vw", marginLeft: "5vw" }}
            alt=""
          />
        </div>
        <div className="homejobconfirmright">
          <div className="jobconfirmdetails">
            <div className="homejobconfirmdata">
              <div className="imgofjobconfirmdetails">
                <img src={img1} alt="" />
              </div>
              <div className="homejocconfirmdattye">Title-</div>
              <div className="homejocconfirmdattye-value">{workTitle}</div>
            </div>
            {/* <div className="homejobconfirmdata">
              <div className="imgofjobconfirmdetails">
                <img src={img1} alt="" />
              </div>
              <div className="homejocconfirmdattye">Booking Id-</div>
              <div className="homejocconfirmdattye-value">{trackingId}</div>
            </div> */}
            <div className="homejobconfirmdata">
              <div className="imgofjobconfirmdetails">
                <img src={img1} alt="" />
              </div>
              <div className="homejocconfirmdattye">Username-</div>
              <div className="homejocconfirmdattye-value">{username}</div>
            </div>
            <div className="homejobconfirmdata">
              <div className="imgofjobconfirmdetails">
                <img src={img1} alt="" />
              </div>
              <div className="homejocconfirmdattye">Email-</div>
              <div className="homejocconfirmdattye-value">{email}</div>
            </div>
            <div className="homejobconfirmdata">
              <div className="imgofjobconfirmdetails">
                <img src={img1} alt="" />
              </div>
              <div className="homejocconfirmdattye">Password-</div>
              <div className="homejocconfirmdattye-value">{password}</div>
            </div>
          </div>

          <button
            onClick={() => {
              handleClose();
              handleClosex();
              handleStart();
            }}
          >
            Click here to Login
          </button>
        </div>
      </div>
    </div>
  );
}
