import React, { useEffect, useState } from "react";
import "./profile.css";
import './croper.css';
import './background.css'
import img2 from "../../../../assets/Success stories Definition/checkmark (1).svg";
import img4 from "../../../../assets/My profile – 28/pexels-stefan-stefancik-91227.png";
import img from "../../../../assets/Success stories/alvaro-reyes-qWwpHwip31M-unsplash.png";
import imgedit from "../../../../assets/My profile – 28/Component 71 – 6.svg";
import { userActions } from "../../../../store/userSlice";
import axios from "axios";

import API_HOST from "../../../../env";
import { useDispatch } from "react-redux";




export default function ProfileBanner({ user }) {
  const dispatch = useDispatch();


 

  return (
    <div className="Profilebanner-container">
      <div className="coverPiccontainer">
        <div className="coverimgqgeprofile">
          <img src={user?.coverPic ? user?.coverPic : img} alt="" />
          {console.log(user?.fullName)}
        </div>
    </div>
     
      <div className="profilePiccontainer">
        <div className="image-profilepart">
          <img src={user?.media ? user?.media : img4} alt="" />
          <div className="profileeditimgqgeprofile">
            <label htmlFor="profilepic">
              <img
                src={imgedit}
                alt=""
                style={{
                  fontSize: "1.12vw",
                  cursor: "pointer",
                  width: "3.4vw",
                  height: "3.4vw",
                  objectFit: "contain",
                  background: "white",
                  borderRadius: "50%",
                  border: "1px solid blue",
                  position: "relative",
                  left: "10vw",
                  bottom: "5vw",
                }}
              />
              <input
                type="file"
                name=""
                id="profilepic"
                hidden
        
              />
            </label>
          </div>
        </div>
      
        <div className="profilebannernameandpost">
          <div className="profilebannernameandpostname">{user?.fullName}</div>
          <div className="profilebannernameandpostemail">
            <span>
              <img src={img2} alt="" />
            </span>
            {user?.userName}
          </div>
        </div>
      </div>
    </div>
  );
}
