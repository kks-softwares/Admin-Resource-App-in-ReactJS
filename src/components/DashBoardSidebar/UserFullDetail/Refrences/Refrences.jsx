import React, { useState } from "react";
import "./refrenece.css";
import { useNavigate } from "react-router";

import axios from "axios";
import API_HOST from "../../../../env";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RefrencePopup from "./RefrencePopup";

export default function Refrences() {
  const [openx, setOpenx] = React.useState(false);
  const [anchorElx, setAnchorElx] = React.useState(null);
  const canBeOpen = openx && Boolean(anchorElx);
  const id = canBeOpen ? "transition-popper" : undefined;

  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  return (
    <di  className="BrowseWorkMain-cntainer">
      <div style={{marginTop:"0vw"}} className="navoftableblogs">
        <div style={{ width: "6vw" }}>Id</div>
        <div style={{ width: "15vw" }}>Name</div>
        <div style={{ width: "15vw" }}>Category</div>
        <div style={{ width: "20vw" }}>Skill Set</div>
        <div style={{ width: "15vw" }}>Status</div>
        <div style={{ width: "8vw" }}></div>
      </div>

      <RefrencePopup />
      <RefrencePopup />
      <RefrencePopup />
      <RefrencePopup />
      <RefrencePopup />
      <RefrencePopup />
      <RefrencePopup />

      <div className="paginationbox">
        <div>
          <ArrowBackIosIcon style={{ fontSize: "1.5vw" }} />
        </div>
        <div style={{ color: page === 1 ? "#2A6599" : "" }}>1</div>
        <div>2</div>
        <div>3</div>
        <div>.</div>
        <div>.</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>
          <ArrowForwardIosIcon style={{ fontSize: "1.5vw" }} />
        </div>
      </div>
    </di>
  );
}
