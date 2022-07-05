import React from "react";
import "./SkillPreview.css";
import ReactPlayer from "react-player";

import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
export default function SkillPreview() {
  return (
    <div style={{ padding: "1.5vw" }}>
      <div className="courseaboutdetailtitile">Get a Business Online</div>

      <div className="vedioPlayercontainer">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=-2qudJdnSv8&ab_channel=GeekersBrain"
          //   light="true"
          playbackRate="true"
          controls="true"
          height="100%"
          width="100%"
          pip="true"
        />
      </div>
      <div style={{ height: "1vw" }}></div>
      <div className="courseaboutdetailtitile" style={{ fontSize: "1.2vw" }}>
        About Offer
      </div>

      <div
        style={{ margin: "1vw 0", fontSize: "1.1vw" }}
        className="subcbtitile"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Let r a set sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>

      <div className="courseaboutdetailtitile" style={{ fontSize: "1.2vw" }}>
        Modules
      </div>

      <div style={{ padding: "1vw", width: "100%" }}>
        <div className="cardofmodules">
          <div style={{ width: "75%" }}>1. Introduction of UX Design</div>
          <div style={{ width: "4%" }}>0/1</div>
          <div style={{ width: "2%" }}>/</div>
          <div style={{ width: "10%" }}>00:20:00</div>
          <div style={{ width: "5%", position: "relative", top: "0.2vw" }}>
            <CircularProgressWithLabel value={60} />
          </div>
        </div>
        <div className="cardofmodules">
          <div style={{ width: "75%" }}>1. Introduction of UX Design</div>
          <div style={{ width: "4%" }}>0/1</div>
          <div style={{ width: "2%" }}>/</div>
          <div style={{ width: "10%" }}>00:20:00</div>
          <div style={{ width: "5%", position: "relative", top: "0.2vw" }}>
            <CircularProgressWithLabel value={60} />
          </div>
        </div>
        <div className="cardofmodules">
          <div style={{ width: "75%" }}>1. Introduction of UX Design</div>
          <div style={{ width: "4%" }}>0/1</div>
          <div style={{ width: "2%" }}>/</div>
          <div style={{ width: "10%" }}>00:20:00</div>
          <div style={{ width: "5%", position: "relative", top: "0.2vw" }}>
            <CircularProgressWithLabel value={60} />
          </div>
        </div>
        <div className="cardofmodules">
          <div style={{ width: "75%" }}>1. Introduction of UX Design</div>
          <div style={{ width: "4%" }}>0/1</div>
          <div style={{ width: "2%" }}>/</div>
          <div style={{ width: "10%" }}>00:20:00</div>
          <div style={{ width: "5%", position: "relative", top: "0.2vw" }}>
            <CircularProgressWithLabel value={60} />
          </div>
        </div>
      </div>
    </div>
  );
}
