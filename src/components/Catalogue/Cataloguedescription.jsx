import React from "react";
import "./catalogue.css";


import imgtick from "../../assets/Web 1280 – 2/Path 10738.svg";
export default function Cataloguedescription({ data }) {
  return (
    <div className="cgdesccontainer">
      <div className="dectitleclfb">Skill Set</div>
      <div
        style={{ fontSize: "1vw", fontWeight: "400", margin: "0.51vw 0vw" }}
        className="dectitleclfb"
      >
        UX Wireframing , User Flow , Product Research, UI Design with Prototype
      </div>

      <div className="dectitleclfb">Description</div>
      <div style={{ width: "99%" }} className="descriptiondata">
        <p style={{ margin: "1vw 0vw" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </p>
        <p style={{ margin: "1vw 0vw" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </p>
        <p style={{ margin: "1vw 0vw" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </p>
      </div>

     
      <div
        style={{ marginTop: "2vw", marginBottom: "2vw" }}
        className="dectitleclfb"
      >
       Our Services
      </div>
      <div style={{marginBottom:"3vw"}} className="catlogbigincludebox">
        <div className="catlogwhatincludedbox">
         
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnobox">
            Service Name
            </div>
            <div className="catlogwhatincludedboxvaluesnobox">
            Price
            </div>
            <div className="catlogwhatincludedboxvaluesnobox">
            Delivery Time
            </div>
            <div style={{width:"50vw"}} className="catlogwhatincludedboxvaluesnobox">
            What Include
            </div>
          </div>
        </div>
        <div className="catlogwhatincludedbox">
    
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxx">Starter</div>
            <div className="catlogwhatincludedboxvaluesnoboxx">$20</div>
            <div className="catlogwhatincludedboxvaluesnoboxx">3 days</div>
            <div style={{width:"52vw"}} className="catlogwhatincludedboxvaluesnoboxx">ALL Design Page was Changed to SVG and Provide to as per the Flow</div>
          </div>
        </div>
        <div className="catlogwhatincludedbox">
         
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxxx">Standard</div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">$200</div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">3 days</div>
            <div style={{width:"52vw"}} className="catlogwhatincludedboxvaluesnoboxxx">ALL Design Page was Changed to SVG and Provide to as per the Flow</div>
          </div>
        </div>
        <div className="catlogwhatincludedbox">
    
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxx">Advanced</div>
            <div className="catlogwhatincludedboxvaluesnoboxx">$2000</div>
            <div className="catlogwhatincludedboxvaluesnoboxx">3 days</div>
            <div style={{width:"52vw"}} className="catlogwhatincludedboxvaluesnoboxx">ALL Design Page was Changed to SVG and Provide to as per the Flow</div>
          </div>
        </div>
    </div>
    </div>
  );
}
