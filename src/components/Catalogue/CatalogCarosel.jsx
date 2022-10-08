import React, { Component } from "react";
import Slider from "react-slick";
import imgla from "../../assets/Web 1280 – 2/Group 9969.svg";
import imgra from "../../assets/Web 1280 – 2/Group 9970.svg";

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
        bottom: props?.width > 700 ? "5.3vw" : "19vw",
        left: props?.width > 700 ? "5.5vw" : "84vw",
        height: props?.width > 700 ? "3vw" : "7vw",
        boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.1)",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <img
        src={imgra}
        style={{
          width: props?.width > 700 ? "3vw" : "7vw",
          height: props?.width > 700 ? "3vw" : "7vw",
          objectFit: "cover",
        }}
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

    
        position: "relative",
        zIndex: "50",
        cursor: "pointer",
        top: props?.width > 700 ? "30.2vw" : "22vw",
        left: props?.width > 700 ? "1.5vw" : "1vw",
        width: props?.width > 700 ? "3vw" : "7vw",
        height: props?.width > 700 ? "3vw" : "7vw",

        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <img
        src={imgla}
        style={{
          width: props?.width > 700 ? "3vw" : "7vw",
          height: props?.width > 700 ? "3vw" : "7vw",
          objectFit: "cover",
        }}
        alt=""
      />
    </div>
  );
}
export default class Cataloguecarosel extends Component {
  render() {
    const settings = {
      dotsClass: "slick-dots1 slick-thumb",
      infinite: true,
      speed: 500,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      nextArrow: <SampleNextArrow width={this?.props?.width} />,
      prevArrow: <SamplePrevArrow width={this?.props?.width} />,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="catalogimages">
            <img src={this?.props?.img1?.file} />
          </div>
          <div className="catalogimages">
            <img src={this?.props?.img2?.file} />
          </div>
          <div className="catalogimages">
            <img src={this?.props?.img3?.file} />
          </div>
          <div className="catalogimages">
            <img src={this?.props?.img4?.file} />
          </div>
        </Slider>
      </div>
    );
  }
}
