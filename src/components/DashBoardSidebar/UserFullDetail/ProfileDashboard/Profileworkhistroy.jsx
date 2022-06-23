import React, { useState } from "react";

import img1 from "../../../../assets/My profile – 28/Component 70 – 6.svg";
import img2 from "../../../../assets/My profile – 28/Component 71 – 6.svg";
import "./profile.css";

import StarRatings from "react-star-ratings";

export default function Profileworkhistroy() {
  const [workhistorytoggle, setWorkhistorytoggle] = useState(true);
  return (
    <div style={{ height: "fit-content" }} className="profilebadgecontainer">
      <div
        style={{ padding: "2vw", margin: "0 0vw" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Work History</div>
        <div hidden className="profiledetailnavmanu">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
        </div>
      </div>

      <div
        style={{ position: "relative", right: "1vw" }}
        className="profileworkhistruytoggleer"
      >
        <div
          className="profileworkhistruytoggleervalue"
          style={{ color: workhistorytoggle ? "#064C87" : "" }}
          onClick={() => {
            setWorkhistorytoggle(true);
          }}
        >
          Completed Jobs(8)
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{ color: !workhistorytoggle ? "#064C87" : "" }}
          onClick={() => {
            setWorkhistorytoggle(false);
          }}
        >
          Inprogress(4)
        </div>
        <div
          style={{
            color: "#064C87",
            borderBottom: "0.3vw solid #064C87",
            width: "10vw",
            position: "relative",
            right: workhistorytoggle ? "27vw" : "13vw",
            bottom: "0.3vw",
            transitionDuration: "1s",
            borderRadius: "0.2vw",
          }}
        ></div>
      </div>
      {workhistorytoggle ? (
        <div style={{ margin: "2vw 2vw" }}>
          <div className="workhistrybox">
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
                  numberOfStars={5}
                  name="rating"
                />
              </span>{" "}
              Oct 4, 2020 - Nov 5, 2020
            </div>
            <div className="workhistryboxdata">
              "Veena delivered good work on this website development project and
              I enjoyed working with her. Her communication was top-notch, she
              met all deadlines, and her skills were reasonably strong. She
              helped me find additional freelancers to support the work. I
              enjoyed working with Veena and will likely have additional jobs
              for her in the future."
            </div>
            <div style={{ width: "60%" }}>
              <div className="profileuserdfirst">
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Earnings
                  </div>
                  <div className="profileuserfirstonedata">$60k+</div>
                </div>
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Completed
                  </div>
                  <div className="profileuserfirstonedata">30</div>
                </div>
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Success
                  </div>
                  <div className="profileuserfirstonedata">90%</div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "right",
                marginBottom: "0.6vw",
              }}
              className="workhistryboxdate"
            >
              Sep 22, 2021 - Dec 10, 2021
            </div>
          </div>
          <div className="workhistrybox">
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
                  numberOfStars={5}
                  name="rating"
                />
              </span>{" "}
              Oct 4, 2020 - Nov 5, 2020
            </div>
            <div className="workhistryboxdata">
              "Veena delivered good work on this website development project and
              I enjoyed working with her. Her communication was top-notch, she
              met all deadlines, and her skills were reasonably strong. She
              helped me find additional freelancers to support the work. I
              enjoyed working with Veena and will likely have additional jobs
              for her in the future."
            </div>
            <div style={{ width: "60%" }}>
              <div className="profileuserdfirst">
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Earnings
                  </div>
                  <div className="profileuserfirstonedata">$60k+</div>
                </div>
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Completed
                  </div>
                  <div className="profileuserfirstonedata">30</div>
                </div>
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Success
                  </div>
                  <div className="profileuserfirstonedata">90%</div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "right",
                marginBottom: "0.6vw",
              }}
              className="workhistryboxdate"
            >
              Sep 22, 2021 - Dec 10, 2021
            </div>
          </div>
          <div className="workhistrybox">
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
                  numberOfStars={5}
                  name="rating"
                />
              </span>{" "}
              Oct 4, 2020 - Nov 5, 2020
            </div>
            <div className="workhistryboxdata">
              "Veena delivered good work on this website development project and
              I enjoyed working with her. Her communication was top-notch, she
              met all deadlines, and her skills were reasonably strong. She
              helped me find additional freelancers to support the work. I
              enjoyed working with Veena and will likely have additional jobs
              for her in the future."
            </div>
            <div style={{ width: "60%" }}>
              <div className="profileuserdfirst">
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Earnings
                  </div>
                  <div className="profileuserfirstonedata">$60k+</div>
                </div>
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Completed
                  </div>
                  <div className="profileuserfirstonedata">30</div>
                </div>
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Success
                  </div>
                  <div className="profileuserfirstonedata">90%</div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "right",
                marginBottom: "0.6vw",
              }}
              className="workhistryboxdate"
            >
              Sep 22, 2021 - Dec 10, 2021
            </div>
          </div>
          <div className="workhistrybox">
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
                  numberOfStars={5}
                  name="rating"
                />
              </span>{" "}
              Oct 4, 2020 - Nov 5, 2020
            </div>
            <div className="workhistryboxdata">
              "Veena delivered good work on this website development project and
              I enjoyed working with her. Her communication was top-notch, she
              met all deadlines, and her skills were reasonably strong. She
              helped me find additional freelancers to support the work. I
              enjoyed working with Veena and will likely have additional jobs
              for her in the future."
            </div>
            <div style={{ width: "60%" }}>
              <div className="profileuserdfirst">
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Earnings
                  </div>
                  <div className="profileuserfirstonedata">$60k+</div>
                </div>
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Completed
                  </div>
                  <div className="profileuserfirstonedata">30</div>
                </div>
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Success
                  </div>
                  <div className="profileuserfirstonedata">90%</div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "right",
                marginBottom: "0.6vw",
              }}
              className="workhistryboxdate"
            >
              Sep 22, 2021 - Dec 10, 2021
            </div>
          </div>
          <div className="workhistrybox">
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
                  numberOfStars={5}
                  name="rating"
                />
              </span>{" "}
              Oct 4, 2020 - Nov 5, 2020
            </div>
            <div className="workhistryboxdata">
              "Veena delivered good work on this website development project and
              I enjoyed working with her. Her communication was top-notch, she
              met all deadlines, and her skills were reasonably strong. She
              helped me find additional freelancers to support the work. I
              enjoyed working with Veena and will likely have additional jobs
              for her in the future."
            </div>
            <div style={{ width: "60%" }}>
              <div className="profileuserdfirst">
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Earnings
                  </div>
                  <div className="profileuserfirstonedata">$60k+</div>
                </div>
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Completed
                  </div>
                  <div className="profileuserfirstonedata">30</div>
                </div>
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Success
                  </div>
                  <div className="profileuserfirstonedata">90%</div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "right",
                marginBottom: "0.6vw",
              }}
              className="workhistryboxdate"
            >
              Sep 22, 2021 - Dec 10, 2021
            </div>
          </div>
        </div>
      ) : (
        <div style={{ margin: "2vw 2vw" }}>
              <div className="workhistrybox">
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
                  numberOfStars={5}
                  name="rating"
                />
              </span>{" "}
              Oct 4, 2020 - Nov 5, 2020
            </div>
            <div className="workhistryboxdata">
              "Veena delivered good work on this website development project and
              I enjoyed working with her. Her communication was top-notch, she
              met all deadlines, and her skills were reasonably strong. She
              helped me find additional freelancers to support the work. I
              enjoyed working with Veena and will likely have additional jobs
              for her in the future."
            </div>
            <div style={{ width: "60%" }}>
              <div className="profileuserdfirst">
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Earnings
                  </div>
                  <div className="profileuserfirstonedata">$60k+</div>
                </div>
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Completed
                  </div>
                  <div className="profileuserfirstonedata">30</div>
                </div>
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Success
                  </div>
                  <div className="profileuserfirstonedata">90%</div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "right",
                marginBottom: "0.6vw",
              }}
              className="workhistryboxdate"
            >
              Sep 22, 2021 - Dec 10, 2021
            </div>
          </div>
          <div className="workhistrybox">
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
                  numberOfStars={5}
                  name="rating"
                />
              </span>{" "}
              Oct 4, 2020 - Nov 5, 2020
            </div>
            <div className="workhistryboxdata">
              "Veena delivered good work on this website development project and
              I enjoyed working with her. Her communication was top-notch, she
              met all deadlines, and her skills were reasonably strong. She
              helped me find additional freelancers to support the work. I
              enjoyed working with Veena and will likely have additional jobs
              for her in the future."
            </div>
            <div style={{ width: "60%" }}>
              <div className="profileuserdfirst">
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Earnings
                  </div>
                  <div className="profileuserfirstonedata">$60k+</div>
                </div>
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Completed
                  </div>
                  <div className="profileuserfirstonedata">30</div>
                </div>
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Success
                  </div>
                  <div className="profileuserfirstonedata">90%</div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "right",
                marginBottom: "0.6vw",
              }}
              className="workhistryboxdate"
            >
              Sep 22, 2021 - Dec 10, 2021
            </div>
          </div>
          <div className="workhistrybox">
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
                  numberOfStars={5}
                  name="rating"
                />
              </span>{" "}
              Oct 4, 2020 - Nov 5, 2020
            </div>
            <div className="workhistryboxdata">
              "Veena delivered good work on this website development project and
              I enjoyed working with her. Her communication was top-notch, she
              met all deadlines, and her skills were reasonably strong. She
              helped me find additional freelancers to support the work. I
              enjoyed working with Veena and will likely have additional jobs
              for her in the future."
            </div>
            <div style={{ width: "60%" }}>
              <div className="profileuserdfirst">
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Earnings
                  </div>
                  <div className="profileuserfirstonedata">$60k+</div>
                </div>
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Completed
                  </div>
                  <div className="profileuserfirstonedata">30</div>
                </div>
                <div className="profileuserfirstone">
                  <div
                    style={{ color: "#41404077" }}
                    className="profileuserfirstonetitle"
                  >
                    Success
                  </div>
                  <div className="profileuserfirstonedata">90%</div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "right",
                marginBottom: "0.6vw",
              }}
              className="workhistryboxdate"
            >
              Sep 22, 2021 - Dec 10, 2021
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
