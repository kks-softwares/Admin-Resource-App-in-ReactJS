import axios from "axios";
import React, {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Catalogbanner from "../../components/Catalogue/Catalogbanner";
import './Faq.css'
import API_HOST from "../../env";
import './Homeabout.css'
export default function Catalog({width}) {
  const navigate = useNavigate();
  const { catId } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      ?.get(`${API_HOST}/catalouge/viewCatalouge?catalogueId=${catId}`)
      .then((res) => {
        setData(res?.data?.success?.data[0]);
      });
  }, [catId]);
  
  console.log("data",data);

  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  }, []);
  return (
    <div>
      <Catalogbanner data={data} width={width}/>

     
    </div>
  );
}
