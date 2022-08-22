import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Catelogfaqquestion() {
  const [longon, setLongon] = useState(false);
  return (
    <div
      onClick={() => setLongon(!longon)}
      className="cgfaqqabox"
      style={{ height: longon ? "10vw" : "4.5vw" }}
    >
      <div className="cgfaqqaquestion">
        <div style={{ color: "black" }} className="catefaqheadhaveq">
          Can I change my account to normal user to Resource?
        </div>
        <div>
          <KeyboardArrowDownIcon style={{ fontSize: "2vw" }} />
        </div>
      </div>
      {longon ? (
        <div className="cfaqnaswer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          tenetur. Numquam eum eaque, veniam quisquam ipsam fugiat accusantium
          voluptatibus ducimus sapiente ab? Cupiditate fugiat, quae eligendi
          laudantium qui neque dolores.
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
