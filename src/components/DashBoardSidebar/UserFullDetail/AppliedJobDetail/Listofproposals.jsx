import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import img2 from "../../../../assets/Success stories Definition/checkmark (1).svg";
import img from "../../../../assets/Landing page/pexels-christina-morillo-1181467.png";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "fit-content",
  overflow: "scroll",
};

export default function Listofproposals({
  data,
  setjobdetail,
  setWorkhistorytoggle,
}) {
  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const navigate = useNavigate();
  const handleClosex = () => setOpenx(false);
  return (
    <div className="listofproposalname">
     
    </div>
  );
}
