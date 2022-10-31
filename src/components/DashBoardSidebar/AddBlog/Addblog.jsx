import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddTableofContent from "./AddTableofContent";
import Cataloguecarosel from "./CatalogCarosel";
import img from "../../../assets/Web 1280 – 14/Icon.svg";
import img1 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import img21 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import API_HOST from "../../../env";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  height: "50vw",
  maxHeight: "50vw",
  bgcolor: "background.paper",
  border: "2px solid #ffffff",
  overflowY: "scroll",
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles((theme) => ({
  select: {
    height: "1vw",
    width: "100%",
    padding: "1vw 0.5vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.51vw",
    lineHeight: "100%",
  },
  select2: {
    height: "1vw",
    width: "100%",
    padding: "1vw 0.5vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.51vw",
    lineHeight: "100%",
  },
  select3: {
    height: "1vw",
    width: "100%",
    marginTop: "0.1vw",
    padding: "0vw 0vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.51vw",
    lineHeight: "100%",
    position: "relative",
    top: "0.81vw",
    left: "0.2vw",
  },
  icon: {
    fill: "black",
  },
}));
export default function Addblog({ width }) {
  const classes = useStyles();
  const { user } = useSelector((state) => state.user);

  const [arrayofblogs, setArrayofblogs] = useState([
    {
      heading: "",
      toc: "",
      file: "",
      desc: "",
      title: "",
      button: "",
    },
  ]);
  const navigate = useNavigate();
  const [erroeshow, setErroeshow] = useState(false);
  const [title, setTitle] = useState("");
  const [imagetitle, setimagetitle] = useState("");
  const [open, setOpen] = React.useState(false);
  const [metaTag, setMetaTag] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age3, setAge3] = React.useState(0);
  const handleChange3 = (event) => {
    setAge3(event.target.value);
  };
  const [arrayoffiles, setArrayoffiles] = useState([]);
  const [scate, setsCate] = useState("");

  const [service1Question, setService1Question] = useState("");
  const [service2Question, setService2Question] = useState("");
  const [service3Question, setService3Question] = useState("");
  const [service4Question, setService4Question] = useState("");
  const [service5Question, setService5Question] = useState("");
  const [service6Question, setService6Question] = useState("");
  const [service7Question, setService7Question] = useState("");
  const [service8Question, setService8Question] = useState("");
  const [service9Question, setService9Question] = useState("");
  const [service10Question, setService10Question] = useState("");
  const [service11Question, setService11Question] = useState("");
  const [service12Question, setService12Question] = useState("");
  const [service13Question, setService13Question] = useState("");
  const [service14Question, setService14Question] = useState("");
  const [service15Question, setService15Question] = useState("");
  const [service16Question, setService16Question] = useState("");
  const [service17Question, setService17Question] = useState("");
  const [service18Question, setService18Question] = useState("");
  const [service19Question, setService19Question] = useState("");
  const [service20Question, setService20Question] = useState("");

  const [service1Answer, setService1Answer] = useState("");
  const [service2Answer, setService2Answer] = useState("");
  const [service3Answer, setService3Answer] = useState("");
  const [service4Answer, setService4Answer] = useState("");
  const [service5Answer, setService5Answer] = useState("");
  const [service6Answer, setService6Answer] = useState("");
  const [service7Answer, setService7Answer] = useState("");
  const [service8Answer, setService8Answer] = useState("");
  const [service9Answer, setService9Answer] = useState("");
  const [service10Answer, setService10Answer] = useState("");
  const [service11Answer, setService11Answer] = useState("");
  const [service12Answer, setService12Answer] = useState("");
  const [service13Answer, setService13Answer] = useState("");
  const [service14Answer, setService14Answer] = useState("");
  const [service15Answer, setService15Answer] = useState("");
  const [service16Answer, setService16Answer] = useState("");
  const [service17Answer, setService17Answer] = useState("");
  const [service18Answer, setService18Answer] = useState("");
  const [service19Answer, setService19Answer] = useState("");
  const [service20Answer, setService20Answer] = useState("");

  const handlesumbitBlog = () => {
    const formdata = new FormData();
    if (arrayofservicesFAQ.length === 0) {
      // setRestag(true);
      return;
    }
    if (arrayofservicesFAQ.length === 1) {
      formdata.append("Q1", service1Question);
      formdata.append("A1", service1Answer);
    }
    if (arrayofservicesFAQ.length === 2) {
      formdata.append("Q1", service1Question);
      formdata.append("A1", service1Answer);
      formdata.append("Q2", service2Question);
      formdata.append("A2", service2Answer);
    }
    if (arrayofservicesFAQ.length === 3) {
      formdata.append("Q1", service1Question);
      formdata.append("A1", service1Answer);
      formdata.append("Q2", service2Question);
      formdata.append("A2", service2Answer);
      formdata.append("Q3", service3Question);
      formdata.append("A3", service3Answer);
    }
    if (arrayofservicesFAQ.length === 4) {
      formdata.append("Q1", service1Question);
      formdata.append("A1", service1Answer);
      formdata.append("Q2", service2Question);
      formdata.append("A2", service2Answer);
      formdata.append("Q3", service3Question);
      formdata.append("A3", service3Answer);
      formdata.append("Q4", service4Question);
      formdata.append("A4", service4Answer);
    }
    if (arrayofservicesFAQ.length === 5) {
      formdata.append("Q1", service1Question);
      formdata.append("A1", service1Answer);
      formdata.append("Q2", service2Question);
      formdata.append("A2", service2Answer);
      formdata.append("Q3", service3Question);
      formdata.append("A3", service3Answer);
      formdata.append("Q4", service4Question);
      formdata.append("A4", service4Answer);
      formdata.append("Q5", service5Question);
      formdata.append("A5", service5Answer);
    }
    if (arrayofservicesFAQ.length === 6) {
      formdata.append("Q1", service1Question);
      formdata.append("A1", service1Answer);
      formdata.append("Q2", service2Question);
      formdata.append("A2", service2Answer);
      formdata.append("Q3", service3Question);
      formdata.append("A3", service3Answer);
      formdata.append("Q4", service4Question);
      formdata.append("A4", service4Answer);
      formdata.append("Q5", service5Question);
      formdata.append("A5", service5Answer);
      formdata.append("Q6", service6Question);
      formdata.append("A6", service6Answer);
    }
    if (arrayofservicesFAQ.length === 7) {
      formdata.append("Q1", service1Question);
      formdata.append("A1", service1Answer);
      formdata.append("Q2", service2Question);
      formdata.append("A2", service2Answer);
      formdata.append("Q3", service3Question);
      formdata.append("A3", service3Answer);
      formdata.append("Q4", service4Question);
      formdata.append("A4", service4Answer);
      formdata.append("Q5", service5Question);
      formdata.append("A5", service5Answer);
      formdata.append("Q6", service6Question);
      formdata.append("A6", service6Answer);
      formdata.append("Q7", service7Question);
      formdata.append("A7", service7Answer);
    }
    if (arrayofservicesFAQ.length === 8) {
      formdata.append("Q1", service1Question);
      formdata.append("A1", service1Answer);
      formdata.append("Q2", service2Question);
      formdata.append("A2", service2Answer);
      formdata.append("Q3", service3Question);
      formdata.append("A3", service3Answer);
      formdata.append("Q4", service4Question);
      formdata.append("A4", service4Answer);
      formdata.append("Q5", service5Question);
      formdata.append("A5", service5Answer);
      formdata.append("Q6", service6Question);
      formdata.append("A6", service6Answer);
      formdata.append("Q7", service7Question);
      formdata.append("A7", service7Answer);
      formdata.append("Q8", service8Question);
      formdata.append("A8", service8Answer);
    }
    if (arrayofservicesFAQ.length === 9) {
      formdata.append("Q1", service1Question);
      formdata.append("A1", service1Answer);
      formdata.append("Q2", service2Question);
      formdata.append("A2", service2Answer);
      formdata.append("Q3", service3Question);
      formdata.append("A3", service3Answer);
      formdata.append("Q4", service4Question);
      formdata.append("A4", service4Answer);
      formdata.append("Q5", service5Question);
      formdata.append("A5", service5Answer);
      formdata.append("Q6", service6Question);
      formdata.append("A6", service6Answer);
      formdata.append("Q7", service7Question);
      formdata.append("A7", service7Answer);
      formdata.append("Q8", service8Question);
      formdata.append("A8", service8Answer);
      formdata.append("Q9", service9Question);
      formdata.append("A9", service9Answer);
    }
    if (arrayofservicesFAQ.length === 10) {
      formdata.append("Q1", service1Question);
      formdata.append("A1", service1Answer);
      formdata.append("Q2", service2Question);
      formdata.append("A2", service2Answer);
      formdata.append("Q3", service3Question);
      formdata.append("A3", service3Answer);
      formdata.append("Q4", service4Question);
      formdata.append("A4", service4Answer);
      formdata.append("Q5", service5Question);
      formdata.append("A5", service5Answer);
      formdata.append("Q6", service6Question);
      formdata.append("A6", service6Answer);
      formdata.append("Q7", service7Question);
      formdata.append("A7", service7Answer);
      formdata.append("Q8", service8Question);
      formdata.append("A8", service8Answer);
      formdata.append("Q9", service9Question);
      formdata.append("A9", service9Answer);
      formdata.append("Q10", service10Question);
      formdata.append("A10", service10Answer);
    }
    if (arrayofservicesFAQ.length === 11) {
      formdata.append("Q1", service1Question);
      formdata.append("A1", service1Answer);
      formdata.append("Q2", service2Question);
      formdata.append("A2", service2Answer);
      formdata.append("Q3", service3Question);
      formdata.append("A3", service3Answer);
      formdata.append("Q4", service4Question);
      formdata.append("A4", service4Answer);
      formdata.append("Q5", service5Question);
      formdata.append("A5", service5Answer);
      formdata.append("Q6", service6Question);
      formdata.append("A6", service6Answer);
      formdata.append("Q7", service7Question);
      formdata.append("A7", service7Answer);
      formdata.append("Q8", service8Question);
      formdata.append("A8", service8Answer);
      formdata.append("Q9", service9Question);
      formdata.append("A9", service9Answer);
      formdata.append("Q10", service10Question);
      formdata.append("A10", service10Answer);
      formdata.append("Q11", service11Question);
      formdata.append("A11", service11Answer);
    }
    if (arrayofservicesFAQ.length === 12) {
      formdata.append("Q1", service1Question);
      formdata.append("A1", service1Answer);
      formdata.append("Q2", service2Question);
      formdata.append("A2", service2Answer);
      formdata.append("Q3", service3Question);
      formdata.append("A3", service3Answer);
      formdata.append("Q4", service4Question);
      formdata.append("A4", service4Answer);
      formdata.append("Q5", service5Question);
      formdata.append("A5", service5Answer);
      formdata.append("Q6", service6Question);
      formdata.append("A6", service6Answer);
      formdata.append("Q7", service7Question);
      formdata.append("A7", service7Answer);
      formdata.append("Q8", service8Question);
      formdata.append("A8", service8Answer);
      formdata.append("Q9", service9Question);
      formdata.append("A9", service9Answer);
      formdata.append("Q10", service10Question);
      formdata.append("A10", service10Answer);
      formdata.append("Q11", service11Question);
      formdata.append("A11", service11Answer);
      formdata.append("Q12", service12Question);
      formdata.append("A12", service12Answer);
    }
    if (arrayofservicesFAQ.length === 13) {
      formdata.append("Q1", service1Question);
      formdata.append("A1", service1Answer);
      formdata.append("Q2", service2Question);
      formdata.append("A2", service2Answer);
      formdata.append("Q3", service3Question);
      formdata.append("A3", service3Answer);
      formdata.append("Q4", service4Question);
      formdata.append("A4", service4Answer);
      formdata.append("Q5", service5Question);
      formdata.append("A5", service5Answer);
      formdata.append("Q6", service6Question);
      formdata.append("A6", service6Answer);
      formdata.append("Q7", service7Question);
      formdata.append("A7", service7Answer);
      formdata.append("Q8", service8Question);
      formdata.append("A8", service8Answer);
      formdata.append("Q9", service9Question);
      formdata.append("A9", service9Answer);
      formdata.append("Q10", service10Question);
      formdata.append("A10", service10Answer);
      formdata.append("Q11", service11Question);
      formdata.append("A11", service11Answer);
      formdata.append("Q12", service12Question);
      formdata.append("A12", service12Answer);
      formdata.append("Q13", service13Question);
      formdata.append("A13", service13Answer);
    }
    if (arrayofservicesFAQ.length === 14) {
      formdata.append("Q1", service1Question);
      formdata.append("A1", service1Answer);
      formdata.append("Q2", service2Question);
      formdata.append("A2", service2Answer);
      formdata.append("Q3", service3Question);
      formdata.append("A3", service3Answer);
      formdata.append("Q4", service4Question);
      formdata.append("A4", service4Answer);
      formdata.append("Q5", service5Question);
      formdata.append("A5", service5Answer);
      formdata.append("Q6", service6Question);
      formdata.append("A6", service6Answer);
      formdata.append("Q7", service7Question);
      formdata.append("A7", service7Answer);
      formdata.append("Q8", service8Question);
      formdata.append("A8", service8Answer);
      formdata.append("Q9", service9Question);
      formdata.append("A9", service9Answer);
      formdata.append("Q10", service10Question);
      formdata.append("A10", service10Answer);
      formdata.append("Q11", service11Question);
      formdata.append("A11", service11Answer);
      formdata.append("Q12", service12Question);
      formdata.append("A12", service12Answer);
      formdata.append("Q13", service13Question);
      formdata.append("A13", service13Answer);
      formdata.append("Q14", service14Question);
      formdata.append("A14", service14Answer);
    }
    if (arrayofservicesFAQ.length === 15) {
      formdata.append("Q1", service1Question);
      formdata.append("A1", service1Answer);
      formdata.append("Q2", service2Question);
      formdata.append("A2", service2Answer);
      formdata.append("Q3", service3Question);
      formdata.append("A3", service3Answer);
      formdata.append("Q4", service4Question);
      formdata.append("A4", service4Answer);
      formdata.append("Q5", service5Question);
      formdata.append("A5", service5Answer);
      formdata.append("Q6", service6Question);
      formdata.append("A6", service6Answer);
      formdata.append("Q7", service7Question);
      formdata.append("A7", service7Answer);
      formdata.append("Q8", service8Question);
      formdata.append("A8", service8Answer);
      formdata.append("Q9", service9Question);
      formdata.append("A9", service9Answer);
      formdata.append("Q10", service10Question);
      formdata.append("A10", service10Answer);
      formdata.append("Q11", service11Question);
      formdata.append("A11", service11Answer);
      formdata.append("Q12", service12Question);
      formdata.append("A12", service12Answer);
      formdata.append("Q13", service13Question);
      formdata.append("A13", service13Answer);
      formdata.append("Q14", service14Question);
      formdata.append("A14", service14Answer);
      formdata.append("Q15", service15Question);
      formdata.append("A15", service15Answer);
    }
    if (arrayofservicesFAQ.length === 16) {
      formdata.append("Q1", service1Question);
      formdata.append("A1", service1Answer);
      formdata.append("Q2", service2Question);
      formdata.append("A2", service2Answer);
      formdata.append("Q3", service3Question);
      formdata.append("A3", service3Answer);
      formdata.append("Q4", service4Question);
      formdata.append("A4", service4Answer);
      formdata.append("Q5", service5Question);
      formdata.append("A5", service5Answer);
      formdata.append("Q6", service6Question);
      formdata.append("A6", service6Answer);
      formdata.append("Q7", service7Question);
      formdata.append("A7", service7Answer);
      formdata.append("Q8", service8Question);
      formdata.append("A8", service8Answer);
      formdata.append("Q9", service9Question);
      formdata.append("A9", service9Answer);
      formdata.append("Q10", service10Question);
      formdata.append("A10", service10Answer);
      formdata.append("Q11", service11Question);
      formdata.append("A11", service11Answer);
      formdata.append("Q12", service12Question);
      formdata.append("A12", service12Answer);
      formdata.append("Q13", service13Question);
      formdata.append("A13", service13Answer);
      formdata.append("Q14", service14Question);
      formdata.append("A14", service14Answer);
      formdata.append("Q15", service15Question);
      formdata.append("A15", service15Answer);
      formdata.append("Q16", service16Question);
      formdata.append("A16", service16Answer);
    }
    if (arrayofservicesFAQ.length === 17) {
      formdata.append("Q1", service1Question);
      formdata.append("A1", service1Answer);
      formdata.append("Q2", service2Question);
      formdata.append("A2", service2Answer);
      formdata.append("Q3", service3Question);
      formdata.append("A3", service3Answer);
      formdata.append("Q4", service4Question);
      formdata.append("A4", service4Answer);
      formdata.append("Q5", service5Question);
      formdata.append("A5", service5Answer);
      formdata.append("Q6", service6Question);
      formdata.append("A6", service6Answer);
      formdata.append("Q7", service7Question);
      formdata.append("A7", service7Answer);
      formdata.append("Q8", service8Question);
      formdata.append("A8", service8Answer);
      formdata.append("Q9", service9Question);
      formdata.append("A9", service9Answer);
      formdata.append("Q10", service10Question);
      formdata.append("A10", service10Answer);
      formdata.append("Q11", service11Question);
      formdata.append("A11", service11Answer);
      formdata.append("Q12", service12Question);
      formdata.append("A12", service12Answer);
      formdata.append("Q13", service13Question);
      formdata.append("A13", service13Answer);
      formdata.append("Q14", service14Question);
      formdata.append("A14", service14Answer);
      formdata.append("Q15", service15Question);
      formdata.append("A15", service15Answer);
      formdata.append("Q16", service16Question);
      formdata.append("A16", service16Answer);
      formdata.append("Q17", service17Question);
      formdata.append("A17", service17Answer);
    }
    if (arrayofservicesFAQ.length === 18) {
      formdata.append("Q1", service1Question);
      formdata.append("A1", service1Answer);
      formdata.append("Q2", service2Question);
      formdata.append("A2", service2Answer);
      formdata.append("Q3", service3Question);
      formdata.append("A3", service3Answer);
      formdata.append("Q4", service4Question);
      formdata.append("A4", service4Answer);
      formdata.append("Q5", service5Question);
      formdata.append("A5", service5Answer);
      formdata.append("Q6", service6Question);
      formdata.append("A6", service6Answer);
      formdata.append("Q7", service7Question);
      formdata.append("A7", service7Answer);
      formdata.append("Q8", service8Question);
      formdata.append("A8", service8Answer);
      formdata.append("Q9", service9Question);
      formdata.append("A9", service9Answer);
      formdata.append("Q10", service10Question);
      formdata.append("A10", service10Answer);
      formdata.append("Q11", service11Question);
      formdata.append("A11", service11Answer);
      formdata.append("Q12", service12Question);
      formdata.append("A12", service12Answer);
      formdata.append("Q13", service13Question);
      formdata.append("A13", service13Answer);
      formdata.append("Q14", service14Question);
      formdata.append("A14", service14Answer);
      formdata.append("Q15", service15Question);
      formdata.append("A15", service15Answer);
      formdata.append("Q16", service16Question);
      formdata.append("A16", service16Answer);
      formdata.append("Q17", service17Question);
      formdata.append("A17", service17Answer);
      formdata.append("Q18", service18Question);
      formdata.append("A18", service18Answer);
    }
    if (arrayofservicesFAQ.length === 19) {
      formdata.append("Q1", service1Question);
      formdata.append("A1", service1Answer);
      formdata.append("Q2", service2Question);
      formdata.append("A2", service2Answer);
      formdata.append("Q3", service3Question);
      formdata.append("A3", service3Answer);
      formdata.append("Q4", service4Question);
      formdata.append("A4", service4Answer);
      formdata.append("Q5", service5Question);
      formdata.append("A5", service5Answer);
      formdata.append("Q6", service6Question);
      formdata.append("A6", service6Answer);
      formdata.append("Q7", service7Question);
      formdata.append("A7", service7Answer);
      formdata.append("Q8", service8Question);
      formdata.append("A8", service8Answer);
      formdata.append("Q9", service9Question);
      formdata.append("A9", service9Answer);
      formdata.append("Q10", service10Question);
      formdata.append("A10", service10Answer);
      formdata.append("Q11", service11Question);
      formdata.append("A11", service11Answer);
      formdata.append("Q12", service12Question);
      formdata.append("A12", service12Answer);
      formdata.append("Q13", service13Question);
      formdata.append("A13", service13Answer);
      formdata.append("Q14", service14Question);
      formdata.append("A14", service14Answer);
      formdata.append("Q15", service15Question);
      formdata.append("A15", service15Answer);
      formdata.append("Q16", service16Question);
      formdata.append("A16", service16Answer);
      formdata.append("Q17", service17Question);
      formdata.append("A17", service17Answer);
      formdata.append("Q18", service18Question);
      formdata.append("A18", service18Answer);
      formdata.append("Q19", service19Question);
      formdata.append("A19", service19Answer);
    }
    if (arrayofservicesFAQ.length === 20) {
      formdata.append("Q1", service1Question);
      formdata.append("A1", service1Answer);
      formdata.append("Q2", service2Question);
      formdata.append("A2", service2Answer);
      formdata.append("Q3", service3Question);
      formdata.append("A3", service3Answer);
      formdata.append("Q4", service4Question);
      formdata.append("A4", service4Answer);
      formdata.append("Q5", service5Question);
      formdata.append("A5", service5Answer);
      formdata.append("Q6", service6Question);
      formdata.append("A6", service6Answer);
      formdata.append("Q7", service7Question);
      formdata.append("A7", service7Answer);
      formdata.append("Q8", service8Question);
      formdata.append("A8", service8Answer);
      formdata.append("Q9", service9Question);
      formdata.append("A9", service9Answer);
      formdata.append("Q10", service10Question);
      formdata.append("A10", service10Answer);
      formdata.append("Q11", service11Question);
      formdata.append("A11", service11Answer);
      formdata.append("Q12", service12Question);
      formdata.append("A12", service12Answer);
      formdata.append("Q13", service13Question);
      formdata.append("A13", service13Answer);
      formdata.append("Q14", service14Question);
      formdata.append("A14", service14Answer);
      formdata.append("Q15", service15Question);
      formdata.append("A15", service15Answer);
      formdata.append("Q16", service16Question);
      formdata.append("A16", service16Answer);
      formdata.append("Q17", service17Question);
      formdata.append("A17", service17Answer);
      formdata.append("Q18", service18Question);
      formdata.append("A18", service18Answer);
      formdata.append("Q19", service19Question);
      formdata.append("A19", service19Answer);
      formdata.append("Q20", service20Question);
      formdata.append("A20", service20Answer);
    }

    if (arrayoffiles?.length > 0) {
      arrayoffiles?.map((data) => {
        formdata.append("fileName", data);
      });
    }
    formdata.append("status", "publish");
    formdata.append("contentName", title);
    formdata.append("author", user?.fullName);
    formdata.append("shareDisable", false);
    formdata.append("toC", JSON.stringify(arrayofblogs));
    formdata.append("category", scate);
    formdata.append("iconTitle", imagetitle);
    formdata.append("imageAltTag", metaTag);
    formdata.append("metaTitle", metaTitle);
    formdata.append("metaDescription", metaDescription);

    axios
      .post(`${API_HOST}/contentManagement/addByAdmin`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        navigate(-1);
      }).catch((err) => {
        setFirstsumbitblog(false)
      })
      ;
  };

  const [erroraddblog, setErroraddblog] = useState(false);

  const handlecheck = () => {
    if (
      title &&
      imagetitle &&
      scate &&
      arrayoffiles?.length > 0 &&
      !erroraddblog
    ) {
      handleOpen();
    } else {
      setErroraddblog(true);
    }
  };

  useEffect(() => {
    if (arrayofblogs?.length > 0) {
    } else {
      if (title && imagetitle && scate && arrayoffiles?.length > 0) {
        setErroraddblog(false);
      } else {
        setErroraddblog(true);
      }
    }
  }, [title, scate, arrayoffiles, arrayofblogs, imagetitle]);

  const [firstsumbitblog, setFirstsumbitblog] = useState(false);



  const [allCtitle, setAllCtitle] = useState([]);
  const [allCbutton, setAllCbutton] = useState([]);

  useEffect(() => {
    axios.get(`${API_HOST}/callToActionTitle/viewTitle`).then((res) => {
      setAllCtitle(res?.data?.success?.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${API_HOST}/callToActionButton/viewButton`).then((res) => {
      setAllCbutton(res?.data?.success?.data);
    });
  }, []);

  const [arrayofservicesFAQ, setArrayofservicesFAQ] = useState([
    { quetion: "Enter Quetion", answer: "Enter Answer", id: 1 },
  ]);

  return (
    <div>
      <div
        style={{
          width: "70vw",
          margin: "auto",
          height: "fit-content",
          marginTop: "2vw",
        }}
        className="home-postjob-container"
      >
        <div
          style={{
            overflowX: "hidden",
            paddingLeft: "4vw",
            width: "70vw",
            paddingTop: "2vw",
          }}
          className="homepostjob-right"
        >
          <div className="jobpostedformheading">Add Blogs</div>

          <div className="jobpodtedfieldtitile"> Blog Category *</div>
          <div className="">
            <Box
              sx={{
                background: "white",
                border: "1px solid #7070705b",
                height: "2.6vw",
                width: "64vw",
                borderRadius: "5px",
                margin: "0.5vw 1.5vw",
                padding: "0.2vw 0.2vw",
                marginLeft: "0vw",
              }}
              className="setting-toggler"
            >
              <FormControl variant="standard" fullWidth>
                <Select
                  className={classes.select2}
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age3}
                  disableUnderline
                  inputProps={{
                    classes: {
                      // root: classes.border,
                      icon: classes.icon,
                    },
                  }}
                  onChange={handleChange3}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: "white",

                        "& .MuiMenuItem-root": {
                          padding: "0.1vw 2vw",
                          width: "100%",
                          height: "3vw",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "1vw",
                          lineHeight: "24px",
                          color: "#6b6b6b",
                        },
                      },
                    },
                  }}
                >
                  <MenuItem onClick={() => { }} value={0} hidden>
                    Select
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      setsCate("Business Ideas");
                    }}
                    value={1}
                  >
                    Business Ideas
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      setsCate("Business Plans");
                    }}
                    value={2}
                  >
                    Business Plans
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setsCate("Business Problems");
                    }}
                    value={3}
                  >
                    Business Problems
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setsCate("Others");
                    }}
                    value={4}
                  >
                    Others
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div>
            <div className="jobpodtedfieldtitile"> Blog Title *</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <CloseIcon
                style={{
                  position: "relative",
                  right: "2vw",
                  top: "1.1vw",
                  fontSize: "1.5vw",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setTitle("");
                }}
              />
            </div>
            <div
              style={{
                marginBottom: "0.0vw",
                marginLeft: "0.01vw",
                marginTop: "1vw",
              }}
              className="jobpodtedfieldtitile"
            >
              Cover Images *
            </div>
            <div
              style={{
                background: "white",
                padding: "0.51vw",
                marginTop: "0vw",
                paddingRight: "3vw",
              }}
            >
              <div className="inputfilebox">
                <div>
                  <label htmlFor="inputctaelogfile">
                    <div className="inputicon">
                      <img src={img} alt="" />
                    </div>
                    <div className="inputcateaddformfile">
                      Drag and Drop ,Browse to upload
                    </div>
                    <input
                      type="file"
                      id="inputctaelogfile"
                      onChange={(e) => {
                        setArrayoffiles([...arrayoffiles, e.target.files[0]]);
                      }}
                      hidden
                    />
                  </label>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  textAlign: "right",
                  fontSize: "0.9vw",
                  fontWeight: "400",
                }}
              >
                Image should be less then 200 kb and Dimension should be in
                ratio (3:5)
              </div>
            </div>
            <div
              className={
                arrayoffiles?.length > 0 ? "inputfilesshowncatebox" : ""
              }
            >
              {arrayoffiles?.length > 0 &&
                arrayoffiles?.map((file, index) => {
                  return (
                    <div className="inputfilesshowncatboxsingle">
                      <div className="inputfilesshowncatboxsingleimg">
                        <img src={img1} alt="" />
                      </div>
                      <div className="fileselctednamecate">{file?.name}</div>
                      <div className="inputfilesshowncatboxsingleimg">
                        <img
                          style={{
                            width: "1.5vw",
                            marginLeft: "1vw",
                            cursor: "pointer",
                          }}
                          src={img21}
                          alt=""
                          onClick={() => {
                            setArrayoffiles([
                              ...arrayoffiles.slice(0, index),
                              ...arrayoffiles.slice(
                                index + 1,
                                arrayoffiles.length
                              ),
                            ]);
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="jobpodtedfieldtitile"> Image Title *</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={imagetitle}
                onChange={(e) => {
                  setimagetitle(e.target.value);
                }}
              />
              <CloseIcon
                style={{
                  position: "relative",
                  right: "2vw",
                  top: "1.1vw",
                  fontSize: "1.5vw",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setimagetitle("");
                }}
              />
            </div>
            <div
              style={{ textAlign: "left", fontSize: "1.4vw", marginTop: "1vw" }}
              className="jobpodtedfieldtitile"
            >
              Table of Content
            </div>
            {arrayofblogs.length > 0 &&
              arrayofblogs?.map((data, index) => {
                return (
                  <AddTableofContent
                    setArrayofblogs={setArrayofblogs}
                    arrayofblogs={arrayofblogs}
                    data={data}
                    index={index}
                    setErroraddblog={setErroraddblog}
                    erroraddblog={erroraddblog}
                    title={title}
                    scate={scate}
                    arrayoffiles={arrayoffiles}
                    imagetitle={imagetitle}
                    allCbutton={allCbutton}
                    allCtitle={allCtitle}
                  />
                );
              })}
            <div
              style={{ marginLeft: "1vw" }}
              className="addmoreservicecatalog"
              onClick={() => {
                setArrayofblogs([
                  ...arrayofblogs,
                  {
                    heading: "",
                    toc: "",
                    file: "",
                    desc: "",
                    title: "",
                    button: "",
                  },
                ]);
              }}
            >
              <span>
                <AddIcon style={{ fontSize: "1.3vw" }} />
              </span>{" "}
              Add Paragraph
            </div>
            <div className="mt-4"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div
                style={{ marginBottom: "0.5vw" }}
                className="jobpodtedfieldtitile"
              >
                FAQ
              </div>
              <div
                style={{ width: width > 700 ? "" : "15%" }}
                className="servicesmenuname4box"
              >
                <span
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => {
                    const index = arrayofservicesFAQ.length - 1;
                    index + 1 === 1
                      ? setService1Question("")
                      : index + 1 === 2
                        ? setService2Question("")
                        : index + 1 === 3
                          ? setService3Question("")
                          : index + 1 === 4
                            ? setService4Question("")
                            : index + 1 === 5
                              ? setService5Question("")
                              : index + 1 === 6
                                ? setService6Question("")
                                : index + 1 === 7
                                  ? setService7Question("")
                                  : index + 1 === 8
                                    ? setService8Question("")
                                    : index + 1 === 9
                                      ? setService9Question("")
                                      : index + 1 === 10
                                        ? setService10Question("")
                                        : index + 1 === 11
                                          ? setService11Question("")
                                          : index + 1 === 12
                                            ? setService12Question("")
                                            : index + 1 === 13
                                              ? setService13Question("")
                                              : index + 1 === 14
                                                ? setService14Question("")
                                                : index + 1 === 15
                                                  ? setService15Question("")
                                                  : index + 1 === 16
                                                    ? setService16Question("")
                                                    : index + 1 === 17
                                                      ? setService17Question("")
                                                      : index + 1 === 18
                                                        ? setService18Question("")
                                                        : index + 1 === 19
                                                          ? setService19Question("")
                                                          : setService20Question("");
                    index + 1 === 1
                      ? setService1Answer("")
                      : index + 1 === 2
                        ? setService2Answer("")
                        : index + 1 === 3
                          ? setService3Answer("")
                          : index + 1 === 4
                            ? setService4Answer("")
                            : index + 1 === 5
                              ? setService5Answer("")
                              : index + 1 === 6
                                ? setService6Answer("")
                                : index + 1 === 7
                                  ? setService7Answer("")
                                  : index + 1 === 8
                                    ? setService8Answer("")
                                    : index + 1 === 9
                                      ? setService9Answer("")
                                      : index + 1 === 10
                                        ? setService10Answer("")
                                        : index + 1 === 11
                                          ? setService11Answer("")
                                          : index + 1 === 12
                                            ? setService12Answer("")
                                            : index + 1 === 13
                                              ? setService13Answer("")
                                              : index + 1 === 14
                                                ? setService14Answer("")
                                                : index + 1 === 15
                                                  ? setService15Answer("")
                                                  : index + 1 === 16
                                                    ? setService16Answer("")
                                                    : index + 1 === 17
                                                      ? setService17Answer("")
                                                      : index + 1 === 18
                                                        ? setService18Answer("")
                                                        : index + 1 === 19
                                                          ? setService19Answer("")
                                                          : setService20Answer("");
                    setArrayofservicesFAQ([
                      ...arrayofservicesFAQ.slice(0, arrayofservicesFAQ.length - 1),
                    ]);
                  }}
                >
                  Remove
                </span>
              </div>
            </div>
            {arrayofservicesFAQ?.map((data, index) => {
              return (
                <div style={{ marginTop: "1vw" }} className="servicesmenudivfaq">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{ width: width > 700 ? "" : "80%" }}
                      className="mb-2"
                    >
                      Question
                    </div>
                  </div>
                  <div className="servicesmenuname1boxfaq">
                    <input
                      type="text"
                      value={
                        index + 1 === 1
                          ? service1Question
                          : index + 1 === 2
                            ? service2Question
                            : index + 1 === 3
                              ? service3Question
                              : index + 1 === 4
                                ? service4Question
                                : index + 1 === 5
                                  ? service5Question
                                  : index + 1 === 6
                                    ? service6Question
                                    : index + 1 === 7
                                      ? service7Question
                                      : index + 1 === 8
                                        ? service8Question
                                        : index + 1 === 9
                                          ? service9Question
                                          : index + 1 === 10
                                            ? service10Question
                                            : index + 1 === 11
                                              ? service11Question
                                              : index + 1 === 12
                                                ? service12Question
                                                : index + 1 === 13
                                                  ? service13Question
                                                  : index + 1 === 14
                                                    ? service14Question
                                                    : index + 1 === 15
                                                      ? service15Question
                                                      : index + 1 === 16
                                                        ? service16Question
                                                        : index + 1 === 17
                                                          ? service17Question
                                                          : index + 1 === 18
                                                            ? service18Question
                                                            : index + 1 === 19
                                                              ? service19Question
                                                              : service20Question
                      }
                      onChange={(e) => {
                        index + 1 === 1
                          ? setService1Question(e.target.value)
                          : index + 1 === 2
                            ? setService2Question(e.target.value)
                            : index + 1 === 3
                              ? setService3Question(e.target.value)
                              : index + 1 === 4
                                ? setService4Question(e.target.value)
                                : index + 1 === 5
                                  ? setService5Question(e.target.value)
                                  : index + 1 === 6
                                    ? setService6Question(e.target.value)
                                    : index + 1 === 7
                                      ? setService7Question(e.target.value)
                                      : index + 1 === 8
                                        ? setService8Question(e.target.value)
                                        : index + 1 === 9
                                          ? setService9Question(e.target.value)
                                          : index + 1 === 10
                                            ? setService10Question(e.target.value)
                                            : index + 1 === 11
                                              ? setService11Question(e.target.value)
                                              : index + 1 === 12
                                                ? setService12Question(e.target.value)
                                                : index + 1 === 13
                                                  ? setService13Question(e.target.value)
                                                  : index + 1 === 14
                                                    ? setService14Question(e.target.value)
                                                    : index + 1 === 15
                                                      ? setService15Question(e.target.value)
                                                      : index + 1 === 16
                                                        ? setService16Question(e.target.value)
                                                        : index + 1 === 17
                                                          ? setService17Question(e.target.value)
                                                          : index + 1 === 18
                                                            ? setService18Question(e.target.value)
                                                            : index + 1 === 19
                                                              ? setService19Question(e.target.value)
                                                              : setService20Question(e.target.value);
                      }}
                    />
                  </div>
                  <div style={{ width: "100%" }} className="mt-2 mb-2">
                    Answer
                  </div>
                  <div className="servicesmenuname2boxfaq">
                    <input
                      type="text"
                      value={
                        index + 1 === 1
                          ? service1Answer
                          : index + 1 === 2
                            ? service2Answer
                            : index + 1 === 3
                              ? service3Answer
                              : index + 1 === 4
                                ? service4Answer
                                : index + 1 === 5
                                  ? service5Answer
                                  : index + 1 === 6
                                    ? service6Answer
                                    : index + 1 === 7
                                      ? service7Answer
                                      : index + 1 === 8
                                        ? service8Answer
                                        : index + 1 === 9
                                          ? service9Answer
                                          : index + 1 === 10
                                            ? service10Answer
                                            : index + 1 === 11
                                              ? service11Answer
                                              : index + 1 === 12
                                                ? service12Answer
                                                : index + 1 === 13
                                                  ? service13Answer
                                                  : index + 1 === 14
                                                    ? service14Answer
                                                    : index + 1 === 14
                                                      ? service14Answer
                                                      : index + 1 === 15
                                                        ? service15Answer
                                                        : index + 1 === 16
                                                          ? service16Answer
                                                          : index + 1 === 17
                                                            ? service17Answer
                                                            : index + 1 === 18
                                                              ? service18Answer
                                                              : index + 1 === 19
                                                                ? service19Answer
                                                                : service20Answer
                      }
                      onChange={(e) => {
                        index + 1 === 1
                          ? setService1Answer(e.target.value)
                          : index + 1 === 2
                            ? setService2Answer(e.target.value)
                            : index + 1 === 3
                              ? setService3Answer(e.target.value)
                              : index + 1 === 4
                                ? setService4Answer(e.target.value)
                                : index + 1 === 5
                                  ? setService5Answer(e.target.value)
                                  : index + 1 === 6
                                    ? setService6Answer(e.target.value)
                                    : index + 1 === 7
                                      ? setService7Answer(e.target.value)
                                      : index + 1 === 8
                                        ? setService8Answer(e.target.value)
                                        : index + 1 === 9
                                          ? setService9Answer(e.target.value)
                                          : index + 1 === 10
                                            ? setService10Answer(e.target.value)
                                            : index + 1 === 11
                                              ? setService11Answer(e.target.value)
                                              : index + 1 === 12
                                                ? setService12Answer(e.target.value)
                                                : index + 1 === 13
                                                  ? setService13Answer(e.target.value)
                                                  : index + 1 === 14
                                                    ? setService14Answer(e.target.value)
                                                    : index + 1 === 15
                                                      ? setService15Answer(e.target.value)
                                                      : index + 1 === 16
                                                        ? setService16Answer(e.target.value)
                                                        : index + 1 === 17
                                                          ? setService17Answer(e.target.value)
                                                          : index + 1 === 18
                                                            ? setService18Answer(e.target.value)
                                                            : index + 1 === 19
                                                              ? setService19Answer(e.target.value)
                                                              : setService20Answer(e.target.value);
                      }}
                    />
                  </div>
                </div>
              );
            })}
            <div
              className="addmoreservicecatalog"
              onClick={() => {
                const index = arrayofservicesFAQ.length;
                index + 1 === 1
                  ? setService1Question("")
                  : index + 1 === 2
                    ? setService2Question("")
                    : index + 1 === 3
                      ? setService3Question("")
                      : index + 1 === 4
                        ? setService4Question("")
                        : index + 1 === 5
                          ? setService5Question("")
                          : index + 1 === 6
                            ? setService6Question("")
                            : index + 1 === 7
                              ? setService7Question("")
                              : index + 1 === 8
                                ? setService8Question("")
                                : index + 1 === 9
                                  ? setService9Question("")
                                  : index + 1 === 10
                                    ? setService10Question("")
                                    : index + 1 === 11
                                      ? setService11Question("")
                                      : index + 1 === 12
                                        ? setService12Question("")
                                        : index + 1 === 13
                                          ? setService13Question("")
                                          : index + 1 === 14
                                            ? setService14Question("")
                                            : index + 1 === 15
                                              ? setService15Question("")
                                              : index + 1 === 16
                                                ? setService16Question("")
                                                : index + 1 === 17
                                                  ? setService17Question("")
                                                  : index + 1 === 18
                                                    ? setService18Question("")
                                                    : index + 1 === 19
                                                      ? setService19Question("")
                                                      : setService20Question("");
                index + 1 === 1
                  ? setService1Answer("")
                  : index + 1 === 2
                    ? setService2Answer("")
                    : index + 1 === 3
                      ? setService3Answer("")
                      : index + 1 === 4
                        ? setService4Answer("")
                        : index + 1 === 5
                          ? setService5Answer("")
                          : index + 1 === 6
                            ? setService6Answer("")
                            : index + 1 === 7
                              ? setService7Answer("")
                              : index + 1 === 8
                                ? setService8Answer("")
                                : index + 1 === 9
                                  ? setService9Answer("")
                                  : index + 1 === 10
                                    ? setService10Answer("")
                                    : index + 1 === 11
                                      ? setService11Answer("")
                                      : index + 1 === 12
                                        ? setService12Answer("")
                                        : index + 1 === 13
                                          ? setService13Answer("")
                                          : index + 1 === 14
                                            ? setService14Answer("")
                                            : index + 1 === 15
                                              ? setService15Answer("")
                                              : index + 1 === 16
                                                ? setService16Answer("")
                                                : index + 1 === 17
                                                  ? setService17Answer("")
                                                  : index + 1 === 18
                                                    ? setService18Answer("")
                                                    : index + 1 === 19
                                                      ? setService19Answer("")
                                                      : setService20Answer("");
                setArrayofservicesFAQ([
                  ...arrayofservicesFAQ,
                  { quetion: "", answer: "" },
                ]);
              }}
            >
              <span>
                <AddIcon style={{ fontSize: width > 700 ? "1.3vw" : "2vw" }} />
              </span>{" "}
              Add FAQ
            </div>
            <div className="jobpodtedfieldtitile mt-4">META TAG *</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={metaTag}
                onChange={(e) => {
                  setMetaTag(e.target.value);
                }}
              />
              {width > 700 && (
                <CloseIcon
                  style={{
                    position: "relative",
                    right: "2vw",
                    top: "1.1vw",
                    fontSize: width > 700 ? "1.5vw" : "3vw",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setMetaTag("");
                  }}
                />
              )}
            </div>
            <div className="jobpodtedfieldtitile">META TITLE *</div>
            <div className="jobpostfieldinputbox">
            <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => {
                    setMetaTitle(e.target.value);
                  }}
                />
              {width > 700 && (
                <CloseIcon
                  style={{
                    position: "relative",
                    right: "2vw",
                    top: "1.1vw",
                    fontSize: width > 700 ? "1.5vw" : "3vw",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setMetaTitle("");
                  }}
                />
              )}
            </div>
            <div className="jobpodtedfieldtitile">META DESCRIPTION *</div>
            <div className="jobpostfieldinputbox">
            <input
                  type="text"
                  value={metaDescription}
                  onChange={(e) => {
                    setMetaDescription(e.target.value);
                  }}
                />
              {width > 700 && (
                <CloseIcon
                  style={{
                    position: "relative",
                    right: "2vw",
                    top: "1.1vw",
                    fontSize: width > 700 ? "1.5vw" : "3vw",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setMetaDescription("");
                  }}
                />
              )}
            </div>
            {erroeshow ? (
              <div style={{ color: "red" }} className="jobpodtedfieldtitile">
                {" "}
                * Fill All the Fields
              </div>
            ) : (
              ""
            )}{" "}
            {erroraddblog && (
              <div
                style={{ marginLeft: "1vw", color: "red" }}
                className="min-maxhomejob"
              >
                fill all field are cumpulsary these are marked as *
              </div>
            )}
            <div style={{ marginBottom: "4vw" }} className="homejobbuttons">
              <button
                style={{ background: "white" }}
                onClick={() => {
                  navigate(-1);
                }}
              >
                Cancel
              </button>

              <button onClick={handlecheck} style={{ color: "white" }}>
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="profiletitleandmenunav">
            <div className="profiledetailstitle">Preview Blogs</div>
            <div className="profiledetailnavmanu">
              <div>
                <CloseIcon
                  onClick={handleClose}
                  style={{ fontSize: "1.5vw", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
          <hr style={{ color: "#00000090" }} />
          {arrayoffiles?.length > 0 && (
            <div style={{ padding: "0vw" }} className="Blogdbannercontainer">
              <div className="ctatlogcarouseltitle">
                <button
                  style={{
                    marginLeft: "1vw",
                    width: "10vw",
                    cursor: "auto",
                    position: "relative",
                    top: "4vw",
                    zIndex: "100",
                  }}
                  className="hb-button"
                >
                  {scate}
                </button>
                <div className="textofcontainercatalgue">{imagetitle}</div>
              </div>
              <div style={{ position: "relative", bottom: "2.2vw" }}>
                <Cataloguecarosel
                  img1={arrayoffiles[0]}
                  img2={arrayoffiles[1] ? arrayoffiles[1] : arrayoffiles[0]}
                  img3={
                    arrayoffiles[2]
                      ? arrayoffiles[2]
                      : arrayoffiles[0]
                        ? arrayoffiles[0]
                        : arrayoffiles[1]
                  }
                  img4={
                    arrayoffiles[3]
                      ? arrayoffiles[3]
                      : arrayoffiles[1]
                        ? arrayoffiles[1]
                        : arrayoffiles[2]
                          ? arrayoffiles[2]
                          : arrayoffiles[0]
                  }
                />
              </div>
            </div>
          )}{" "}
          <hr style={{ margin: "0vw", height: "0vw" }} />
          <div style={{ position: "relative", bottom: "1vw" }}>
            <div className="jobpodtedfieldtitile"> Title</div>
            <div className="jobpostfieldinputbox">
              <input type="text" value={title} disabled />
            </div>
            <div className="jobpodtedfieldtitile"> Category</div>
            <div className="jobpostfieldinputbox">
              <input type="text" value={scate} disabled />
            </div>

            <div className="jobpodtedfieldtitile"> Table of Content</div>

            <div className="widthfullblofpreview">
              {arrayofblogs?.length > 0 &&
                arrayofblogs?.map((data, index) => {
                  return (
                    <div>
                      <div
                        className=""
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        {data?.heading}
                      </div>
                      <div
                        className="dataeofblogcontnet1"
                        style={{ color: "black", fontSize: "0.9vw" }}
                        dangerouslySetInnerHTML={{ __html: data?.toc }}
                      ></div>

                      {data?.file && (
                        <div className="blogcontentimagebanner">
                          <img
                            style={{ width: "63vw", objectFit: "contain" }}
                            src={data?.file}
                            alt=""
                          />
                        </div>
                      )}
                      <div
                        style={{ width: "63vw" }}
                        className="Joinwithusblogbox"
                      >
                        <div style={{ width: "60%", textAlign: "center" }}>
                          <div className="Joinwithusblogboxtitle">
                            {data?.title}
                          </div>
                          <div className="Joinwithusblogboxdetail">
                            {data?.desc?.slice(0, 200)}
                          </div>
                        </div>
                        <div style={{ width: "40%", textAlign: "center" }}>
                          <button> {data?.button}</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div
              style={{ marginTop: "0.31vw" }}
              className="handlemoreaboutskill"
            >
              <div
                onClick={() => {
                  handleClose();
                }}
                style={{
                  background: "white",
                  color: "black",
                  cursor: "pointer",
                }}
                className="handlecirclieaboutsave"
              >
                Cancel
              </div>
              <div
                onClick={() => {
                  if (!firstsumbitblog) {
                    setFirstsumbitblog(true)
                    handlesumbitBlog();
                  }
                }}
                style={{ cursor: "pointer" }}
                className="handlecirclieaboutsave"
              >
                Submit
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
