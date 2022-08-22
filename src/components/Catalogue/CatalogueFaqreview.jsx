import { SearchOffOutlined } from "@mui/icons-material";
import React from "react";
import "./catalogue.css";
import img3 from "../../assets/Web 1280 – 2/studio-republic-fotKKqWNMQ4-unsplash.png";
import StarRatings from "react-star-ratings";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Catelogfaqquestion from "./Catelogfaqquestion";
export default function CatalogueFaqreview() {
  return (
    <>
      <div style={{margin:"auto"}} className="cafaqcontainer">
        <div className="catefaqhead">FAQS</div>
        <div className="catefaqheadname">Frequently asked questions</div>
        <div className="catefaqheadhaveq">
          Have questioners? we're here to help
        </div>
        <div className="catesearchboxfaq">
          <span>
            <SearchOffOutlined
              style={{ margin: "0vw 0.81vw", fontSize: "1.7vw" }}
            />
          </span>
          <input type="text" />
        </div>
        <Catelogfaqquestion />
        <Catelogfaqquestion />
        <Catelogfaqquestion />
        <Catelogfaqquestion />
      </div>
      <div  className="careviewratingcontainer">
        <div style={{marginTop:"4vw",textAlign:"center"}} className="dectitleclfb">Ratings</div>
        <div style={{margin:"2vw auto"}} className="catelogratingbox">
          <div style={{ width: "10vw" }}>
            <div className="catelogratingboxratingvalue">4.8</div>
            <div>
              <span
                style={{ width: "10vw", position: "relative", bottom: "0.2vw" }}
              >
                <StarRatings
                  rating={4.8}
                  starRatedColor="#064C87"
                  starDimension="1.2vw  "
                  starSpacing="0.15vw"
                  numberOfStars={5}
                  name="rating"
                />
              </span>{" "}
            </div>
            <div className="catelogoverallrating">Overall Ratings</div>
          </div>
          <div style={{ width: "27vw", textAlign: "center" }}>
            <Box sx={{ width: "90%", margin: "1vw auto",height:"1.2vw",paddingTop:"0.3vw" }}>
              <LinearProgress variant="determinate" value={80} />
            </Box>
            <Box sx={{ width: "90%", margin: "1vw auto",height:"1.2vw",paddingTop:"0.3vw" }}>
              <LinearProgress variant="determinate" value={80} />
            </Box>
            <Box sx={{ width: "90%", margin: "1vw auto",height:"1.2vw",paddingTop:"0.3vw" }}>
              <LinearProgress variant="determinate" value={80} />
            </Box>
            <Box sx={{ width: "90%", margin: "1vw auto",height:"1.2vw",paddingTop:"0.3vw" }}>
              <LinearProgress variant="determinate" value={80} />
            </Box>
            <Box sx={{ width: "90%", margin: "1vw auto",height:"1.2vw",paddingTop:"0.3vw" }}>
              <LinearProgress variant="determinate" value={80} />
            </Box>
          </div>
          <div style={{ width: "3vw", textAlign: "right" }}>
            <div className="percentshiwnratingcatalogue">30%</div>
            <div className="percentshiwnratingcatalogue">30%</div>
            <div className="percentshiwnratingcatalogue">30%</div>
            <div className="percentshiwnratingcatalogue">30%</div>
            <div className="percentshiwnratingcatalogue">30%</div>
          </div>

          <div style={{ width: "18vw", textAlign: "center" }}>
            <div className="ratingcatelogbreakdown">Rating breakdown</div>
            <div className="ratingbreakdowntype">
              <div style={{ width: "70%" }}>Availability</div>
              <div style={{ color: "#064982", width: "15%" }}>
                <StarRatings
                  rating={4.5}
                  starRatedColor="#064C87"
                  starDimension="1vw  "
                  starSpacing="0.1vw"
                  numberOfStars={1}
                  name="rating"
                />
              </div>
              <div style={{ color: "#064982", width: "15%" }}>4.5</div>
            </div>
            <div className="ratingbreakdowntype">
              <div style={{ width: "70%" }}>Availability</div>
              <div style={{ color: "#064982", width: "15%" }}>
                <StarRatings
                  rating={4.5}
                  starRatedColor="#064C87"
                  starDimension="1vw  "
                  starSpacing="0.1vw"
                  numberOfStars={1}
                  name="rating"
                />
              </div>
              <div style={{ color: "#064982", width: "15%" }}>4.5</div>
            </div>
            <div className="ratingbreakdowntype">
              <div style={{ width: "70%" }}>Availability</div>
              <div style={{ color: "#064982", width: "15%" }}>
                <StarRatings
                  rating={4.5}
                  starRatedColor="#064C87"
                  starDimension="1vw  "
                  starSpacing="0.1vw"
                  numberOfStars={1}
                  name="rating"
                />
              </div>
              <div style={{ color: "#064982", width: "15%" }}>4.5</div>
            </div>
            <div className="ratingbreakdowntype">
              <div style={{ width: "70%" }}>Availability</div>
              <div style={{ color: "#064982", width: "15%" }}>
                <StarRatings
                  rating={4.5}
                  starRatedColor="#064C87"
                  starDimension="1vw  "
                  starSpacing="0.1vw"
                  numberOfStars={1}
                  name="rating"
                />
              </div>
              <div style={{ color: "#064982", width: "15%" }}>4.5</div>
            </div>
          </div>
        </div>
        <div className="dectitleclfb">Reviews</div>

        <div className="catalogreviewvaluedatabox">
          <div className="catalogreviewvaluedatalogo">
            <img src={img3} alt="" />
          </div>
          <div style={{width:"100%"}}>
          <div className="workhistryboxtitle">Pet Pros App</div>
            <div className="workhistryboxdate">
              {" "}
              <span
                style={{ width: "10vw", position: "relative", bottom: "0.2vw" }}
              >
                <StarRatings
                  rating={4.5}
                  starRatedColor="#064C87"
                  starDimension="1.2vw  "
                  starSpacing="0.15vw"
                  numberOfStars={1}
                  name="rating"
                />
              </span>{" "} <span style={{color:"#064C87",marginRight: "1vw"}}>4.5</span>
              Oct 4, 2020 - Nov 5, 2020
            </div>
            <div className="workhistryboxdata">
              "Veena delivered good work on this website development project and
              I enjoyed working with her. Her communication was top-notch, she
              met all deadlines, and her skills were reasonably strong. She
              helped me find additional freelancers to support the work. I

            </div>
            <hr  style={{ color:"#00000090",height:"0.1vw"}}/>
          </div>
        </div>
        <div className="catalogreviewvaluedatabox">
          <div className="catalogreviewvaluedatalogo">
            <img src={img3} alt="" />
          </div>
          <div style={{width:"100%"}}>
          <div className="workhistryboxtitle">Pet Pros App</div>
            <div className="workhistryboxdate">
              {" "}
              <span
                style={{ width: "10vw", position: "relative", bottom: "0.2vw" }}
              >
                <StarRatings
                  rating={4.5}
                  starRatedColor="#064C87"
                  starDimension="1.2vw  "
                  starSpacing="0.15vw"
                  numberOfStars={1}
                  name="rating"
                />
              </span>{" "} <span style={{color:"#064C87",marginRight: "1vw"}}>4.5</span>
              Oct 4, 2020 - Nov 5, 2020
            </div>
            <div className="workhistryboxdata">
              "Veena delivered good work on this website development project and
              I enjoyed working with her. Her communication was top-notch, she
              met all deadlines, and her skills were reasonably strong. She
              helped me find additional freelancers to support the work. I

            </div>
            <hr  style={{ color:"#00000090",height:"0.1vw"}}/>
          </div>
        </div>
        <div className="catalogreviewvaluedatabox">
          <div className="catalogreviewvaluedatalogo">
            <img src={img3} alt="" />
          </div>
          <div style={{width:"100%"}}>
          <div className="workhistryboxtitle">Pet Pros App</div>
            <div className="workhistryboxdate">
              {" "}
              <span
                style={{ width: "10vw", position: "relative", bottom: "0.2vw" }}
              >
                <StarRatings
                  rating={4.5}
                  starRatedColor="#064C87"
                  starDimension="1.2vw  "
                  starSpacing="0.15vw"
                  numberOfStars={1}
                  name="rating"
                />
              </span>{" "} <span style={{color:"#064C87",marginRight: "1vw"}}>4.5</span>
              Oct 4, 2020 - Nov 5, 2020
            </div>
            <div className="workhistryboxdata">
              "Veena delivered good work on this website development project and
              I enjoyed working with her. Her communication was top-notch, she
              met all deadlines, and her skills were reasonably strong. She
              helped me find additional freelancers to support the work. I

            </div>
            <hr  style={{ color:"#00000090",height:"0.1vw"}}/>
          </div>
        </div>
        <div className="catalogreviewvaluedatabox">
          <div className="catalogreviewvaluedatalogo">
            <img src={img3} alt="" />
          </div>
          <div style={{width:"100%"}}>
          <div className="workhistryboxtitle">Pet Pros App</div>
            <div className="workhistryboxdate">
              {" "}
              <span
                style={{ width: "10vw", position: "relative", bottom: "0.2vw" }}
              >
                <StarRatings
                  rating={4.5}
                  starRatedColor="#064C87"
                  starDimension="1.2vw  "
                  starSpacing="0.15vw"
                  numberOfStars={1}
                  name="rating"
                />
              </span>{" "} <span style={{color:"#064C87",marginRight: "1vw"}}>4.5</span>
              Oct 4, 2020 - Nov 5, 2020
            </div>
            <div className="workhistryboxdata">
              "Veena delivered good work on this website development project and
              I enjoyed working with her. Her communication was top-notch, she
              met all deadlines, and her skills were reasonably strong. She
              helped me find additional freelancers to support the work. I

            </div>
            <hr  style={{ color:"#00000090",height:"0.1vw"}}/>
          </div>
        </div>
        <div className="catalogreviewvaluedatabox">
          <div className="catalogreviewvaluedatalogo">
            <img src={img3} alt="" />
          </div>
          <div style={{width:"100%"}}>
          <div className="workhistryboxtitle">Pet Pros App</div>
            <div className="workhistryboxdate">
              {" "}
              <span
                style={{ width: "10vw", position: "relative", bottom: "0.2vw" }}
              >
                <StarRatings
                  rating={4.5}
                  starRatedColor="#064C87"
                  starDimension="1.2vw  "
                  starSpacing="0.15vw"
                  numberOfStars={1}
                  name="rating"
                />
              </span>{" "} <span style={{color:"#064C87",marginRight: "1vw"}}>4.5</span>
              Oct 4, 2020 - Nov 5, 2020
            </div>
            <div className="workhistryboxdata">
              "Veena delivered good work on this website development project and
              I enjoyed working with her. Her communication was top-notch, she
              met all deadlines, and her skills were reasonably strong. She
              helped me find additional freelancers to support the work. I

            </div>
            <hr  style={{ color:"#00000090",height:"0.1vw"}}/>
          </div>
        </div>
      </div>
    </>
  );
}
