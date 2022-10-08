import React from "react";
import "./catalogue.css";

import { Catalogueservicedesc } from "./Catalogueservicedesc";
export default function Cataloguedescription({ data }) {
  return (
    <div className="cgdesccontainer">
      <div className="dectitleclfb">Skill Set</div>
      <div
        style={{ fontSize: "1vw", fontWeight: "500", margin: "0.51vw 0vw",display: 'flex', flexWrap: 'wrap' }}
        className="dectitleclfb"
      >
        {/* UX Wireframing , User Flow , Product Research, UI Design with Prototype */}
        {data?.skill1 ? <div className="pskillbox" style={{background:'#f8f9fa'}}>{data?.skill1 }</div> : ""}
        {data?.skill2 ? <div className="pskillbox" style={{background:'#f8f9fa'}}>{data?.skill2 }</div> : ""}
        {data?.skill3 ? <div className="pskillbox" style={{background:'#f8f9fa'}}>{data?.skill3 }</div> : ""}
        {data?.skill4 ? <div className="pskillbox" style={{background:'#f8f9fa'}}>{data?.skill4 }</div> : ""}
        {data?.skill5 ? <div className="pskillbox" style={{background:'#f8f9fa'}}>{data?.skill5 }</div> : ""}
        {data?.skill6 ? <div className="pskillbox" style={{background:'#f8f9fa'}}>{data?.skill6 }</div> : ""}
        {data?.skill7 ? <div className="pskillbox" style={{background:'#f8f9fa'}}>{data?.skill7 }</div> : ""}
        {data?.skill8 ? <div className="pskillbox" style={{background:'#f8f9fa'}}>{data?.skill8 }</div> : ""}
        {data?.skill9 ? <div className="pskillbox" style={{background:'#f8f9fa'}}>{data?.skill9 }</div> : ""}
        {data?.skill10 ? <div className="pskillbox" style={{background:'#f8f9fa'}}>{data?.skill10 }</div> : ""}
        {data?.skill11 ? <div className="pskillbox" style={{background:'#f8f9fa'}}>{data?.skill11 }</div> : ""}
        {data?.skill12 ? <div className="pskillbox" style={{background:'#f8f9fa'}}>{data?.skill12 }</div> : ""}
        {data?.skill13 ? <div className="pskillbox" style={{background:'#f8f9fa'}}>{data?.skill13 }</div> : ""}
        {data?.skill14 ? <div className="pskillbox" style={{background:'#f8f9fa'}}>{data?.skill14 }</div> : ""}
        {data?.skill15 ? <div className="pskillbox" style={{background:'#f8f9fa'}}>{data?.skill15 }</div> : ""}
        {data?.skill16 ? <div className="pskillbox" style={{background:'#f8f9fa'}}>{data?.skill16 }</div> : ""}
        {data?.skill17 ? <div className="pskillbox" style={{background:'#f8f9fa'}}>{data?.skill17 }</div> : ""}
        {data?.skill18 ? <div className="pskillbox" style={{background:'#f8f9fa'}}>{data?.skill18 }</div> : ""}
        {data?.skill19 ? <div className="pskillbox" style={{background:'#f8f9fa'}}>{data?.skill19 }</div> : ""}
        {data?.skill20 ? <div className="pskillbox" style={{background:'#f8f9fa'}}>{data?.skill20 }</div> : ""}
      </div>

      <div className="dectitleclfb">Description</div>
      <div style={{ width: "99%" }} className="descriptiondata">
        {/* <p style={{ margin: "1vw 0vw" }}>
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
        </p> */}
        {data?.description}
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
        <Catalogueservicedesc data={data}/>
      </div>
      {/* <div style={{marginBottom:"3vw"}} className="catlogbigincludebox">
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
            <div className="catlogwhatincludedboxvaluesnoboxx">{data?.serviceName1}</div>
            <div className="catlogwhatincludedboxvaluesnoboxx">{data?.servicePrice1}</div>
            <div className="catlogwhatincludedboxvaluesnoboxx">{data?.serviceDays1}</div>
            <div style={{width:"52vw"}} className="catlogwhatincludedboxvaluesnoboxx">{data?.whatInclude1}</div>
          </div>
        </div>
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxxx">{data?.serviceName2}</div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">{data?.servicePrice2}</div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">{data?.serviceDays2}</div>
            <div style={{width:"52vw"}} className="catlogwhatincludedboxvaluesnoboxxx">{data?.whatInclude2}</div>
          </div>
        </div>
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
          <div className="catlogwhatincludedboxvaluesnoboxx">{data?.serviceName3}</div>
            <div className="catlogwhatincludedboxvaluesnoboxx">{data?.servicePrice3}</div>
            <div className="catlogwhatincludedboxvaluesnoboxx">{data?.serviceDays3}</div>
            <div style={{width:"52vw"}} className="catlogwhatincludedboxvaluesnoboxx">{data?.whatInclude3}</div>
          </div>
        </div>
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxxx">{data?.serviceName4}</div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">{data?.servicePrice4}</div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">{data?.serviceDays4}</div>
            <div style={{width:"52vw"}} className="catlogwhatincludedboxvaluesnoboxxx">{data?.whatInclude4}</div>
          </div>
        </div>
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
          <div className="catlogwhatincludedboxvaluesnoboxx">{data?.serviceName5}</div>
            <div className="catlogwhatincludedboxvaluesnoboxx">{data?.servicePrice5}</div>
            <div className="catlogwhatincludedboxvaluesnoboxx">{data?.serviceDays5}</div>
            <div style={{width:"52vw"}} className="catlogwhatincludedboxvaluesnoboxx">{data?.whatInclude5}</div>
          </div>
        </div>
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxxx">{data?.serviceName6}</div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">{data?.servicePrice6}</div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">{data?.serviceDays6}</div>
            <div style={{width:"52vw"}} className="catlogwhatincludedboxvaluesnoboxxx">{data?.whatInclude6}</div>
          </div>
        </div>
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
          <div className="catlogwhatincludedboxvaluesnoboxx">{data?.serviceName7}</div>
            <div className="catlogwhatincludedboxvaluesnoboxx">{data?.servicePrice7}</div>
            <div className="catlogwhatincludedboxvaluesnoboxx">{data?.serviceDays7}</div>
            <div style={{width:"52vw"}} className="catlogwhatincludedboxvaluesnoboxx">{data?.whatInclude7}</div>
          </div>
        </div>
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxxx">{data?.serviceName8}</div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">{data?.servicePrice8}</div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">{data?.serviceDays8}</div>
            <div style={{width:"52vw"}} className="catlogwhatincludedboxvaluesnoboxxx">{data?.whatInclude8}</div>
          </div>
        </div>
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
          <div className="catlogwhatincludedboxvaluesnoboxx">{data?.serviceName9}</div>
            <div className="catlogwhatincludedboxvaluesnoboxx">{data?.servicePrice9}</div>
            <div className="catlogwhatincludedboxvaluesnoboxx">{data?.serviceDays9}</div>
            <div style={{width:"52vw"}} className="catlogwhatincludedboxvaluesnoboxx">{data?.whatInclude9}</div>
          </div>
        </div>
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxxx">{data?.serviceName10}</div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">{data?.servicePrice10}</div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">{data?.serviceDays10}</div>
            <div style={{width:"52vw"}} className="catlogwhatincludedboxvaluesnoboxxx">{data?.whatInclude10}</div>
          </div>
        </div>
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
          <div className="catlogwhatincludedboxvaluesnoboxx">{data?.serviceName11}</div>
            <div className="catlogwhatincludedboxvaluesnoboxx">{data?.servicePrice11}</div>
            <div className="catlogwhatincludedboxvaluesnoboxx">{data?.serviceDays11}</div>
            <div style={{width:"52vw"}} className="catlogwhatincludedboxvaluesnoboxx">{data?.whatInclude11}</div>
          </div>
        </div>
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxxx">{data?.serviceName12}</div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">{data?.servicePrice12}</div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">{data?.serviceDays12}</div>
            <div style={{width:"52vw"}} className="catlogwhatincludedboxvaluesnoboxxx">{data?.whatInclude12}</div>
          </div>
        </div>
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
          <div className="catlogwhatincludedboxvaluesnoboxx">{data?.serviceName13}</div>
            <div className="catlogwhatincludedboxvaluesnoboxx">{data?.servicePrice13}</div>
            <div className="catlogwhatincludedboxvaluesnoboxx">{data?.serviceDays13}</div>
            <div style={{width:"52vw"}} className="catlogwhatincludedboxvaluesnoboxx">{data?.whatInclude13}</div>
          </div>
        </div>
        <div className="catlogwhatincludedbox">
          <div className="catlogwhatincludedboxvalues">
            <div className="catlogwhatincludedboxvaluesnoboxxx">{data?.serviceName14}</div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">{data?.servicePrice14}</div>
            <div className="catlogwhatincludedboxvaluesnoboxxx">{data?.serviceDays14}</div>
            <div style={{width:"52vw"}} className="catlogwhatincludedboxvaluesnoboxxx">{data?.whatInclude14}</div>
          </div>
        </div>
    </div> */}
    </div>
  );
}
