import React, { useEffect, useState } from "react";
import "./Documents.css";
import img2 from "../../../../assets/Success stories Definition/checkmark (1).svg";
import img1 from "../../../../assets/Web 1280 – 14/Group 9831.svg";
import API_HOST from "../../../../env";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function Documents({user}) {
  const { type, userName } = useParams();
  // const { user, loggedInStatus } = useSelector((state) => state.user);
  // const [verifyButtonUserProfile, setVerifyButtonUserProfile] = useState("");

  const handleVerifyButtonUser = () => {
    const formdata = new FormData();

    formdata.append("userId", user?.userId);
    formdata.append("verifiedByAdmin", true);
    
      axios
          .post(`${API_HOST}/users/editUser`, formdata, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(res.data.success.data)
            // setVerifyButtonUserProfile(res?.data?.success?.data);
            // window.scrollTo(0, 0, { behavior: "smooth" });
          })
          .catch((err) => {
            console.log(err.response);
            // setSettingAccEmail(err.response.data.message)
            // setRestag(true);
          });
  }
  // console.log("USERS", userName,"PROPS",user)
  
  return (
    <div>
      <div
        style={{ margin: "1vw 0.5vw", padding: "0" }}
        className="navoftableblogs"
      >
        Document Details
      </div>

      <div className="boxoddocuments">
        <div className="titledocuments">Id Verification</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="Headingdocuments">Driving License</div>
          <div style={{ fontWeight: "400" }} className="Headingdocuments">
            TN58009189102
            <span>
              <img
                style={{
                  width: "1vw",
                  margin: "0.4vw",
                  position: "relative",
                  bottom: "0.2vw",
                }}
                src={img2}
                alt=""
              />
            </span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" , flexWrap: "wrap" }}>
          <div style={{ width: "50%" }} className="inputfilesshowncatboxsingle">
            <div className="inputfilesshowncatboxsingleimg">
              <img src={img1} alt="" />
            </div>
            <div className="fileselctednamecate">Modern submitted.docx</div>
          </div>
          <div style={{ width: "50%" }} className="inputfilesshowncatboxsingle">
            <div className="inputfilesshowncatboxsingleimg">
              <img src={img1} alt="" />
            </div>
            <div className="fileselctednamecate">Modern submitted.docx</div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="Headingdocuments">Driving License</div>
          <div style={{ fontWeight: "400" }} className="Headingdocuments">
            TN58009189102
            <span>
              <img
                style={{
                  width: "1vw",
                  margin: "0.4vw",
                  position: "relative",
                  bottom: "0.2vw",
                }}
                src={img2}
                alt=""
              />
            </span>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <div style={{ width: "50%" }} className="inputfilesshowncatboxsingle">
            <div className="inputfilesshowncatboxsingleimg">
              <img src={img1} alt="" />
            </div>
            <div className="fileselctednamecate">Modern submitted.docx</div>
          </div>
        </div>

        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <div className="Headingdocuments">Driving License</div>
          <div style={{ fontWeight: "400" }} className="Headingdocuments">
            TN58009189102
            <span>
              <img
                style={{
                  width: "1vw",
                  margin: "0.4vw",
                  position: "relative",
                  bottom: "0.2vw",
                }}
                src={img2}
                alt=""
              />
            </span>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <div style={{ width: "50%" }} className="inputfilesshowncatboxsingle">
            <div className="inputfilesshowncatboxsingleimg">
              <img src={img1} alt="" />
            </div>
            <div className="fileselctednamecate">Modern submitted.docx</div>
          </div>
          <div style={{ width: "50%" }} className="inputfilesshowncatboxsingle">
            <div className="inputfilesshowncatboxsingleimg">
              <img src={img1} alt="" />
            </div>
            <div className="fileselctednamecate">Modern submitted.docx</div>
          </div>
        </div>
      </div>
      {user?.verifiedByAdmin === false ?
        <div style={{display:'flex',paddingRight:'5vw',justifyContent:'flex-end'}}>
          <button style={{color:'#fff', backgroundColor: '#064C87', padding: '1vw',border:'none'}} 
                  onClick={()=> {handleVerifyButtonUser()}} >Click to Verify Document</button>
        </div> : <div style={{borderStyle: 'dashed', float: 'right', padding: '0.8vw', jfontWeight:'600'}}>This User is Already Verified by Admin</div>
      }
    </div>
  );
}
