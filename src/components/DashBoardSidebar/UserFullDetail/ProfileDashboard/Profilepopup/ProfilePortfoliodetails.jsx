import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import img46 from "../../../../../assets/My profile – 28/Landing page – 19.png";
import { useNavigate } from "react-router-dom";

export default function ProfilePortfoliodetails({
 
  portfolio,
  
}) {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{width:"30vw"}} className="pportfoliocard">
        <div
          style={{
            background: `url('${
              portfolio?.icon ? portfolio?.icon : img46
            }') center center / cover no-repeat`,
          }}
          className="pportimg"
        >
          <div className="pportimg2">
            <div className="porfolioprofilemenu">
              <RemoveRedEyeIcon
                // onClick={() => navigate(`/dashbaord/blog/${data?.contentId}`)}
                onClick={() =>
                  navigate(`/portfolio/${portfolio?.projectPortfolioId}`)
                }
                style={{
                  margin: "0 0.5vw",
                  width:  "3vw " ,
                  height:  "3vw " ,
                  borderRadius: "50%",
                  cursor: "pointer",
                  objectFit: "cover",
                  backgroundColor: "white",
                  padding: "4px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="pportfoliotext">{portfolio?.projectTitle}</div>
      </div>
    </div>
  );
}
