import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Catelogfaqquestion({ data, width }) {
  const [longon, setLongon] = useState(false);
  const [longon2, setLongon2] = useState(false);
  const [longon3, setLongon3] = useState(false);
  const [longon4, setLongon4] = useState(false);
  const [longon5, setLongon5] = useState(false);
  const [longon6, setLongon6] = useState(false);
  const [longon7, setLongon7] = useState(false);
  const [longon8, setLongon8] = useState(false);
  const [longon9, setLongon9] = useState(false);
  const [longon10, setLongon10] = useState(false);
  const [longon11, setLongon11] = useState(false);
  const [longon12, setLongon12] = useState(false);
  const [longon13, setLongon13] = useState(false);
  const [longon14, setLongon14] = useState(false);
  const [longon15, setLongon15] = useState(false);
  const [longon16, setLongon16] = useState(false);
  const [longon17, setLongon17] = useState(false);
  const [longon18, setLongon18] = useState(false);
  const [longon19, setLongon19] = useState(false);
  const [longon20, setLongon20] = useState(false);
  const [longon21, setLongon21] = useState(false);
  return (
    <>
      {data?.Q1 ? (
        <div
          onClick={() => setLongon(!longon)}
          className="cgfaqqabox"
          style={{
            height: longon
              ? width > 700
                ? `${(parseInt((data?.A1?.length + 99) / 100) * 2)+4.5}vw`
                : `${(parseInt((data?.A1?.length + 99) / 100) * 4)+10}vw`
              : width > 700
              ? "4.5vw"
              : "10vw",
          }}
        >
          <div className="cgfaqqaquestion">
            <div style={{ color: "black" }} className="catefaqheadhaveq">
              {data?.Q1}
            </div>
            <div>
              <KeyboardArrowDownIcon
                style={{ fontSize: width > 700 ? "2vw" : "5vw" }}
              />
            </div>
          </div>
          {longon ? (
            <div className="cfaqnaswer">
              {data?.A1} 
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      {data?.A2 ? (
        <div
          onClick={() => setLongon2(!longon2)}
          className="cgfaqqabox"
          style={{ height: longon2 ? width > 700
                ? `${(parseInt((data?.A2?.length + 99) / 100) * 2)+4.5}vw`
                : `${(parseInt((data?.A2?.length + 99) / 100) * 4)+10}vw`
              : width > 700
              ? "4.5vw"
              : "10vw",}}
        >
          <div className="cgfaqqaquestion">
            <div style={{ color: "black" }} className="catefaqheadhaveq">
              {data?.Q2}
            </div>
            <div>
              <KeyboardArrowDownIcon style={{ fontSize: width > 700 ? "2vw" : "5vw" }} />
            </div>
          </div>
          {longon2 ? <div className="cfaqnaswer">{data?.A2}</div> : ""}
        </div>
      ) : (
        ""
      )}
      {data?.A3 ? (
        <div
          onClick={() => setLongon3(!longon3)}
          className="cgfaqqabox"
          style={{ height: longon3 ? width > 700
                ? `${(parseInt((data?.A3?.length + 99) / 100) * 2)+4.5}vw`
                : `${(parseInt((data?.A3?.length + 99) / 100) * 4)+10}vw`
              : width > 700
              ? "4.5vw"
              : "10vw",}}
        >
          <div className="cgfaqqaquestion">
            <div style={{ color: "black" }} className="catefaqheadhaveq">
              {data?.Q3}
            </div>
            <div>
              <KeyboardArrowDownIcon style={{ fontSize: width > 700 ? "2vw" : "5vw" }} />
            </div>
          </div>
          {longon3 ? <div className="cfaqnaswer">{data?.A3}</div> : ""}
        </div>
      ) : (
        ""
      )}
      {data?.A4 ? (
        <div
          onClick={() => setLongon4(!longon4)}
          className="cgfaqqabox"
          style={{ height: longon4 ? width > 700
                ? `${(parseInt((data?.A4?.length + 99) / 100) * 2)+4.5}vw`
                : `${(parseInt((data?.A4?.length + 99) / 100) * 4)+10}vw`
              : width > 700
              ? "4.5vw"
              : "10vw",}}
        >
          <div className="cgfaqqaquestion">
            <div style={{ color: "black" }} className="catefaqheadhaveq">
              {data?.Q4}
            </div>
            <div>
              <KeyboardArrowDownIcon style={{ fontSize: width > 700 ? "2vw" : "5vw" }} />
            </div>
          </div>
          {longon4 ? <div className="cfaqnaswer">{data?.A4}</div> : ""}
        </div>
      ) : (
        ""
      )}
      {data?.A5 ? (
        <div
          onClick={() => setLongon5(!longon5)}
          className="cgfaqqabox"
          style={{ height: longon5 ? width > 700
                ? `${(parseInt((data?.A5?.length + 99) / 100) * 2)+4.5}vw`
                : `${(parseInt((data?.A5?.length + 99) / 100) * 4)+10}vw`
              : width > 700
              ? "4.5vw"
              : "10vw",}}
        >
          <div className="cgfaqqaquestion">
            <div style={{ color: "black" }} className="catefaqheadhaveq">
              {data?.Q5}
            </div>
            <div>
              <KeyboardArrowDownIcon style={{ fontSize: width > 700 ? "2vw" : "5vw" }} />
            </div>
          </div>
          {longon5 ? <div className="cfaqnaswer">{data?.A5}</div> : ""}
        </div>
      ) : (
        ""
      )}
      {data?.A6 ? (
        <div
          onClick={() => setLongon6(!longon6)}
          className="cgfaqqabox"
          style={{ height: longon6 ? width > 700
                ? `${(parseInt((data?.A6?.length + 99) / 100) * 2)+4.5}vw`
                : `${(parseInt((data?.A6?.length + 99) / 100) * 4)+10}vw`
              : width > 700
              ? "4.5vw"
              : "10vw",}}
        >
          <div className="cgfaqqaquestion">
            <div style={{ color: "black" }} className="catefaqheadhaveq">
              {data?.Q6}
            </div>
            <div>
              <KeyboardArrowDownIcon style={{ fontSize: width > 700 ? "2vw" : "5vw" }} />
            </div>
          </div>
          {longon6 ? <div className="cfaqnaswer">{data?.A6}</div> : ""}
        </div>
      ) : (
        ""
      )}
      {data?.A7 ? (
        <div
          onClick={() => setLongon7(!longon7)}
          className="cgfaqqabox"
          style={{ height: longon7 ? width > 700
                ? `${(parseInt((data?.A7?.length + 99) / 100) * 2)+4.5}vw`
                : `${(parseInt((data?.A7?.length + 99) / 100) * 4)+10}vw`
              : width > 700
              ? "4.5vw"
              : "10vw",}}
        >
          <div className="cgfaqqaquestion">
            <div style={{ color: "black" }} className="catefaqheadhaveq">
              {data?.Q7}
            </div>
            <div>
              <KeyboardArrowDownIcon style={{ fontSize: width > 700 ? "2vw" : "5vw" }} />
            </div>
          </div>
          {longon7 ? <div className="cfaqnaswer">{data?.A7}</div> : ""}
        </div>
      ) : (
        ""
      )}
      {data?.A8 ? (
        <div
          onClick={() => setLongon8(!longon8)}
          className="cgfaqqabox"
          style={{ height: longon8 ? width > 700
                ? `${(parseInt((data?.A8?.length + 99) / 100) * 2)+4.5}vw`
                : `${(parseInt((data?.A8?.length + 99) / 100) * 4)+10}vw`
              : width > 700
              ? "4.5vw"
              : "10vw",}}
        >
          <div className="cgfaqqaquestion">
            <div style={{ color: "black" }} className="catefaqheadhaveq">
              {data?.Q8}
            </div>
            <div>
              <KeyboardArrowDownIcon style={{ fontSize: width > 700 ? "2vw" : "5vw" }} />
            </div>
          </div>
          {longon8 ? <div className="cfaqnaswer">{data?.A8}</div> : ""}
        </div>
      ) : (
        ""
      )}
      {data?.A9 ? (
        <div
          onClick={() => setLongon9(!longon9)}
          className="cgfaqqabox"
          style={{ height: longon9 ? width > 700
                ? `${(parseInt((data?.A9?.length + 99) / 100) * 2)+4.5}vw`
                : `${(parseInt((data?.A9?.length + 99) / 100) * 4)+10}vw`
              : width > 700
              ? "4.5vw"
              : "10vw",}}
        >
          <div className="cgfaqqaquestion">
            <div style={{ color: "black" }} className="catefaqheadhaveq">
              {data?.Q9}
            </div>
            <div>
              <KeyboardArrowDownIcon style={{ fontSize: width > 700 ? "2vw" : "5vw" }} />
            </div>
          </div>
          {longon9 ? <div className="cfaqnaswer">{data?.A9}</div> : ""}
        </div>
      ) : (
        ""
      )}
      {data?.A10 ? (
        <div
          onClick={() => setLongon10(!longon10)}
          className="cgfaqqabox"
          style={{ height: longon10 ? width > 700
                ? `${(parseInt((data?.A10?.length + 99) / 100) * 2)+4.5}vw`
                : `${(parseInt((data?.A10?.length + 99) / 100) * 4)+10}vw`
              : width > 700
              ? "4.5vw"
              : "10vw",}}
        >
          <div className="cgfaqqaquestion">
            <div style={{ color: "black" }} className="catefaqheadhaveq">
              {data?.Q10}
            </div>
            <div>
              <KeyboardArrowDownIcon style={{ fontSize: width > 700 ? "2vw" : "5vw" }} />
            </div>
          </div>
          {longon10 ? <div className="cfaqnaswer">{data?.A10}</div> : ""}
        </div>
      ) : (
        ""
      )}
      {data?.A11 ? (
        <div
          onClick={() => setLongon11(!longon11)}
          className="cgfaqqabox"
          style={{ height: longon11 ? width > 700
                ? `${(parseInt((data?.A11?.length + 99) / 100) * 2)+4.5}vw`
                : `${(parseInt((data?.A11?.length + 99) / 100) * 4)+10}vw`
              : width > 700
              ? "4.5vw"
              : "10vw",}}
        >
          <div className="cgfaqqaquestion">
            <div style={{ color: "black" }} className="catefaqheadhaveq">
              {data?.Q11}
            </div>
            <div>
              <KeyboardArrowDownIcon style={{ fontSize: width > 700 ? "2vw" : "5vw" }} />
            </div>
          </div>
          {longon11 ? <div className="cfaqnaswer">{data?.A11}</div> : ""}
        </div>
      ) : (
        ""
      )}
      {data?.A12 ? (
        <div
          onClick={() => setLongon12(!longon12)}
          className="cgfaqqabox"
          style={{ height: longon12 ? width > 700
                ? `${(parseInt((data?.A12?.length + 99) / 100) * 2)+4.5}vw`
                : `${(parseInt((data?.A12?.length + 99) / 100) * 4)+10}vw`
              : width > 700
              ? "4.5vw"
              : "10vw",}}
        >
          <div className="cgfaqqaquestion">
            <div style={{ color: "black" }} className="catefaqheadhaveq">
              {data?.Q12}
            </div>
            <div>
              <KeyboardArrowDownIcon style={{ fontSize: width > 700 ? "2vw" : "5vw" }} />
            </div>
          </div>
          {longon12 ? <div className="cfaqnaswer">{data?.A12}</div> : ""}
        </div>
      ) : (
        ""
      )}
      {data?.A13 ? (
        <div
          onClick={() => setLongon13(!longon13)}
          className="cgfaqqabox"
          style={{ height: longon13 ? width > 700
                ? `${(parseInt((data?.A13?.length + 99) / 100) * 2)+4.5}vw`
                : `${(parseInt((data?.A13?.length + 99) / 100) * 4)+10}vw`
              : width > 700
              ? "4.5vw"
              : "10vw",}}
        >
          <div className="cgfaqqaquestion">
            <div style={{ color: "black" }} className="catefaqheadhaveq">
              {data?.Q13}
            </div>
            <div>
              <KeyboardArrowDownIcon style={{ fontSize: width > 700 ? "2vw" : "5vw" }} />
            </div>
          </div>
          {longon13 ? <div className="cfaqnaswer">{data?.A13}</div> : ""}
        </div>
      ) : (
        ""
      )}
      {data?.A14 ? (
        <div
          onClick={() => setLongon14(!longon14)}
          className="cgfaqqabox"
          style={{ height: longon14 ? width > 700
                ? `${(parseInt((data?.A14?.length + 99) / 100) * 2)+4.5}vw`
                : `${(parseInt((data?.A14?.length + 99) / 100) * 4)+10}vw`
              : width > 700
              ? "4.5vw"
              : "10vw",}}
        >
          <div className="cgfaqqaquestion">
            <div style={{ color: "black" }} className="catefaqheadhaveq">
              {data?.Q14}
            </div>
            <div>
              <KeyboardArrowDownIcon style={{ fontSize: width > 700 ? "2vw" : "5vw" }} />
            </div>
          </div>
          {longon14 ? <div className="cfaqnaswer">{data?.A14}</div> : ""}
        </div>
      ) : (
        ""
      )}
      {data?.A15 ? (
        <div
          onClick={() => setLongon15(!longon15)}
          className="cgfaqqabox"
          style={{ height: longon15 ? width > 700
                ? `${(parseInt((data?.A15?.length + 99) / 100) * 2)+4.5}vw`
                : `${(parseInt((data?.A15?.length + 99) / 100) * 4)+10}vw`
              : width > 700
              ? "4.5vw"
              : "10vw",}}
        >
          <div className="cgfaqqaquestion">
            <div style={{ color: "black" }} className="catefaqheadhaveq">
              {data?.Q15}
            </div>
            <div>
              <KeyboardArrowDownIcon style={{ fontSize: width > 700 ? "2vw" : "5vw" }} />
            </div>
          </div>
          {longon15 ? <div className="cfaqnaswer">{data?.A15}</div> : ""}
        </div>
      ) : (
        ""
      )}
      {data?.A16 ? (
        <div
          onClick={() => setLongon16(!longon16)}
          className="cgfaqqabox"
          style={{ height: longon16 ? width > 700
                ? `${(parseInt((data?.A16?.length + 99) / 100) * 2)+4.5}vw`
                : `${(parseInt((data?.A16?.length + 99) / 100) * 4)+10}vw`
              : width > 700
              ? "4.5vw"
              : "10vw",}}
        >
          <div className="cgfaqqaquestion">
            <div style={{ color: "black" }} className="catefaqheadhaveq">
              {data?.Q16}
            </div>
            <div>
              <KeyboardArrowDownIcon style={{ fontSize: width > 700 ? "2vw" : "5vw" }} />
            </div>
          </div>
          {longon16 ? <div className="cfaqnaswer">{data?.A16}</div> : ""}
        </div>
      ) : (
        ""
      )}
      {data?.Q17 ? (
        <div
          onClick={() => setLongon17(!longon17)}
          className="cgfaqqabox"
          style={{ height: longon17 ? width > 700
                ? `${(parseInt((data?.A17?.length + 99) / 100) * 2)+4.5}vw`
                : `${(parseInt((data?.A17?.length + 99) / 100) * 4)+10}vw`
              : width > 700
              ? "4.5vw"
              : "10vw",}}
        >
          <div className="cgfaqqaquestion">
            <div style={{ color: "black" }} className="catefaqheadhaveq">
              {data?.Q17}
            </div>
            <div>
              <KeyboardArrowDownIcon style={{ fontSize: width > 700 ? "2vw" : "5vw" }} />
            </div>
          </div>
          {longon17 ? <div className="cfaqnaswer">{data?.A17}</div> : ""}
        </div>
      ) : (
        ""
      )}
      {data?.A18 ? (
        <div
          onClick={() => setLongon18(!longon18)}
          className="cgfaqqabox"
          style={{ height: longon18 ? width > 700
                ? `${(parseInt((data?.A18?.length + 99) / 100) * 2)+4.5}vw`
                : `${(parseInt((data?.A18?.length + 99) / 100) * 4)+10}vw`
              : width > 700
              ? "4.5vw"
              : "10vw",}}
        >
          <div className="cgfaqqaquestion">
            <div style={{ color: "black" }} className="catefaqheadhaveq">
              {data?.Q18}
            </div>
            <div>
              <KeyboardArrowDownIcon style={{ fontSize: width > 700 ? "2vw" : "5vw" }} />
            </div>
          </div>
          {longon18 ? <div className="cfaqnaswer">{data?.A18}</div> : ""}
        </div>
      ) : (
        ""
      )}
      {data?.Q19 ? (
        <div
          onClick={() => setLongon19(!longon19)}
          className="cgfaqqabox"
          style={{ height: longon19 ? width > 700
                ? `${(parseInt((data?.A19?.length + 99) / 100) * 2)+4.5}vw`
                : `${(parseInt((data?.A19?.length + 99) / 100) * 4)+10}vw`
              : width > 700
              ? "4.5vw"
              : "10vw",}}
        >
          <div className="cgfaqqaquestion">
            <div style={{ color: "black" }} className="catefaqheadhaveq">
              {data?.Q19}
            </div>
            <div>
              <KeyboardArrowDownIcon style={{ fontSize: width > 700 ? "2vw" : "5vw" }} />
            </div>
          </div>
          {longon19 ? <div className="cfaqnaswer">{data?.A19}</div> : ""}
        </div>
      ) : (
        ""
      )}
      {data?.A20 ? (
        <div
          onClick={() => setLongon20(!longon20)}
          className="cgfaqqabox"
          style={{ height: longon20 ? width > 700
                ? `${(parseInt((data?.A20?.length + 99) / 100) * 2)+4.5}vw`
                : `${(parseInt((data?.A20?.length + 99) / 100) * 4)+10}vw`
              : width > 700
              ? "4.5vw"
              : "10vw",}}
        >
          <div className="cgfaqqaquestion">
            <div style={{ color: "black" }} className="catefaqheadhaveq">
              {data?.Q20}
            </div>
            <div>
              <KeyboardArrowDownIcon style={{ fontSize: width > 700 ? "2vw" : "5vw" }} />
            </div>
          </div>
          {longon20 ? <div className="cfaqnaswer">{data?.A20}</div> : ""}
        </div>
      ) : (
        ""
      )}
      {data?.Q21 ? (
        <div
          onClick={() => setLongon21(!longon21)}
          className="cgfaqqabox"
          style={{ height: longon21 ? width > 700
                ? `${(parseInt((data?.A1?.length + 99) / 100) * 2)+4.5}vw`
                : `${(parseInt((data?.A1?.length + 99) / 100) * 4)+10}vw`
              : width > 700
              ? "4.5vw"
              : "10vw",}}
        >
          <div className="cgfaqqaquestion">
            <div style={{ color: "black" }} className="catefaqheadhaveq">
              {data?.Q21}
            </div>
            <div>
              <KeyboardArrowDownIcon style={{ fontSize: width > 700 ? "2vw" : "5vw" }} />
            </div>
          </div>
          {longon21 ? <div className="cfaqnaswer">{data?.A21}</div> : ""}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
