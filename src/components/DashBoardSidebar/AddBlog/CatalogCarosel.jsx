import React, { Component } from "react";
import Slider from "react-slick";
import imgla from "../../../assets/Web 1280 – 2/Group 9969.svg";
import imgra from "../../../assets/Web 1280 – 2/Group 9970.svg";
import img1 from "../../../assets/Web 1280 – 2/collins-lesulie-0VEDrQXxrQo-unsplash.png";
import img2 from "../../../assets/Web 1280 – 2/kaleidico-3V8xo5Gbusk-unsplash.png";
import img3 from "../../../assets/Web 1280 – 2/studio-republic-fotKKqWNMQ4-unsplash.png";
import img4 from "../../../assets/Web 1280 – 2/Group 10053.png";
import { ArrowBack, ArrowForward, ArrowRightAlt } from "@mui/icons-material";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
      
        display: "block",
        background: "#064C87",
        width: "3vw",
        position: "relative",
        zIndex: "50",
        cursor: "pointer",
        bottom: "5.3vw",
        left: "5.5vw",
        height: "3vw",
        boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.1)",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <img
        src={imgra}
        style={{ width: "3vw", height: "3vw", objectFit: "cover" }}
        alt=""
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "block",

        width: "3vw",
        position: "relative",
        zIndex: "50",
        cursor: "pointer",
        top: "30.2vw",
        left: "1.5vw",
        height: "3vw",

        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <img
        src={imgla}
        style={{ width: "3vw", height: "3vw", objectFit: "cover" }}
        alt=""
      />
    </div>
  );
}
export default class Cataloguecarosel extends Component {
  render() {
    const settings = {
      customPaging: function (i) {
        return (
          <a style={{ width: "5vw", height: "5vw" }}>
            {i === 0 ? (
              <img
                style={{
                  width: "5.5vw",
                  height: "5.5vw",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                src={img1}
                alt=""
              />
            ) : (
              ""
            )}
            {i === 1 ? (
              <img
                style={{
                  width: "5.5vw",
                  height: "5.5vw",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                src={img2}
                alt=""
              />
            ) : (
              ""
            )}
            {i === 2 ? (
              <img
                style={{
                  width: "5.5vw",
                  height: "5.5vw",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                src={img3}
                alt=""
              />
            ) : (
              ""
            )}
            {i === 3 ? (
              <img
                style={{
                  width: "5.5vw",
                  height: "5.5vw",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                src={img4}
                alt=""
              />
            ) : (
              ""
            )}
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots1 slick-thumb",
      infinite: true,
      speed: 500,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="catalogimages">
            <img src={img1} />
          </div>
          <div className="catalogimages">
            <img src={img2} />
          </div>
          <div className="catalogimages">
            <img src={img3} />
          </div>
          <div className="catalogimages">
            <img src={img4} />
          </div>
        </Slider>
      </div>
    );
  }
}
